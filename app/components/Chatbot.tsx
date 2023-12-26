import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define a type for the messages
type Message = {
  role: 'user' | 'bot';
  content: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]); // Use the Message type for the state
  const [input, setInput] = useState('');

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage = { role: 'user', content };
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
      setMessages(currentMessages => [...currentMessages, { role: 'bot', content: responseData.message }]);
    } catch (error) {
      console.error('Chatbot error:', error);
    }
  };

  return (
    <>
      {/* ... Rest of your component ... */}
    </>
  );
};

export default Chatbot;