"use client";
import React, { useRef } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

interface AboutHeroProps {
  textColor: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ textColor }) => {
  const { scrollY } = useViewportScroll();
  const ref = useRef<HTMLDivElement>(null);

  // Calculate rotation based on the scroll position
  const rotateY = useTransform(scrollY, value => {
    if (ref.current) {
      const elementTop = ref.current.offsetTop;
      const elementHeight = ref.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const startRotate = elementTop - viewportHeight / 2;
      const endRotate = elementTop + elementHeight;
      
      if (value >= startRotate && value <= endRotate) {
        // Map the scroll value to rotation degrees
        const rotate = (value - startRotate) / (endRotate - startRotate) * 90; // Adjust the 90 to control the amount of rotation
        return -rotate; // Negative for counter-clockwise rotation
      }
    }
    return 0;
  });

  return (
    <div ref={ref} className={`flex flex-col justify-center items-start min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 ${textColor}`}>
      {['HVA GJØR ROBUST?', 'Vi bygger et økonomisk system som prioriterer velvære og beskytter planetens økosystemer.',
        'Foreningen Robust jobber for en regenerativ økonomi innenfor planetens tålegrenser, fremmer formålet gjennom tverrfaglige innsikter og mangfoldige perspektiv, og kombinerer forskning, formidling og visuelle uttrykk for å dele kunnskapen.',
        'Robust består (foreløpig) av medlemmer med bakgrunn innen økonomi, (visuell) design, kunst, matematikk, miljøstudier, kognitiv (IVER HVA ER DIN BAKGRUNN?) og business. Foreningen høster styrke i medlemmenes ulike bakgrunner. Videre er flere av medlemmene koblet opp til ulike nettverk som International Degrowth Network, Rethinking Economics Norge, Postgrowth Nordics Network og Vekstfri Norge.']
        .map((text, index) => (
          <motion.div
            key={index}
            style={{ rotate: rotateY }}
            className={`mb-6 ${index === 0 ? 'text-sm uppercase tracking-widest' : index === 1 ? 'title text-3xl sm:text-5xl font-extrabold leading-tight' : 'text-lg sm:text-xl font-normal'}`}
          >
            {text}
          </motion.div>
        ))
      }
    </div>
  );
};

export default AboutHero;
