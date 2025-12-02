import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            O que dizem nossos pacientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-primary-100 relative">
              <Quote className="absolute top-6 right-6 md:top-8 md:right-8 text-primary-200 fill-current" size={32} md:size={40} />
              <div className="mb-6">
                 {/* 5 Stars */}
                 <div className="flex text-yellow-400 space-x-1 mb-4">
                   {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                 </div>
                 <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">"{t.text}"</p>
              </div>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-gray-500 font-bold flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  {t.role && <p className="text-sm text-primary-600">{t.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;