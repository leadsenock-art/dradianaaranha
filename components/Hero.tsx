import React from 'react';
import { HERO_TITLE, HERO_SUBTITLE, CTA_BUTTON, CONTACT_INFO } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1920&auto=format&fit=crop" 
          alt="Sorriso Bonito e Saudável" 
          className="w-full h-full object-cover object-center"
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-900 leading-tight mb-6 break-words">
            {HERO_TITLE}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-lg font-medium">
            {HERO_SUBTITLE}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button className="w-full sm:w-auto" onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`)}>
              {CTA_BUTTON}
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" onClick={() => document.getElementById('especialidades')?.scrollIntoView()}>
              Conheça os Tratamentos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;