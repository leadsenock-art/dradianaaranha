import React from 'react';
import { SITE_NAME, CONTACT_INFO } from '../constants';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold mb-2">{SITE_NAME}</h3>
          <p className="text-gray-400 text-sm">{CONTACT_INFO.cro}</p>
        </div>

        <div className="text-gray-400 text-sm text-center">
          &copy; {currentYear} {SITE_NAME}. Todos os direitos reservados.
        </div>

        <div className="flex space-x-4">
          <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
            <Instagram />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;