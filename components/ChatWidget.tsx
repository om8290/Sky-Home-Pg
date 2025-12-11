import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Namaste! I'm the Virtual Manager. Ask me about our amenities, location, or rules.", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

const handleSend = async () => {
  if (!input.trim() || isLoading) return;

  const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
  setMessages(prev => [...prev, userMsg]);
  setInput('');
  setIsLoading(true);

  const maxRetries = 3;
  let attempt = 0;
  let responseText: string | null = null;

  while (attempt < maxRetries) {
    try {
      attempt++;
      // call the service
      responseText = await generateChatResponse(input);

      // sanity check: if function returned null/empty or a specific error string, throw so we retry
      if (!responseText || typeof responseText !== 'string' || responseText.trim().length === 0) {
        throw new Error('Empty response from generateChatResponse');
      }

      // Got a valid response — break out
      break;
    } catch (err) {
      console.error(`generateChatResponse attempt ${attempt} failed:`, err);

      // simple exponential backoff (100ms -> 300ms -> 700ms)
      const backoffMs = 100 * Math.pow(2, attempt);
      await new Promise(res => setTimeout(res, backoffMs));
    }
  }

  // if still null after retries, set a friendly fallback message
  if (!responseText) {
    responseText = `Sorry, I'm having trouble connecting right now. Please call us directly at +91 9917839363 or +91 9045021489.`;
  }

  const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
  setMessages(prev => [...prev, botMsg]);
  setIsLoading(false);
};


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-brand-600 hover:bg-brand-700 text-white p-4 rounded-full shadow-xl transition-all transform hover:scale-110 flex items-center gap-2"
        aria-label="Open Chat"
      >
        <MessageSquare size={24} />
        <span className="font-semibold hidden sm:inline">Ask Questions</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
      
      {/* Header */}
      <div className="bg-brand-600 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 p-1.5 rounded-full">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="font-bold text-sm">PG Assistant</h3>
            <span className="text-xs text-brand-100 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Online
            </span>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-white/80 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 no-scrollbar">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-brand-600 text-white rounded-br-none' 
                  : 'bg-white text-slate-800 border border-slate-200 shadow-sm rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-white text-slate-500 border border-slate-200 px-4 py-2 rounded-2xl rounded-bl-none flex items-center gap-2 text-sm shadow-sm">
               <Loader2 size={14} className="animate-spin" /> Typing...
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-white border-t border-slate-100">
        <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-brand-500/20 focus-within:bg-white transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about amenities..."
            className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-400"
            disabled={isLoading}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={`p-2 rounded-full transition-colors ${
              input.trim() && !isLoading 
                ? 'text-brand-600 hover:bg-brand-50' 
                : 'text-slate-400 cursor-not-allowed'
            }`}
          >
            <Send size={18} />
          </button>
        </div>
        <div className="text-center mt-2">
             <span className="text-[10px] text-slate-400">AI responses can be inaccurate. Call for confirmation.</span>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;