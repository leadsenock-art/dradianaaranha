import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { CheckCircle2, Target, Heart, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16 md:mb-20">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative group px-4 md:px-0">
             <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-primary-100 to-primary-50 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-2"></div>
            <img 
              src="https://i.imgur.com/X08mE5L.jpeg" 
              alt="Dra. Diana Aranha - Odontologia Especializada" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 pt-4">
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2 block">Quem Somos</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
              {ABOUT_TEXT.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify md:text-left">
              {ABOUT_TEXT.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_TEXT.details.map((detail, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Vision Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          
          <div className="bg-primary-50 rounded-2xl p-6 md:p-8 hover:bg-primary-100 transition-colors duration-300">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 mb-6 shadow-sm">
              <Target size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">Missão</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {ABOUT_TEXT.mission}
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 bg-primary-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                <Eye size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">Visão</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {ABOUT_TEXT.vision}
              </p>
            </div>
          </div>

          <div className="bg-primary-50 rounded-2xl p-6 md:p-8 hover:bg-primary-100 transition-colors duration-300">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 mb-6 shadow-sm">
              <Heart size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">Valores</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {ABOUT_TEXT.values}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;