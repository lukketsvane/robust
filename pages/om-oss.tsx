import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import OmOssSectionContent from '../app/components/OmOssSectionContent';
import FingerFooter from '../app/components/FingerFooter';
import dynamic from 'next/dynamic';

const InteractiveBook = dynamic(
  () => import('../app/components/InteractiveBook'),
  { ssr: false }
);

const sectionColorsOmOss = ['#F2C744', '#617864', '#4324D2', '#FFFFFF', '#F2C744'];

const OmOss = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const triggerPoints = [0.2, 0.4, 0.6, 0.8, 1.0];

    const handleScroll = () => {
      const latest = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

      for (let i = 0; i < triggerPoints.length; i++) {
        if (latest < triggerPoints[i]) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pdfImages = [
    '/vedtekter/side_1.png',
    '/vedtekter/side_2.png',
    '/vedtekter/side_3.png',
  ];

  return (
    <>
      <motion.div
        className={`flex flex-col items-center justify-center w-full min-h-screen bg-${sectionColorsOmOss[currentSection]}`}
        initial={{ backgroundColor: sectionColorsOmOss[currentSection] }}
        animate={{ backgroundColor: sectionColorsOmOss[currentSection] }}
        transition={{ duration: 0.35 }}
        data-section={currentSection}
      >
        <div className="w-full sm:px-10 px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Forside</h1>
          <p className="text-lg">Bygge et økonomisk system som prioriterer velvære for alle mennesker på globalt nivå, samtidig som det beskytter planetens naturlige økosystemer.</p>
          <h1 className="text-3xl font-bold mt-8">Om oss</h1>
          <p className="text-lg">Foreningen Robust jobber for en regenerativ økonomi som fungerer innenfor planetens tålegrenser, og sikrer et godt liv for alle levende vesener. Foreningen fremmer formålet gjennom aktiviteter og prosjekter som bygger på mangfoldige perspektiv og praksis. VÅrt arbeid er bygget på tverrfaglige tilnærming. Dette betyr at høster innsikt fra ulike hold, økonomi, historie, psykologi, klima, filosofi,</p>
          <p className="text-lg">Vi kombinerer forskning, formidling og visuelle uttrykk for å formidle de Vi jobber med en tverrfaglige tilnærming. Dette betyr, at vi lener oss på o /interdisiplinary tilnærming.</p>
          <p className="text-lg">Robust består (foreløpig) av medlemmer med bakgrunn innen økonomi, (visuell) design, kunst, matematikk, miljøstudier, kognitiv (IVER HVA ER DIN BAKGRUNN?) og business. Foreningen høster styrke i medlemmenes ulike bakgrunner. Videre er flere av medlemmene koblet opp til ulike nettverk som International Degrowth Network, Rethinking Economics Norge, Postgrowth Nordics Network og Vekstfri Norge.</p>
          <p className="text-lg">Vi komposterer konvensjonelle metoder til mer omsorgsfulle og livskraftige tilnærminger.</p>
          <h2 className="text-2xl font-bold mt-8">VÅRE EKSPERTOMRÅDER:</h2>
          <ul className="list-disc list-inside text-lg pl-4">
            <li>ØKONOMISK VELVÆRE</li>
            <li>SYSTEMTENKNING</li>
          </ul>
        </div>
        <InteractiveBook images={pdfImages} />
      </motion.div>
      <FingerFooter />
    </>
  );
};

export default OmOss;
