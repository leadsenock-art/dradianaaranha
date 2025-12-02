import React from 'react';
import { HERO_TITLE, HERO_SUBTITLE, CTA_BUTTON, CONTACT_INFO } from '../constants';
import Button from './Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* Background with Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2500&auto=format&fit=crop" 
          alt="Sorriso Bonito e Saudável" 
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_infinite_ease-in-out]"
        />
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="max-w-3xl reveal-on-scroll">
          {/* Decorative Line */}
          <div className="w-20 h-1 bg-primary-600 mb-8 rounded-full"></div>
          
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-secondary-900 leading-[0.9] mb-8 tracking-tight">
            Revele o poder <br/>
            <span className="text-gradient-gold italic">do seu sorriso.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-light border-l-4 border-primary-200 pl-6">
            {HERO_SUBTITLE}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Button className="w-full sm:w-auto shadow-glow" onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`)}>
              {CTA_BUTTON}
            </Button>
            <Button variant="outline" className="w-full sm:w-auto backdrop-blur-sm" onClick={() => document.getElementById('especialidades')?.scrollIntoView()}>
              Conheça os Tratamentos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 opacity-60">
        <ChevronDown className="text-primary-600 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;