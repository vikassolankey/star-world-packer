import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, Users, BadgePercent, Clock, Heart, Award } from 'lucide-react';

const features = [
  { icon: <ShieldCheck />, title: "Safe Packing", desc: "Multi-layer protective packing for all items." },
  { icon: <Users />, title: "Experienced Staff", desc: "Trained professionals with years of expertise." },
  { icon: <BadgePercent />, title: "Affordable Pricing", desc: "Competitive rates with no hidden charges." },
  { icon: <Clock />, title: "On-Time Delivery", desc: "Strict adherence to schedules and timelines." },
  { icon: <Award />, title: "Insurance Coverage", desc: "Full transit insurance for complete peace of mind." },
  { icon: <Heart />, title: "24/7 Support", desc: "Dedicated customer service for all your queries." },
];

const stats = [
  { value: 5000, label: "Happy Customers", suffix: "+" },
  { value: 120, label: "Cities Covered", suffix: "+" },
  { value: 10, label: "Years Experience", suffix: "+" },
  { value: 100, label: "Satisfaction", suffix: "%" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-primary mb-6"
            >
              Why Choose <span className="text-secondary">Us?</span>
            </motion.h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We are Star world packer, the most trusted packers and movers in Haridwar, committed to providing top-notch relocation services. Our focus is on safety, efficiency, and customer satisfaction.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 group cursor-default"
                >
                  <div className="bg-secondary/10 text-secondary p-3 rounded-xl h-fit group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <h3 className="text-3xl font-bold mb-12 text-center relative z-10">Our Achievements</h3>
            
            <div className="grid grid-cols-2 gap-y-12 gap-x-8 relative z-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2 drop-shadow-lg">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/80 font-medium uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
