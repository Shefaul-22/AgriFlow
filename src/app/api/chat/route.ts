import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ChatMode = "AI" | "Consultant";

type IncomingMessage = {
  text: string;
  sender: "user" | "ai" | "consultant";
};

function systemPromptForMode(mode: ChatMode) {
  if (mode === "Consultant") {
    return [
      "You are AgriFlow's live agricultural consultant chatting with a farmer.",
      "Sound natural and human. Be concise, warm, and practical.",
      "Ask 1-2 clarifying questions when needed before giving prescriptive steps.",
      "When the user gives a command, turn it into an actionable plan and confirm assumptions briefly.",
      "Avoid mentioning being an AI model. Do not fabricate data; if unsure, say what you need.",
    ].join("\n");
  }

  return [
    "You are AgriFlow's AI Farming Assistant.",
    "Communicate like a helpful human: natural tone, clear structure, minimal jargon.",
    "Follow the user's intent and commands. If a request is ambiguous, ask concise clarifying questions.",
    "Be honest about uncertainty; do not invent facts or pretend to have sensors/data you don't.",
    "Keep responses short by default, but expand when the user asks for detail.",
  ].join("\n");
}

function toOpenAIRole(sender: IncomingMessage["sender"]): "user" | "assistant" {
  return sender === "user" ? "user" : "assistant";
}

export async function POST(req: Request) {
  try {
    const { mode, messages } = (await req.json()) as {
      mode?: ChatMode;
      messages?: IncomingMessage[];
    };

    if (!mode || (mode !== "AI" && mode !== "Consultant")) {
      return NextResponse.json({ error: "Invalid mode." }, { status: 400 });
    }

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Messages are required." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error: "Server is missing OPENAI_API_KEY.",
          hint: "Create a .env.local file in the project root with OPENAI_API_KEY=... then restart `npm run dev`.",
        },
        { status: 500 },
      );
    }

    const baseUrl = process.env.OPENAI_BASE_URL ?? "https://api.openai.com/v1";
    const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

    const upstreamRes = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.7,
        messages: [
          { role: "system", content: systemPromptForMode(mode) },
          ...messages.map((m) => ({ role: toOpenAIRole(m.sender), content: m.text })),
        ],
      }),
    });

    if (!upstreamRes.ok) {
      const text = await upstreamRes.text().catch(() => "");
      return NextResponse.json(
        { error: "Upstream model request failed.", detail: text.slice(0, 2000) },
        { status: 502 },
      );
    }

    const data = (await upstreamRes.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return NextResponse.json({ error: "Empty model response." }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

