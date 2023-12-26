// AboutHero.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface AboutHeroProps {
  textColor: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ textColor }) => {
  return (
    <motion.div
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100vw', opacity: 0 }}
      transition={{ duration: 1, type: 'tween' }}
      className={`flex flex-col justify-center items-start min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 ${textColor}`}
    >
      <div className="w-full max-w-2xl">
        <h2 className={`text-sm uppercase tracking-widest mb-6 ${textColor}`}>HVA GJØR ROBUST?</h2>
        <p className={`title text-4xl sm:text-5xl font-extrabold leading-tight mb-6 ${textColor}`}>
          Vi utvikler veivisere og strategier som skaper tillit, håp og engasjement i samfunnet.
        </p>
        <p className={`text-lg sm:text-xl ${textColor}`}>
          Vi styrker ditt team med prisvinnende kunnskap om bærekraft, robuste arbeidsprosesser og nye perspektiver fra tverrfaglig samarbeid.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutHero;
