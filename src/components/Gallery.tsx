import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  
  { url: "gallery/g1.jpeg", title: "Customized Solutions" },
  { url: "gallery/g2.jpeg", title: "Emergency Services" },
  { url: "gallery/g3.jpeg", title: "24/7 Support" },
  { url: "gallery/g4.jpeg", title: "Quality Assurance" },
  { url: "gallery/g5.jpeg", title: "Customer Satisfaction" },
  { url: "gallery/g6.jpeg", title: "Safety First" },
  { url: "gallery/g7.jpeg", title: "Customer Focus" },
  { url: "gallery/g8.jpeg", title: "Teamwork" },
  { url: "gallery/g9.jpeg", title: "Customer Service" },
  { url: "gallery/g10.jpeg", title: "Professional Team" },
  { url: "gallery/g11.jpeg", title: "Customer Support" },
  { url: "gallery/g12.jpeg", title: "Professional Team" },
  { url: "gallery/g13.jpeg", title: "Customer Support" },
  { url: "gallery/g14.jpeg", title: "Professional Team" },
  { url: "gallery/g15.jpeg", title: "Customer Support" },
  { url: "gallery/g16.jpeg", title: "Professional Team" },
  { url: "gallery/g17.jpeg", title: "Customer Support" },
  { url: "gallery/g18.jpeg", title: "Professional Team" },
  { url: "gallery/g19.jpeg", title: "Customer Support" },
  { url: "gallery/g20.jpeg", title: "Professional Team" },
  { url: "gallery/g21.jpeg", title: "Customer Support" },
  { url: "gallery/g22.jpeg", title: "Professional Team" },
  { url: "gallery/g23.jpeg", title: "Customer Support" },

];

export const Gallery = () => {
  // Double the images for seamless infinite scroll
  const scrollingImages = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight uppercase">Our Gallery</h2>
          <div className="h-2 w-24 bg-secondary mx-auto rounded-full mb-6 shadow-sm" />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium italic">
            "Professionalism in every move, excellence in every frame."
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Scroll Container */}
      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-6 py-4 px-3"
          animate={{ x: [0, -2500] }} // Adjust based on total width
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {scrollingImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-[300px] md:w-[400px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group/item"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 transform translate-y-4 group-hover/item:translate-y-0">
                <span className="text-secondary text-xs font-black uppercase tracking-[0.2em] mb-2">Star World Packer</span>
                <h4 className="text-white text-2xl font-black leading-tight drop-shadow-md">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest animate-pulse">
          ← Hover to pause • Scroll to explore →
        </p>
      </div>
    </section>
  );
};
