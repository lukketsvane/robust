import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroTitleProps {
  textColor: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ textColor }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Delay showing the text and implement typewriter effect
    const delayShowText = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for 1 second
      setShowText(true);
    };

    delayShowText();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-start px-4 sm:px-6 md:px-[10%] lg:px-[15%] xl:px-[20%]">
      <h1 className={`title text-5xl sm:text-6xl md:text-7xl font-extrabold text-left leading-tight ${textColor}`}>
        Mot en robust fremtid —<br />
        {showText && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            for
          </motion.span>
        )}
        {showText && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            et
          </motion.span>
        )}
        {showText && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            bærekraftig
          </motion.span>
        )}
        {showText && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            Norge.
          </motion.span>
        )}
      </h1>
    </div>
  );
};

export default HeroTitle;
