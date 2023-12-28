import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot } from 'lucide-react';
import systemMessage from './SystemMessage'; 
import { FaInfoCircle } from 'react-icons/fa';
type Message = {
  role: 'user' | 'bot';
  content: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hei jordboer!' } // Initial message from the bot
  ]);  const [input, setInput] = useState('');
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const handleTooltip = () => {
    setShowTooltip(!showTooltip);
  };
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    
    const userMessage: Message = { role: 'user', content };
    setMessages(messages => [...messages, userMessage]);
    setInput('');
    const fullMessage = systemMessage + '\n\n' + content;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: fullMessage }),
      });

      if (!response.ok) throw new Error('Network response was not ok.');

      const responseData = await response.json();
      setMessages(currentMessages => [...currentMessages, { role: 'bot', content: responseData.reply }]);
    } catch (error) {
      console.error('Chatbot error:', error);
    }
  };

  return (
    <>
        <div className={`fixed bottom-4 right-4 z-30 ${isOpen ? 'hidden' : ''}`}>
          <button className="p-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors" onClick={() => setIsOpen(true)}></button>
        </div>  
        <AnimatePresence>
          {isOpen && (
            <div id="chatbox-wrapper" className="fixed inset-0 z-20 flex items-center justify-center" onClick={() => setIsOpen(false)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative bg-white rounded-lg shadow-xl p-4 max-w-md w-full md:max-w-2xl md:w-3/4 h-auto md:h-5/6"
                onClick={(e) => e.stopPropagation()}
                style={{ paddingBottom: 'var(--safe-area-inset-bottom)', marginBottom: '20px' }}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold mb-2">Chat med Robot-anna</h2>
                  <button type="button" className="p-2" onClick={handleTooltip}>
                    <FaInfoCircle className="text-gray-500" />
                  </button>
                </div>
                {showTooltip && (
                  <div className="tooltip-content">
                  Vår eksperimentelle chatbot-funksjon er designet for å gi rask og effektiv assistanse. Anna kan hjelpe deg med å finne informasjon på nettstedet og svare på dine spørsmål.          
                  </div>
                  )}
                      <div className="overflow-y-auto h-[75vh] md:h-80" style={{ paddingBottom: '3.5rem' }}>
                {messages.map((message, index) => (
                  <div key={index} className={`message flex items-center ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.role === 'bot' && <Bot size={20} className="mr-2" />}
                    {message.role === 'user' && <User size={20} className="mr-2" />}
                    <div className={`${message.role === 'user' ? 'bg-blue-100' : 'bg-gray-200'} m-2 p-2 rounded-lg`}>{message.content}</div>
                  </div>
                ))}
                <div ref={endOfMessagesRef} />
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }} className="absolute bottom-0 left-0 right-0 flex items-center bg-white p-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full border-2 p-2 rounded-l-lg"
                placeholder="Skriv meldingen din her..."
              />
              <button type="submit" className="p-2 bg-blue-500 rounded-r-lg">
                <Send className="text-white" />
              </button>
            </form>         
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  </>
  );
};

export default Chatbot;