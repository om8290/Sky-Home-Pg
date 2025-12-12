import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { PG_NAME, CONTACT_INFO } from '../constants';
import { LOGOIMAGE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Initialize on mount
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Amenities', href: '#details' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // Helper to close menu when clicking a link
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center">
        {/* Logo */}
   <a 
  href="#"
  className="flex items-center gap-3 transition-colors"
>
  <img 
    src={LOGOIMAGE}   // <-- replace with your actual file path
    alt="PG Logo"
    className={` h-20 w-auto md:h-20 object-contain transition-all ${
      isScrolled || isOpen ? 'brightness-100' : 'brightness-95'
    }`}
  />
</a>



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-700 hover:text-brand-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:scale-105 ${
              isScrolled 
                ? 'bg-brand-600 text-white hover:bg-brand-700' 
                : 'bg-white text-brand-900 hover:bg-brand-50'
            }`}
          >
            Call Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled || isOpen ? 'text-slate-800' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl px-4 py-6 flex flex-col gap-2 animate-in slide-in-from-top-2">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={handleLinkClick}
              className="text-slate-700 font-medium py-3 px-4 hover:bg-brand-50 hover:text-brand-700 rounded-lg text-center"
            >
              {link.name}
            </a>
          ))}
           <a 
            href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`}
            onClick={handleLinkClick}
            className="flex items-center justify-center gap-2 bg-brand-600 text-white font-bold py-3.5 rounded-xl mt-4 shadow-md active:scale-95 transition-transform"
          >
            <Phone size={18} /> Call {CONTACT_INFO.phone1}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;