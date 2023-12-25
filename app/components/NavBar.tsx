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
  const paddingClass = "px-4 sm:px-6"; // Consistent padding

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 flex items-center justify-between py-2 z-50 bg-transparent ${paddingClass}`}>
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
            <div className="text-center">
              <div className="space-y-6 text-black text-3xl font-bold mb-12">
                <Link href="/om-oss" passHref><span className="hover:underline d-block my-2">Om Oss</span></Link>
                <Link href="/siste-nytt" passHref><span className="hover:underline d-block my-2">Siste nytt</span></Link>
                <Link href="/prosjekter" passHref><span className="hover:underline d-block my-2">Nedvekst</span></Link>
              </div>

              {/* Contact and newsletter links are horizontally spaced */}
              <div className="flex justify-center gap-4 text-black text-sm">
                <Link href="/kontakt" passHref><span className="hover:underline">Kontakt</span></Link>
                <Link href="/nyhetsbrev" passHref><span className="hover:underline">Nyhetsbrev</span></Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;