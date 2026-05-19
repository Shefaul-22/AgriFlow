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
  FaLeaf,
} from "react-icons/fa";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

type ChatMode = "AI" | "Consultant" | null;

// ─── Helpers ─────────────────────────────────────────────────────────────────
/** Converts **bold**, *italic*, and - bullet lines into simple JSX */
function formatAIText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const trimmed = line.trim();
    // Bullet points
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      return (
        <div key={i} className="flex gap-2 mt-1">
          <span className="text-green-500 mt-0.5">•</span>
          <span>{trimmed.slice(2)}</span>
        </div>
      );
    }
    // Numbered list
    if (/^\d+\.\s/.test(trimmed)) {
      return (
        <div key={i} className="flex gap-2 mt-1">
          <span className="text-green-500 font-semibold">{trimmed.match(/^\d+/)?.[0]}.</span>
          <span>{trimmed.replace(/^\d+\.\s/, "")}</span>
        </div>
      );
    }
    // Bold headers (lines ending with ":")
    if (trimmed.endsWith(":") && trimmed.length < 60) {
      return (
        <p key={i} className="font-semibold text-gray-900 mt-2">
          {trimmed}
        </p>
      );
    }
    // Empty line
    if (!trimmed) return <div key={i} className="h-1" />;
    return <p key={i} className="mt-1">{trimmed}</p>;
  });
}

// ─── Typing Dots ─────────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-green-400 rounded-full block"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  // Auto-focus input when mode is selected
  useEffect(() => {
    if (mode) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [mode]);

  const selectMode = (selectedMode: ChatMode) => {
    const greeting =
      selectedMode === "AI"
        ? "👋 Hi! I'm AgriFlow AI. Ask me anything about farming, crops, soil health, or pest control!"
        : "👋 Hello! I'm your AgriFlow Consultant. I'll ask a few questions to give you tailored agricultural advice. What crop or issue are you dealing with?";
    setMode(selectedMode);
    setMessages([{ id: Date.now(), text: greeting, sender: "ai" }]);
    setError(null);
  };

  const handleSend = async () => {
    if (isTyping || !input.trim() || !mode) return;

    setError(null);
    const userMessage: Message = { id: Date.now(), text: input.trim(), sender: "user" };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          messages: updatedMessages.map(({ text, sender }) => ({ text, sender })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get a response.");
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: data.reply, sender: "ai" },
      ]);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      console.error("Chat Error:", msg);
      setError(msg);
    } finally {
      setIsTyping(false);
    }
  };

  const resetChat = () => {
    setMode(null);
    setMessages([]);
    setError(null);
    setInput("");
  };

  return (
    <>
      {/* ── Floating Toggle Button ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-linear-to-br from-[#CCFF00] to-green-500 text-black rounded-full shadow-2xl"
            aria-label="Open Chat"
          >
            <FaCommentDots size={26} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-97.5 h-155 max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-green-900 to-green-700 text-white px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                {mode && (
                  <button
                    onClick={resetChat}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Back"
                  >
                    <FaChevronLeft size={14} />
                  </button>
                )}
                <div className="w-8 h-8 bg-[#CCFF00] rounded-full flex items-center justify-center shrink-0">
                  <FaLeaf className="text-green-900" size={14} />
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight">AgriFlow Support</p>
                  <p className="text-[10px] text-[#CCFF00] leading-tight">
                    {mode ? `${mode} Mode • Active` : "Online • Ready to help"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-3">
              {!mode ? (
                /* ── Mode Selection Screen ── */
                <div className="h-full flex flex-col items-center justify-center gap-4 px-2">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FaLeaf className="text-green-600" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 text-base">How can we help you?</h3>
                    <p className="text-xs text-gray-500 mt-1">Choose a support type to get started</p>
                  </div>

                  <button
                    onClick={() => selectMode("AI")}
                    className="w-full bg-white p-4 rounded-2xl border-2 border-transparent hover:border-[#CCFF00] hover:shadow-md transition-all flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors shrink-0">
                      <FaRobot className="text-blue-500" size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-sm text-gray-800">AI Assistant</p>
                      <p className="text-xs text-gray-500">Instant answers powered by Gemini AI</p>
                    </div>
                  </button>

                  <button
                    onClick={() => selectMode("Consultant")}
                    className="w-full bg-white p-4 rounded-2xl border-2 border-transparent hover:border-green-400 hover:shadow-md transition-all flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 bg-green-50 group-hover:bg-green-100 rounded-xl flex items-center justify-center transition-colors shrink-0">
                      <FaUserTie className="text-green-600" size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-sm text-gray-800">AI Consultant</p>
                      <p className="text-xs text-gray-500">In-depth agricultural consultation</p>
                    </div>
                  </button>
                </div>
              ) : (
                /* ── Chat Messages ── */
                <>
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-green-600 text-white rounded-br-sm"
                            : "bg-white border border-gray-100 text-gray-800 rounded-bl-sm shadow-sm"
                        }`}
                      >
                        {msg.sender === "ai" ? formatAIText(msg.text) : msg.text}
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm shadow-sm">
                        <TypingDots />
                      </div>
                    </div>
                  )}

                  {/* Error message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl p-3 text-center">
                      ⚠️ {error}
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input Area */}
            {mode && (
              <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center shrink-0">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Type your message..."
                  disabled={isTyping}
                  className="flex-1 bg-gray-100 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-60 transition-all"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSend}
                  disabled={isTyping || !input.trim()}
                  className="p-3 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-colors shrink-0"
                  aria-label="Send message"
                >
                  <FaPaperPlane size={14} />
                </motion.button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;