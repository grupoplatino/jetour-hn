// src/app/(modules)/landing/nosotros/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Medal, Users, TrendingUp, Target, Globe } from 'lucide-react';
import WhatsAppButton from '../components/whats-app-button';
import TestDriveButton from '../components/test-drive-button';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <TestDriveButton carTheme="orange" />

      {/* Hero Banner */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image src={'/nosotros/hero_background.webp'} alt="JETOUR Concesionaria" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nosotros</h1>
          <div className="h-1 w-20 bg-[#FF7A00]"></div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Descubre <span className="text-[#FF7A00]">JETOUR</span> Honduras
            </h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-800">
              En JETOUR Honduras, nos enorgullece ofrecer vehículos de clase mundial que combinan innovación, rendimiento y diseño excepcional. Somos el
              distribuidor oficial de la marca JETOUR en Honduras, comprometidos con brindar a nuestros clientes una experiencia de conducción inigualable.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-800">
              Respaldados por Auto Aliados, contamos con el conocimiento y la infraestructura para garantizar un servicio de primera calidad, desde la asesoría
              en la compra hasta el mantenimiento postventa.
            </p>
            <Link
              href="/landing/contactanos"
              className="inline-block bg-[#FF7A00] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#E06800] transition-colors"
            >
              Contáctanos
            </Link>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image src={'/nosotros/hero_background.webp'} alt="Concesionaria JETOUR Honduras" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestra Historia</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#FF7A00]"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div className="md:col-start-1 md:text-right relative">
                <div className="md:pr-12 p-6 bg-zinc-900 rounded-xl shadow-md">
                  <h3 className="flex md:justify-end items-center gap-2 text-xl font-bold mb-2 text-white">
                    <span>Fundación de JETOUR</span>
                    <Calendar className="text-[#FF7A00]" />
                  </h3>
                  <p className="text-gray-300">
                    JETOUR se estableció como una marca independiente del Grupo Chery en 2018, con la visión de crear vehículos SUV de alta calidad para
                    familias y aventureros.
                  </p>
                </div>
                {/* Timeline Point */}
                <div className="absolute top-6 right-0 md:-right-4 w-8 h-8 bg-[#FF7A00] rounded-full border-4 border-black hidden md:block"></div>
              </div>

              {/* Item 2 */}
              <div className="md:col-start-2 relative">
                <div className="md:pl-12 p-6 bg-zinc-900 rounded-xl shadow-md">
                  <h3 className="flex items-center gap-2 text-xl font-bold mb-2 text-white">
                    <Calendar className="text-[#FF7A00]" />
                    <span>Expansión Global</span>
                  </h3>
                  <p className="text-gray-300">
                    Tras su éxito inicial en China, JETOUR comenzó su expansión internacional, llegando a más de 30 países en Asia, Oriente Medio, África y
                    América Latina.
                  </p>
                </div>
                {/* Timeline Point */}
                <div className="absolute top-6 left-0 md:-left-4 w-8 h-8 bg-[#FF7A00] rounded-full border-4 border-black hidden md:block"></div>
              </div>

              {/* Item 3 */}
              <div className="md:col-start-1 md:text-right relative">
                <div className="md:pr-12 p-6 bg-zinc-900 rounded-xl shadow-md">
                  <h3 className="flex md:justify-end items-center gap-2 text-xl font-bold mb-2 text-white">
                    <span>Llegada a Honduras</span>
                    <Calendar className="text-[#FF7A00]" />
                  </h3>
                  <p className="text-gray-300">
                    En 2023, JETOUR llega oficialmente a Honduras de la mano de Auto Aliados, trayendo al mercado nacional vehículos innovadores y de alta
                    tecnología.
                  </p>
                </div>
                {/* Timeline Point */}
                <div className="absolute top-6 right-0 md:-right-4 w-8 h-8 bg-[#FF7A00] rounded-full border-4 border-black hidden md:block"></div>
              </div>

              {/* Item 4 */}
              <div className="md:col-start-2 relative">
                <div className="md:pl-12 p-6 bg-zinc-900 rounded-xl shadow-md">
                  <h3 className="flex items-center gap-2 text-xl font-bold mb-2 text-white">
                    <Calendar className="text-[#FF7A00]" />
                    <span>Presente y Futuro</span>
                  </h3>
                  <p className="text-gray-300">
                    Actualmente, JETOUR continúa innovando con modelos como el Dashing, T2, X70 Plus y X50, combinando tecnología avanzada, diseño sofisticado y
                    rendimiento excepcional.
                  </p>
                </div>
                {/* Timeline Point */}
                <div className="absolute top-6 left-0 md:-left-4 w-8 h-8 bg-[#FF7A00] rounded-full border-4 border-black hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Nuestros Valores</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-800">
          En JETOUR Honduras, nuestros valores fundamentales definen quiénes somos y cómo operamos. Estos principios guían cada interacción con nuestros
          clientes y socios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200">
            <div className="w-16 h-16 bg-[#FF7A00] rounded-full flex items-center justify-center mb-6">
              <Medal className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Excelencia</h3>
            <p className="text-gray-700">
              Nos esforzamos por la excelencia en todo lo que hacemos, desde la calidad de nuestros vehículos hasta el servicio que brindamos a nuestros
              clientes.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200">
            <div className="w-16 h-16 bg-[#FF7A00] rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Compromiso con el Cliente</h3>
            <p className="text-gray-700">Nuestros clientes son nuestra prioridad. Nos dedicamos a entender sus necesidades y superar sus expectativas.</p>
          </div>

          {/* Value 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200">
            <div className="w-16 h-16 bg-[#FF7A00] rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovación</h3>
            <p className="text-gray-700">
              Buscamos constantemente nuevas formas de mejorar nuestros productos y servicios, adoptando tecnologías avanzadas y soluciones creativas.
            </p>
          </div>

          {/* Value 4 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200">
            <div className="w-16 h-16 bg-[#FF7A00] rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Responsabilidad</h3>
            <p className="text-gray-700">
              Asumimos la responsabilidad de nuestras acciones y decisiones, operando con integridad y transparencia en todo momento.
            </p>
          </div>

          {/* Value 5 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200">
            <div className="w-16 h-16 bg-[#FF7A00] rounded-full flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Compromiso Social</h3>
            <p className="text-gray-700">
              Estamos comprometidos con el desarrollo de Honduras, apoyando iniciativas que contribuyan al bienestar de las comunidades donde operamos.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section (Opcional) */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Nuestro Equipo</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-300">
            Contamos con un equipo de profesionales dedicados y apasionados, comprometidos con brindar el mejor servicio y asesoramiento a nuestros clientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Aquí podrías agregar tarjetas de miembros del equipo si lo deseas */}
            {/* Ejemplo: */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image src="/nosotros/team_member1.png" alt="Nombre del Miembro" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white">Nombre del Ejecutivo</h3>
                <p className="text-[#FF7A00] mb-3">Cargo</p>
                <p className="text-gray-300">Breve descripción o frase del miembro del equipo.</p>
              </div>
            </div>

            {/* Puedes agregar más miembros aquí */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Lo Que Dicen Nuestros Clientes</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-800">
          La satisfacción de nuestros clientes es nuestro principal objetivo. Aquí hay algunas opiniones de quienes ya son parte de la familia JETOUR.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow relative border border-gray-200">
            <div className="absolute -top-5 left-8">
              <div className="w-10 h-10 bg-[#FF7A00] rounded-full flex items-center justify-center">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.58 16H5.14L9.18 8H6.74C6.74 4.48 9.48 0.88 13.6 0L15.36 2.3C13.18 2.9 11.86 4.56 11.48 6.24H14.78L8.58 16ZM19.38 16H15.94L19.98 8H17.54C17.54 4.48 20.28 0.88 24.4 0L26.16 2.3C23.98 2.9 22.66 4.56 22.28 6.24H25.58L19.38 16Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <p className="text-gray-700 italic mb-6 pt-4"></p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                <Image src="/img/testimonials/client1.jpg" alt="Cliente" width={48} height={48} className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold">Ana Martínez</h4>
                <p className="text-sm text-gray-600">San Pedro Sula</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow relative border border-gray-200">
            <div className="absolute -top-5 left-8">
              <div className="w-10 h-10 bg-[#FF7A00] rounded-full flex items-center justify-center">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.58 16H5.14L9.18 8H6.74C6.74 4.48 9.48 0.88 13.6 0L15.36 2.3C13.18 2.9 11.86 4.56 11.48 6.24H14.78L8.58 16ZM19.38 16H15.94L19.98 8H17.54C17.54 4.48 20.28 0.88 24.4 0L26.16 2.3C23.98 2.9 22.66 4.56 22.28 6.24H25.58L19.38 16Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <p className="text-gray-700 italic mb-6 pt-4"></p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                <Image src="/img/testimonials/client2.jpg" alt="Cliente" width={48} height={48} className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold">Carlos Mendoza</h4>
                <p className="text-sm text-gray-600">Tegucigalpa</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow relative border border-gray-200">
            <div className="absolute -top-5 left-8">
              <div className="w-10 h-10 bg-[#FF7A00] rounded-full flex items-center justify-center">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.58 16H5.14L9.18 8H6.74C6.74 4.48 9.48 0.88 13.6 0L15.36 2.3C13.18 2.9 11.86 4.56 11.48 6.24H14.78L8.58 16ZM19.38 16H15.94L19.98 8H17.54C17.54 4.48 20.28 0.88 24.4 0L26.16 2.3C23.98 2.9 22.66 4.56 22.28 6.24H25.58L19.38 16Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <p className="text-gray-700 italic mb-6 pt-4"></p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                <Image src="/img/testimonials/client3.jpg" alt="Cliente" width={48} height={48} className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold">Laura Sánchez</h4>
                <p className="text-sm text-gray-600">La Ceiba</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF7A00] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Descubre la Experiencia JETOUR</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Visita nuestra concesionaria o agenda una prueba de manejo para conocer de primera mano la calidad, el confort y la tecnología de nuestros
            vehículos.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/landing/contactanos" className="bg-white text-[#FF7A00] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Contáctanos
            </Link>
            <Link
              href="/landing/contactanos"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Agenda tu Test Drive
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
