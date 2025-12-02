import React from 'react';
import { BEFORE_AFTER } from '../constants';

const BeforeAfter: React.FC = () => {
  return (
    <section id="antes-depois" className="py-16 md:py-24 bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">Resultados Reais</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">
            Antes e Depois
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {BEFORE_AFTER.map((item, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-2xl bg-gray-800">
                {/* Simulated Comparison - Hover to reveal / Tap on mobile often works as hover */}
                <div className="relative h-64 w-full">
                  <img 
                    src={item.imageAfter} 
                    alt={`Depois - ${item.title}`} 
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0" 
                  />
                  <img 
                    src={item.imageBefore} 
                    alt={`Antes - ${item.title}`} 
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" 
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs px-3 py-1 rounded-full pointer-events-none group-hover:hidden">
                    Depois
                  </div>
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-xs px-3 py-1 rounded-full pointer-events-none hidden group-hover:block">
                    Antes
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center text-sm text-gray-500 px-4">
          <p>* Os resultados podem variar de acordo com cada paciente.</p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;