import React from 'react';
import { SPECIALTIES } from '../constants';

const Specialties: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal-on-scroll">
          <span className="text-primary-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Excelência Clínica</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-secondary-900">
            Especialidades & Tratamentos
          </h2>
          <div className="h-0.5 w-24 bg-primary-300 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SPECIALTIES.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-glass hover:bg-white transition-all duration-500 border border-transparent hover:border-primary-100 reveal-on-scroll"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl"></div>
                
                <div className="w-12 h-12 flex items-center justify-center mb-6 text-primary-500 group-hover:text-primary-700 group-hover:scale-110 transition-all duration-300">
                  <Icon strokeWidth={1.5} size={32} />
                </div>
                
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {spec.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600">
                  {spec.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialties;