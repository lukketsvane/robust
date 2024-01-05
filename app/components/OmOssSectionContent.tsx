"use client"; 
import React from 'react';
import { motion } from 'framer-motion';

const OmOssSectionContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 text-left"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 title">Om Foreningen ROBUST</h1>
      <p className="mb-4">
        Foreningen Robust jobber for en regenerativ økonomi som fungerer innenfor planetens tålegrenser, og sikrer et godt liv for alle levende vesener. Vårt arbeid er bygget på tverrfaglige tilnærminger, inkludert økonomi, historie, psykologi, klima og filosofi.
      </p>
      <p className="mb-4">
        Vi kombinerer forskning, formidling og visuelle uttrykk for å spre kunnskap og engasjere samfunnet.
      </p>
      <p className="mb-4">
        Robust består av medlemmer med ulik bakgrunn, inkludert økonomi, design, kunst, matematikk, miljøstudier og business. Vi henter styrke fra våre mangfoldige bakgrunner og er tilknyttet ulike nettverk som International Degrowth Network, Rethinking Economics Norge, Postgrowth Nordics Network og Vekstfri Norge.
      </p>
      <p className="mb-4">
        Vi utfordrer konvensjonelle metoder for å fremme omsorgsfulle og livskraftige tilnærminger.
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 title">VÅRE EKSPERTOMRÅDER:</h2>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">ØKONOMISK VELVÆRE</li>
        <li>SYSTEMTENKNING</li>
      </ul>
    </motion.div>
  );
};

export default OmOssSectionContent;
