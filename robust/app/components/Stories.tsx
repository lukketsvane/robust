import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Stories = () => {
    return (
      <div className="container mx-auto py-8 px-8"> {/* Doubled the padding */}
        <h2 className="text-2xl font-semibold mb-6">Utvalgte Historier</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kort 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <Image src="https://source.unsplash.com/random/400x300" alt="Utvalgt historie" width={400} height={300} layout="responsive" className="object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Nytt Arbeid — Robust</h3>
              <p className="text-gray-600 mb-4">
                Vi har samarbeidet tett med norske ingeniører og oppfinnere hos Robust for å utvikle en digital merkevareopplevelse for lanseringen av deres innovative lunsjboks. 
                Senape har ledet designarbeidet og samarbeidet med våre naboer i Design District og teknologipartneren ON for å levere markedsføringssiden, nettbutikken og den tilkoblede appen. Vi håper du liker det :)
              </p>
              <Link href="/case-study/robust">
                <span className="cursor-pointer text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out">Les Casestudien</span>
              </Link>
            </div>
          </motion.div>

          {/* Kort 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <Image src="https://source.unsplash.com/random/400x301" alt="Utvalgt historie" width={400} height={300} layout="responsive" className="object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">36 Dager med Type</h3>
              <p className="text-gray-600 mb-4">
                Vårt designteam har forpliktet seg til et tredje år med 36 dager med Type. Dette prosjektet inviterer designere, illustratører og visuelle kunstnere til å uttrykke sin unike tolkning av bokstaver og tall i det latinske alfabetet over 36 påfølgende dager. Å være en del av et talentfullt og entusiastisk designfellesskap er utrolig gøy og hjelper oss med å utvikle nye ferdigheter. Sjekk ut bidraget vårt på vår Instagram-kanal!
              </p>
              <Link href="/design-prosess">
                <span className="cursor-pointer text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out">Designprosessen</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
};

export default Stories;
