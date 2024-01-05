"use client";
"use client";
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

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
        className="flex flex-col items-left justify-center mx-16 w-full min-h-screen"
        style={{ backgroundColor: '#F2C744' }}
      >
        <div className="w-full max-w-4xl px-4 py-16 text-left">
          <h1 className="title text-5xl font-bold mb-8">Bli medlem av Robust</h1>
          <p className="text-gray-600 mb-8">
            Bli en del av vårt samfunn og bidra til en bærekraftig fremtid.
          </p>
          <div className="text-black space-y-4 flex flex-col sm:flex-row justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl font-semibold">Medlemskap</h2>
              <p className="text-gray-600">medlemskap@example.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Besøk våre møter</h2>
              <p className="text-gray-600">Se vår kalender for kommende arrangementer</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-4xl px-4 py-8 mt-8 text-left bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <input
                type="text"
                placeholder="Fornavn"
                className="w-full sm:w-1/2 p-4 border-b-2 border-black bg-transparent text-black"
              />
              <input
                type="text"
                placeholder="Etternavn"
                className="w-full sm:w-1/2 p-4 border-b-2 border-black bg-transparent text-black"
              />
            </div>
            <input
              type="email"
              placeholder="E-post"
              className="w-full p-4 border-b-2 border-black bg-transparent text-black"
            />
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Kontakt;
