"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import NavBar from '../app/components/NavBar';
import OmOssSectionContent from '../app/components/OmOssSectionContent';
import FingerFooter from '../app/components/FingerFooter';
import '../app/globals.css';
import dynamic from 'next/dynamic';


const InteractiveBook = dynamic(
  () => import('../app/components/InteractiveBook'),
  { ssr: false }
);

const sectionColorsOmOss = ['#F2C744', '#617864', '#4324D2', '#FFFFFF', '#F2C744'];

const OmOss = () => {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const triggerPoints = [0.2, 0.4, 0.6, 0.8, 1.0];
    const unsubscribe = scrollYProgress.onChange(latest => {
      for (let i = 0; i < triggerPoints.length; i++) {
        if (latest < triggerPoints[i]) {
          setCurrentSection(i);
          break;
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <NavBar currentSection={currentSection} sectionColors={sectionColorsOmOss} />
      <motion.main
        className="min-h-screen flex flex-col items-center justify-between px-[10%]"
        style={{ backgroundColor: sectionColorsOmOss[currentSection] }}
        animate={{ backgroundColor: sectionColorsOmOss[currentSection] }}
        transition={{ duration: 0.35 }}
        data-section={currentSection}
      >
        <div className="max-w-[80%] mx-auto">
          <OmOssSectionContent />
          <InteractiveBook file="/vedtekter-ROBUST.pdf" />
        </div>
      </motion.main>
      <FingerFooter />
    </>
  );
};

export default OmOss;
