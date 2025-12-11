import React from 'react';
import { MapPin } from 'lucide-react';
import { AMENITIES, CONTACT_INFO } from '../constants';
import { NEWIMAGE } from '../constants';

const Details: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="details">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Us?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experience a comfortable and focused environment designed specifically for students of SRM Institute.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {AMENITIES.map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-brand-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-500 mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Location Card */}
        <div className="bg-brand-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-inner">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold text-brand-900">Prime Location</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="text-brand-600 mt-1 flex-shrink-0" />
                <p className="text-brand-800 text-lg">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <p className="text-brand-700">
                Located directly opposite Aakash Vihar, minutes away from your classes.
              </p>
            </div>
            <a 
              href={CONTACT_INFO.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-800 transition-colors mt-4"
            >
              View on Google Maps &rarr;
            </a>
          </div>
          
          <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-md relative group cursor-pointer">
             <a href={CONTACT_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img 
                  src = {NEWIMAGE} 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-bold shadow-md">Open Map</span>
                </div>
             </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Details;