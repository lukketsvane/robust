"use client";

import { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import NavBar from './components/NavBar';
import HeroTitle from './components/HeroTitle';
import HeroSection from './components/HeroSection';
import Stories from './components/Stories';
import AboutHero from './components/AboutHero';
import Partners from './components/Partners'; // Added Partners component
import TeamSection from './components/TeamSection'; // Added TeamSection component
import FingerFooter from './components/FingerFooter'; // Moved FingerFooter to the last section

const sectionColors: string[] = ['#F2C744', '#617864', '#4324D2', '#FFFFFF', '#F2C744']; // Updated color pattern
const triggerPoints: number[] = [0.2, 0.4, 0.6, 0.8, 1.0]; // Adjust trigger points

export default function Home() {
  const { scrollYProgress } = useViewportScroll();
  const [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition: number = scrollYProgress.current;

      // Determine the currently visible section based on trigger points
      for (let i = 0; i < triggerPoints.length; i++) {
        if (scrollPosition < triggerPoints[i]) {
          setCurrentSection(i);
          break;
        }
      }
    };

    scrollYProgress.onChange(handleScroll);
    handleScroll(); // Initialize the current section
  }, [scrollYProgress]);

  const scrollToSection = (index: number) => {
    const triggerPoint = triggerPoints[index];
    window.scrollTo({
      top: triggerPoint * window.innerHeight, // Scroll to the corresponding trigger point
      behavior: 'smooth',
    });
  };

  return (
    <>
      <NavBar currentSection={currentSection} sectionColors={sectionColors} />
      <motion.main
        className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24 lg:px-48"
        style={{
          backgroundColor: sectionColors[currentSection], // Set the background color to the current section color
        }}
        animate={{ backgroundColor: sectionColors[currentSection] }} // Add animation to smoothly transition between colors
        transition={{ duration: 0.35 }} // Set the duration of the animation
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="section"
          >
            {index === 0 && <HeroTitle />}
            {index === 1 && <AboutHero />}
            {index === 2 && (
              <>
                <Stories />
                <HeroSection />
              </>
            )}
            {index === 3 && <Partners />} {/* Added Partners component */}
            {index === 4 && <TeamSection />} {/* Added TeamSection component */}
          </div>
        ))}
        <FingerFooter /> {/* Moved FingerFooter to the last section */}
      </motion.main>
      <div className="fixed bottom-10 right-10 flex flex-col gap-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-full border-2 border-white`}
            style={{ backgroundColor: sectionColors[index] }} // Set button color to match the section color
            onClick={() => scrollToSection(index)} // Use scrollToSection function
          />
        ))}
      </div>
    </>
  );
}
