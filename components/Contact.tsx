import React from 'react';
import { CONTACT_INFO, MAP_EMBED_URL } from '../constants';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="bg-secondary-900 relative">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Info Column */}
        <div className="w-full lg:w-1/3 bg-secondary-900 text-white p-10 md:p-16 flex flex-col justify-center relative z-10 order-2 lg:order-1">
          <div className="reveal-on-scroll">
            <span className="text-primary-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Fale Conosco</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-8">
              Agende sua <span className="text-primary-400">Avaliação</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-primary-500 mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-white mb-1 text-xs uppercase tracking-wider">Endereço</h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-primary-500 mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-white mb-1 text-xs uppercase tracking-wider">Contato</h4>
                  <p className="text-gray-400 text-sm block mb-1">{CONTACT_INFO.phone}</p>
                  <p className="text-gray-400 text-sm block">{CONTACT_INFO.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-primary-500 mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-white mb-1 text-xs uppercase tracking-wider">Horário</h4>
                  <p className="text-gray-400 text-sm">Seg - Sex: 08h às 19h</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button fullWidth onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`)}>
                Iniciar Conversa <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Map Column */}
        <div className="w-full lg:w-2/3 h-80 lg:h-auto relative order-1 lg:order-2">
          <iframe 
            src={MAP_EMBED_URL} 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) brightness(0.9)' }} 
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