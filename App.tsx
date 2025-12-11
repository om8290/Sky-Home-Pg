import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <Hero />
      <Details />
      <Gallery />
      <Contact />
      
      {/* 
        Sticky Mobile Contact Bar 
        Visible only on small screens for easy access to calling
      */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 grid grid-cols-2 gap-3 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href="tel:+919897012345" 
          className="flex items-center justify-center bg-brand-600 text-white font-bold py-2.5 rounded-lg text-sm"
        >
          Call #1
        </a>
        <a 
          href="tel:+919897067890" 
          className="flex items-center justify-center bg-brand-800 text-white font-bold py-2.5 rounded-lg text-sm"
        >
          Call #2
        </a>
      </div>

      {/* 
        Chat Widget is positioned above the sticky bar on mobile via CSS in component
      */}
      <ChatWidget />
    </main>
  );
};

export default App;