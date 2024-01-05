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
          <Link href="/kontakt">
            <motion.button
              whileHover={{ backgroundColor: '#dba63c', transition: { duration: 0.3 } }}
              className="text-black text-lg font-semibold rounded-full border-2 border-black px-6 py-3"
            >
              Kontakt oss for mer informasjon
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Kontakt;
