import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Haridwar",
    text: "Very professional movers. My furniture arrived safely and on time. Highly recommended for home shifting.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rahul"
  },
  {
    name: "Priya Gupta",
    city: "Rishikesh",
    text: "The team was very efficient and handled my fragile items with great care. Best experience so far!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=priya"
  },
  {
    name: "Amit Patel",
    city: "Roorkee",
    text: "Affordable pricing and excellent service. They made my office relocation completely stress-free.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=amit"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="clients" className="py-20 bg-primary overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondary p-4 rounded-full text-white shadow-lg">
                <Quote size={32} />
              </div>
              
              <div className="flex justify-center gap-1 mb-6 mt-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full border-4 border-primary/10 mb-4 object-cover"
                  referrerPolicy="no-referrer"
                />
                <h4 className="text-xl font-bold text-primary">{testimonials[currentIndex].name}</h4>
                <p className="text-slate-500 font-medium">{testimonials[currentIndex].city}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/20 hidden md:block"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/20 hidden md:block"
          >
            <ChevronRight size={32} />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  currentIndex === i ? "bg-secondary w-8" : "bg-white/30"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
