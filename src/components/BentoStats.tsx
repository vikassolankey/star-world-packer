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
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
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
    src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl overflow-hidden shadow-sm border border-slate-100 ${item.className}`}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="h-full p-8 flex flex-col items-center justify-center text-center">
                  <div className="mb-4 p-3 bg-white rounded-2xl shadow-sm border border-slate-50">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-1">{item.value}</h3>
                  <p className="text-sm font-semibold text-slate-600 mb-2">{item.label}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
