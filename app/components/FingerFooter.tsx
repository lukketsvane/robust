"use client";
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

const FingerFooter = () => {
  const fingerVariants = {
    hover: { y: -10 },
    rest: { y: 0 },
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6">Meld deg inn!</h1>
        <Link href="/pages/blimedlem" passHref>
          <motion.a
            className="py-2 px-4 bg-transparent text-3xl font-semibold rounded-full border-2 border-black cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
            style={{ color: '#333333', boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}
          >
            Bli Medlem
          </motion.a>
        </Link>
        <motion.div
          className="mt-5"
          variants={fingerVariants}
          initial="rest"
          whileHover="hover"
        >
          {/* SVG or Image of a finger can go here */}
        </motion.div>
      </div>
    </div>
  );
};

export default FingerFooter;
