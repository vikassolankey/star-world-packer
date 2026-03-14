import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary/90 transition-all"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/911234567890"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all flex items-center justify-center"
      >
        <MessageSquare size={24} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+911234567890"
        className="bg-secondary text-white p-4 rounded-full shadow-2xl hover:bg-secondary/90 transition-all flex items-center justify-center"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
};
