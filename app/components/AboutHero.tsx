"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

interface AboutHeroProps {
  textColor: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ textColor }) => {
  const { scrollY } = useViewportScroll();
  const ref = useRef(null);

  // Calculate the range for rotation based on element's position
  const offsetTop = ref.current?.offsetTop || 0;
  const offsetHeight = ref.current?.offsetHeight || 1; // Avoid division by zero
  const rotateRange = [offsetTop - window.innerHeight, offsetTop + offsetHeight];

  // Create a dynamic rotation animation
  const rotate = useTransform(scrollY, rotateRange, [2, 0]);

  // Calculate the midpoint of the screen
  const screenMidpoint = window.innerHeight / 2;

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col justify-center items-start min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 ${textColor}`}
    >
      {['HVA GJØR ROBUST?', 'Vi bygger et økonomisk system som prioriterer velvære og beskytter planetens økosystemer.',
        'Foreningen Robust jobber for en regenerativ økonomi innenfor planetens tålegrenser, fremmer formålet gjennom tverrfaglige innsikter og mangfoldige perspektiv, og kombinerer forskning, formidling og visuelle uttrykk for å dele kunnskapen.',
        'Robust består (foreløpig) av medlemmer med bakgrunn innen økonomi, (visuell) design, kunst, matematikk, miljøstudier, kognitiv (IVER HVA ER DIN BAKGRUNN?) og business. Foreningen høster styrke i medlemmenes ulike bakgrunner. Videre er flere av medlemmene koblet opp til ulike nettverk som International Degrowth Network, Rethinking Economics Norge, Postgrowth Nordics Network og Vekstfri Norge.']
        .map((text, index) => (
          <motion.div
            key={index}
            initial={{ rotate: 2 + index * 0.5 }}
            animate={{
              rotate: scrollY.get() <= screenMidpoint ? 0 : rotate,
            }}
            className={`mb-6 ${index === 0 ? 'text-sm uppercase tracking-widest' : index === 1 ? 'title text-3xl sm:text-5xl font-extrabold leading-tight' : 'text-lg sm:text-xl font-normal'}`}
          >
            {text}
          </motion.div>
        ))
      }
    </motion.div>
  );
};

export default AboutHero;
