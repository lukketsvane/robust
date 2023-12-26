"use client"; // Ensure client-side rendering for hooks and framer-motion
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link'; // Import the Link component

const FingerFooter = () => {
  // Define the animation variants for the finger graphic
  const fingerVariants = {
    hover: { y: -10 }, // Moves up 10 pixels on hover
    rest: { y: 0 }, // Initial position
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Bli medlem i dag</h1>
        <Link href="/medlemskap" passHref> {/* Wrap the button with Link */}
          <motion.a
            className="py-2 px-4 bg-black text-white font-semibold rounded-full shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
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
          {/* SVG or Image goes here */}
        </motion.div>
      </div>
    </div>
  );
};

export default FingerFooter;