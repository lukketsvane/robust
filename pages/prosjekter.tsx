"use client";
import { motion } from 'framer-motion';
import HeroTitle from '../app/components/HeroTitle';

const Prosjekter = () => {
  return (
    <div>
      <HeroTitle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
        <section>
          <h2>Nedvekst og Smultringøkonomi</h2>
          <p>
            Vi dykker inn i ideer som nedvekst og smultringøkonomi for å skape et økonomisk system som ivaretar velvære og beskytter planetens økosystemer.
          </p>
        </section>

        <section>
          <h2>Visuelle Virkemidler</h2>
          <p>
            Gjennom infografikk og illustrasjoner vil vi gjøre komplekse ideer tilgjengelige, og fremme en visuell forståelse av nødvendige samfunnsendringer.
          </p>
        </section>

        <section>
          <h2>Samfunnsengasjement</h2>
          <p>
            Veiviseren engasjerer ulike samfunnsaktører i dialog og samskaping for å forme bærekraftige løsninger tilpasset den norske konteksten.
          </p>
        </section>

        <section>
          <h2>Veien Videre</h2>
          <p>
            Vår rapport vil tjene som en veiviser for Norge i å respektere planetens tålegrenser og skape et rettferdig og bærekraftig samfunn.
          </p>
        </section>
      </motion.div>
    </div>
  );
}

export default Prosjekter;
