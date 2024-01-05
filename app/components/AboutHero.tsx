"use client";
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

interface AboutHeroProps {
  textColor: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ textColor }) => {
  const { scrollYProgress } = useViewportScroll();

  // Calculate the initial position and opacity based on scroll progress
  const yRange = useTransform(scrollYProgress, [0, 0.1], ['300px', '0px']);
  const opacityRange = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Transition settings for the motion
  const transition = { duration: 1, type: 'spring' };

  return (
    <motion.div
      initial={{ y: '300px', opacity: 0 }}
      style={{ y: yRange, opacity: opacityRange }}
      transition={transition}
      className={`flex flex-col justify-center items-start min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 ${textColor}`}
    >
      <h2 className={`text-sm uppercase tracking-widest mb-6 ${textColor}`}>HVA GJØR ROBUST?</h2>
      <p className={`title text-4xl sm:text-5xl font-extrabold leading-tight mb-6 ${textColor}`}>
        Vi bygger et økonomisk system som prioriterer velvære og beskytter planetens økosystemer.
      </p>
      <p className={`text-lg sm:text-xl ${textColor}`}>
        Foreningen Robust jobber for en regenerativ økonomi innenfor planetens tålegrenser, fremmer formålet gjennom tverrfaglige innsikter og mangfoldige perspektiv, og kombinerer forskning, formidling og visuelle uttrykk for å dele kunnskapen.
      </p>
      <p className={`text-lg sm:text-xl ${textColor}`}>
        Robust består (foreløpig) av medlemmer med bakgrunn innen økonomi, (visuell) design, kunst, matematikk, miljøstudier, kognitiv (IVER HVA ER DIN BAKGRUNN?) og business. Foreningen høster styrke i medlemmenes ulike bakgrunner. Videre er flere av medlemmene koblet opp til ulike nettverk som International Degrowth Network, Rethinking Economics Norge, Postgrowth Nordics Network og Vekstfri Norge.
      </p>
    </motion.div>
  );
};

export default AboutHero;
