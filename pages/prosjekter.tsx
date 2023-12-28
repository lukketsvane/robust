"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroTitle from '../app/components/HeroTitle';

const Prosjekter = () => {
  
  useEffect(() => {
    // Apply the yellow background color globally
    document.body.style.backgroundColor = "#F2C744";

    // Clean up the effect by setting the color back on component unmount
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full" style={{ backgroundColor: '#F2C744' }}>
      <HeroTitle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full px-4 sm:px-[10%] py-12"
      >
        <section className="mb-8">
        </section>
      </motion.div>
    </div>
  );
}

export default Prosjekter;