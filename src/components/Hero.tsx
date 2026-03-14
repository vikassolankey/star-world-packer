import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { Typewriter } from './Typewriter';
import { useQuote } from '../context/QuoteContext';

const heroImages = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920", // Moving truck
  "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=1920", // Packing boxes
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920", // Home relocation
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920", // Office shifting
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1920", // Workers loading
];

export const Hero = () => {
  const { openQuoteModal } = useQuote();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img
              src={heroImages[currentImage]}
              alt="Logistics"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              Reliable <span className="text-secondary">Star world packer</span> in Haridwar
            </h1>
            <div className="text-xl md:text-2xl text-white/90 mb-6 font-medium h-12">
              <Typewriter />
            </div>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Safe, Fast and Affordable Home and Office Shifting Services. We ensure your belongings reach their destination with utmost care.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => openQuoteModal()}
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition-all shadow-xl hover:scale-105"
              >
                Get Free Quote
              </button>
              <div className="flex gap-3">
                <a href="tel:+911234567890" className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-white/20 transition-all border border-white/20">
                  <Phone size={24} />
                </a>
                <a href="https://wa.me/911234567890" className="bg-green-500 p-4 rounded-full text-white hover:bg-green-600 transition-all shadow-lg">
                  <MessageSquare size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-md mx-auto lg:ml-auto"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Quick Quote Form</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Moving From"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Moving To"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                </div>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
                <select
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                  required
                >
                  <option value="">Select Shifting Type</option>
                  <option value="household">Household Shifting</option>
                  <option value="office">Office Shifting</option>
                  <option value="car">Car Transport</option>
                  <option value="bike">Bike Transport</option>
                  <option value="local">Local Shifting</option>
                  <option value="domestic">Domestic Relocation</option>
                  <option value="storage">Storage & Warehousing</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} />
                Submit Request
              </button>
              <p className="text-xs text-slate-500 text-center mt-4">
                * We respect your privacy. Your data is safe with us.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
