import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useQuote } from '../context/QuoteContext';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Services', href: '/services' },
  { name: 'Branches', href: '/branches' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const { openQuoteModal } = useQuote();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300 w-full",
      isScrolled ? "bg-white shadow-lg py-2" : "bg-white/90 backdrop-blur-md py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <ArrowRight className="text-white w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold text-primary block leading-none">STAR WORLD</span>
              <span className="text-sm font-semibold text-secondary tracking-widest">PACKER</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "font-medium transition-colors",
                  location.pathname === link.href ? "text-primary" : "text-slate-700 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
            <button 
              onClick={() => openQuoteModal()}
              className="bg-secondary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-3 text-base font-medium rounded-md",
                    location.pathname === link.href ? "text-primary bg-slate-50" : "text-slate-700 hover:text-primary hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+911234567890"
                  className="flex items-center justify-center gap-2 bg-primary/10 text-primary py-3 rounded-lg font-bold"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full bg-secondary text-white py-3 rounded-lg font-bold"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
