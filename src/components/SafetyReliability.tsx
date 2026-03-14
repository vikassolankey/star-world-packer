import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, CheckCircle2, Truck } from 'lucide-react';

export const SafetyReliability = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800"
                alt="Safe Moving"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-secondary p-8 rounded-3xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4 text-white">
                <ShieldCheck size={48} />
                <div>
                  <p className="text-2xl font-bold">100% Safe</p>
                  <p className="text-white/80">Guaranteed Delivery</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Safety & <span className="text-secondary">Reliability</span> First
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We understand that your belongings are not just items; they are memories and investments. That's why Star world packer has built its reputation on being the most reliable movers in Haridwar.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="bg-primary/10 text-primary p-3 rounded-xl h-fit">
                  <Lock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Secure Packaging</h4>
                  <p className="text-slate-500">We use premium quality bubble wraps, corrugated sheets, and sturdy boxes to ensure zero damage.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="bg-primary/10 text-primary p-3 rounded-xl h-fit">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Verified Professionals</h4>
                  <p className="text-slate-500">Every team member undergoes background checks and rigorous training in safe handling techniques.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="bg-primary/10 text-primary p-3 rounded-xl h-fit">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Specialized Carriers</h4>
                  <p className="text-slate-500">Our fleet consists of closed-container trucks designed specifically for safe long-distance transport.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
