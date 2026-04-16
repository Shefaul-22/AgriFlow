"use client";

import { useState } from "react";

export default function ChatBox() {
  const [msg, setMsg] = useState("");

  return (
    <div>
      <h2 className="font-bold mb-2">💬 Live Chat</h2>

      <div className="h-[300px] border p-2 overflow-y-auto">
        {/* messages will come here */}
      </div>

      <div className="flex mt-2">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="border flex-1 p-2"
          placeholder="Type message..."
        />
        <button className="bg-green-500 text-white px-4">
          Send
        </button>
      </div>
    </div>
  );
}