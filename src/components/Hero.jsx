import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-mahr-black pt-16">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-mahr-white mb-6 leading-tight">
            Soluciones digitales modernas con{' '}
            <span className="text-mahr-blue">tecnología de vanguardia</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desarrollamos sitios y aplicaciones con React, JavaScript, Python, TypeScript y más
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contacto"
              className="btn-primary text-lg px-8 py-4"
            >
              Contáctanos
            </a>
            
            <a
              href="#servicios"
              className="btn-secondary text-lg px-8 py-4"
            >
              Ver Servicios
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-mahr-blue rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-mahr-blue rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 