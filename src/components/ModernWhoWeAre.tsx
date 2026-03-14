import React from 'react';
import { motion } from 'motion/react';
import { Truck, Clock, Calendar, ShieldCheck } from 'lucide-react';

export const ModernWhoWeAre = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Features */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#3B3461] text-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center justify-center flex-1"
            >
              <Truck size={48} className="mb-4 text-orange-400" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Reliable Moves</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Every relocation is handled with precision, ensuring complete safety of your belongings.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F9A826] text-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center justify-center flex-1"
            >
              <Clock size={48} className="mb-4 text-[#3B3461]" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Timely Delivery</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                We value your time — on-time pickup and delivery is our promise.
              </p>
            </motion.div>
          </div>

          {/* Center Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-[500px] lg:h-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" 
              alt="Our Team" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right Column - Content & More Features */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100"
            >
              <h2 className="text-4xl font-bold mb-6">
                WHO <span className="text-[#F9A826]">WE ARE?</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At <span className="text-[#F9A826] font-bold">Star world packer</span>, we go beyond shifting goods — we move your trust, comfort, and memories. Since our inception, we've built a reputation for delivering stress-free relocations across India with a strong focus on <span className="font-bold">safety</span>, <span className="text-[#F9A826] font-bold">reliability</span>, and <span className="font-bold">customer satisfaction</span>.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 flex-grow">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#3B3461] text-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center justify-center"
              >
                <Calendar size={40} className="mb-3 text-orange-400" />
                <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">Flexible Scheduling</h3>
                <p className="text-[10px] text-white/70">We adapt to your schedule — weekends, holidays, or evenings.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#F9A826] text-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center justify-center"
              >
                <ShieldCheck size={40} className="mb-3 text-[#3B3461]" />
                <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">Insured Safety</h3>
                <p className="text-[10px] text-white/70">Full insurance coverage gives you peace of mind at every step.</p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
