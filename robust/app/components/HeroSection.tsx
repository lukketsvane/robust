"use client"; // Ensure client-side rendering for hooks and framer-motion
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <p className="text-sm uppercase text-gray-500 mb-2">Robust | Din Pålitelige Partner</p>
          <h1 className="text-4xl font-bold mb-4">Skap Styrke med Robust Teknologi</h1>
          <Link href="/case-study">
            <span className="cursor-pointer text-indigo-600 hover:text-indigo-800 transition-colors duration-300">Se Casestudie</span>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-white max-w-sm rounded-lg overflow-hidden shadow-lg my-4"
          >
            <Image className="w-full " src="https://source.unsplash.com/featured/?technology" alt="Robust Teknologi" width={400} height={300} layout="responsive" />
            <div className="px-6 py-4 ">
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
    </div>
  );
};

export default HeroSection;
