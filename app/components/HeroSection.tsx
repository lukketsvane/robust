import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -5 }, // Initial values
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5 } }, // Final values
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: 5 }, // Initial values
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5 } }, // Final values
};

const HeroSection = () => {
  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 py-12"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <p className="text-sm uppercase mb-2">Robust | Din Pålitelige Partner</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 title">Skap Styrke med Robust Teknologi</h1>
          <Link href="/articles">
            <span className="cursor-pointer hover:text-indigo-800 transition-colors duration-300">Se Casestudie</span>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-white max-w-sm rounded-lg overflow-hidden shadow-lg my-4"
          >
            <div className="h-48 relative w-full">
              <Image
                src="https://source.unsplash.com/featured/?technology"
                alt="Robust Teknologi"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Teknologisk Innovasjon</div>
              <p className="text-gray-700 text-base">
                Utforsk den nyeste teknologiske innovasjonen som Robust tilbyr for å styrke din virksomhet.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#teknologi</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pålitelighet</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">#innovasjon</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
