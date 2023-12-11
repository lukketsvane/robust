"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

interface NavBarProps {
  currentSection: number; // Define the type for currentSection
  sectionColors: string[]; // Define the type for sectionColors
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const NavBar = ({ currentSection, sectionColors }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOverlayBackgroundColor = sectionColors?.[currentSection] || '#FFFFFF';

  const iconSize = "w-10 h-10";
  const logoSize = "text-5xl";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between py-2 mx-6 z-50 bg-transparent">
        <Link href="/" passHref>
          <span className={`font-bold cursor-pointer z-50 ${logoSize}`}>S.</span>
        </Link>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="z-50 focus:outline-none"
        >
          {isMenuOpen ? <XIcon className={iconSize} /> : <MenuIcon className={iconSize} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: menuOverlayBackgroundColor }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-8 text-black text-4xl  font-bold ">
              <Link href="/om-oss" passHref><span className="hover:underline px-4 my-2 ">Om Oss</span></Link>
              <Link href="/siste-nytt" passHref><span className="hover:underline px-4 my-2 ">Siste nytt</span></Link>
              <Link href="/prosjekter" passHref><span className="hover:underline px-4 my-2 ">Nedvekst</span></Link>
            </div>

            <div className="absolute bottom-8 flex gap-6 text-black text-sm">
              <Link href="/kontakt" passHref><span className="hover:underline">Kontakt</span></Link>
              <Link href="/nyhetsbrev" passHref><span className="hover:underline">Nyhetsbrev</span></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
