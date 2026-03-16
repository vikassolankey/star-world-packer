import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Truck, Navigation } from 'lucide-react';

const fleetFeatures = [
  {
    icon: <Navigation className="text-secondary" size={24} />,
    title: "GPS Tracking",
    description: "Real-time tracking of your shipment for complete transparency and peace of mind."
  },
  {
    icon: <Truck className="text-secondary" size={24} />,
    title: "Covered Trucks",
    description: "All-weather protection with fully enclosed containers to keep your belongings clean and dry."
  },
  {
    icon: <ShieldCheck className="text-secondary" size={24} />,
    title: "Safe Transport",
    description: "Specially designed shock-absorbent flooring and secure strapping systems in every vehicle."
  }
];

const fleetImages = [
  {
    url: "https://img.freepik.com/premium-photo/gps-tracking-moving-truck-with-container-map_955712-17877.jpg",
    alt: "Modern Fleet Truck"
  },
  {
    url: "https://s-media-cache-ak0.pinimg.com/736x/74/f1/39/74f13952d43403cdd9d4bb9791499437--semi-trucks-big-trucks.jpg",
    alt: "Logistics Fleet"
  },
  {
    url: "https://5.imimg.com/data5/SELLER/Default/2023/4/299254707/MC/WO/BO/58510088/loading-unloading-services-500x500.jpg",
    alt: "Transport Vehicle"
  }
];

export const FleetSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold uppercase tracking-wider mb-6">
              <Truck size={16} />
              Our Fleet
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              “Our Modern <span className="text-secondary">Transport Fleet”</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We maintain a state-of-the-art fleet of vehicles designed specifically for safe and efficient household and commercial relocation. Our trucks are the backbone of our promise for timely delivery.
            </p>

            <div className="space-y-8">
              {fleetFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300 h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-2 rounded-3xl overflow-hidden shadow-xl aspect-video"
              >
                <img
                  src={fleetImages[0].url}
                  alt={fleetImages[0].alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden shadow-lg aspect-square"
              >
                <img
                  src={fleetImages[1].url}
                  alt={fleetImages[1].alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl overflow-hidden shadow-lg aspect-square"
              >
                <img
                  src={fleetImages[2].url}
                  alt={fleetImages[2].alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -10, scale: 0.5 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin size={32} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider opacity-80">Live Tracking</p>
                  <p className="text-xl font-bold">Available 24/7</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
