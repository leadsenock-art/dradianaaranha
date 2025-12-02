import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { CheckCircle2, Target, Heart, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/50 skew-x-12 translate-x-32 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
          
          {/* Image Composition */}
          <div className="w-full lg:w-1/2 relative group reveal-scale">
             <div className="absolute inset-0 bg-primary-600 rounded-[2rem] transform translate-x-4 translate-y-4 opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
             <div className="absolute inset-0 border-2 border-primary-200 rounded-[2rem] transform -translate-x-4 -translate-y-4 transition-transform group-hover:-translate-x-6 group-hover:-translate-y-6"></div>
            <img 
              src="https://i.imgur.com/X08mE5L.jpeg" 
              alt="Dra. Diana Aranha" 
              className="relative z-10 w-full h-auto rounded-[2rem] shadow-2xl object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 reveal-on-scroll delay-100">
            <span className="text-primary-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Quem Somos</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-secondary-900 mb-8 leading-tight">
              {ABOUT_TEXT.title}
            </h2>
            <p className="text-lg text-gray-500 leading-loose mb-10 font-light">
              {ABOUT_TEXT.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {ABOUT_TEXT.details.map((detail, idx) => (
                <div key={idx} className="flex items-center group">
                  <div className="w-2 h-2 rounded-full bg-primary-400 mr-3 group-hover:bg-primary-600 transition-colors"></div>
                  <span className="text-gray-700 text-sm font-medium tracking-wide group-hover:text-primary-800 transition-colors">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Vision Values - Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-primary-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 reveal-on-scroll delay-100">
            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-500">
              <Target strokeWidth={1.5} size={28} />
            </div>
            <h3 className="font-serif text-2xl font-medium text-secondary-900 mb-4">Missão</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {ABOUT_TEXT.mission}
            </p>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="group bg-secondary-900 text-white p-8 rounded-3xl shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden reveal-on-scroll delay-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                <Eye strokeWidth={1.5} size={28} />
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4 text-white">Visão</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {ABOUT_TEXT.vision}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-primary-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 reveal-on-scroll delay-300">
            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-500">
              <Heart strokeWidth={1.5} size={28} />
            </div>
            <h3 className="font-serif text-2xl font-medium text-secondary-900 mb-4">Valores</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {ABOUT_TEXT.values}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;