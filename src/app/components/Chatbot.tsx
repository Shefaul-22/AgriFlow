"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots, FaTimes, FaRobot, FaUserTie, FaPaperPlane, FaChevronLeft } from "react-icons/fa";

type Mode = "AI" | "Consultant" | null;

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai" | "consultant";
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen, mode]);

  const handleSend = async () => {
    if (isTyping) return;
    if (!input.trim()) return;

    setError(null);
    const newMessage: Message = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsTyping(true);

    try {
      if (!mode) return;

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          // Snapshot the conversation we intend to send for this request to avoid
          // stale state if other updates happen while the request is in-flight.
          messages: [...messages, newMessage].map((m) => ({
            text: m.text,
            sender: m.sender,
          })),
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { reply?: string; error?: string; hint?: string };
      if (!res.ok) {
        throw new Error([data.error, data.hint].filter(Boolean).join(" "));
      }

      const replyText = (data.reply || "").trim();
      if (!replyText) throw new Error("Empty reply.");

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: replyText, sender: mode === "AI" ? "ai" : "consultant" },
      ]);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Something went wrong.";
      setError(message);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Sorry—something went wrong on my side. Please try again.",
          sender: mode === "AI" ? "ai" : "consultant",
        },
      ]);
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
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-[#CCFF00] to-green-500 text-black rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center group"
          >
            <FaCommentDots size={28} className="group-hover:animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[380px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-900 to-green-800 text-white p-4 flex items-center justify-between shadow-md z-10 relative">
              <div className="flex items-center gap-3">
                {mode && (
                  <button onClick={resetChat} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                    <FaChevronLeft size={16} />
                  </button>
                )}
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-wide">AgriFlow Support</span>
                  <span className="text-xs text-[#CCFF00] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse"></span>
                    {mode ? `${mode} Session` : 'Online'}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto bg-gray-50 flex flex-col relative">
              {!mode ? (
                // Mode Selection Screen
                <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">How can we help?</h3>
                    <p className="text-gray-500 text-sm">Choose who you would like to talk to today.</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, translateY: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setMode("AI");
                      setMessages([{ id: Date.now(), text: "Hi! I'm your AI Farming Assistant. I can help with crop predictions, real-time intelligence, and more. What's on your mind?", sender: "ai" }]);
                    }}
                    className="w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-[#CCFF00] hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <FaRobot size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">AI Assistant</h4>
                      <p className="text-xs text-gray-500">Instant answers 24/7</p>
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02, translateY: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setMode("Consultant");
                      setMessages([{ id: Date.now(), text: "Welcome! A live agricultural consultant will join shortly. Please describe your issue.", sender: "consultant" }]);
                    }}
                    className="w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-green-500 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <FaUserTie size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">Live Consultant</h4>
                      <p className="text-xs text-gray-500">Expert farming advice</p>
                    </div>
                  </motion.button>
                </div>
              ) : (
                // Chat Interface
                <div className="flex-1 flex flex-col p-4 gap-4">
                  {error && (
                    <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                      {error}
                    </div>
                  )}
                  {messages.map((msg) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={msg.id}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.sender === "user" 
                          ? "bg-green-600 text-white rounded-br-none" 
                          : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"
                      }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white border border-gray-200 text-gray-800 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input Area */}
            <AnimatePresence>
              {mode && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-white border-t border-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key !== "Enter") return;
                        if (e.nativeEvent.isComposing) return;
                        e.preventDefault();
                        if (isTyping) return;
                        handleSend();
                      }}
                      placeholder="Type your message..."
                      className="flex-1 bg-gray-100 text-sm text-gray-800 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isTyping}
                      className="p-3 bg-green-600 text-[#CCFF00] rounded-full disabled:opacity-50 hover:bg-green-700 transition-colors"
                    >
                      <FaPaperPlane size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
