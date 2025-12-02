import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { Target, Heart, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50 skew-x-12 translate-x-32 z-0 hidden lg:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          
          {/* Image */}
          <div className="w-full lg:w-1/2 reveal-scale">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-primary-600/10 z-10 mix-blend-multiply"></div>
               <img 
                  src="https://i.imgur.com/X08mE5L.jpeg" 
                  alt="Dra. Diana Aranha" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 reveal-on-scroll delay-100">
            <span className="text-primary-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Quem Somos</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary-900 mb-6">
              {ABOUT_TEXT.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 font-light text-lg">
              {ABOUT_TEXT.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {ABOUT_TEXT.details.map((detail, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm font-medium">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Missão */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300 reveal-on-scroll">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
              <Target strokeWidth={1.5} size={24} />
            </div>
            <h3 className="font-serif text-xl font-medium text-secondary-900 mb-3">Missão</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{ABOUT_TEXT.mission}</p>
          </div>

          {/* Visão - Highlighted */}
          <div className="bg-secondary-900 text-white p-8 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden reveal-on-scroll delay-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-primary-400 mb-6 border border-white/10">
                <Eye strokeWidth={1.5} size={24} />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Visão</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{ABOUT_TEXT.vision}</p>
            </div>
          </div>

          {/* Valores */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300 reveal-on-scroll delay-200">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
              <Heart strokeWidth={1.5} size={24} />
            </div>
            <h3 className="font-serif text-xl font-medium text-secondary-900 mb-3">Valores</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{ABOUT_TEXT.values}</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;