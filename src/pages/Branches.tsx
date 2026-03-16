import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Navigation, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext';
import { branches } from '../data/branches';

const Branches = () => {
  const { openQuoteModal } = useQuote();
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-primary py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Branches</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto px-4">
          We are present in multiple cities to provide you with the best relocation services.
        </p>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {branches.map((branch, i) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 grid lg:grid-cols-2 group cursor-pointer hover:shadow-secondary/10 transition-all duration-500"
                onClick={() => navigate(`/branches/${branch.id}`)}
              >
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
                  
                  <div className="flex items-center gap-4 mb-10 relative z-10">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="bg-secondary text-white p-4 rounded-2xl shadow-lg shadow-secondary/20"
                    >
                      <Navigation size={28} />
                    </motion.div>
                    <div>
                      <h2 className="text-4xl font-extrabold text-primary group-hover:text-secondary transition-colors duration-300">
                        <Link to={`/branches/${branch.id}`} onClick={(e) => e.stopPropagation()}>{branch.city}</Link>
                      </h2>
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-secondary rounded-full" />
                        <p className="text-secondary font-bold uppercase tracking-widest text-xs">{branch.state}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 relative z-10">
                    <motion.div whileHover={{ x: 5 }} className="flex gap-5">
                      <div className="bg-slate-50 p-4 rounded-2xl h-fit text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <MapPin size={22} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1">Main Office</h4>
                        <p className="text-slate-600 leading-relaxed">{branch.address}</p>
                      </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-8">
                      <motion.div whileHover={{ x: 5 }} className="flex gap-5">
                        <div className="bg-slate-50 p-4 rounded-2xl h-fit text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Phone size={22} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1">Phone</h4>
                          <p className="text-slate-600 font-medium">{branch.phone}</p>
                        </div>
                      </motion.div>

                      <motion.div whileHover={{ x: 5 }} className="flex gap-5">
                        <div className="bg-slate-50 p-4 rounded-2xl h-fit text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Mail size={22} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1">Email</h4>
                          <p className="text-slate-600 font-medium truncate max-w-[150px]">{branch.email}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="mt-12 flex flex-wrap gap-6 items-center relative z-10">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openQuoteModal(branch.city);
                      }}
                      className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl"
                    >
                      Get Free Quote
                    </motion.button>
                    <Link 
                        to={`/branches/${branch.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-all group/link"
                      >
                      Explore Branch <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="h-[450px] lg:h-auto min-h-[450px] relative overflow-hidden">
                  <iframe
                    src={branch.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${branch.city} Branch`}
                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                  <div className="absolute inset-0 pointer-events-none bg-primary/5 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;
