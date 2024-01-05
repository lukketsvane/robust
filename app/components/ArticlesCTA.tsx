"use client"; 
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ArticlesCTA: React.FC = () => {
  return (
    <div className="my-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Utforsk Våre Artikler</h2>
      <p className="mb-6 text-gray-600">
        Dykk ned i våre innsiktsfulle artikler for å lære mer om bærekraft og teknologi.
      </p>
      <Link href="/articles" passHref>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300"
        >
          Se Artikler
        </motion.a>
      </Link>
    </div>
  );
};

export default ArticlesCTA;
