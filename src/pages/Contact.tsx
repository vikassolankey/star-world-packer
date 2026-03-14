import React from 'react';
import { Contact as ContactComponent } from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="pt-10">
      <div className="bg-primary py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto px-4">
          Get a free quote or ask any questions about your relocation.
        </p>
      </div>
      <ContactComponent />
    </div>
  );
};

export default ContactPage;
