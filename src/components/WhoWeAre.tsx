import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';

export const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400" 
                  alt="Packing" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400" 
                  alt="Truck" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=400" 
                  alt="Delivery" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" 
                  alt="Team" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white p-6 rounded-full shadow-2xl border-8 border-white hidden md:block">
              <span className="text-2xl font-bold">10+ Years</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h4 className="text-secondary font-bold tracking-widest uppercase mb-2">Who We Are</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Haridwar's Most Trusted <br />
              <span className="text-secondary">Relocation Partner</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in 2014, Star world packer has grown from a small local team to a regional leader in logistics. We are a group of dedicated professionals committed to making your moving experience as smooth as the Ganges flow.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mx-auto mb-3">
                  <Target size={24} />
                </div>
                <h5 className="font-bold text-slate-800 mb-1">Our Mission</h5>
                <p className="text-xs text-slate-500">Safe, fast, and affordable moving for everyone.</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mx-auto mb-3">
                  <Eye size={24} />
                </div>
                <h5 className="font-bold text-slate-800 mb-1">Our Vision</h5>
                <p className="text-xs text-slate-500">To be India's #1 customer-centric logistics brand.</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mx-auto mb-3">
                  <Heart size={24} />
                </div>
                <h5 className="font-bold text-slate-800 mb-1">Our Values</h5>
                <p className="text-xs text-slate-500">Honesty, integrity, and care for your items.</p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-primary rounded-3xl text-white flex items-center gap-6">
              <div className="text-4xl font-bold">99%</div>
              <div className="text-sm text-white/80">
                Customer satisfaction rate across <br /> 
                <span className="text-white font-bold">5000+ successful moves</span> in Haridwar.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
