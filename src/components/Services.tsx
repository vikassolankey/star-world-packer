import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, Truck, Bike, Package, ArrowUpCircle, Warehouse, MapPin, Globe } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-10 h-10" />,
    title: "Home Relocation",
    desc: "Safe and secure household shifting services with expert packing and handling.",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Office Relocation",
    desc: "Professional office shifting with minimal downtime and secure IT equipment moving.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Car Transport",
    desc: "Specialized car carriers for scratch-free transportation of your valuable vehicles.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Bike className="w-10 h-10" />,
    title: "Bike Transport",
    desc: "Secure bike packing and moving services across India with door-to-door delivery.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "Packing and Unpacking",
    desc: "High-quality packing materials and techniques to ensure zero damage during transit.",
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <ArrowUpCircle className="w-10 h-10" />,
    title: "Loading and Unloading",
    desc: "Trained staff for careful loading and unloading of your heavy and fragile items.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
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
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Interstate Shifting",
    desc: "Reliable domestic relocation services across all major cities in India.",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800"
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
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100 group overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl text-primary shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center text-primary font-bold cursor-pointer group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <ArrowUpCircle className="w-5 h-5 ml-1 rotate-90" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
