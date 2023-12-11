"use client";
import { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
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
  const { scrollYProgress } = useViewportScroll();
  const [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition: number = scrollYProgress.get(); // Updated line

      for (let i = 0; i < triggerPoints.length; i++) {
        if (scrollPosition < triggerPoints[i]) {
          setCurrentSection(i);
          break;
        }
      }
    };

    scrollYProgress.onChange(handleScroll);
    handleScroll();
  }, [scrollYProgress]);

  const scrollToSection = (index: number) => {
    const triggerPoint = triggerPoints[index];
    window.scrollTo({
      top: triggerPoint * window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <NavBar currentSection={currentSection} sectionColors={sectionColors} />
      <motion.main
        className="min-h-screen flex flex-col items-center justify-between px-12 lg:px-24 lg:px-48"
        style={{
          backgroundColor: sectionColors[currentSection],
        }}
        animate={{ backgroundColor: sectionColors[currentSection] }}
        transition={{ duration: 0.35 }}
        data-section={currentSection}
      >
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
      </motion.main>
    </>
  );
}
