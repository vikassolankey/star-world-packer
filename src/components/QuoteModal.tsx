import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export const QuoteModal = () => {
  const { isQuoteModalOpen, closeQuoteModal, selectedCity } = useQuote();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Quote request submitted successfully!');
    closeQuoteModal();
  };

  return (
    <AnimatePresence>
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuoteModal}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left Side - Info */}
            <div className="bg-primary p-8 md:p-12 text-white md:w-2/5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get a Free Quote</h2>
                <p className="text-white/80 mb-8">
                  {selectedCity 
                    ? `Requesting a quote for ${selectedCity}. Our experts will get back to you within 24 hours.`
                    : "Fill out the form and our experts will get back to you with a customized moving plan and quote."}
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-60">Call Us</p>
                      <p className="font-bold">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-60">Email Us</p>
                      <p className="font-bold">info@starworldpacker.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary p-2 rounded-lg">
                    <ShieldCheck size={20} />
                  </div>
                  <p className="text-sm font-medium">100% Safe & Secure Moving Guarantee</p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-8 md:p-12 md:w-3/5 relative">
              <button
                onClick={closeQuoteModal}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Moving From</label>
                    <input
                      type="text"
                      defaultValue={selectedCity}
                      placeholder="City Name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Moving To</label>
                    <input
                      type="text"
                      placeholder="Destination City"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Type of Shifting</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50"
                    required
                  >
                    <option value="">Select Shifting Type</option>
                    <option value="household">Household Shifting</option>
                    <option value="office">Office Shifting</option>
                    <option value="car">Car Transport</option>
                    <option value="bike">Bike Transport</option>
                    <option value="local">Local Shifting</option>
                    <option value="domestic">Domestic Relocation</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Additional Details</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us more about your move..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  Get My Free Quote
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
