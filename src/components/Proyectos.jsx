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
      titulo: 'Fortune Cookies',
      descripcion: 'Aplicación interactiva desarrollada con React, HTML, CSS y JavaScript que simula la experiencia de una galleta de la fortuna digital. Al presionar un botón, la app cambia el fondo y muestra al azar una frase inspiradora o reflexiva, seleccionada de un archivo JSON precargado. Su diseño colorido y dinámico está pensado para ofrecer una experiencia ligera, entretenida y visualmente atractiva.',
      imagen: '/images/fortune-cookies.png',
      tecnologias: ['React', 'HTML', 'CSS', 'JavaScript', 'JSON'],
      github: 'https://github.com/mahr940409/fortune-cookie',
      demo: 'https://fortune-cookies-mahr94.netlify.app/'
    },
    {
      id: 5,
      titulo: 'CRUD - App',
      descripcion: 'Aplicación web desarrollada con React, HTML, CSS y JavaScript que implementa un sistema CRUD (Crear, Leer, Actualizar y Eliminar) para la gestión de usuarios. La interfaz permite registrar nuevos usuarios, visualizar sus datos en una tabla, editarlos y eliminarlos de forma eficiente. Es una herramienta ideal para aprender y demostrar el manejo del estado, formularios y operaciones básicas de interacción con datos en React. El proyecto cuenta con un diseño limpio, funcional y completamente responsivo.',
      imagen: '/images/crud-app.png',
      tecnologias: ['React', 'HTML', 'CSS', 'JavaScript', 'CRUD'],
      github: 'https://github.com/mahr940409/crud',
      demo: 'https://crud-mahr94.netlify.app/'
    },
    {
      id: 6,
      titulo: 'Pokédex Kanto',
      descripcion: 'Aplicación web desarrollada con HTML, CSS y JavaScript que permite explorar los 151 Pokémon de la región Kanto. La interfaz presenta una Pokédex interactiva que muestra información básica de cada Pokémon, como su nombre, imagen, tipo y número en la Pokédex. Utiliza datos obtenidos desde una API pública, ofreciendo una experiencia visual atractiva y dinámica para los fans del universo Pokémon.',
      imagen: '/images/pokedex-kanto.png',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'API REST', 'Pokédex'],
      github: 'https://github.com/mahr940409/pokedex',
      demo: 'https://pokedex-mahr94.netlify.app/'
    },
    {
      id: 7,
      titulo: 'Pokedex React',
      descripcion: 'Aplicación web desarrollada con React, HTML, CSS y JavaScript que muestra todos los Pokémon disponibles hasta la fecha, utilizando una API pública (PokéAPI) para obtener datos actualizados. La interfaz permite explorar información detallada de cada Pokémon, incluyendo su nombre, imagen, tipo, habilidades y estadísticas. Además, cuenta con funcionalidades de búsqueda y navegación, ofreciendo una experiencia fluida, dinámica y totalmente responsiva para los fanáticos de la saga.',
      imagen: '/images/pokedex-react.png',
      tecnologias: ['React', 'HTML', 'CSS', 'JavaScript', 'PokéAPI'],
      github: 'https://github.com/mahr940409/pokedex-mahr94',
      demo: 'https://pokedex-react-mahr94.netlify.app/'
    },
    {
      id: 8,
      titulo: 'Yoga React',
      descripcion: 'Aplicación web desarrollada con React, TypeScript, HTML y CSS, diseñada completamente en inglés y enfocada en el bienestar integral. La página ofrece una experiencia de compra fluida mediante un carrito integrado que permite a los usuarios agregar, visualizar y gestionar productos relacionados con el yoga y el autocuidado. Su diseño moderno, limpio y responsivo proporciona una navegación amigable, ideal para quienes buscan mejorar su estilo de vida a través de productos saludables y conscientes.',
      imagen: '/images/yoga-react.png',
      tecnologias: ['React', 'TypeScript', 'HTML', 'CSS', 'E-commerce'],
      github: 'https://github.com/mahr940409/Yoga-Bienestar',
      demo: 'https://yogareact.netlify.app/'
    },
    {
      id: 9,
      titulo: 'Game JIA',
      descripcion: 'Plataforma web desarrollada con Python (Flask) y HTML, que integra usuarios, misiones, rankings y mensajería en un entorno gamificado.',
      imagen: '/images/game-jia.png',
      tecnologias: ['Python', 'Flask', 'HTML', 'Gamificación', 'Web App'],
      github: 'https://github.com/mahr940409/Expedientes-Python',
      demo: '/proyecto-game-jia'
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