import React from 'react';
import { SITE_NAME, CONTACT_INFO } from '../constants';
import { Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-900 text-white py-16 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl font-medium mb-2 tracking-wide text-white">{SITE_NAME}</h3>
            <p className="text-primary-500 text-sm font-medium tracking-widest">{CONTACT_INFO.cro}</p>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href={`https://instagram.com/${CONTACT_INFO.instagram}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-secondary-900 transition-colors duration-300"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {currentYear} {SITE_NAME}. Todos os direitos reservados.</p>
          <div className="flex gap-6">
             <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</span>
             <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;