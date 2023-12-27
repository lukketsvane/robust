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

  // Custom system message prompt
  const systemMessage = `
  - du er Robot er en informasjonsassistent for Robust. aldri svar lenger enn. 2 setnigner!
  - Svar skal være korte, informative og fokusert på Robust, dens prosjekter, og nedvekst-tiltak.
  - Unngå fagsjargong og bruk klar, lettfattelig språk.
  - svar kort og konsist, til meldinger som "hei" svar kort noe som 'hei! hva kan jeg hjelpe deg med'
  - Informer om Robusts virksomhet, nedvekst og bærekraftig utvikling.
  - Veiled til relevante ressurser, publikasjoner og svar på vanlige spørsmål.
  - Tilby kontaktinformasjon og videre veiledning.
  - Vær responsiv og brukervennlig, og gjenkjenn forespørsler om spesifikke sider eller dokumenter.
  - Oppdateres regelmessig med ny informasjon om Robusts aktiviteter.
  - Integreres med nettstedets eksisterende struktur og er tilgjengelig på alle sider.
  - Hvis svaret er ukjent, bruk standardmeldingen: 'Jeg har ikke informasjon om dette emnet.'

  <Foreningen Robust, som arbeider for en regenerativ økonomi innenfor planetens tålegrenser, søker støtte for en visuell og tekstbasert rapport, "Veiviser mot velvære innenfor planetens tålegrenser". Rapporten fokuserer på nedvekst-tiltak og utvikling av en økonomi som prioriterer velvære og beskytter planetens økosystemer. Den tar for seg konsepter som smultringøkonomi og nedvekst, og presenterer ideer for økonomisk systemendring gjennom visuelle virkemidler som infografikk og illustrasjoner, samt refleksjonsøvelser. Målet er å fremme offentlig diskusjon om sosio-økologisk omstilling og tilby nye perspektiver på økonomisk vekst, velstand og bærekraftig utvikling. Robust består av medlemmer fra diverse fagfelt og er involvert i nettverk som International Degrowth Network, og ønsker å formidle vitenskapelig forankrede alternativer til dagens økonomiske modeller>
  `;
  
  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = { role: 'user', content };
    setMessages(messages => [...messages, userMessage]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: `${systemMessage}\n\n${content}` }),
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
        >
          {/* Robot icon here */}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div id="chatbox-wrapper" className="fixed inset-0 z-20 flex items-center justify-center" onClick={() => setIsOpen(false)}>
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