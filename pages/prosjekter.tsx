"use client";
import { motion } from 'framer-motion';
import HeroTitle from '../app/components/HeroTitle';

const Prosjekter = () => {
  return (
    // The same yellow background color as page.tsx
    <div className="min-h-screen bg-[#F2C744]">
      <HeroTitle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        // Apply consistent padding class
        className="px-4 sm:px-[10%] py-12"
      >
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Nedvekst og Smultringøkonomi</h2>
          <p>
            Vi dykker inn i ideer som nedvekst og smultringøkonomi for å skape et økonomisk system som ivaretar velvære og beskytter planetens økosystemer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Visuelle Virkemidler</h2>
          <p>
            Gjennom infografikk og illustrasjoner vil vi gjøre komplekse ideer tilgjengelige, og fremme en visuell forståelse av nødvendige samfunnsendringer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Samfunnsengasjement</h2>
          <p>
            Veiviseren engasjerer ulike samfunnsaktører i dialog og samskaping for å forme bærekraftige løsninger tilpasset den norske konteksten.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Veien Videre</h2>
          <p>
            Vår rapport vil tjene som en veiviser for Norge i å respektere planetens tålegrenser og skape et rettferdig og bærekraftig samfunn.
          </p>
        </section>
      </motion.div>
      {/* Apply yellow background color */}
      <div style={{ backgroundColor: '#F2C744' }}></div>
    </div>
  );
}

export default Prosjekter;