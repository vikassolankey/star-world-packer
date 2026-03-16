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
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#3B3461] text-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center justify-center flex-1 group cursor-default"
            >
              <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                <Truck size={48} className="mb-4 text-orange-400" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Reliable Moves</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Every relocation is handled with precision, ensuring complete safety of your belongings.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-[#F9A826] text-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center justify-center flex-1 group cursor-default"
            >
              <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                <Clock size={48} className="mb-4 text-[#3B3461]" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Timely Delivery</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                We value your time — on-time pickup and delivery is our promise.
              </p>
            </motion.div>
          </div>

          {/* Center Column - Image with Hover Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 h-[500px] lg:h-auto overflow-hidden rounded-2xl shadow-2xl group"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="https://tse1.mm.bing.net/th/id/OIP.uWjHENQn0Y1vSMgesyVcTwAAAA?w=444&h=595&rs=1&pid=ImgDetMain&o=7&rm=30" 
              alt="Our Team" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right Column - Content & More Features */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500"
            >
              <h2 className="text-4xl font-bold mb-6">
                WHO <span className="text-[#F9A826]">WE ARE?</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At <span className="text-[#F9A826] font-bold text-xl">Star world packer</span>, we go beyond shifting goods — we move your trust, comfort, and memories. Since our inception, we've built a reputation for delivering stress-free relocations across India with a strong focus on <span className="font-bold">safety</span>, <span className="text-[#F9A826] font-bold text-xl">reliability</span>, and <span className="font-bold">customer satisfaction</span>.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 flex-grow">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#3B3461] text-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center justify-center cursor-default"
              >
                <Calendar size={40} className="mb-3 text-orange-400" />
                <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">Flexible Scheduling</h3>
                <p className="text-[10px] text-white/70">We adapt to your schedule — weekends, holidays, or evenings.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#F9A826] text-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center justify-center cursor-default"
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
