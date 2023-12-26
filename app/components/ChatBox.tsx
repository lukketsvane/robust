import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async (content) => {
    if (!content) return;
    // Append new message to the chat log
    setMessages([...messages, { role: 'user', content }]);
    setInput('');

    // Here you would integrate with the OpenAI API or your backend
    // const response = await sendMessageToBackend(content);
    // setMessages([...messages, { role: 'bot', content: response }]);
  };

  return (
    <>
      <div className={`fixed bottom-4 right-4 z-10 ${isOpen ? 'hidden' : ''}`}>
        <button
          className="p-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          onClick={() => setIsOpen(true)}
        >
          {/* Robot icon here */}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center p-4"
          >
            <div className="relative bg-white rounded-lg shadow-xl p-4 max-w-sm w-full">
              <button
                className="absolute top-2 right-2"
                onClick={() => setIsOpen(false)}
              >
                {/* 'X' icon here */}
              </button>
              <div className="overflow-y-auto h-64">
                {messages.map((message, index) => (
                  <div key={index} className={`message ${message.role}`}>
                    {message.content}
                  </div>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(input);
                }}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full border-2 p-2 my-2"
                  placeholder="Type your message here..."
                />
                <button type="submit" className="p-2 bg-blue-500 w-full">
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;