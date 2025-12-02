import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-secondary-900 mb-6">
            Histórias de Confiança
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            A satisfação de nossos pacientes é o reflexo do nosso compromisso com a excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-primary-50/30 p-10 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-500 reveal-on-scroll border border-transparent hover:border-primary-100" style={{ transitionDelay: `${index * 100}ms` }}>
              <Quote className="text-primary-300 fill-current mb-8" size={40} />
              
              <div className="mb-8 h-32 md:h-40 overflow-hidden">
                 <p className="text-gray-600 text-lg leading-relaxed font-light">"{t.text}"</p>
              </div>
              
              <div className="flex items-center pt-6 border-t border-primary-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-100 rounded-full mr-4 flex items-center justify-center text-primary-700 font-serif font-bold text-xl shadow-inner">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-serif">{t.name}</h4>
                  {t.role && <p className="text-xs uppercase tracking-wide text-primary-600 mt-1">{t.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;