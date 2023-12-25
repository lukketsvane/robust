"use client";
import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import './globals.css';

import NavBar from './components/NavBar';
import HeroTitle from './components/HeroTitle';
import HeroSection from './components/HeroSection';
import Stories from './components/Stories';
import AboutHero from './components/AboutHero';
import Partners from './components/Partners';
import TeamSection from './components/TeamSection';
import FingerFooter from './components/FingerFooter';

const sectionColors: string[] = ['#F2C744', '#617864', '#4324D2', '#FFFFFF', '#F2C744'];
const triggerPoints: number[] = [0.2, 0.4, 0.6, 0.8, 1.0];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      for (let i = 0; i < triggerPoints.length; i++) {
        if (latest < triggerPoints[i]) {
          setCurrentSection(i);
          break;
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Adjust padding for mobile without affecting desktop
  const paddingClass = 'px-4 sm:px-[10%]';

  return (
    <>
      <NavBar currentSection={currentSection} sectionColors={sectionColors} />
      <motion.main
        className={`min-h-screen flex flex-col items-center justify-between ${paddingClass}`} // Adjust the padding value based on screen size
        style={{ backgroundColor: sectionColors[currentSection] }}
        animate={{ backgroundColor: sectionColors[currentSection] }}
        transition={{ duration: 0.35 }}
        data-section={currentSection}
      >
        {/* Retain the mx-auto for desktop */}
        <div className="max-w-[80%] mx-auto"> {/* Container with 80% width */}
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className="section">
              {index === 0 && <HeroTitle />}
              {index === 1 && <AboutHero />}
              {index === 2 && (
                <>
                  <Stories />
                  <HeroSection />
                </>
              )}
              {index === 3 && <Partners />}
              {index === 4 && <TeamSection />}
            </div>
          ))}
          <FingerFooter />
        </div>
      </motion.main>
    </>
  );
}