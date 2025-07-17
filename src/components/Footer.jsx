import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const enlacesRapidos = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const redesSociales = [
    {
      name: 'GitHub MAHR94',
      href: 'https://github.com/Developer-MAHR94',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'GitHub Personal',
      href: 'https://github.com/mahr940409',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/manuel-alejandro-hernandez-rodriguez-552222302/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-mahr-black border-t border-gray-800">
      <div className="container-custom">
        <div className="py-4 md:py-6">
          {/* Grid principal con 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo y descripción */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-3">
                <img
                  className="h-10 w-10 rounded-full object-cover border-2 border-mahr-blue mr-2"
                  src={process.env.PUBLIC_URL + '/logo.png'}
                  alt="MAHR 94"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-lg font-bold text-mahr-white hidden">
                  MAHR 94
                </span>
              </div>
              <p className="text-gray-300 mb-3 text-xs md:text-sm">
                Soluciones digitales modernas con tecnología de vanguardia.
              </p>
              
              {/* Redes sociales */}
              <div className="flex space-x-3 justify-center md:justify-start">
                {redesSociales.map((red) => (
                  <a
                    key={red.name}
                    href={red.href}
                    className="text-gray-400 hover:text-mahr-blue transition-colors duration-300"
                    aria-label={red.name}
                  >
                    {red.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div className="text-center md:text-left">
              <h3 className="text-mahr-white font-semibold mb-3 text-base">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {enlacesRapidos.map((enlace) => (
                  <li key={enlace.name}>
                    <a
                      href={enlace.href}
                      className="text-gray-300 hover:text-mahr-blue transition-colors duration-300 text-sm"
                    >
                      {enlace.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div className="text-center md:text-left">
              <h3 className="text-mahr-white font-semibold mb-3 text-base">Contacto</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>developer.mahr94@gmail.com</p>
                <p>+57 318 205 1224</p>
                <p>Barranquilla, Colombia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center text-center md:text-left">
            <div className="text-gray-300 text-sm">
              <p>© {currentYear} MAHR 94 - Todos los derechos reservados</p>
              <p className="text-xs text-gray-400 mt-1">Desarrollada por MAHR 94</p>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6">
              <a href="/privacy-policy" className="text-gray-300 hover:text-mahr-blue text-sm transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="/terms" className="text-gray-300 hover:text-mahr-blue text-sm transition-colors duration-300">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 