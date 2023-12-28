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
        <h1 className="title text-7xl font-bold mb-6">Meld deg inn!</h1>
        <Link href="/blimedlem" passHref>
          <motion.a
            className=" py-2 px-4 bg-transparent text-lg font-semibold rounded-full border-2 border-black cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
            style={{ color: '#333333', boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}
          >
            BLI MEDLEM
          </motion.a>
        </Link>
        <motion.div
          className="mt-5"
          variants={fingerVariants}
          initial="rest"
          whileHover="hover"
        >
        </motion.div>
      </div>
    </div>
  );
};

export default FingerFooter;
