import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface Message {
  sender: "user" | "ai";
  text: string;
}

interface ContentPart {
  role: "user" | "model";
  parts: Array<{ text: string }>;
}

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

function getSystemPrompt(mode: string) {
  const common = "You are AgriFlow Assistant — a smart, helpful AI built for the AgriFlow agricultural platform. Always be friendly, professional, and concise.";
  if (mode === "Consultant") {
    return `${common} You are a professional agricultural consultant. Before giving recommendations, ask 1-2 clarifying questions about the user's soil type, crop, weather, or location to provide tailored advice.`;
  }
  return `${common} You are an AI Farming Guide. Provide fast, accurate, and well-formatted answers for farming queries.`;
}

export async function POST(req: Request) {
  try {
    if (!apiKey) {
      return NextResponse.json({ error: "API Key missing." }, { status: 500 });
    }

    const body = await req.json();
    const { mode, messages } = body;

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "No messages." }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash",
    });

    const allButLast = messages.slice(0, -1);
    const startIndex = allButLast.findIndex((m: Message) => m.sender === "user");
    const validHistory = startIndex === -1 ? [] : allButLast.slice(startIndex);

    // Build conversation history
    const conversationHistory: any[] = [];
    for (const m of validHistory) {
      const role = m.sender === "user" ? "user" : "model";
      conversationHistory.push({
        role,
        parts: [{ text: m.text }],
      });
    }

    const lastMessage = messages[messages.length - 1]?.text;
    if (!lastMessage) {
      return NextResponse.json({ error: "No message text provided." }, { status: 400 });
    }

    const systemPrompt = getSystemPrompt(mode);
    
    // Start a chat session with the model
    const chat = model.startChat({
      history: conversationHistory,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Send the message with system prompt prepended on first message only
    const messageToSend = conversationHistory.length === 0 
      ? `${systemPrompt}\n\n${lastMessage}`
      : lastMessage;

    const result = await chat.sendMessage(messageToSend);

    const text = result.response.text();
    return NextResponse.json({ reply: text });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Gemini API Error:", errorMessage);
    
    if (errorMessage.includes("429")) {
        return NextResponse.json(
            { error: "Quota exceeded. Please wait 1 minute." },
            { status: 429 }
        );
    }

    return NextResponse.json(
      { error: "AI response failed.", detail: errorMessage },
      { status: 500 }
    );
  }
}