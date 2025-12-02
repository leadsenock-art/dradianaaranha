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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <img 
               src="https://i.imgur.com/kEgd02E.png" 
               alt={SITE_NAME} 
               className="h-10 sm:h-12 md:h-16 w-auto object-contain" 
             />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
              <Instagram size={20} />
            </a>
            <Button variant="primary" className="!px-6 !py-2 !text-sm" onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`)}>
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 px-1">
              <Button fullWidth onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`)}>
                Agendar Consulta
              </Button>
            </div>
            <div className="flex justify-center space-x-8 pt-8 pb-4 text-gray-400">
               <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} className="hover:text-pink-600"><Instagram size={28} /></a>
               <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary-600"><Phone size={28} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;