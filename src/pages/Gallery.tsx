import React from 'react';
import { Gallery as GalleryComponent } from '../components/Gallery';

const GalleryPage = () => {
  return (
    <div>
      <div className="bg-primary py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Gallery</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto px-4">
          Visual glimpses of our professional moving and packing operations.
        </p>
      </div>
      <GalleryComponent />
    </div>
  );
};

export default GalleryPage;
