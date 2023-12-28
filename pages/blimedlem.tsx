"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Blimedlem = () => {
  return (
    <motion.div 
      className=" flex flex-col items-center justify-center min-h-screen py-12"
      style={{ backgroundColor: '#F2C744' }} // Using the yellow color from om-oss.tsx
    >
      <div className="max-w-lg w-full space-y-8 bg-white p-8 rounded-lg shadow-md"> 
        <div>
          <h2 className="title text-left text-3xl font-extrabold text-gray-900">
            Bli medlem av Robust
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
           </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="sr-only">
                Fullt navn
              </label>
              <input
                id="full-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Fullt navn"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                E-postadresse
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="E-postadresse"
              />
            </div>
            {/* Additional form fields */}
            <div>
              <label htmlFor="phone-number" className="sr-only">
                Telefonnummer
              </label>
              <input
                id="phone-number"
                name="phone"
                type="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Telefonnummer"
              />
            </div>
            <div>
              <label htmlFor="address" className="sr-only">
                Adresse
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Adresse"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Meld deg inn
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Blimedlem;