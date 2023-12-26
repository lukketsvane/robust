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
      <nav className={`fixed top-0 left-0 right-0 z-50 py-2 ${isMenuOpen ? 'bg-transparent' : sectionColors[currentSection]} px-4 sm:px-6 lg:px-8 flex items-center justify-between`}>
        <Link href="/">
          <span className="font-bold cursor-pointer text-5xl z-50">S.</span>
        </Link>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none z-50"
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {isMenuOpen ? <XIcon className="w-10 h-10" /> : <MenuIcon className="w-10 h-10" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: menuOverlayBackgroundColor }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
          >
            <div className="pt-52 pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8 text-left">
              <Link href="/om-oss">
                <span className="title block cursor-pointer text-8xl mb-4">Om Oss</span>
              </Link>
              <Link href="/siste-nytt">
                <span className="title block cursor-pointer text-8xl mb-4">Siste nytt</span>
              </Link>
              <Link href="/prosjekter">
                <span className="title block cursor-pointer text-8xl mb-4">Nedvekst</span>
              </Link>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <Link href="/kontakt">
                <span className="cursor-pointer text-4xl">Kontakt</span>
              </Link>
              <Link href="/nyhetsbrev">
                <span className="cursor-pointer text-4xl">Nyhetsbrev</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;