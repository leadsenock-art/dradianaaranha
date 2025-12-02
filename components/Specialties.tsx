import React from 'react';
import { SPECIALTIES } from '../constants';

const Specialties: React.FC = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Tratamentos</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-900 mt-2 mb-4">
            Especialidades
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SPECIALTIES.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {spec.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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