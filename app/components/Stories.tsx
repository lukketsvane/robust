// Stories.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Stories = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 md:px-8 lg:px-24">
      <h2 className="text-2xl font-semibold mb-6">Innsikt i Robust</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Story 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="https://d5i52xlspk7ew.cloudfront.net/images/S_hero.gif"
            alt="Degrowth politikk"
            width={400}
            height={300}
            layout="responsive"
            className="object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Vekstens Grenser</h3>
            <p className="text-gray-600 mb-4">
              Robust tar initiativ for å sette lys på begrensningene av økonomisk vekst og utforsker alternative modeller som vektlegger miljømessig bærekraft og sosial rettferdighet.
            </p>
            <Link href="/degrowth-strategies" passHref>
              <span className="text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out cursor-pointer">Les Mer</span>
            </Link>
          </div>
        </motion.div>

        {/* Story 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="https://d5i52xlspk7ew.cloudfront.net/images/percy-2_1.gif"
            alt="Robust Samfunnsengasjement"
            width={400}
            height={300}
            layout="responsive"
            className="object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Samfunnsengasjement og Bærekraft</h3>
            <p className="text-gray-600 mb-4">
              Oppdag hvordan Robust engasjerer seg i samfunnet for å fremme bærekraftige løsninger og støtter prosjekter som bidrar til en mer rettferdig og holdbar fremtid.
            </p>
            <Link href="/community-engagement" passHref>
              <span className="text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out cursor-pointer">Utforsk Prosjekter</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stories;
