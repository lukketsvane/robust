"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

const textColorForSection: { [key: string]: string } = {
  '#617864': 'text-white',
  '#4324D2': 'text-white',
  '#FFFFFF': 'text-black',
  '#F2C744': 'text-black',
};

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
  const isTextWhite = textColorForSection[sectionColors[currentSection]] === 'text-white';
  const iconAnimation = useAnimation();
  const logoSpin = useAnimation();

  useEffect(() => {
    const bgColor = sectionColors[currentSection];
    document.body.style.backgroundColor = bgColor;
    iconAnimation.start({ rotate: isMenuOpen ? 0 : 180 });
  }, [currentSection, sectionColors, iconAnimation, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const spinLogo = async () => {
    await logoSpin.start({ rotate: 360 });
    logoSpin.set({ rotate: 0 });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 py-2 ${isMenuOpen ? 'bg-transparent' : sectionColors[currentSection]} px-4 sm:px-6 lg:px-8 flex items-center justify-between smooth-background-transition`}>
        <div onClick={spinLogo}>
          <Link href="/">
            <motion.img src={isTextWhite ? '/logo_white.png' : '/logo_black.png'} alt="Robust Logo" className="w-12 h-12 cursor-pointer" animate={logoSpin} />
          </Link>
        </div>
        <motion.button
          onClick={toggleMenu}
          className="focus:outline-none z-50"
          animate={iconAnimation}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {isMenuOpen ? <XIcon className={`w-10 h-10 ${isTextWhite ? 'text-white' : 'text-black'}`} /> : <MenuIcon className={`w-10 h-10 ${isTextWhite ? 'text-white' : 'text-black'}`} />}
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
            onClick={closeMenu}
          >
            <div className="pt-52 pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8 text-left">
              <Link href="/om-oss"><div onClick={closeMenu} className={`title block cursor-pointer text-5xl md:text-8xl mb-4 ${isTextWhite ? 'text-white' : 'text-black'} small-text menu-item`}>Om Oss</div></Link>
              <Link href="/siste-nytt"><div onClick={closeMenu} className={`title block cursor-pointer text-5xl md:text-8xl mb-4 ${isTextWhite ? 'text-white' : 'text-black'} small-text menu-item`}>Siste nytt</div></Link>
              <Link href="/prosjekter"><div onClick={closeMenu} className={`title block cursor-pointer text-5xl md:text-8xl mb-4 ${isTextWhite ? 'text-white' : 'text-black'} small-text menu-item`}>Prosjekter</div></Link>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <Link href="/kontakt">
  <div onClick={closeMenu} className={`cursor-pointer text-3xl md:text-4xl ${isTextWhite ? 'text-white' : 'text-black'} small-text contact-newsletter-text`}>Kontakt</div>
</Link>
<Link href="/nyhetsbrev">
  <div onClick={closeMenu} className={`cursor-pointer text-3xl md:text-4xl ${isTextWhite ? 'text-white' : 'text-black'} small-text contact-newsletter-text`}>Nyhetsbrev</div>
</Link>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
  <Link href="/kontakt">
    <div onClick={closeMenu} className={`cursor-pointer text-3xl md:text-4xl ${isTextWhite ? 'text-white' : 'text-black'} small-text contact-newsletter-text`}>Kontakt</div>
  </Link>
  <Link href="/nyhetsbrev">
    <div onClick={closeMenu} className={`cursor-pointer text-3xl md:text-4xl ${isTextWhite ? 'text-white' : 'text-black'} small-text contact-newsletter-text`}>Nyhetsbrev</div>
  </Link>
</div>
</motion.div>
)}
</AnimatePresence>
</>
);
};

export default NavBar;