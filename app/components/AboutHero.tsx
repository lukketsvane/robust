import React, { useRef, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

interface AboutHeroProps {
  textColor: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ textColor }) => {
  const { scrollY } = useViewportScroll();
  const ref = useRef<HTMLDivElement>(null);

  // These are the initial rotation values for each text section.
  // Increase these values for more exaggerated rotation.
  const initialRotations = [20, 15, 10, 5];

  // Calculate rotation and opacity based on the scroll position
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

          // Exaggerated rotation based on distance to center
          const rotation = distanceToCenter / viewportHeight * initialRotations[i];

          // Opacity goes from 0 to 1 as the element moves to the center
          const opacity = 1 - Math.abs(distanceToCenter / (viewportHeight / 2));

          element.style.transform = `rotate(${rotation}deg)`;
          element.style.opacity = `${Math.max(Math.min(opacity, 1), 0)}`; // Ensure opacity stays between 0 and 1
        }
      }
    };

    const exitDelay = 200; // Set the delay before the exit animation (in milliseconds)

    const exitStyles = () => {
      if (ref.current) {
        const elements = ref.current.children;
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i] as HTMLDivElement;
          element.style.transition = `transform ${exitDelay}ms ease-in-out, opacity ${exitDelay}ms ease-in-out`;
          element.style.transform = 'rotate(0deg)'; // Rotate back to 0 degrees
          element.style.opacity = '0'; // Fade out
        }
      }
    };

    window.addEventListener('scroll', updateStyles);
    window.addEventListener('resize', updateStyles);

    // Add a delay before applying the exit animation
    const exitTimeout = setTimeout(() => {
      exitStyles(); // Apply the exit animation
    }, exitDelay);

    return () => {
      window.removeEventListener('scroll', updateStyles);
      window.removeEventListener('resize', updateStyles);
      clearTimeout(exitTimeout); // Clear the timeout to prevent unnecessary animations
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
              transform: `rotate(${initialRotations[index]}deg)`, // Initial rotation
              opacity: 0 // Initial opacity
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
