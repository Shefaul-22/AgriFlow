import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);

function getSystemPrompt(mode) {
  const common = "Identify as AgriFlow Assistant. Use a helpful, human-like tone.";
  
  if (mode === "Consultant") {
    return `${common} You are a professional agricultural consultant. Ask clarifying questions about soil, weather, or crops before giving advice. Avoid robotic responses.`;
  }
  
  return `${common} You are an AI Farming Guide. Provide concise answers with clear formatting or bullet points for agricultural queries.`;
}

export async function POST(req) {
  try {
    const { mode, messages } = await req.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "Messages are required" }, { status: 400 });
    }

    // Gemini Model initialize
    const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: getSystemPrompt(mode) 
    });

    // Chat history format 
    const history = messages.slice(0, -1).map((m) => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    }));

    const lastMessage = messages[messages.length - 1].text;

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(lastMessage);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", detail: error.message },
      { status: 500 }
    );
  }
}