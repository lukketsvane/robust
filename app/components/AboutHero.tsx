import React, { useEffect, useRef, useState } from 'react';
import { motion, useViewportScroll, useAnimation } from 'framer-motion';

interface AboutHeroProps {
  textColor: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ textColor }) => {
  const { scrollY } = useViewportScroll();
  const ref = useRef<HTMLDivElement | null>(null); // Add type annotation
  const controls = useAnimation();
  const [isCentered, setIsCentered] = useState(true);

  useEffect(() => {
    const element = ref.current;
    const updatePosition = () => {
      const top = element?.getBoundingClientRect().top ?? 0;
      const bottom = (element?.getBoundingClientRect().top ?? 0) + (element?.offsetHeight ?? 0);

      const center = window.innerHeight / 2;

      const rotateStart = top - center;
      const rotateEnd = bottom - center;

      if (scrollY.get() > rotateStart && scrollY.get() < rotateEnd) {
        setIsCentered(true);
      } else {
        setIsCentered(false);
      }

      controls.start(i => ({
        rotate: isCentered ? 0 : 2 + i * 0.5,
        transition: { delay: i * 0.1, type: 'spring', stiffness: 100, damping: 10 },
      }));
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [scrollY, controls, isCentered]);

  return (
    <div
      ref={ref}
      className={`flex flex-col justify-center items-start min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 ${textColor}`}
    >
      {['HVA GJØR ROBUST?', 'Vi bygger et økonomisk system som prioriterer velvære og beskytter planetens økosystemer.',
        'Foreningen Robust jobber for en regenerativ økonomi innenfor planetens tålegrenser, fremmer formålet gjennom tverrfaglige innsikter og mangfoldige perspektiv, og kombinerer forskning, formidling og visuelle uttrykk for å dele kunnskapen.',
        'Robust består (foreløpig) av medlemmer med bakgrunn innen økonomi, (visuell) design, kunst, matematikk, miljøstudier, kognitiv (IVER HVA ER DIN BAKGRUNN?) og business. Foreningen høster styrke i medlemmenes ulike bakgrunner. Videre er flere av medlemmene koblet opp til ulike nettverk som International Degrowth Network, Rethinking Economics Norge, Postgrowth Nordics Network og Vekstfri Norge.']
        .map((text, index) => (
          <motion.div
            key={index}
            initial={{ rotate: 2 + index * 0.5 }} // Incremental initial rotation for each text
            animate={controls}
            custom={index} // Pass the index as a custom prop to use in the animation control
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
