import React from 'react';
import Header from './Header';
import Footer from './Footer';

const GameJIAProject = () => {
  return (
    <div className="min-h-screen bg-mahr-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-mahr-blue to-mahr-black py-20">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-mahr-white mb-6">
                Game <span className="text-mahr-yellow">JIA</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Sistema de Gestión de Expedientes Digitales - Plataforma web desarrollada con Python (Flask)
              </p>
            </div>
          </div>
        </section>

        {/* Descripción del Proyecto */}
        <section className="py-16 bg-mahr-black">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-mahr-white mb-6">
                  Descripción del Proyecto
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Esta aplicación web fue desarrollada con Python utilizando el framework Flask y presenta una interfaz construida con HTML y plantillas dinámicas (Jinja2).
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Al ejecutarse en local, la aplicación crea automáticamente su propia base de datos, permitiendo la gestión eficiente de usuarios y datos.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Este proyecto demuestra competencias en desarrollo backend con Python y Flask, manejo de bases de datos, y diseño de interfaces web interactivas con HTML.
                </p>
              </div>

              {/* Funcionalidades Principales */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-mahr-white mb-6">
                  Funcionalidades Principales
                </h2>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-mahr-blue rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-mahr-white font-semibold text-lg">Sistema de Autenticación y Roles</h3>
                          <p className="text-gray-300">Incluye un usuario administrador con permisos especiales y sistema de roles diferenciados.</p>
                          <div className="mt-3">
                            <img 
                              src="/images/game-jia/autenticacion.png" 
                              alt="Sistema de Autenticación" 
                              className="w-full h-48 object-contain rounded-lg border border-gray-700 bg-gray-800"
                              onError={(e) => e.target.style.display = 'none'}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-mahr-blue rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-mahr-white font-semibold text-lg">CRUD Completo</h3>
                          <p className="text-gray-300">Gestión completa de información dentro del sistema con operaciones Create, Read, Update y Delete.</p>
                          <div className="mt-3">
                            <img 
                              src="/images/game-jia/crud.png" 
                              alt="CRUD Completo" 
                              className="w-full h-48 object-contain rounded-lg border border-gray-700 bg-gray-800"
                              onError={(e) => e.target.style.display = 'none'}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-mahr-blue rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-mahr-white font-semibold text-lg">Registro de Usuarios y Mensajería</h3>
                          <p className="text-gray-300">Sistema de registro de usuarios y mensajería interna para fomentar la interacción entre usuarios.</p>
                          <div className="mt-3">
                            <img 
                              src="/images/game-jia/mensajeria.png" 
                              alt="Mensajería Interna" 
                              className="w-full h-48 object-contain rounded-lg border border-gray-700 bg-gray-800"
                              onError={(e) => e.target.style.display = 'none'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-mahr-blue rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-mahr-white font-semibold text-lg">Subida de Imágenes</h3>
                          <p className="text-gray-300">Permite a los usuarios subir y gestionar imágenes dentro del sistema.</p>
                          <div className="mt-3">
                            <img 
                              src="/images/game-jia/imagenes.png" 
                              alt="Subida de Imágenes" 
                              className="w-full h-48 object-contain rounded-lg border border-gray-700 bg-gray-800"
                              onError={(e) => e.target.style.display = 'none'}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-mahr-blue rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-mahr-white font-semibold text-lg">Sistema de Misiones</h3>
                          <p className="text-gray-300">Misiones que otorgan puntos y recompensas para mantener la motivación de los usuarios.</p>
                          <div className="mt-3">
                            <img 
                              src="/images/game-jia/misiones.png" 
                              alt="Sistema de Misiones" 
                              className="w-full h-48 object-contain rounded-lg border border-gray-700 bg-gray-800"
                              onError={(e) => e.target.style.display = 'none'}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-mahr-blue rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-mahr-white font-semibold text-lg">Rankings y Clasificaciones</h3>
                          <p className="text-gray-300">Sistema de rankings basados en el rendimiento de los usuarios con clasificaciones dinámicas.</p>
                          <div className="mt-3">
                            <img 
                              src="/images/game-jia/rankings.png" 
                              alt="Rankings y Clasificaciones" 
                              className="w-full h-48 object-contain rounded-lg border border-gray-700 bg-gray-800"
                              onError={(e) => e.target.style.display = 'none'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-800">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-mahr-blue rounded-full mt-2 flex-shrink-0"></div>
                      <div className="w-full">
                        <h3 className="text-mahr-white font-semibold text-lg">Interfaz Amigable</h3>
                        <p className="text-gray-300">Desarrollada con HTML y renderizada desde Flask mediante plantillas dinámicas para una experiencia de usuario optimizada.</p>
                        <div className="mt-3">
                          <img 
                            src="/images/game-jia/interfaz.png" 
                            alt="Interfaz Amigable" 
                            className="w-full h-64 object-contain rounded-lg border border-gray-700 bg-gray-800"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tecnologías Utilizadas */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-mahr-white mb-6">
                  Tecnologías Utilizadas
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-mahr-blue bg-opacity-20 border border-mahr-blue rounded-lg p-4 text-center">
                    <h3 className="text-mahr-blue font-semibold">Python</h3>
                    <p className="text-gray-300 text-sm">Lenguaje principal</p>
                  </div>
                  <div className="bg-mahr-blue bg-opacity-20 border border-mahr-blue rounded-lg p-4 text-center">
                    <h3 className="text-mahr-blue font-semibold">Flask</h3>
                    <p className="text-gray-300 text-sm">Framework web</p>
                  </div>
                  <div className="bg-mahr-blue bg-opacity-20 border border-mahr-blue rounded-lg p-4 text-center">
                    <h3 className="text-mahr-blue font-semibold">SQLAlchemy</h3>
                    <p className="text-gray-300 text-sm">ORM para base de datos</p>
                  </div>
                  <div className="bg-mahr-blue bg-opacity-20 border border-mahr-blue rounded-lg p-4 text-center">
                    <h3 className="text-mahr-blue font-semibold">Bootstrap 5</h3>
                    <p className="text-gray-300 text-sm">Framework CSS</p>
                  </div>
                </div>
              </div>

              {/* Enlaces */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-mahr-white mb-6">
                  Enlaces del Proyecto
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/mahr940409/Expedientes-Python"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-mahr-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    Ver en GitHub
                  </a>
                  <a
                    href="/"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-mahr-blue text-mahr-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                                         Volver al Sitio Web
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/573182051224?text=¡Hola!%20Estoy%20interesado%20en%20renovar%20o%20crear%20una%20página%20web.%20¿Me%20puedes%20brindar%20más%20información?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 group"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        <span className="absolute right-20 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          ¡Chatea con nosotros!
        </span>
      </a>
    </div>
  );
};

export default GameJIAProject; 