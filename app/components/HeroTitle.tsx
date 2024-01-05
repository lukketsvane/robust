import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface HeroTitleProps {
  textColor: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ textColor }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isCentered, setIsCentered] = useState(false);
  const titleControls = useAnimation();
  const typewriterText = "for et bærekraftig Norge.";

  // Custom delay function with random variations
  const getTypewriterDelay = (index: number) => {
    const baseDelay = 0.05; // Base delay between letters
    const variation = Math.random() * 0.1; // Random variation
    return baseDelay + variation + index * 0.02; // Adjust the values as needed
  };

  useEffect(() => {
    const element = ref.current;
    const updatePosition = () => {
      const top = element?.getBoundingClientRect().top ?? 0;
      const center = window.innerHeight / 2;

      const rotateStart = top - center;

      if (!isCentered && rotateStart <= 0) {
        setIsCentered(true);
        // Play the rotation animation once
        titleControls.start({
          rotate: 0,
          transition: { type: 'spring', stiffness: 100, damping: 10 },
        });
      }
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, [isCentered, titleControls]);

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-start px-4 sm:px-6 md:px-[10%] lg:px-[15%] xl:px-[20%]">
      <motion.h1
        initial={{ rotate: -10 }}
        animate={titleControls}
        className={`title text-5xl sm:text-6xl md:text-7xl font-extrabold text-left leading-tight ${textColor}`}
      >
        Mot en robust fremtid —<br />
        {typewriterText.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -10 }} // Start hidden and move in from the left
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: getTypewriterDelay(index) }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default HeroTitle;
