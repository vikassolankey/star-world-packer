import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { branches } from '../data/branches';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-primary mb-6"
            >
              Get In <span className="text-secondary">Touch</span>
            </motion.h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Have questions about your upcoming move? Our experts are here to help you plan every detail. Reach out to us for a free consultation.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-primary/5 text-primary p-4 rounded-2xl h-fit">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Our Location</h4>
                  <p className="text-slate-500">123, Shivalik Nagar, BHEL, Haridwar, Uttarakhand - 249403</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-primary/5 text-primary p-4 rounded-2xl h-fit">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Phone Number</h4>
                  <p className="text-slate-500">+91 91206 22066</p>
                  <p className="text-slate-500">+91 94500 38615</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-primary/5 text-primary p-4 rounded-2xl h-fit">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Email Address</h4>
                  <p className="text-slate-500">Starworldpackers1988@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-primary/5 text-primary p-4 rounded-2xl h-fit">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">Working Hours</h4>
                  <p className="text-slate-500">Mon - Sat: 09:00 AM - 08:00 PM</p>
                  <p className="text-slate-500">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-primary mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Type of Shifting</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                    required
                  >
                    <option value="">Select Shifting Type</option>
                    <option value="household">Household Shifting</option>
                    <option value="office">Office Shifting</option>
                    <option value="car">Car Transport</option>
                    <option value="bike">Bike Transport</option>
                    <option value="local">Local Shifting</option>
                    <option value="domestic">Domestic Relocation</option>
                    <option value="storage">Storage & Warehousing</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Branches Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our <span className="text-secondary">Branches</span></h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We are expanding our reach to serve you better. Visit us at any of our branch locations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {branches.map((branch, i) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{branch.city}</h3>
                <div className="space-y-3 mb-8">
                  <p className="text-slate-600 flex gap-3 text-sm">
                    <MapPin size={18} className="text-secondary shrink-0 mt-1" />
                    <span>{branch.address}</span>
                  </p>
                  <p className="text-slate-600 flex gap-3 text-sm">
                    <Phone size={18} className="text-secondary shrink-0 mt-1" />
                    <span>{branch.phone}</span>
                  </p>
                  <p className="text-slate-600 flex gap-3 text-sm">
                    <Mail size={18} className="text-secondary shrink-0 mt-1" />
                    <span>{branch.email}</span>
                  </p>
                </div>
                <Link 
                  to={`/branches/${branch.id}`}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
                >
                  View Details <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Google Map Placeholder */}
        <div className="mt-20 h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative group">
          <iframe
            src={branches[0].mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Star world Packers and Movers Haridwar Location"
          ></iframe>
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none" />
          <a 
            href={branches[0].externalMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-white text-primary px-6 py-3 rounded-xl font-bold shadow-xl flex items-center gap-2 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 z-20"
          >
            <MapPin size={20} /> View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};
