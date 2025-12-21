
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Terminal, Loader2, Minimize2 } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "SYSTEM_INITIALIZED: Intelligence layer active. Awaiting query..." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;
    const userMessage = inputValue.trim();
    setInputValue('');
    
    // Track conversation history locally for the UI
    const updatedMessages = [...messages, { role: 'user' as const, content: userMessage }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Format history for Gemini API: mapping 'assistant' to 'model' and extracting parts
      // Skip the first initialization message and exclude the latest user message which is sent as the primary argument
      const apiHistory = updatedMessages.slice(1, -1).map(msg => ({
        role: msg.role === 'user' ? 'user' as const : 'model' as const,
        parts: [{ text: msg.content }]
      }));

      const response = await getChatResponse(userMessage, apiHistory);
      setMessages(prev => [...prev, { role: 'assistant', content: response || "ERR_NULL_RESPONSE" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "ERR_CONNECTION_FAILED" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-12 left-12 z-[60]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center space-x-4 bg-zinc-900 border border-zinc-800 p-1 pl-4 rounded-full hover:border-white transition-all duration-500 shadow-2xl"
        >
          <span className="text-[10px] mono uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Access Intelligence</span>
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-black">
            <Terminal size={18} />
          </div>
        </button>
      ) : (
        <div className="w-[400px] h-[550px] glass-panel rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/50">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] mono uppercase tracking-widest text-zinc-400">Nihilo_Protocol_v4</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-600 hover:text-white transition-colors">
              <Minimize2 size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 mono">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex flex-col space-y-1">
                <span className={`text-[9px] uppercase tracking-tighter ${msg.role === 'user' ? 'text-zinc-600 text-right' : 'text-indigo-400'}`}>
                  {msg.role === 'user' ? '[AUTH_USER]' : '[NIHILO_AI]'}
                </span>
                <div className={`text-xs leading-relaxed ${msg.role === 'user' ? 'text-zinc-300 text-right' : 'text-zinc-400'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex space-x-2 items-center text-zinc-600">
                <Loader2 size={12} className="animate-spin" />
                <span className="text-[10px] mono">PROCESSING...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-zinc-950/80 border-t border-zinc-800">
            <div className="flex items-center space-x-4 border-b border-zinc-800 pb-2 focus-within:border-white transition-colors">
              <span className="text-zinc-600 text-xs mono">{'>'}</span>
              <input
                type="text"
                className="flex-1 bg-transparent border-none text-zinc-200 text-xs mono focus:ring-0 placeholder:text-zinc-700"
                placeholder="Awaiting input..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend} disabled={isLoading} className="text-zinc-500 hover:text-white transition-colors">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
