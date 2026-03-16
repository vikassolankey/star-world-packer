import React from 'react';
import { motion } from 'motion/react';
import { Award, FileText, Eye, Download, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 'udyam',
      title: 'Udyam Registration Certificate',
      issuer: 'Government of India',
      type: 'MSME Registration',
      description: 'Official registration for Micro, Small, and Medium Enterprises.',
      fileUrl: '/certificates/udyam-certificate.pdf', // Placeholder path
      imageUrl: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=800' // Placeholder image
    },
    {
      id: 'gst',
      title: 'GST Registration Certificate',
      issuer: 'Goods and Services Tax Network',
      type: 'Tax Registration',
      description: 'Official Goods and Services Tax registration certificate.',
      fileUrl: '/certificates/gst-certificate.pdf', // Placeholder path
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800' // Placeholder image
    }
  ];

  const handleDownload = (url: string, title: string) => {
    // In a real app, this would trigger a download
    // For now, we'll just open it in a new tab
    window.open(url, '_blank');
  };

  const handleView = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="pb-20 bg-slate-50 min-h-screen">
      <div className="bg-primary py-20 text-white text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Certificates</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto px-4">
          We are a legally registered and authorized relocation company.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                <div className="absolute top-6 right-6 bg-white p-3 rounded-2xl shadow-lg text-primary">
                  <ShieldCheck size={32} />
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-secondary/10 text-secondary p-2 rounded-lg">
                    <Award size={20} />
                  </div>
                  <span className="text-sm font-bold text-secondary uppercase tracking-wider">{cert.type}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-primary mb-4">{cert.title}</h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
                  <button
                    onClick={() => handleView(cert.fileUrl)}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-primary px-6 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all shadow-md group/btn"
                  >
                    <Eye size={20} className="group-hover/btn:scale-110 transition-transform" />
                    View Certificate
                  </button>
                  <button
                    onClick={() => handleDownload(cert.fileUrl, cert.title)}
                    className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white px-6 py-4 rounded-2xl font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/20 group/btn"
                  >
                    <Download size={20} className="group-hover/btn:scale-110 transition-transform" />
                    Download PDF
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-primary/5 rounded-3xl border border-primary/10 text-center"
        >
          <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText size={32} />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4">Verification Note</h3>
          <p className="text-slate-600 max-w-3xl mx-auto">
            All our certificates are authentic and issued by the respective government authorities. 
            Customers can verify our credentials using the registration numbers mentioned on the certificates. 
            We maintain full transparency in our operations to ensure 100% trust and satisfaction.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;
