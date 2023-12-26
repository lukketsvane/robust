"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center items-start min-h-screen px-4 sm:px-8 md:px-16 lg:px-24"
        >
            <div className="w-full max-w-2xl">
                <h2 className="text-sm uppercase tracking-widest text-black mb-6">HVA GJØR ROBUST?</h2>
                <p className="text-4xl sm:text-5xl font-extrabold leading-tight text-black mb-6">
                Vi utvikler veivisere og strategier som skaper tillit, håp og engasjement i samfunnet.                </p>
                <p className="text-lg sm:text-xl text-black">
                    Vi styrker ditt team med prisvinnende kunnskap om bærekraft, robuste arbeidsprosesser og nye perspektiver fra tverrfaglig samarbeid.
                </p>
            </div>
        </motion.div>
    );
};

export default AboutHero;