"use client";
import React from 'react';
import { motion } from 'framer-motion';
import HeroTitle from '../app/components/HeroTitle';
import AboutHero from '../app/components/AboutHero';

const OmOss = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <HeroTitle />
      <AboutHero />

      <div className="flex flex-col md:flex-row items-center mt-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-semibold mb-4">Om Oss</h1>
          <p className="text-lg mb-4">
            <span className="text-gray-800">Her er litt informasjon om oss...</span>
          </p>
        </div>

        <div className="md:w-1/2 md:ml-8">
          <motion.img
            src="https://source.unsplash.com/random/800x600" 
            alt="Dynamic Image"
            className="rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default OmOss;
