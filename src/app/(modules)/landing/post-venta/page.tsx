// src/app/(modules)/landing/postventa/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Timer, Clock, Wrench, ShieldCheck, Calendar, Truck } from 'lucide-react';
import heroImage from '@root/public/img/DASHING/Foto 01.jpg';
import WhatsAppButton from '../components/whats-app-button';
import TestDriveButton from '../components/test-drive-button';

export default function PostVentaPage() {
  return (
    <div className="min-h-screen">
      <TestDriveButton carTheme="orange" />

      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
        <Image src={heroImage} alt="Servicio Postventa JETOUR" fill priority className="object-cover brightness-50 mt-[90px]" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Servicio Postventa</h1>
          <div className="h-1 w-20 bg-[#FF7A00]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto">
        <div className="px-8 py-16 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Postventa Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Servicio Postventa Premium</h2>
              <p className="text-lg">
                En JETOUR Honduras, nos comprometemos a brindarte el mejor servicio y soporte después de tu compra. Nuestro equipo de técnicos especializados
                está capacitado para mantener tu vehículo en óptimas condiciones.
              </p>

              <div className="space-y-6">
                {/* Servicio Técnico */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/10">
                    <Wrench className="h-6 w-6 text-[#FF7A00]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Servicio Técnico Especializado</h3>
                    <p className="mt-1 text-lg">
                      Contamos con técnicos certificados y herramientas de diagnóstico avanzadas para mantener tu JETOUR en perfectas condiciones.
                    </p>
                  </div>
                </div>

                {/* Garantía */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/10">
                    <ShieldCheck className="h-6 w-6 text-[#FF7A00]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Garantía Extendida</h3>
                    <p className="mt-1 text-lg">
                      Todos nuestros vehículos cuentan con garantía de 5 años o 150,000 km, lo que ocurra primero, dándote tranquilidad y confianza.
                    </p>
                  </div>
                </div>

                {/* Mantenimiento Preventivo */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/10">
                    <Timer className="h-6 w-6 text-[#FF7A00]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Mantenimiento Preventivo</h3>
                    <p className="mt-1 text-lg">
                      Programa tus mantenimientos preventivos para extender la vida útil de tu vehículo y mantener su rendimiento óptimo.
                    </p>
                  </div>
                </div>

                {/* Repuestos Originales */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/10">
                    <Truck className="h-6 w-6 text-[#FF7A00]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Repuestos Originales</h3>
                    <p className="mt-1 text-lg">
                      Utilizamos exclusivamente repuestos originales para asegurar el rendimiento, durabilidad y seguridad de tu vehículo JETOUR.
                    </p>
                  </div>
                </div>

                {/* Citas de Servicio */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/10">
                    <Calendar className="h-6 w-6 text-[#FF7A00]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Citas de Servicio</h3>
                    <div className="mt-1 space-y-1">
                      <p className="text-lg">Contacta a nuestro centro de servicio por teléfono o WhatsApp para agendar tu próxima cita.</p>
                      <p className="text-lg font-medium">
                        <a href="https://wa.me/50431820711" className="hover:text-[#FF7A00] transition-colors" target="_blank" rel="noopener noreferrer">
                          (+504) 3182-0711
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horario de Atención */}
              <div className="pt-6">
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/10">
                    <Clock className="h-6 w-6 text-[#FF7A00]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Horario de Servicio Técnico</h3>
                    <div className="mt-1 space-y-1">
                      <p className="text-lg">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                      <p className="text-lg">Sábado: 8:00 AM - 12:00 PM</p>
                      <p className="text-lg">Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Plans */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Planes de Mantenimiento</h3>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-semibold text-[#FF7A00]">Mantenimiento Básico</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Cambio de aceite y filtro</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Revisión de niveles de fluidos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Inspección visual de componentes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Diagnóstico computarizado básico</span>
                    </li>
                  </ul>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-semibold text-[#FF7A00]">Mantenimiento Intermedio</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Todo lo incluido en el mantenimiento básico</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Cambio de filtro de aire</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Rotación de neumáticos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Revisión del sistema de frenos</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#FF7A00]">Mantenimiento Mayor</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Todo lo incluido en el mantenimiento intermedio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Cambio de filtro de combustible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Cambio de bujías (según modelo)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Inspección completa de suspensión y dirección</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF7A00] mr-2">✓</span>
                      <span>Limpieza del sistema de inyección</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-lg font-medium">Para cotizaciones y detalles completos sobre nuestros planes de mantenimiento, contáctanos directamente.</p>
                <div className="mt-4">
                  <Link
                    href="#contact-form"
                    className="inline-block bg-[#FF7A00] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#008a99] transition-colors"
                  >
                    Solicitar Información
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preguntas Frecuentes */}
        <div className="bg-gray-100 py-16 px-24">
          <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">¿Cada cuánto debo realizar el mantenimiento de mi vehículo?</h3>
              <p>
                Recomendamos realizar el mantenimiento básico cada 5,000 km o 6 meses, lo que ocurra primero. Esto ayuda a mantener tu vehículo en óptimas
                condiciones y prolongar su vida útil.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">¿Qué cubre la garantía de mi JETOUR?</h3>
              <p>
                Nuestra garantía cubre defectos de fabricación y mano de obra durante 5 años o 150,000 km. Para mantener la garantía válida, es importante
                realizar todos los mantenimientos en nuestro taller autorizado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">¿Necesito cita previa para el servicio?</h3>
              <p>
                Sí, recomendamos agendar una cita para garantizar una atención rápida y eficiente. Puedes hacerlo llamando a nuestro centro de servicio o a
                través de WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">¿Dónde puedo conseguir repuestos originales?</h3>
              <p>
                Todos los repuestos originales están disponibles en nuestro centro de servicio. Utilizamos exclusivamente partes certificadas para garantizar el
                rendimiento y seguridad de tu vehículo.
              </p>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div id="contact-form"></div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#FF7A00] to-orange-600 p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Mantén tu JETOUR en condiciones óptimas</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Agenda tu próximo servicio hoy mismo y disfruta de una experiencia de conducción sin preocupaciones.</p>
          <div className="inline-block">
            <a
              href="https://wa.me/50431820711"
              className="bg-white text-[#FF7A00] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-5 w-5" />
              AGENDAR SERVICIO
            </a>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
}
