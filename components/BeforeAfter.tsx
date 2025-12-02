import React from 'react';
import { BEFORE_AFTER } from '../constants';

const BeforeAfter: React.FC = () => {
  return (
    <section id="antes-depois" className="py-24 bg-secondary-900 text-white relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
          <div className="max-w-xl">
            <span className="text-primary-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Galeria de Sorrisos</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium">
              Transformações Reais
            </h2>
          </div>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 max-w-xs text-right">
            Confira alguns dos resultados alcançados através de nossos procedimentos personalizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BEFORE_AFTER.map((item, index) => (
            <div key={index} className="group cursor-pointer reveal-on-scroll delay-100">
              <div className="relative overflow-hidden rounded-[1.5rem] mb-6 shadow-2xl bg-gray-800 aspect-[4/5] border border-gray-700/50 group-hover:border-primary-600/30 transition-colors duration-500">
                {/* Images */}
                <img 
                  src={item.imageAfter} 
                  alt={`Depois - ${item.title}`} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-100 group-hover:scale-105" 
                />
                
                {/* Reveal Effect */}
                <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center overflow-hidden">
                   <img 
                    src={item.imageBefore} 
                    alt={`Antes - ${item.title}`} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay grayscale" 
                  />
                  <span className="relative z-10 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20 tracking-wider">
                    VISUALIZAR ANTES
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <span className="text-xs font-bold text-white bg-black/50 backdrop-blur px-3 py-1 rounded-full">ANTES</span>
                </div>
                 <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-20">
                  <span className="text-xs font-bold text-primary-200 bg-primary-900/80 backdrop-blur px-3 py-1 rounded-full">RESULTADO FINAL</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-serif text-white mb-1 group-hover:text-primary-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 transition-all duration-300">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center border-t border-gray-800 pt-8">
           <p className="text-xs text-gray-500 uppercase tracking-widest">* Resultados variam individualmente</p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;