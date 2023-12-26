import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define a type for the messages
type Message = {
  role: 'user' | 'bot';
  content: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = { role: 'user', content };
    setMessages(messages => [...messages, userMessage]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error('Network response was not ok.');

      const responseData = await response.json();
      setMessages(currentMessages => [...currentMessages, { role: 'bot', content: responseData.message || 'No response from AI' }]);
    } catch (error) {
      console.error('Chatbot error:', error);
    }
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === 'chatbox-wrapper') {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className={`fixed bottom-4 right-4 z-30 ${isOpen ? 'hidden' : ''}`}>
        <button
          className="p-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          onClick={() => setIsOpen(true)}
        >
          {/* Robot icon here */}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div id="chatbox-wrapper" className="fixed inset-0 z-20 flex items-center justify-center" onClick={handleClickOutside}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="relative bg-white rounded-lg shadow-xl p-4 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute top-2 right-2 text-white" onClick={() => setIsOpen(false)}>
                X {/* Replace with 'X' icon */}
              </button>
              <div className="overflow-y-auto h-64">
                {messages.map((message, index) => (
                  <div key={index} className={`message ${message.role}`}>{message.content}</div>
                ))}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full border-2 p-2 my-2"
                  placeholder="Type your message here..."
                />
                <button type="submit" className="p-2 bg-blue-500 w-full">Send</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;