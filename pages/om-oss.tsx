// om-oss.tsx
import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import FingerFooter from '../app/components/FingerFooter';
import Chatbot from '../app/components/Chatbot';
import ArticlesCTA from '../app/components/ArticlesCTA';
import OmOssSectionContent from '../app/components/OmOssSectionContent';
import InteractiveBook from '../app/components/InteractiveBook';

const sectionColorsOmOss = ['#F2C744', '#617864', '#4324D2', '#FFFFFF', '#F2C744'];

const OmOss = () => {
  const { scrollY } = useViewportScroll();
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoints = [0.2, 0.4, 0.6, 0.8, 1.0];
      const latest = scrollY.get() / (document.documentElement.scrollHeight - window.innerHeight);
      for (let i = 0; i < triggerPoints.length; i++) {
        if (latest < triggerPoints[i]) {
          setCurrentSection(i);
          break;
        }
      }
    };

    const unsub = scrollY.onChange(handleScroll);
    return () => unsub();
  }, [scrollY]);

  // Define variants for framer-motion for the rotating elements
  const rotateVariants = {
    hidden: (custom) => ({
      rotate: custom.initialRotation,
      opacity: 0,
    }),
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <motion.div
        className={`min-h-screen flex flex-col justify-center items-center bg-${sectionColorsOmOss[currentSection]}`}
        initial={{ backgroundColor: sectionColorsOmOss[currentSection] }}
        animate={{ backgroundColor: sectionColorsOmOss[currentSection] }}
        transition={{ duration: 0.35 }}
        data-section={currentSection}
      >
        <div className="w-full max-w-[90%] sm:max-w-[80%] mx-auto">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className={`section w-full h-screen ${
                index === 0 && currentSection === 0 ? 'min-h-screen' : ''
              }`}
              custom={{ initialRotation: -10 * index }}
              variants={rotateVariants}
              initial="hidden"
              animate="visible"
            >
              {index === 1 && <OmOssSectionContent />}
              {index === 2 && <InteractiveBook images={['/vedtekter/side_1.png', '/vedtekter/side_2.png', '/vedtekter/side_3.png']} />}
              {/* Add other sections as needed */}
            </motion.div>
          ))}
          <FingerFooter />
        </div>
      </motion.div>
      <ArticlesCTA />
      <Chatbot />
    </>
  );
};

export default OmOss;
