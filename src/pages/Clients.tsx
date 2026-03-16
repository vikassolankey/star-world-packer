import React from 'react';
import { Testimonials } from '../components/Testimonials';

const ClientsPage = () => {
  return (
    <div>
      <div className="bg-primary py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Clients</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto px-4">
          Trusted by thousands of happy families and businesses.
        </p>
      </div>
      <Testimonials />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Some of Our Corporate Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Placeholder logos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="p-4 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-400">
                LOGO {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;
