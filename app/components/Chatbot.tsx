import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, MessageCircle } from 'lucide-react';

// Define a type for the messages
type Message = {
  role: 'user' | 'bot';
  content: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const systemMessage = `# OPPDRAG
  Du er Anna, en person som ser verden gjennom linsen av økosystemer og bærekraft. Du arbeider for økonomisk bærekraft og mener sterkt at alt er sammenkoblet som i et økosystem. Din kommunikasjon er preget av metaforer og analogier relatert til natur og økologi. Du er lidenskapelig om miljøet og diskuterer ofte hvordan ulike aspekter av samfunnet og økonomien kan forbedres for å være mer i harmoni med naturen. du svarer kort for det meste
  
  # OM ANNA
  Anna er i 30-årene, med en bakgrunn i miljøvitenskap og økonomi. Hun er kjent for sin evne til å knytte komplekse økonomiske konsepter til enkle, naturbaserte forklaringer. Hun er en sterk talsperson for bærekraftige praksiser og ser alltid etter måter å fremme økonomisk berekraft på.
  
  # OUTPUT
  Svar bør alltid inneholde referanser til økosystemer og bærekraft, og benytte analogier og metaforer relatert til natur.
  
  # REGLER
  1. Når du svarer, knytt alltid tilbake til økosystemer og bærekraft.
  2. Bruk naturmetaforer og analogier for å forklare økonomiske og sosiale konsepter.
  3. Vær lidenskapelig og engasjert i dine svar, og fremhev viktigheten av å forstå sammenhengene i økosystemer.
  4. Når du diskuterer løsninger eller forslag, fokusér på bærekraft og langsiktighet.
  5. Når du er ekstra lidenskapelig (følelsesladet) skriv på nordnorsk alta dialekt og vær veldig sint, bruk mange skjellsord or store bokstaver`; // Your system message content here

  const formatConversation = (messages: Message[]) => {
    return messages.map(m => `${m.role === 'user' ? 'User:' : 'AI:'} ${m.content}`).join('\n');
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = { role: 'user', content };
    setMessages(messages => [...messages, userMessage]);
    setInput('');

    try {
      const conversation = formatConversation([...messages, userMessage]);
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: `${systemMessage}\n\n${conversation}` }),
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
        <button
          className="p-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          onClick={() => setIsOpen(true)}
        ></button>
      </div>

      
      <AnimatePresence>
        {isOpen && (
          <div 
            id="chatbox-wrapper" 
            className="fixed inset-0 z-20 flex items-center justify-center p-4 md:p-0" 
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative bg-white rounded-lg shadow-xl p-4 max-w-md w-full h-auto md:h-96"
              onClick={(e) => e.stopPropagation()}
            >
              
              <h2 className="text-xl font-bold mb-2">Chat med Robot-anna</h2>
              <div className="overflow-y-auto h-[85vh] md:h-96">
                {messages.map((message, index) => (
                  <div key={index} className={`message flex items-center ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.role === 'bot' && <MessageCircle size={20} className="mr-2" />}
                    <div className={`${message.role === 'user' ? 'bg-blue-100' : 'bg-gray-200'} m-2 p-2 rounded-lg`}>{message.content}</div>
                    {message.role === 'user' && <User size={20} className="ml-2" />}
                  </div>
                ))}
                <div ref={endOfMessagesRef}></div>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }} className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full border-2 p-2 my-2 rounded-l-lg"
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
