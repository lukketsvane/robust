"use client"; 
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const ArticlesCTA: React.FC = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight / 2;

    if (scrollY > triggerPoint) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: 50, opacity: 0 });
    }
  };

  // Add scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="bg-gray-100 py-16"
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5, type: 'spring', damping: 15, stiffness: 100 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <h2 className="text-3xl font-semibold mb-4 title">Utforsk Våre Artikler</h2>
            <p className="text-gray-600">
              Dykk ned i våre innsiktsfulle artikler for å lære mer om bærekraft og teknologi.
            </p>
            {/* No link, just styled text with underline */}
            <style jsx>{`
              .text-indigo-600 {
                color: inherit; /* Inherit the parent's text color */
                text-decoration: underline; /* Add underline on hover */
                cursor: pointer; /* Show pointer cursor on hover */
              }
            `}</style>
            <p className="text-indigo-600 hover:text-indigo-700 mt-4">
              Utforsk alle artikler
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticlesCTA;

