import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, Truck, Bike, Package, ArrowUpCircle, Warehouse, MapPin, Globe } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-10 h-10" />,
    title: "Home Relocation",
    desc: "Safe and secure household shifting services with expert packing and handling.",
    image: "https://th.bing.com/th/id/OIP.Y37lRB5GdDZmSfIWbIYndAHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Office Relocation",
    desc: "Professional office shifting with minimal downtime and secure IT equipment moving.",
    image: "https://readytomoves.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-08-13-at-10.23.34_1e6f6f2f.jpg"
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Car Transport",
    desc: "Specialized car carriers for scratch-free transportation of your valuable vehicles.",
    image: "https://as1.ftcdn.net/v2/jpg/09/59/54/04/1000_F_959540419_Kc3xDwShraeI2OlMleApvfzvSiQz6Wsf.jpg"
  },
  {
    icon: <Bike className="w-10 h-10" />,
    title: "Bike Transport",
    desc: "Secure bike packing and moving services across India with door-to-door delivery.",
    image: "https://static.wixstatic.com/media/0157e2_84b418b5b4b44f4293bef05fce420ccc~mv2.png/v1/fill/w_1000,h_666,al_c,q_90,usm_0.66_1.00_0.01/0157e2_84b418b5b4b44f4293bef05fce420ccc~mv2.png"
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "Packing and Unpacking",
    desc: "High-quality packing materials and techniques to ensure zero damage during transit.",
    image: "https://wallpaperaccess.com/full/5671123.jpg"
  },
  {
    icon: <ArrowUpCircle className="w-10 h-10" />,
    title: "Loading and Unloading",
    desc: "Trained staff for careful loading and unloading of your heavy and fragile items.",
    image: "https://tse4.mm.bing.net/th/id/OIP.B5zOKFn3UsUFaqo6UMJbHwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    icon: <Warehouse className="w-10 h-10" />,
    title: "Warehouse Storage",
    desc: "Safe and climate-controlled storage facilities for short and long-term needs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <MapPin className="w-10 h-10" />,
    title: "Local Shifting",
    desc: "Quick and efficient local moving services within Haridwar and nearby areas.",
    image: "https://crowdpackers.com/wp-content/uploads/elementor/thumbs/Local-Shifting-r7jbvjxaar6479trsve2heva4bjgsy79wloj86wbds.jpg"
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Interstate Shifting",
    desc: "Reliable domestic relocation services across all major cities in India.",
    image: "https://tse1.mm.bing.net/th/id/OIP.Nn8Sz3wrgA9HfRNleQA-tQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-4"
          >
            Our Professional Services
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6"
          />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We provide a wide range of logistics and relocation services tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -12,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              className="bg-white rounded-[2rem] shadow-sm border border-slate-100 group overflow-hidden flex flex-col"
            >
              {/* Service Image with Zoom Effect */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl text-primary shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
              </div>

              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300 cursor-pointer">
                  Learn More 
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
