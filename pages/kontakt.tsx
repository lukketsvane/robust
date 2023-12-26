"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const Kontakt = () => {
  useEffect(() => {
    // Apply the yellow background color globally
    document.body.style.backgroundColor = "#F2C744";

    // Clean up the effect by setting the color back on component unmount
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <Head>
        <title>Kontaktside</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center min-h-screen w-full"
        style={{ backgroundColor: '#F2C744' }}
      >
        {/* Content container with responsive padding class */}
        <div className="space-y-6 mb-12 px-4 sm:px-[5%] lg:px-[10%] w-full max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 text-center">La oss jobbe sammen</h1>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">Ny virksomhet</h2>
            <p className="text-gray-600">hello@example.com</p>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">Besøk oss</h2>
            <p className="not-italic text-gray-600">Adresse</p>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">Bli med oss</h2>
            <p className="text-gray-600">careers@example.com</p>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">Hold deg oppdatert</h2>
            <p className="text-gray-600">Meld deg på nyhetsbrevet vårt</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Kontakt;