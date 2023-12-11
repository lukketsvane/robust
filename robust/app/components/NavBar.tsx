// NavBar.tsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const NavBar = ({ currentSection, sectionColors }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOverlayBackgroundColor = sectionColors[currentSection]; // Set the menu overlay background color dynamically

  const toggleIcon = isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 z-50 bg-transparent">
        <Link href="/" passHref>
          <span className="text-xl font-bold cursor-pointer z-50">S.</span>
        </Link>
        
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="z-50 focus:outline-none"
        >
          {toggleIcon}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: menuOverlayBackgroundColor }} // Set the background color dynamically
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-8 text-black text-4xl font-bold">
              <Link href="/om-oss" passHref><span className="hover:underline my-2">Om Oss</span></Link> {/* Added my-2 for vertical spacing */}
              <Link href="/siste-nytt" passHref><span className="hover:underline my-2">Siste nytt</span></Link> {/* Added my-2 for vertical spacing */}
              <Link href="/prosjekter" passHref><span className="hover:underline my-2">Nedvekst</span></Link> {/* Added my-2 for vertical spacing */}
            </div>
            <div className="absolute bottom-8 flex gap-6 text-black text-sm">
              <Link href="/kontakt" passHref><span className="hover:underline">Kontakt</span></Link>
              <Link href="/nyhetsbrev" passHref><span className="hover:underline">Nyhetsbrev</span></Link>
            </div>
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4"
              whileTap={{ scale: 0.95 }}
            >
              <XIcon className="w-6 h-6 text-black" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
