import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

const branches = [
  {
    city: "Haridwar",
    state: "Uttarakhand",
    address: "123, Shivalik Nagar, BHEL, Haridwar, Uttarakhand - 249403",
    phone: "+91 98765 43210",
    email: "haridwar@starworldpacker.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37709964824!2d78.1007321!3d29.9526654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee72c9%3A0xbc26c9d1b068899a!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1710400000000!5m2!1sen!2sin"
  },
  {
    city: "Rishikesh",
    state: "Uttarakhand",
    address: "Near Laxman Jhula, Rishikesh, Uttarakhand - 249201",
    phone: "+91 98765 43211",
    email: "rishikesh@starworldpacker.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.129215017267!2d78.3110344!3d30.124844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909163653c9734f%3A0x513e12f69e8d2d2a!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1710400000001!5m2!1sen!2sin"
  },
  {
    city: "Jhansi",
    state: "Uttar Pradesh",
    address: "45, Civil Lines, Near Railway Station, Jhansi, Uttar Pradesh - 284001",
    phone: "+91 98765 43212",
    email: "jhansi@starworldpacker.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57656.38134375!2d78.5333!3d25.4484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3977712e00000001%3A0x6960000000000000!2sJhansi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710400000002!5m2!1sen!2sin"
  },
  {
    city: "Delhi",
    state: "NCR",
    address: "Plot No. 12, Okhla Phase III, New Delhi - 110020",
    phone: "+91 98765 43213",
    email: "delhi@starworldpacker.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392319277!2d77.0688975!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71873292b1!2sDelhi!5e0!3m2!1sen!2sin!4v1710400000003!5m2!1sen!2sin"
  },
  {
    city: "Kotdwar",
    state: "Uttarakhand",
    address: "Main Market, Kotdwar, Pauri Garhwal, Uttarakhand - 246149",
    phone: "+91 98765 43214",
    email: "kotdwar@starworldpacker.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.23456789!2d78.5234567!3d29.7456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909796853c9734f%3A0x513e12f69e8d2d2a!2sKotdwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1710400000004!5m2!1sen!2sin"
  },
  {
    city: "Gwalior",
    state: "Madhya Pradesh",
    address: "City Centre, Gwalior, Madhya Pradesh - 474011",
    phone: "+91 98765 43215",
    email: "gwalior@starworldpacker.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57272.3456789!2d78.1723456!3d26.2123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6d579555555%3A0x6764551111111111!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1710400000005!5m2!1sen!2sin"
  }
];

const Branches = () => {
  const { openQuoteModal } = useQuote();
  return (
    <div className="pt-10">
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
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 grid lg:grid-cols-2"
              >
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-secondary/10 text-secondary p-3 rounded-2xl">
                      <Navigation size={24} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-primary">{branch.city}</h2>
                      <p className="text-secondary font-semibold">{branch.state}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-slate-100 p-3 rounded-xl h-fit text-primary">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Address</h4>
                        <p className="text-slate-600">{branch.address}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-slate-100 p-3 rounded-xl h-fit text-primary">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Phone</h4>
                        <p className="text-slate-600">{branch.phone}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-slate-100 p-3 rounded-xl h-fit text-primary">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Email</h4>
                        <p className="text-slate-600">{branch.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <button 
                      onClick={() => openQuoteModal(branch.city)}
                      className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg"
                    >
                      Get a Quote for {branch.city}
                    </button>
                  </div>
                </div>

                <div className="h-[400px] lg:h-auto min-h-[400px]">
                  <iframe
                    src={branch.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${branch.city}`}
                  ></iframe>
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
