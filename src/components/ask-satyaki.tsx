'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const SUGGESTED_QUESTIONS = [
  "What's your experience with React?",
  "Tell me about your AWS experience",
  "What companies have you worked for?",
  "What are your strongest skills?",
];

export function AskSatyaki() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: "Hi! I'm Ask Satyaki — your AI guide to Satyaki's portfolio. Ask me anything about his experience, skills, or background!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: text.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowSuggestions(false);

    const history = messages.slice(1).map((m) => ({ role: m.role, text: m.text }));

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text.trim(), history }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessages((prev) => [...prev, { role: 'assistant', text: data.error || "Sorry, I'm having trouble right now. Please try again shortly." }]);
        return;
      }

      setMessages((prev) => [...prev, { role: 'assistant', text: data.response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: "Sorry, I'm having trouble connecting right now. Please try again or reach out via email at satyakibose98@gmail.com." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-violet-600 px-4 py-3 text-white shadow-lg hover:bg-violet-700 transition-colors ${isOpen ? 'hidden' : ''}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Ask Satyaki chat"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-medium">Ask Satyaki</span>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 flex w-[350px] sm:w-[400px] flex-col rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            style={{ height: '520px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-violet-600 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Ask Satyaki</p>
                  <p className="text-xs text-violet-200">Powered by Gemini AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      msg.role === 'user'
                        ? 'bg-violet-600'
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <User className="h-3.5 w-3.5 text-white" />
                    ) : (
                      <Bot className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-violet-600 text-white rounded-tr-sm'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                    <Bot className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-gray-100 dark:bg-gray-800 px-4 py-3">
                    <Loader2 className="h-4 w-4 animate-spin text-violet-600 dark:text-violet-400" />
                  </div>
                </div>
              )}

              {/* Suggested questions (shown only initially) */}
              {showSuggestions && messages.length === 1 && (
                <div className="pt-1 space-y-2">
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">Suggested questions</p>
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="block w-full text-left rounded-lg border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 px-3 py-2 text-xs text-violet-700 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about experience, skills..."
                disabled={isLoading}
                className="flex-1 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-violet-400 dark:focus:border-violet-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
