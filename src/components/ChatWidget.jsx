import React, { useState, useEffect, useRef } from 'react';
import { FaCommentDots } from 'react-icons/fa';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hello! How can I help you today?' },
  ]);

  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    const botMsg = {
      sender: 'bot',
      text: getBotReply(input),
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const getBotReply = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes('hello') || msg.includes('hi')) return 'Hi there! 👋';
    if (msg.includes('services')) return 'We offer web, AI, and cloud solutions. ☁️';
    if (msg.includes('contact')) return 'Reach us at support@infotech.com 📩';
    return "I'm not sure I understand. Try asking about services or contact info.";
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-5 pointer-events-none'
        }`}
      >
        <div className="w-80 h-96 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-2xl flex flex-col p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">💬 Infotech Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 bg-green-500 text-white flex items-center justify-center rounded-full mr-2 text-xs">
                    🤖
                  </div>
                )}
                <div
                  className={`px-3 py-2 rounded-lg max-w-[70%] ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <div className="w-7 h-7 bg-blue-500 text-white flex items-center justify-center rounded-full ml-2 text-xs">
                    🧑
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="mt-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 px-3 py-1.5 rounded-md text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#320A6B] hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition"
        aria-label="Chat with us"
        title="Chat with us"
      >
        <FaCommentDots size={22} />
      </button>
    </div>
  );
};

export default ChatWidget;
