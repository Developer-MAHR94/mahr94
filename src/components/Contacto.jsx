import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpiar mensajes de estado cuando el usuario empiece a escribir
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        setSubmitStatus('error');
        console.error('Error al enviar:', result.error, result.details);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error de red:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mahr-white mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Conversemos sobre cómo podemos ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-mahr-white mb-6">
                Información de Contacto
              </h3>
              <p className="text-gray-300 mb-8">
                Estamos aquí para ayudarte a convertir tus ideas en realidad digital. 
                Contáctanos y comencemos a trabajar juntos en tu próximo proyecto.
              </p>
            </div>

            <div className="space-y-6">
                             <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-mahr-blue rounded-full flex items-center justify-center">
                   <EnvelopeIcon className="w-6 h-6 text-mahr-white" />
                 </div>
                 <div>
                   <h4 className="text-mahr-white font-medium">Email</h4>
                   <p className="text-gray-300">developer.mahr94@gmail.com</p>
                 </div>
               </div>

               <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-mahr-blue rounded-full flex items-center justify-center">
                   <PhoneIcon className="w-6 h-6 text-mahr-white" />
                 </div>
                 <div>
                   <h4 className="text-mahr-white font-medium">Teléfono</h4>
                   <p className="text-gray-300">+57 318 205 1224</p>
                 </div>
               </div>

               <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-mahr-blue rounded-full flex items-center justify-center">
                   <MapPinIcon className="w-6 h-6 text-mahr-white" />
                 </div>
                 <div>
                   <h4 className="text-mahr-white font-medium">Ubicación</h4>
                   <p className="text-gray-300">Barranquilla, Colombia</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-mahr-black border border-gray-800 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-mahr-white font-medium mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-mahr-white placeholder-gray-400 focus:outline-none focus:border-mahr-blue transition-colors duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-mahr-white font-medium mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-mahr-white placeholder-gray-400 focus:outline-none focus:border-mahr-blue transition-colors duration-300"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-mahr-white font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-mahr-white placeholder-gray-400 focus:outline-none focus:border-mahr-blue transition-colors duration-300 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary text-lg py-4 transition-all duration-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-600'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>

              {/* Mensajes de estado */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-900 border border-green-700 rounded-lg">
                  <p className="text-green-300 text-center">
                    ¡Gracias por tu mensaje! Te contactaremos pronto.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-900 border border-red-700 rounded-lg">
                  <p className="text-red-300 text-center">
                    Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default Contacto; 