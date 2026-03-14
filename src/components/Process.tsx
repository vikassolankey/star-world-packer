import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Search, PackageCheck, Truck, PackageOpen } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList />,
    title: "Request a Quote",
    desc: "Fill our quick form or call us to get a free, no-obligation estimate for your move."
  },
  {
    icon: <Search />,
    title: "Pre-Move Survey",
    desc: "Our experts visit your location to assess the items and plan the logistics perfectly."
  },
  {
    icon: <PackageCheck />,
    title: "Packing and Loading",
    desc: "We use high-quality materials to pack your belongings and load them safely onto trucks."
  },
  {
    icon: <Truck />,
    title: "Safe Transportation",
    desc: "Your goods are transported via our specialized vehicles with real-time tracking."
  },
  {
    icon: <PackageOpen />,
    title: "Delivery and Unpacking",
    desc: "We deliver items to your new destination and help with unpacking and setting up."
  }
];

export const Process = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our Working Process</h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We follow a systematic approach to ensure a hassle-free relocation experience for our clients.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-primary/10 -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center text-primary shadow-xl border-4 border-primary/5 mb-6 relative group hover:bg-primary hover:text-white transition-all duration-300">
                  <div className="absolute -top-2 -right-2 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                  {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
