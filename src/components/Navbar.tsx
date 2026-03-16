import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useQuote } from '../context/QuoteContext';
import { branches } from '../data/branches';

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
  const [isBranchesHovered, setIsBranchesHovered] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text color based on scroll and page
  const textColorClass = (isScrolled || !isHome) ? "text-slate-700" : "text-white";
  const hoverColorClass = (isScrolled || !isHome) ? "hover:text-primary" : "hover:text-secondary";
  const activeColorClass = (isScrolled || !isHome) ? "text-primary" : "text-secondary";

  return (
    <nav className={cn(
      "fixed z-[60] transition-all duration-700 w-full ease-in-out",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-1 top-0" 
        : (isHome ? "bg-transparent py-5 md:top-10 top-0" : "bg-white/80 backdrop-blur-md py-3 top-0 md:top-10 shadow-sm")
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative">
            <motion.div
              animate={{ 
                scale: (isScrolled || !isHome) ? 0.9 : 1,
                y: (isScrolled || !isHome) ? -2 : 0
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white/95 backdrop-blur-sm p-1 rounded-2xl shadow-lg border border-white/50"
            >
              <motion.img 
                animate={{ 
                  height: (isScrolled || !isHome) ? 40 : 56,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                src="/gallery/logo.png" 
                alt="Star World Packer Logo"
                className="w-auto object-contain transition-all duration-300 drop-shadow-sm"
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.name === 'Branches') {
                return (
                  <div 
                    key={link.name}
                    className="relative group py-4"
                    onMouseEnter={() => setIsBranchesHovered(true)}
                    onMouseLeave={() => setIsBranchesHovered(false)}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "font-medium transition-all duration-300 flex items-center gap-1",
                        textColorClass,
                        hoverColorClass,
                        location.pathname.startsWith('/branches') && activeColorClass
                      )}
                    >
                      {link.name}
                      <motion.span
                        animate={{ rotate: isBranchesHovered ? 180 : 0 }}
                        className="inline-block"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.span>
                    </Link>

                    {/* Desktop Dropdown */}
                    <AnimatePresence>
                      {isBranchesHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50"
                        >
                          <div className="grid grid-cols-3 gap-4">
                            {branches.map((branch) => (
                              <Link
                                key={branch.id}
                                to={`/branches/${branch.id}`}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                onClick={() => setIsBranchesHovered(false)}
                              >
                                <span className="text-2xl">{branch.icon}</span>
                                <div>
                                  <div className="font-bold text-slate-800 group-hover:text-primary transition-colors">{branch.city}</div>
                                  <div className="text-xs text-slate-500">{branch.state}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-slate-100">
                            <Link 
                              to="/branches" 
                              className="text-sm font-bold text-primary hover:text-primary/80 flex items-center justify-center gap-2"
                              onClick={() => setIsBranchesHovered(false)}
                            >
                              View All Branches <ArrowRight size={14} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "font-medium transition-all duration-300 relative group py-2",
                      textColorClass,
                      hoverColorClass,
                      location.pathname === link.href && (activeColorClass + " font-bold")
                    )}
                  >
                    {link.name}
                    <motion.span 
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300",
                        location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                );
            })}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
           
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
              className={cn(
                "p-2 rounded-xl transition-colors",
                (isScrolled || !isHome) ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                <div key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-3 text-base font-medium rounded-md",
                      location.pathname === link.href ? "text-primary bg-slate-50" : "text-slate-700 hover:text-primary hover:bg-slate-50"
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.name === 'Branches' && (
                    <div className="pl-6 grid grid-cols-2 gap-2 mt-2">
                      {branches.map((branch) => (
                        <Link
                          key={branch.id}
                          to={`/branches/${branch.id}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm py-2 text-slate-500 hover:text-primary flex items-center gap-2"
                        >
                          <span>{branch.icon}</span>
                          {branch.city}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
