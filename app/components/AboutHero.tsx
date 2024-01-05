"use client";
import React, { useRef, useEffect } from 'react';

interface AboutHeroProps {
  textColor: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ textColor }) => {
  const ref = useRef<HTMLDivElement>(null);

  // These are the updated initial rotation values for each text section (more exaggerated) in the clockwise direction.
  const initialRotations = [-20, -15, -10, -5]; // Negative values for clockwise rotation

  useEffect(() => {
    const updateRotation = () => {
      if (ref.current) {
        const elements = ref.current.children;
        const viewportHeight = window.innerHeight;
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i] as HTMLDivElement;
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementCenter = rect.height / 2 + elementTop;
          const distanceToCenter = viewportHeight / 2 - elementCenter;
          const rotation = distanceToCenter / viewportHeight * initialRotations[i]; // This creates a linear relation between scroll position and rotation.
          element.style.transform = `rotate(${rotation}deg)`;
        }
      }
    };

    window.addEventListener('scroll', updateRotation);
    window.addEventListener('resize', updateRotation);
    updateRotation(); // Initial call to set the rotation

    return () => {
      window.removeEventListener('scroll', updateRotation);
      window.removeEventListener('resize', updateRotation);
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
            style={{ transform: `rotate(${initialRotations[index]}deg)` }}
          >
            {text}
          </div>
        ))
      }
    </div>
  );
};

export default AboutHero;
