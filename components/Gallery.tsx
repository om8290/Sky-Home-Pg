import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50" id="gallery">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
          Glimpse of Sky homes PG
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl shadow-md group ${index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'}`}
            >
              <img 
                src={src} 
                alt={`Gallery Image ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 min-h-[250px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;