import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Package } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const pricingData = {
  local: [
    { service: '1 BHK', price: '₹3,000 - ₹7,000' },
    { service: '2 BHK', price: '₹4,500 - ₹9,000' },
    { service: '3 BHK', price: '₹6,000 - ₹12,000' },
    { service: 'Villa/4-5 BHK', price: '₹8,000 - ₹15,000' },
  ],
  domestic: [
    { distance: '100-300 km', price: '₹5,000 - ₹15,000' },
    { distance: '300-700 km', price: '₹8,000 - ₹22,000' },
    { distance: '700-1200 km', price: '₹12,000 - ₹30,000' },
    { distance: '1200+ km', price: '₹15,000 - ₹40,000+' },
  ],
  vehicle: [
    { type: 'Hatchback', price: '₹4,000 - ₹8,000' },
    { type: 'Sedan', price: '₹5,000 - ₹10,000' },
    { type: 'SUV', price: '₹6,000 - ₹12,000' },
    { type: 'Luxury Car', price: '₹8,000 - ₹18,000' },
  ],
};

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/80 backdrop-blur-md p-6 flex justify-between items-center border-b z-10">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Package className="text-secondary" />
                </motion.div>
                Standard Price Chart
              </h2>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                <X className="text-slate-500" />
              </button>
            </div>

            <div className="p-8 space-y-12">
              {/* Local Shifting */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <div className="w-2 h-8 bg-secondary rounded-full" />
                  Local Household Shifting
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="p-5 font-bold text-slate-700">Service Type</th>
                        <th className="p-5 font-bold text-slate-700">Estimated Charges</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {pricingData.local.map((item, i) => (
                        <motion.tr 
                          key={i}
                          whileHover={{ backgroundColor: "rgba(244, 196, 48, 0.05)" }}
                        >
                          <td className="p-5 font-medium text-slate-600">{item.service}</td>
                          <td className="p-5 font-bold text-secondary">{item.price}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Domestic Shifting */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <div className="w-2 h-8 bg-secondary rounded-full" />
                  Domestic Relocation (by Distance)
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="p-5 font-bold text-slate-700">Distance</th>
                        <th className="p-5 font-bold text-slate-700">Estimated Charges</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {pricingData.domestic.map((item, i) => (
                        <motion.tr 
                          key={i}
                          whileHover={{ backgroundColor: "rgba(244, 196, 48, 0.05)" }}
                        >
                          <td className="p-5 font-medium text-slate-600">{item.distance}</td>
                          <td className="p-5 font-bold text-secondary">{item.price}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Vehicle Transport */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <div className="w-2 h-8 bg-secondary rounded-full" />
                  Vehicle Transportation
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="p-5 font-bold text-slate-700">Vehicle Type</th>
                        <th className="p-5 font-bold text-slate-700">Estimated Charges</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {pricingData.vehicle.map((item, i) => (
                        <motion.tr 
                          key={i}
                          whileHover={{ backgroundColor: "rgba(244, 196, 48, 0.05)" }}
                        >
                          <td className="p-5 font-medium text-slate-600">{item.type}</td>
                          <td className="p-5 font-bold text-secondary">{item.price}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-blue-50 border border-blue-100 text-blue-800 p-8 rounded-2xl text-sm leading-relaxed"
              >
                <p className="font-bold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Important Disclaimer:
                </p>
                <p>Prices shown above are indicative starting rates. Final charges depend on actual volume of goods, quality of packing materials required, floor levels (lift availability), and specific handling needs. We recommend a <span className="font-bold underline">Free Pre-move Survey</span> for a guaranteed fixed quote.</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingModal;
