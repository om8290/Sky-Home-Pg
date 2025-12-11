import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { CONTACT_INFO, PG_NAME } from '../constants';
import { NEWIMAGE } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer 
  className="bg-gradient-to-t from-black/90 via-neutral-900/70 to-neutral-800/50 text-white py-16" 
  id="contact"
>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-brand-800 pb-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Interested?</h2>
            <p className="text-brand-200 text-lg">Contact us today to book your visit.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <a 
              href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`}
              className="flex-1 sm:flex-none text-center bg-white text-brand-900 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg"
             >
               Call: {CONTACT_INFO.phone1}
             </a>
             <a 
              href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, '')}`}
              className="flex-1 sm:flex-none text-center bg-brand-800 border border-brand-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-colors"
             >
               Call: {CONTACT_INFO.phone2}
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contact Details</h3>
            <div className="space-y-4">
               <div className="flex items-start gap-4 text-brand-100">
                  <MapPin className="flex-shrink-0 mt-1" size={20} />
                  <p>{CONTACT_INFO.address}</p>
               </div>
               <div className="flex items-center gap-4 text-brand-100">
                  <Phone className="flex-shrink-0" size={20} />
                  <p>{CONTACT_INFO.phone1}, {CONTACT_INFO.phone2}</p>
               </div>
               
            </div>
          </div>
          
          <div className="space-y-6">
             <h3 className="text-xl font-semibold text-white">Find Us</h3>
             <a 
               href={CONTACT_INFO.mapLink} 
               target="_blank" 
               rel="noopener noreferrer"
               className="block w-full h-48 bg-brand-800 rounded-xl overflow-hidden relative group"
             >
               <img 
                 src={NEWIMAGE}
                 alt="Map Location" 
                 className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 group-hover:bg-white/30 transition-all">
                    <MapPin size={16} /> Open Google Maps
                  </span>
               </div>
             </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-800 text-center text-brand-400 text-sm">
          &copy; {new Date().getFullYear()} {PG_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;