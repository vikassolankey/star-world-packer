import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileCheck, Users, Box, CheckCircle } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

const guaranteePoints = [
  {
    icon: <ShieldCheck className="text-emerald-500" size={32} />,
    title: "Damage Protection",
    description: "Our multi-layer protection system ensures your items stay scratch-free and safe throughout the journey."
  },
  {
    icon: <FileCheck className="text-emerald-500" size={32} />,
    title: "Insurance Coverage",
    description: "Comprehensive transit insurance options to provide you with complete financial peace of mind."
  },
  {
    icon: <Users className="text-emerald-500" size={32} />,
    title: "Trained Staff",
    description: "Our professional movers are rigorously trained in modern handling, packing, and loading techniques."
  },
  {
    icon: <Box className="text-emerald-500" size={32} />,
    title: "High-Quality Packing Materials",
    description: "We use premium bubble wraps, heavy-duty corrugated sheets, and specialized boxes for maximum safety."
  }
];

export const TrustGuarantee = () => {
  const { openQuoteModal } = useQuote();
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold uppercase tracking-wider mb-6 border border-emerald-100"
            >
              <CheckCircle size={16} />
              Our Commitment
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-primary"
            >
              “100% Safe and Secure <span className="text-secondary">Moving Guarantee”</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed"
            >
              We don't just move your belongings; we protect your memories. Our comprehensive safety protocols ensure a stress-free relocation experience every single time. We use specialized techniques and materials to guarantee the highest level of security for your assets.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-50 relative z-10">
              <img 
                src="https://mountainpackersmovers.in/img/about/packing-and-unpacking-services.webp" 
                alt="Secure Packing"
                className="w-full h-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-3xl shadow-xl z-20">
              <ShieldCheck size={40} className="text-white mb-2" />
              <p className="text-white font-bold">Verified Safety</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guaranteePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-secondary transition-colors">
                {point.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          onClick={() => openQuoteModal()}
          className="mt-20 p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center cursor-pointer hover:shadow-lg transition-all"
        >
          <p className="text-xl font-medium text-slate-800">
            Ready for a secure move? <span className="text-secondary">Get your free quote today.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
