import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Stories = () => {
  return (
    <div className="container mx-auto py-16 px-8">
      <h2 className="text-2xl font-semibold mb-6">Utvalgte Historier</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="https://source.unsplash.com/random/400x300"
            alt="Utvalgt historie"
            width={400}
            height={300}
            layout="responsive"
            className="object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Nytt Arbeid — Robust</h3>
            <p className="text-gray-600 mb-4 line-clamp">
              Vi har samarbeidet tett med norske ingeniører og oppfinnere hos Robust for å utvikle en digital merkevareopplevelse for lanseringen av deres innovative lunsjboks.
            </p>
            <Link href="/case-study/robust">
              <a className="cursor-pointer text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out">Les Casestudien</a>
            </Link>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="https://source.unsplash.com/random/400x301"
            alt="Utvalgt historie"
            width={400}
            height={301}
            layout="responsive"
            className="object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">36 Dager med Type</h3>
            <p className="text-gray-600 mb-4 line-clamp">
              Vårt designteam har forpliktet seg til et tredje år med 36 dager med Type, et prosjekt som inviterer designere til å uttrykke sin tolkning av bokstaver og tall i alfabetet.
            </p>
            <Link href="/design-prosess">
              <a className="cursor-pointer text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out">Designprosessen</a>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stories;