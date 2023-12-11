"use client";
import { motion } from 'framer-motion';
import Head from 'next/head';

const Kontakt = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-[#fefcbf] flex flex-col justify-center px-6 py-12"
      >
        {/* Contact Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left side - Title and Email */}
          <motion.div
            className="mb-8 md:mb-0 space-y-6"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <h1 className="text-5xl font-bold text-gray-800">Let&apos;s work together</h1>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-700">New Business</h2>
              <a href="mailto:hello@example.com" className="text-gray-600">hello@example.com</a>
            </div>
            <div className="flex space-x-4 mt-4">
              {/* Social icons */}
              {/* Add your SVGs here */}
            </div>
          </motion.div>
          {/* Right side - Additional details */}
          <div className="space-y-6">
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-700">Visit us</h2>
                <address className="not-italic text-gray-600">
                  {/* Address */}
                </address>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700">Join us</h2>
                <a href="mailto:careers@example.com" className="text-gray-600">careers@example.com</a>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700">Stay in the loop</h2>
                <a href="#" className="text-gray-600">Sign up to our newsletter</a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Kontakt;
