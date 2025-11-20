import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavigationItem } from '../types';

const navItems: NavigationItem[] = [
  { label: 'Villas', href: '#villas' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Dining', href: '#dining' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
];

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileOpen(false);
      const element = document.querySelector(href);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileOpen
            ? 'bg-navy-900/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="relative z-50 flex items-center gap-3 group cursor-pointer">
             <div className="w-8 h-8 border border-white/30 flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-700">
                <div className="w-4 h-4 bg-gold-400 -rotate-45" />
             </div>
             <span className={`font-serif text-2xl tracking-widest font-bold text-white`}>
               AZUREA
             </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-white/80 hover:text-gold-400 transition-colors cursor-pointer relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button 
                onClick={onOpenBooking}
                className="ml-4 px-8 py-3 bg-gold-400 text-navy-900 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300"
            >
              Check Availability
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 text-white hover:text-gold-400 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-navy-900 z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-4xl font-serif text-white/90 hover:text-gold-400 transition-colors cursor-pointer italic"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6 }}
                 onClick={() => {
                     setIsMobileOpen(false);
                     onOpenBooking();
                 }}
                 className="mt-10 px-10 py-4 bg-gold-400 text-navy-900 text-sm font-bold uppercase tracking-widest"
              >
                Book Your Stay
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};