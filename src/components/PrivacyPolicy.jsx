import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-mahr-black pt-16">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-mahr-white mb-4">
              Política de Privacidad
            </h1>
            <p className="text-xl text-gray-300">
              MAHR 94 - Soluciones Digitales
            </p>
          </div>

          {/* Content */}
          <div className="bg-gray-900 rounded-xl p-8 md:p-12 space-y-8">
            
            {/* 1. Introducción */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">1. Introducción</h2>
              <p className="text-gray-300 leading-relaxed">
                En MAHR 94, respetamos tu privacidad y nos comprometemos a proteger los datos personales que compartes con nosotros. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información cuando accedes a nuestros servicios relacionados con el desarrollo web, diseño de interfaces, APIs en Python, mantenimiento de sitios, y asesorías tecnológicas.
              </p>
            </section>

            {/* 2. Identidad del responsable */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">2. Identidad del responsable</h2>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-mahr-blue">Nombre comercial:</strong> MAHR 94</p>
                <p><strong className="text-mahr-blue">Ubicación:</strong> Barranquilla, Colombia</p>
                <p><strong className="text-mahr-blue">Correo electrónico:</strong> developer.mahr94@gmail.com</p>
                <p><strong className="text-mahr-blue">Teléfono / WhatsApp:</strong> +57 318 205 1224</p>
                <p><strong className="text-mahr-blue">Representante:</strong> Manuel Alejandro Hernández Rodríguez</p>
              </div>
            </section>

            {/* 3. Información que recopilamos */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">3. Información que recopilamos</h2>
              <p className="text-gray-300 mb-4">Recopilamos y tratamos los siguientes tipos de datos personales:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información relacionada con el proyecto o requerimiento</li>
                <li>Información técnica sobre el dispositivo y navegación (como dirección IP, navegador, sistema operativo)</li>
              </ul>
            </section>

            {/* 4. Finalidades del tratamiento */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">4. Finalidades del tratamiento</h2>
              <p className="text-gray-300 mb-4">Usamos los datos personales con las siguientes finalidades:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Brindar servicios de desarrollo web, backend con Python y APIs</li>
                <li>Diseñar interfaces UI/UX y ofrecer asesorías tecnológicas</li>
                <li>Realizar mantenimiento técnico de sitios web</li>
                <li>Comunicarnos contigo para aclarar dudas, enviar cotizaciones o realizar seguimientos de servicio</li>
                <li>Cumplir obligaciones legales o contractuales</li>
              </ul>
            </section>

            {/* 5. Base legal */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">5. Base legal para el tratamiento</h2>
              <p className="text-gray-300 mb-4">El tratamiento de tus datos personales se fundamenta en:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>El consentimiento expreso del titular</li>
                <li>La ejecución de un contrato o medidas precontractuales</li>
                <li>Interés legítimo en ofrecer servicios personalizados</li>
                <li>Cumplimiento de obligaciones legales</li>
              </ul>
            </section>

            {/* 6. Conservación */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">6. Conservación de los datos</h2>
              <p className="text-gray-300">
                Los datos se conservarán solo durante el tiempo necesario para cumplir con las finalidades mencionadas o el tiempo exigido por la ley.
              </p>
            </section>

            {/* 7. Transferencia */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">7. Transferencia de datos</h2>
              <p className="text-gray-300">
                MAHR 94 no vende ni transfiere tus datos personales a terceros. Solo podrán ser compartidos con proveedores de servicios tecnológicos (como plataformas de correo o alojamiento) bajo acuerdos de confidencialidad y seguridad, o por obligación legal.
              </p>
            </section>

            {/* 8. Derechos */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">8. Derechos del titular</h2>
              <p className="text-gray-300 mb-4">Tienes derecho a:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Acceder a tus datos personales</li>
                <li>Solicitar la corrección o actualización</li>
                <li>Solicitar la eliminación de tus datos cuando ya no sean necesarios</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
                <li>Oponerte al tratamiento de tus datos</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Para ejercer cualquiera de estos derechos, puedes escribirnos a{' '}
                <a href="mailto:developer.mahr94@gmail.com" className="text-mahr-blue hover:underline">
                  developer.mahr94@gmail.com
                </a>.
              </p>
            </section>

            {/* 9. Seguridad */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">9. Seguridad de la información</h2>
              <p className="text-gray-300">
                Aplicamos medidas de seguridad administrativas y técnicas para proteger tus datos personales frente a accesos no autorizados, pérdida o alteración. Sin embargo, debes tener en cuenta que ningún sistema es 100% infalible.
              </p>
            </section>

            {/* 10. Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">10. Cookies y tecnologías similares</h2>
              <p className="text-gray-300">
                Actualmente, MAHR 94 no utiliza cookies ni tecnologías de seguimiento en su entorno digital. En caso de incorporar estas herramientas en el futuro, se actualizará esta política para informar al usuario.
              </p>
            </section>

            {/* 11. Enlaces externos */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">11. Enlaces a plataformas externas</h2>
              <p className="text-gray-300 mb-4">
                Este sitio y nuestros canales pueden contener enlaces a terceros, como LinkedIn y GitHub:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>LinkedIn</li>
                <li>GitHub (Perfil principal)</li>
                <li>GitHub (Repositorio alterno)</li>
              </ul>
              <p className="text-gray-300 mt-4">
                No nos responsabilizamos por las prácticas de privacidad de estos sitios. Recomendamos revisar sus respectivas políticas.
              </p>
            </section>

            {/* 12. Modificaciones */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">12. Modificaciones a esta política</h2>
              <p className="text-gray-300">
                MAHR 94 podrá modificar esta Política de Privacidad para adaptarse a cambios legislativos o mejoras en los servicios. La versión vigente estará siempre disponible por medios digitales.
              </p>
              <p className="text-gray-300 mt-4">
                <strong>Última actualización:</strong> 17 de julio de 2025
              </p>
            </section>

            {/* 13. Contacto */}
            <section>
              <h2 className="text-2xl font-semibold text-mahr-white mb-4">13. Contacto</h2>
              <p className="text-gray-300 mb-4">
                Si tienes dudas o deseas ejercer tus derechos sobre tus datos, puedes contactarnos:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>📧 <strong>Correo:</strong> developer.mahr94@gmail.com</p>
                <p>📱 <strong>WhatsApp:</strong> +57 318 205 1224</p>
              </div>
            </section>
          </div>

          {/* Back to home button */}
          <div className="text-center mt-8">
            <button
              onClick={handleGoHome}
              className="btn-primary inline-block"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 