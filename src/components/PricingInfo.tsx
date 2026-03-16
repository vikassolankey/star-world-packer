import React from 'react';
import { motion } from 'motion/react';
import { BadgePercent, Receipt, Wallet, ArrowRight } from 'lucide-react';

interface PricingInfoProps {
  onPriceChartClick: () => void;
}

export const PricingInfo: React.FC<PricingInfoProps> = ({ onPriceChartClick }) => {
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
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-default"
              >
                <div className="bg-secondary/10 text-secondary p-3 rounded-xl w-fit mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <BadgePercent size={24} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">No Hidden Costs</h4>
                <p className="text-sm text-slate-500">What we quote is what you pay. No last-minute surprises or hidden charges.</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-default"
              >
                <div className="bg-secondary/10 text-secondary p-3 rounded-xl w-fit mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <Receipt size={24} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Detailed Estimates</h4>
                <p className="text-sm text-slate-500">Get a breakdown of all costs including packing, loading, and transit.</p>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={onPriceChartClick}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                View Price Chart <ArrowRight size={20} className="group-hover:translate-x-1" />
              </motion.button>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 px-6 py-4 bg-white rounded-full border border-slate-200 shadow-sm"
              >
                <Wallet className="text-secondary animate-pulse" />
                <span className="font-bold text-slate-700">Budget-Friendly Plans</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src="https://tse1.explicit.bing.net/th/id/OIP.Sy84VSWapTTPnLi7v8shzAHaE8?w=2000&h=1334&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Affordable Rates"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100"
            >
              <p className="text-primary font-bold text-lg mb-1">Best Price</p>
              <p className="text-slate-500 text-sm">Guaranteed in Haridwar</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
