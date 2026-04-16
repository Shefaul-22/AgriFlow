"use client";

import { useState } from "react";

type Message = {
  id: number;
  user: string;
  text: string;
};

export default function LiveSidebar() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, user: "Admin", text: "Welcome to live farm stream 🌾" },
    { id: 2, user: "Buyer", text: "Is this rice ready for harvest?" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg: Message = {
      id: Date.now(),
      user: "You",
      text: input,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-xl shadow-md p-3">

      {/* HEADER */}
      <div className="border-b pb-2 mb-2">
        <h2 className="text-lg font-bold">🌾 Live Farm Panel</h2>
        <p className="text-sm text-gray-500">Realtime updates & chat</p>
      </div>

      {/* STATUS */}
      <div className="mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-red-500">LIVE</span>
        </div>

        <p className="text-xs text-gray-500 mt-1">
          👀 128 viewers watching
        </p>
      </div>

      {/* CHAT MESSAGES */}
      <div className="flex-1 overflow-y-auto space-y-2 border p-2 rounded bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className="text-sm">
            <span className="font-semibold text-green-600">
              {msg.user}:
            </span>{" "}
            <span>{msg.text}</span>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
          className="flex-1 border rounded px-2 py-1 text-sm"
        />

        <button
          onClick={sendMessage}
          className="bg-green-600 text-white px-3 rounded text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}