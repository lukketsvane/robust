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
        Vi utvikler veivisere og strategier som skaper tillit, håp og engasjement i samfunnet.
      </p>
      <p className={`text-lg sm:text-xl ${textColor}`}>
        Vi styrker ditt team med prisvinnende kunnskap om bærekraft, robuste arbeidsprosesser og nye perspektiver fra tverrfaglig samarbeid.
      </p>
    </motion.div>
  );
};

export default AboutHero;