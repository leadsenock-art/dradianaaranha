import React from 'react';
import { HERO_TITLE, HERO_SUBTITLE, CTA_BUTTON, CONTACT_INFO } from '../constants';
import Button from './Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center bg-gray-50">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2500&auto=format&fit=crop" 
          alt="Sorriso Bonito e Saudável" 
          className="w-full h-full object-cover object-center animate-[pulse_20s_infinite_ease-in-out]"
        />
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-white/60 sm:bg-gradient-to-r sm:from-white sm:via-white/70 sm:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl reveal-on-scroll">
          
          <div className="w-16 h-1 bg-primary-600 mb-6 rounded-full"></div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary-900 leading-tight mb-6">
            Revele o poder <br/>
            <span className="text-primary-600 italic">do seu sorriso.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-lg font-light border-l-4 border-primary-300 pl-4">
            {HERO_SUBTITLE}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="shadow-lg" onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`)}>
              {CTA_BUTTON}
            </Button>
            <Button variant="outline" className="bg-white/50 backdrop-blur-sm" onClick={() => document.getElementById('especialidades')?.scrollIntoView()}>
              Ver Tratamentos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 text-primary-600 hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;