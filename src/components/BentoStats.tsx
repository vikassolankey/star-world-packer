import React from 'react';
import { motion } from 'motion/react';
import { Package, Users, Clock, MapPin } from 'lucide-react';

const stats = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    alt: 'Our Fleet',
    className: 'row-span-2'
  },
  {
    type: 'stat',
    icon: <Package className="text-primary" size={32} />,
    value: '5,000+',
    label: 'No of Movements',
    description: 'Safe packing & reliable transport for every move.',
    className: 'bg-slate-50'
  },
  {
    type: 'image',
    src: 'https://5.imimg.com/data5/SELLER/Default/2024/4/414017916/TM/XU/SA/153833679/packer-and-mover-service-500x500.jpg',
    alt: 'Logistics',
    className: 'row-span-2'
  },
  {
    type: 'stat',
    icon: <Users className="text-primary" size={32} />,
    value: '1,500+',
    label: 'Our Clients',
    description: 'Serving a diverse range of satisfied customers.',
    className: 'bg-slate-50'
  },
  {
    type: 'image',
    src: 'https://tse2.mm.bing.net/th/id/OIP.BJjsTtZ8Zgx4igeZsu6sGAHaEo?w=1920&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3',
    alt: 'Transport',
    className: 'row-span-2 md:col-start-2'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800',
    alt: 'Shipping',
    className: 'row-span-2 md:col-start-4'
  },
  {
    type: 'stat',
    icon: <Clock className="text-primary" size={32} />,
    value: '25+',
    label: 'Years of Experience',
    description: 'Trusted relocation services across India.',
    className: 'bg-slate-50 md:col-start-1 md:row-start-3'
  },
  {
    type: 'stat',
    icon: <MapPin className="text-primary" size={32} />,
    value: '50+',
    label: 'Cities Covered',
    description: 'Delivering relocation services across urban & rural India.',
    className: 'bg-slate-50 md:col-start-3 md:row-start-3'
  }
];

export const BentoStats = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className={`rounded-3xl overflow-hidden shadow-sm border border-slate-100 group ${item.className}`}
            >
              {item.type === 'image' ? (
                <div className="w-full h-full relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ) : (
                <div className="h-full p-8 flex flex-col items-center justify-center text-center group-hover:bg-white transition-colors duration-300">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="mb-4 p-3 bg-white rounded-2xl shadow-sm border border-slate-50 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">{item.value}</h3>
                  <div className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">{item.label}</div>
                  <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">{item.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
