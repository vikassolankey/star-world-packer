import React from 'react';
import { Services as ServicesComponent } from '../components/Services';
import { Process } from '../components/Process';

const ServicesPage = () => {
  return (
    <div className="pt-10">
      <div className="bg-primary py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto px-4">
          Comprehensive relocation solutions for every need.
        </p>
      </div>
      <ServicesComponent />
      <Process />
    </div>
  );
};

export default ServicesPage;
