import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Send, ArrowRight } from 'lucide-react';
import { Typewriter } from './Typewriter';
import { useQuote } from '../context/QuoteContext';
import { branches } from '../data/branches';
import { WhatsAppIcon } from './WhatsAppIcon';

const heroImages = [
  "https://www.pixelstalk.net/wp-content/uploads/images6/Truck-4k-Wallpaper-HD.jpg", // Moving truck
  "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg", // Packing boxes
  "https://images.pexels.com/photos/7464725/pexels-photo-7464725.jpeg",
  "https://images.pexels.com/photos/29057946/pexels-photo-29057946.jpeg", // Home relocation
  "https://images.pexels.com/photos/7203812/pexels-photo-7203812.jpeg",
  "https://images.pexels.com/photos/20882743/pexels-photo-20882743.jpeg", // Office shifting
  "https://images.pexels.com/photos/5025664/pexels-photo-5025664.jpeg", // Workers loading
];

const heroImagesMobile = [
  "https://www.pexels.com/photo/man-in-bandana-and-coveralls-standing-near-packages-7464372/", // Portrait - Worker
  "https://images.pexels.com/photos/28520996/pexels-photo-28520996.jpeg", // Portrait - Boxes
  "https://images.pexels.com/photos/7464705/pexels-photo-7464705.jpeg", // Portrait - Truck
  "https://images.pexels.com/photos/20097991/pexels-photo-20097991.jpeg", // Portrait - Packing
  "https://images.pexels.com/photos/7203777/pexels-photo-7203777.jpeg",
  "https://images.pexels.com/photos/7414957/pexels-photo-7414957.jpeg", // Portrait - Moving
];

export const Hero = () => {
  const { openQuoteModal } = useQuote();
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    const activeImages = window.innerWidth < 768 ? heroImagesMobile : heroImages;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % activeImages.length);
    }, 6000);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const activeImages = isMobile ? heroImagesMobile : heroImages;

  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-x-hidden">
      {/* Background Slider with Parallax & Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={`${isMobile ? 'mob' : 'desk'}-${currentImage}`}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ 
              opacity: 1, 
              scale: 1.05,
              y: scrollY * 0.4 // Parallax effect
            }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
            <img
              src={activeImages[currentImage]}
              alt="Logistics"
              className="w-full h-full object-cover transform-gpu"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-28 md:pt-32 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Hero Content */}
          <motion.div
            style={{ y: isMobile ? 0 : scrollY * -0.15 }} // Disable parallax text on mobile for better stability
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-secondary font-bold text-xs md:text-sm mb-8 tracking-[0.2em] uppercase"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
              </span>
              Premium Moving Solutions
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1] tracking-tighter">
              Star World <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-yellow-400 to-secondary animate-gradient-x drop-shadow-[0_0_25px_rgba(244,196,48,0.2)]">
                Packers & Movers
              </span>
            </h1>
            
            <div className="text-xl md:text-3xl text-white/90 mb-10 font-medium h-12 flex items-center bg-white/5 backdrop-blur-sm px-6 rounded-2xl border border-white/10 w-fit">
              <span className="mr-3 opacity-60">Serving in</span>
              <Typewriter words={branches.map(b => b.city)} />
            </div>

            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-xl leading-relaxed font-light">
              Experience the gold standard in relocation. We combine <span className="text-white font-normal">advanced logistics</span> with <span className="text-white font-normal">personalized care</span> for a stress-free move.
            </p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(244,196,48,0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openQuoteModal()}
                className="bg-secondary text-white px-12 py-6 rounded-2xl font-black text-lg transition-all shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Free Quote
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
              </motion.button>
              
              <div className="flex gap-5">
                <motion.a 
                  href="tel:+917080825666"
                  whileHover={{ scale: 1.1, rotate: 10, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all shadow-xl"
                >
                  <Phone className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://wa.me/917080825666"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -10, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-2xl flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all shadow-xl"
                >
                  <WhatsAppIcon className="w-7 h-7" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Hero Form / Floating Stats */}
          <motion.div
            style={{ y: scrollY * -0.05 }}
            initial={{ opacity: 0, scale: 0.9, x: isMobile ? 0 : 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative elements */}
            {/* <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
            
           */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
