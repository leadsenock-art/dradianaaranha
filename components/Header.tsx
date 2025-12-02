import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { NAV_ITEMS, SITE_NAME, CONTACT_INFO } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer transition-transform hover:scale-105 duration-300" onClick={() => window.scrollTo(0,0)}>
             <img 
               src="https://i.imgur.com/kEgd02E.png" 
               alt={SITE_NAME} 
               className="h-10 sm:h-12 w-auto object-contain" 
             />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-primary-600 transition-colors group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`https://instagram.com/${CONTACT_INFO.instagram}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary-600 transition-colors transform hover:rotate-6 duration-300"
            >
              <Instagram size={20} />
            </a>
            <Button variant="primary" className="!px-6 !py-2 !text-xs" onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`)}>
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 p-2 focus:outline-none transition-transform duration-300 active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-lg font-medium text-gray-800 hover:text-primary-600 py-2 border-l-4 border-transparent hover:border-primary-600 pl-4 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-6 border-t border-gray-100 mt-4">
            <Button fullWidth onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`)}>
              Agendar Consulta
            </Button>
          </div>
          <div className="flex justify-center space-x-8 pt-4 text-gray-400">
              <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} className="hover:text-primary-600 transition-colors"><Instagram size={24} /></a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary-600 transition-colors"><Phone size={24} /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;