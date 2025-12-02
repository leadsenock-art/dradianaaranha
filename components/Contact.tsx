import React from 'react';
import { CONTACT_INFO, MAP_EMBED_URL } from '../constants';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-0 bg-secondary-900 relative">
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* Info Column */}
        <div className="w-full lg:w-1/3 bg-secondary-900 text-white p-12 lg:p-20 flex flex-col justify-center relative z-10">
          <div className="reveal-on-scroll">
            <span className="text-primary-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Fale Conosco</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium mb-10 leading-tight">
              Agende sua <br/> <span className="text-primary-400">Avaliação</span>
            </h2>

            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="p-0 text-primary-500 mr-6 mt-1 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Endereço</h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="p-0 text-primary-500 mr-6 mt-1 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Contato</h4>
                  <p className="text-gray-400 text-sm block mb-1 hover:text-white transition-colors cursor-pointer">{CONTACT_INFO.phone}</p>
                  <p className="text-gray-400 text-sm block hover:text-white transition-colors cursor-pointer">{CONTACT_INFO.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="p-0 text-primary-500 mr-6 mt-1 group-hover:text-white transition-colors">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Horário</h4>
                  <p className="text-gray-400 text-sm">Seg - Sex: 08h às 19h</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Button fullWidth onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`)}>
                Iniciar Conversa <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Map Column */}
        <div className="w-full lg:w-2/3 h-[400px] lg:h-auto min-h-[500px] relative">
          <div className="absolute inset-0 bg-gray-900/20 pointer-events-none z-10"></div>
          <iframe 
            src={MAP_EMBED_URL} 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Clínica"
            className="w-full h-full"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;