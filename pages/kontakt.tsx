"use client";
import { motion } from 'framer-motion';
import Head from 'next/head';

const Kontakt = () => {
  return (
    <>
      <Head>
        <title>Kontaktside</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-[#F2C744] flex flex-col justify-center px-4 sm:px-[10%] py-12"
      >
        <div className="flex flex-col items-center justify-between">
          <motion.div
            className="space-y-6 mb-12"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <h1 className="text-5xl font-bold text-gray-800 text-center">La oss jobbe sammen</h1>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-700">Ny virksomhet</h2>
              <p className="text-gray-600">hello@example.com</p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
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
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Kontakt;