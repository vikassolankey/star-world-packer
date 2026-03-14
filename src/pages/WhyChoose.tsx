import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, BadgePercent, Users, Heart, Award, CheckCircle2, Truck, Package, Headphones } from 'lucide-react';

const reasons = [
  {
    title: "100% Safe & Secure",
    desc: "We use premium quality packing materials like bubble wraps, corrugated sheets, and heavy-duty boxes to ensure your belongings are protected from any damage during transit.",
    icon: <ShieldCheck size={40} />,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=800",
    color: "bg-blue-50"
  },
  {
    title: "On-Time Delivery",
    desc: "Time is money, and we value both. Our logistics team ensures that your goods reach their destination exactly when promised, with real-time tracking updates.",
    icon: <Clock size={40} />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    color: "bg-orange-50"
  },
  {
    title: "Affordable Pricing",
    desc: "We offer the most competitive rates in the industry with zero hidden charges. Our transparent pricing model ensures you get the best value for your hard-earned money.",
    icon: <BadgePercent size={40} />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    color: "bg-green-50"
  },
  {
    title: "Experienced Professionals",
    desc: "Our team consists of highly trained experts who have years of experience in handling delicate items, heavy furniture, and complex office equipment.",
    icon: <Users size={40} />,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    color: "bg-purple-50"
  },
  {
    title: "Transit Insurance",
    desc: "To give you complete peace of mind, we provide comprehensive transit insurance. In the rare case of an accident, your financial interests are fully protected.",
    icon: <Award size={40} />,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    color: "bg-red-50"
  },
  {
    title: "24/7 Customer Support",
    desc: "Our dedicated support team is available around the clock to answer your queries and provide updates on your relocation status.",
    icon: <Headphones size={40} />,
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800",
    color: "bg-teal-50"
  }
];

const WhyChoose = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Why Choose <span className="text-secondary">Star world packer?</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Discover why thousands of families and businesses trust us for their relocation needs. We don't just move boxes; we move lives.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className={`${reason.color} text-primary p-4 rounded-2xl w-fit mb-6 shadow-sm`}>
                    {reason.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-6">{reason.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {reason.desc}
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="text-secondary" size={20} />
                      Professional handling of all items
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="text-secondary" size={20} />
                      Quality packing materials used
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="text-secondary" size={20} />
                      Zero damage guarantee
                    </li>
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-secondary/10 rounded-[2rem] blur-xl group-hover:bg-secondary/20 transition-all duration-500" />
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
                      <img 
                        src={reason.image} 
                        alt={reason.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Our Commitment to Excellence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <Truck className="text-secondary mx-auto mb-4" size={48} />
              <h4 className="font-bold text-primary">Modern Fleet</h4>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <Package className="text-secondary mx-auto mb-4" size={48} />
              <h4 className="font-bold text-primary">Secure Packing</h4>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <ShieldCheck className="text-secondary mx-auto mb-4" size={48} />
              <h4 className="font-bold text-primary">Fully Insured</h4>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <Users className="text-secondary mx-auto mb-4" size={48} />
              <h4 className="font-bold text-primary">Expert Team</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready for a Stress-Free Move?</h2>
          <p className="text-xl text-white/80 mb-10">
            Join thousands of satisfied customers who chose Star world packer for their relocation.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition-all shadow-xl hover:scale-105">
              Get a Free Quote
            </button>
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
