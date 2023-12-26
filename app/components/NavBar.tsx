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
  const menuOverlayBackgroundColor = sectionColors?.[currentSection] || '#FFFFFF';

  const iconSize = "w-10 h-10"; // Size of the icons
  const paddingClass = "px-4 sm:px-6 lg:px-8"; // Restored padding class

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 flex items-center justify-between py-2 z-50 ${isMenuOpen ? 'bg-transparent' : sectionColors[currentSection]} ${paddingClass}`}>
        <Link href="/" passHref>
          <span className="font-bold cursor-pointer z-50 text-5xl">S.</span>
        </Link>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 focus:outline-none"
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {isMenuOpen ? <XIcon className={iconSize} /> : <MenuIcon className={iconSize} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center"
            style={{ backgroundColor: menuOverlayBackgroundColor }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
          >
            {/* Main menu items */}
            <div className="text-center space-y-8 text-black text-5xl font-bold sm:flex sm:justify-center sm:items-center sm:space-x-8 sm:space-y-0 sm:text-6xl">
              <Link href="/om-oss" passHref><span className="block mx-auto hover:underline">Om Oss</span></Link>
              <Link href="/siste-nytt" passHref><span className="block mx-auto hover:underline">Siste nytt</span></Link>
              <Link href="/prosjekter" passHref><span className="block mx-auto hover:underline">Nedvekst</span></Link>
            </div>

            {/* Footer menu items */}
            <div className="absolute bottom-0 w-full p-4 flex flex-col items-center justify-end sm:flex-row sm:justify-center sm:items-center">
              <Link href="/kontakt" passHref><span className="hover:underline text-lg mb-2 sm:mb-0 sm:mx-4">Kontakt</span></Link>
              <Link href="/nyhetsbrev" passHref><span className="hover:underline text-lg sm:mx-4">Nyhetsbrev</span></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;