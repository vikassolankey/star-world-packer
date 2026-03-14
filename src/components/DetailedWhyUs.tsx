import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star, Trophy, Users2 } from 'lucide-react';

export const DetailedWhyUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Why We Are The <span className="text-secondary">Best</span></h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Star world packer's commitment to excellence has made us the preferred choice for thousands of families in Haridwar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
                alt="Professional Team"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <Users2 size={32} className="mb-2" />
                <h4 className="text-xl font-bold">Expert Team</h4>
              </div>
            </div>
            <p className="text-slate-600 px-2">
              Our staff is professionally trained in modern packing techniques and heavy lifting to ensure your items are handled with precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                alt="Modern Fleet"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <Trophy size={32} className="mb-2" />
                <h4 className="text-xl font-bold">Modern Infrastructure</h4>
              </div>
            </div>
            <p className="text-slate-600 px-2">
              We own a fleet of specialized moving trucks and high-grade packing equipment to provide a seamless relocation experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group"
          >
            <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
                alt="Customer Support"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <Star size={32} className="mb-2" />
                <h4 className="text-xl font-bold">Customer First</h4>
              </div>
            </div>
            <p className="text-slate-600 px-2">
              Our 24/7 dedicated support team ensures all your queries are resolved instantly, keeping you updated throughout the move.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {['Licensed & Insured', 'No Hidden Fees', 'Free Pre-Move Survey', 'Eco-Friendly Packing'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
              <CheckCircle2 className="text-secondary" size={20} />
              <span className="font-bold text-primary">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
