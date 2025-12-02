import React from 'react';
import { CONTACT_INFO, MAP_EMBED_URL } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Info Column */}
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-900 mb-6 md:mb-8">
              Entre em Contato
            </h2>
            <p className="text-gray-600 mb-8 md:mb-10 text-base md:text-lg">
              Estamos prontos para atender você com exclusividade. Agende sua avaliação e descubra o poder do seu melhor sorriso.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Localização</h4>
                  <p className="text-gray-600 text-sm md:text-base">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Telefones</h4>
                  <p className="text-gray-600 block text-sm md:text-base">{CONTACT_INFO.phone}</p>
                  <p className="text-gray-600 block text-sm md:text-base">{CONTACT_INFO.whatsapp} (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm md:text-base">{CONTACT_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Horário de Atendimento</h4>
                  <p className="text-gray-600 text-sm md:text-base">Segunda a Sexta: 08h às 19h</p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10">
              <Button fullWidth onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`)}>
                Agendar via WhatsApp
              </Button>
            </div>
          </div>

          {/* Map Column */}
          <div className="order-1 lg:order-2 h-80 md:h-[500px] w-full bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <iframe 
              src={MAP_EMBED_URL} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;