import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../app/components/NavBar';
import FingerFooter from '../app/components/FingerFooter';
import Chatbot from '../app/components/Chatbot';
import ArticlesCTA from '../app/components/ArticlesCTA';
import OmOssSectionContent from '../app/components/OmOssSectionContent';
import InteractiveBook from '../app/components/InteractiveBook'; // Import the InteractiveBook component

const sectionColorsOmOss = ['#F2C744', '#617864', '#4324D2', '#FFFFFF', '#F2C744'];

const OmOss = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const triggerPoints = [0.2, 0.4, 0.6, 0.8, 1.0];

    const handleScroll = () => {
      const latest = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

      for (let i = 0; i < triggerPoints.length; i++) {
        if (latest < triggerPoints[i]) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pdfImages = [
    '/vedtekter/side_1.png',
    '/vedtekter/side_2.png',
    '/vedtekter/side_3.png',
  ];

  return (
    <>
      <NavBar currentSection={currentSection} sectionColors={sectionColorsOmOss} />
      <motion.div
        className={`min-h-screen bg-${sectionColorsOmOss[currentSection]}`}
        initial={{ backgroundColor: sectionColorsOmOss[currentSection] }}
        animate={{ backgroundColor: sectionColorsOmOss[currentSection] }}
        transition={{ duration: 0.35 }}
        data-section={currentSection}
      >
        <div className="w-full max-w-[90%] sm:max-w-[80%] mx-auto py-8 px-6"> {/* Adjusted top padding */}
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`section w-full my-8 py-4 px-4`}
            >
              {index === 1 && <OmOssSectionContent />}
              {index === 2 && <InteractiveBook images={pdfImages} />}
              {/* Add other sections as needed */}
            </div>
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
