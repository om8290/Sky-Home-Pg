import React from 'react';
import { MapPin, PhoneCall } from 'lucide-react';
import { PG_NAME, PG_TAGLINE, CONTACT_INFO } from '../constants';
import { HEROIMAGE } from '../constants';


const Hero: React.FC = () => {
  return (
   <section className="relative h-screen min-h-screen flex items-start md:items-center justify-center text-white overflow-hidden pt-32 md:pt-0">


      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
       <img 
  src={HEROIMAGE}
  alt="PG Building" 
  className="w-full h-full object-cover object-top md:object-center"
/>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-neutral-900/60 to-neutral-700/20"></div>

      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block px-3 py-1 bg-brand-500/80 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm mb-2">
          PREMIUM STUDENT ACCOMMODATION
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          {PG_NAME}
        </h1>
        <p className="text-lg md:text-xl text-brand-50 max-w-2xl mx-auto font-light">
          {PG_TAGLINE}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <a 
            href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`}
            className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-brand-500/30"
          >
            <PhoneCall size={20} />
            Call Now
          </a>
          <a 
            href={CONTACT_INFO.mapLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-full font-semibold transition-all"
          >
            <MapPin size={20} />
            Locate Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;