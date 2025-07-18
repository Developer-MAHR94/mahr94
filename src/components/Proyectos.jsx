import React from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Proyectos = () => {
  const proyectos = [
    {
      id: 1,
      titulo: 'Roman Converter',
      descripcion: 'Calculadora web interactiva que permite convertir números naturales a números romanos y viceversa. Interfaz sencilla e intuitiva diseñada para facilitar el uso por parte de cualquier usuario.',
      imagen: '/images/roman-converter.png',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'Web App'],
      github: 'https://github.com/mahr940409/roman-converter',
      demo: 'https://number-romanconverter.netlify.app/'
    },
    {
      id: 2,
      titulo: 'Weather App',
      descripcion: 'Aplicación web desarrollada con React que muestra el clima en tiempo real. Utiliza geolocalización para brindar información meteorológica precisa y actualizada con diseño responsivo e intuitivo.',
      imagen: '/images/weather-app.png',
      tecnologias: ['React', 'JavaScript', 'CSS', 'Geolocalización', 'API Weather'],
      github: 'https://github.com/mahr940409/Wheather-App',
      demo: 'https://weather-app-mahr94.netlify.app/'
    },
    {
      id: 3,
      titulo: 'Rick and Morty App',
      descripcion: 'Aplicación web desarrollada en React que permite explorar distintas dimensiones del universo de Rick and Morty mediante el consumo de una API pública. Interfaz dinámica e intuitiva para los fanáticos de la serie.',
      imagen: '/images/rick-and-morty-app.png',
      tecnologias: ['React', 'JavaScript', 'CSS', 'API REST', 'Vite'],
      github: 'https://github.com/mahr940409/rick-and-morty',
      demo: 'https://rick-and-morty-mahr94.netlify.app/'
    },
    {
      id: 4,
      titulo: 'Sitio Web Corporativo',
      descripcion: 'Sitio web profesional para empresa con diseño moderno y SEO optimizado.',
      imagen: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      tecnologias: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'Vercel'],
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      titulo: 'API REST Completa',
      descripcion: 'API robusta para aplicación móvil con autenticación JWT y documentación Swagger.',
      imagen: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
      tecnologias: ['Python', 'FastAPI', 'PostgreSQL', 'JWT', 'Docker'],
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      titulo: 'Portal Educativo',
      descripcion: 'Plataforma de aprendizaje online con videoconferencias y contenido interactivo.',
      imagen: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      tecnologias: ['React', 'Node.js', 'WebRTC', 'MongoDB', 'AWS S3'],
      github: '#',
      demo: '#'
    },
    {
      id: 7,
      titulo: 'Sistema de Inventarios',
      descripcion: 'Sistema completo de gestión de inventarios con reportes y alertas automáticas.',
      imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tecnologias: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'Redis'],
      github: '#',
      demo: '#'
    },
    {
      id: 8,
      titulo: 'App de Delivery',
      descripcion: 'Aplicación móvil para delivery de alimentos con geolocalización en tiempo real.',
      imagen: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop',
      tecnologias: ['React Native', 'Node.js', 'Socket.io', 'Google Maps', 'Firebase'],
      github: '#',
      demo: '#'
    },
    {
      id: 9,
      titulo: 'Blog Personal',
      descripcion: 'Blog moderno con CMS personalizado y sistema de comentarios integrado.',
      imagen: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      tecnologias: ['Next.js', 'MDX', 'TailwindCSS', 'Vercel', 'Disqus'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="proyectos" className="section-padding bg-mahr-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mahr-white mb-4">
            Nuestros <span className="text-mahr-blue">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre algunos de nuestros trabajos más destacados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-mahr-blue transition-all duration-300 group"
            >
              {/* Imagen del proyecto */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-mahr-white mb-3">
                  {proyecto.titulo}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {proyecto.descripcion}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-mahr-blue bg-opacity-20 text-mahr-blue text-xs rounded border border-mahr-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex gap-3">
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-mahr-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <CodeBracketIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-mahr-blue text-mahr-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos; 