"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center items-start min-h-screen px-8"
        >
            <div className="max-w-2xl">
                <h2 className="text-sm uppercase tracking-widest text-black mb-6">HVA GJØR ROBUST?</h2>
                <p className="text-3xl md:text-5xl font-extrabold leading-tight text-black mb-6">
                    Vi utvikler veivisere og strategier som skaper tillit, håp og samfunnsengasjement.
                </p>
                <p className="text-xl text-black">
                    Vi styrker ditt team med prisvinnende kunnskap om bærekraft, robuste arbeidsprosesser og nye perspektiver fra tverrfaglig samarbeid.
                </p>
            </div>
        </motion.div>
    );
};

export default AboutHero;
