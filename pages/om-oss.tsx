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

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = sectionColorsOmOss[currentSection];

    return () => {
      body.style.backgroundColor = '';
    };
  }, [currentSection]);

  const pdfImages = [
    '/vedtekter/side_1.png',
    '/vedtekter/side_2.png',
    '/vedtekter/side_3.png',
  ];

  return (
    <>
      <NavBar currentSection={currentSection} sectionColors={sectionColorsOmOss} />
      <motion.div
        className="flex flex-col items-center justify-center w-full min-h-screen"
        style={{ backgroundColor: sectionColorsOmOss[currentSection] }}
        initial={{ backgroundColor: sectionColorsOmOss[currentSection] }}
        animate={{ backgroundColor: sectionColorsOmOss[currentSection] }}
        transition={{ duration: 0.35 }}
        data-section={currentSection}
      >
        <div className="w-full sm:px-[10%] px-4 py-12">
          <OmOssSectionContent />
          <InteractiveBook images={pdfImages} />
        </div>
      </motion.div>
      <FingerFooter />
    </>
  );
};

export default OmOss;