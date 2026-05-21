"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCommentDots,
  FaTimes,
  FaRobot,
  FaUserTie,
  FaPaperPlane,
  FaChevronLeft,
} from "react-icons/fa";

type Mode = "AI" | "Consultant" | null;

type Message = {
  id: number;
  text: string;
  sender: "user" | "ai";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<Mode>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = async () => {
    if (isTyping || !input.trim() || !mode) return;

    setError(null);

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    const updatedMessages: Message[] = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          messages: updatedMessages.map(({ text, sender }) => ({
            text,
            sender,
          })),
        }),
      });

      if (!res.ok) {
        const errorData = await res
          .json()
          .catch(() => ({ error: "Server error" }));

        throw new Error(errorData.error || "Failed to fetch");
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: data.reply,
          sender: "ai",
        },
      ]);
    } catch (e) {
      console.error(e);
      setError("AI response failed. Check API route.");
    } finally {
      setIsTyping(false);
    }
  };

  const resetChat = () => {
    setMode(null);
    setMessages([]);
    setError(null);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-[#CCFF00] to-green-500 text-black rounded-full shadow-lg"
          >
            <FaCommentDots size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[380px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-900 to-green-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {mode && (
                  <button
                    onClick={resetChat}
                    className="p-1 hover:bg-white/20 rounded-full"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                )}

                <div className="flex flex-col">
                  <span className="font-bold">AgriFlow Support</span>
                  <span className="text-[10px] text-[#CCFF00]">
                    {mode ? `${mode} Mode` : "Online"}
                  </span>
                </div>
              </div>

              <button onClick={() => setIsOpen(false)}>
                <FaTimes size={18} />
              </button>
            </div>

            {/* Chat */}
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">
              {!mode ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4">
                  <h3 className="font-bold text-gray-700 text-center px-4">
                    How can we help you today?
                  </h3>

                  <button
                    onClick={() => {
                      setMode("AI");
                      setMessages([
                        {
                          id: 1,
                          text: "Hi! I'm AgriFlow AI. How can I assist you?",
                          sender: "ai",
                        },
                      ]);
                    }}
                    className="w-full bg-white p-4 rounded-2xl border flex items-center gap-3 hover:border-[#CCFF00]"
                  >
                    <FaRobot className="text-blue-500" size={20} />
                    <p className="font-bold text-sm">AI Assistant</p>
                  </button>

                  <button
                    onClick={() => {
                      setMode("Consultant");
                      setMessages([
                        {
                          id: 1,
                          text: "Hello! I'm your consultant.",
                          sender: "ai",
                        },
                      ]);
                    }}
                    className="w-full bg-white p-4 rounded-2xl border flex items-center gap-3 hover:border-green-500"
                  >
                    <FaUserTie className="text-green-600" size={20} />
                    <p className="font-bold text-sm">Live Consultant</p>
                  </button>
                </div>
              ) : (
                <>
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${
                        msg.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                          msg.sender === "user"
                            ? "bg-green-600 text-white"
                            : "bg-white border text-gray-800"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="text-[10px] text-gray-400 italic">
                      AgriFlow is typing...
                    </div>
                  )}

                  {error && (
                    <div className="text-[10px] text-red-500 bg-red-50 p-2 rounded">
                      {error}
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            {mode && (
              <div className="p-4 bg-white border-t flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type message..."
                  className="flex-1 bg-gray-100 text-sm rounded-full px-4 py-2"
                />

                <button
                  onClick={handleSend}
                  disabled={isTyping}
                  className="p-3 bg-green-600 text-[#CCFF00] rounded-full"
                >
                  <FaPaperPlane size={14} />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;