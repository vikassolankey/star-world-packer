import React from 'react';
import { motion } from 'motion/react';
import { BadgePercent, Receipt, Wallet, ArrowRight } from 'lucide-react';

export const PricingInfo = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Transparent & <span className="text-secondary">Affordable</span> Rates
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Quality service doesn't have to be expensive. At Star world packer, we offer the most competitive rates in Haridwar without compromising on the safety of your goods.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-secondary/10 text-secondary p-3 rounded-xl w-fit mb-4">
                  <BadgePercent size={24} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">No Hidden Costs</h4>
                <p className="text-sm text-slate-500">What we quote is what you pay. No last-minute surprises or hidden charges.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-secondary/10 text-secondary p-3 rounded-xl w-fit mb-4">
                  <Receipt size={24} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Detailed Estimates</h4>
                <p className="text-sm text-slate-500">Get a breakdown of all costs including packing, loading, and transit.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                View Price Chart <ArrowRight size={20} />
              </button>
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-full border border-slate-200">
                <Wallet className="text-secondary" />
                <span className="font-bold text-slate-700">Budget-Friendly Plans</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
                alt="Affordable Rates"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
              <p className="text-primary font-bold text-lg mb-1">Best Price</p>
              <p className="text-slate-500 text-sm">Guaranteed in Haridwar</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
