"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

interface NavBarProps {
  currentSection: number;
  sectionColors: string[];
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const NavBar = ({ currentSection, sectionColors }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOverlayBackgroundColor = sectionColors?.[currentSection] || 'transparent';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 flex items-center justify-between py-2 z-50 ${isMenuOpen ? 'bg-transparent' : sectionColors[currentSection]} px-4 sm:px-6 lg:px-8`}>
        <Link href="/">
          <span className="font-bold cursor-pointer z-50 text-5xl">S.</span>
        </Link>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 focus:outline-none"
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {isMenuOpen ? <XIcon className="w-10 h-10" /> : <MenuIcon className="w-10 h-10" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-between"
            style={{ backgroundColor: menuOverlayBackgroundColor }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
          >
            <div className="pt-16 w-full text-left">
              <Link href="/om-oss">
                <span className="title block cursor-pointer text-8xl mb-6">Om Oss</span>
              </Link>
              <Link href="/siste-nytt">
                <span className="title block cursor-pointer text-8xl mb-6">Siste nytt</span>
              </Link>
              <Link href="/prosjekter">
                <span className="title block cursor-pointer text-8xl mb-6">Nedvekst</span>
              </Link>
            </div>
            <div className="w-full px-4 pb-4 flex justify-between items-end">
              <Link href="/kontakt">
                <span className=" cursor-pointer text-4xl mb-2 sm:mb-0 sm:mx-4">Kontakt</span>
              </Link>
              <Link href="/nyhetsbrev">
                <span className=" cursor-pointer text-4xl sm:mx-4">Nyhetsbrev</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;