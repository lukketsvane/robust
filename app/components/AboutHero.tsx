"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

interface AboutHeroProps {
  textColor: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ textColor }) => {
  const { scrollY } = useViewportScroll();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Adjust these values to control the delay and transition speed
  const transitionDelay = 100; // Pixels scrolled before starting to rotate out
  const initialRotations = [-20, -15, -10, -5]; // Negative values for counterclockwise rotation

  useEffect(() => {
    const updateStyles = () => {
      if (ref.current) {
        const elements = ref.current.children;
        const viewportHeight = window.innerHeight;
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i] as HTMLDivElement;
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementCenter = rect.height / 2 + elementTop;
          const distanceToCenter = viewportHeight / 2 - elementCenter;

          let rotation = 0;
          if (distanceToCenter > transitionDelay) {
            rotation = (distanceToCenter - transitionDelay) / viewportHeight * initialRotations[i];
          } else if (distanceToCenter < -transitionDelay) {
            rotation = (distanceToCenter + transitionDelay) / viewportHeight * initialRotations[i];
          }

          let opacity = 1;
          if (Math.abs(distanceToCenter) > transitionDelay) {
            opacity = 1;
          } else {
            opacity = 1;
          }

          element.style.transform = `rotate(${isVisible ? 0 : rotation}deg)`;
          element.style.opacity = `${Math.max(Math.min(opacity, 1), 0)}`;
        }
      }
    };

    window.addEventListener('scroll', updateStyles);
    window.addEventListener('resize', updateStyles);
    updateStyles();
    return () => {
      window.removeEventListener('scroll', updateStyles);
      window.removeEventListener('resize', updateStyles);
    };
  }, [isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(scrollY.get() > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`flex flex-col justify-center items-start min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 ${textColor}`}>
      {['HVA GJØR ROBUST?', 'Vi bygger et økonomisk system som prioriterer velvære og beskytter planetens økosystemer.',
        'Foreningen Robust jobber for en regenerativ økonomi innenfor planetens tålegrenser, fremmer formålet gjennom tverrfaglige innsikter og mangfoldige perspektiv, og kombinerer forskning, formidling og visuelle uttrykk for å dele kunnskapen.',
        'Robust består (foreløpig) av medlemmer med bakgrunn innen økonomi, (visuell) design, kunst, matematikk, miljøstudier, kognitiv (IVER HVA ER DIN BAKGRUNN?) og business. Foreningen høster styrke i medlemmenes ulike bakgrunner. Videre er flere av medlemmene koblet opp til ulike nettverk som International Degrowth Network, Rethinking Economics Norge, Postgrowth Nordics Network og Vekstfri Norge.']
        .map((text, index) => (
          <div
            key={index}
            className={`mb-6 ${index === 0 ? 'text-sm uppercase tracking-widest' : index === 1 ? 'title text-3xl sm:text-5xl font-extrabold leading-tight' : 'text-lg sm:text-xl font-normal'}`}
            style={{
              transform: `rotate(${isVisible ? 0 : initialRotations[index]}deg)`,
              opacity: 1 // Set opacity to 1 for immediate visibility
            }}
          >
            {text}
          </div>
        ))
      }
    </div>
  );
};

export default AboutHero;
