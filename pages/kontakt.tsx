// kontakt.tsx
"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const Kontakt = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F2C744";
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <Head>
        <title>Bli Medlem - Robust</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center min-h-screen w-full"
        style={{ backgroundColor: '#F2C744' }}
      >
        <div className="space-y-6 mb-12 px-4 sm:px-[5%] lg:px-[10%] w-full max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 text-center">Bli medlem av Robust</h1>
          <p className="text-center text-gray-600">
            Bli en del av vårt samfunn og bidra til en bærekraftig fremtid.
          </p>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">Medlemskap</h2>
            <p className="text-gray-600">medlemskap@example.com</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">Besøk våre møter</h2>
            <p className="text-gray-600">Se vår kalender for kommende arrangementer</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Kontakt;
