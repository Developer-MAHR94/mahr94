import React from 'react';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  DevicePhoneMobileIcon, 
  CloudArrowUpIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      titulo: 'Desarrollo Web con React y TypeScript',
      descripcion: 'Creamos aplicaciones web modernas y escalables utilizando las mejores tecnologías del mercado.',
      icono: CodeBracketIcon,
      tecnologias: ['React', 'TypeScript', 'Next.js', 'TailwindCSS']
    },
    {
      id: 2,
      titulo: 'Backend con Python y APIs',
      descripcion: 'Desarrollamos APIs robustas y servicios backend eficientes para tu aplicación.',
      icono: ServerIcon,
      tecnologias: ['Python', 'Django', 'FastAPI', 'PostgreSQL']
    },
    {
      id: 3,
      titulo: 'UI/UX Responsivo',
      descripcion: 'Diseñamos interfaces intuitivas y experiencias de usuario excepcionales.',
      icono: DevicePhoneMobileIcon,
      tecnologias: ['Figma', 'Responsive Design', 'User Research', 'Prototyping']
    },
    {
      id: 4,
      titulo: 'SEO y Despliegue en la Nube',
      descripcion: 'Optimizamos tu sitio para motores de búsqueda y lo desplegamos en la nube.',
      icono: CloudArrowUpIcon,
      tecnologias: ['AWS', 'Vercel', 'SEO', 'Performance']
    },
    {
      id: 5,
      titulo: 'Mantenimiento de Sitios Web',
      descripcion: 'Ofrecemos servicios de mantenimiento continuo para mantener tu sitio web actualizado y funcionando perfectamente.',
      icono: WrenchScrewdriverIcon,
      tecnologias: ['Updates', 'Security', 'Backups', 'Monitoring']
    },
    {
      id: 6,
      titulo: 'Asesorías Tecnológicas',
      descripcion: 'Brindamos consultoría especializada para ayudarte a tomar las mejores decisiones tecnológicas para tu negocio.',
      icono: LightBulbIcon,
      tecnologias: ['Consulting', 'Architecture', 'Strategy', 'Planning']
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mahr-white mb-4">
            Nuestros <span className="text-mahr-blue">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones completas para llevar tu idea digital al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-mahr-black border-2 border-mahr-blue rounded-xl p-6 hover:border-mahr-yellow transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-mahr-blue rounded-full flex items-center justify-center mb-6 group-hover:bg-mahr-yellow transition-colors duration-300">
                  <servicio.icono className="w-8 h-8 text-mahr-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-mahr-white mb-4">
                  {servicio.titulo}
                </h3>
                
                <p className="text-gray-300 mb-6 flex-grow">
                  {servicio.descripcion}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {servicio.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-mahr-blue text-sm rounded-full border border-mahr-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios; 