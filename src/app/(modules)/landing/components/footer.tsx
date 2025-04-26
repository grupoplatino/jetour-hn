'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

import { useParams } from 'next/navigation';
import { getVehicleById } from '../data/vehicles-constant';
import { carThemes } from '../data/theme-definitions';

interface FooterProps {
  primaryColor?: string;
}

export function Footer({ primaryColor = '#FF7A00' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const params = useParams();

  const carData = getVehicleById(params.id as string);

  const carTheme = carData ? carThemes?.[carData.theme]?.colors : null;

  return (
    <footer className="relative w-full">
      {/* Línea superior con el color primario */}
      <div className="w-full h-1" style={{ backgroundColor: carTheme ? carTheme.primary : primaryColor }}></div>

      {/* Contenido principal del footer */}
      <div className="bg-gray-100 text-gray-800">
        <div className="container mx-auto py-12 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Columna 1: Logos y descripción */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <Image src={'/landing/jetour_logo_black_drive_your_future.webp'} alt="Jetour Logo" width={180} height={60} className="object-contain" />
                <Image src={'/landing/autos_aliados_logo_black.webp'} alt="Autos Aliados Logo" width={180} height={60} className="object-contain" />
              </div>
              <p className="text-sm mt-2">
                Innovación y excelencia en cada uno de nuestros vehículos, diseñados para hacer de tu experiencia de manejo algo extraordinario.
              </p>
            </div>

            {/* Columna 2: Vehículos y Enlaces */}
            <div>
              <h3 className="text-lg font-bold mb-4">Vehículos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/landing/dashing" className="hover:text-gray-600 transition-colors">
                    Dashing
                  </Link>
                </li>
                <li>
                  <Link href="/landing/t2" className="hover:text-gray-600 transition-colors">
                    T2
                  </Link>
                </li>
                <li>
                  <Link href="/landing/x50" className="hover:text-gray-600 transition-colors">
                    X50
                  </Link>
                </li>
                <li>
                  <Link href="/landing/x70plus" className="hover:text-gray-600 transition-colors">
                    X70 Plus
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-600 transition-colors">
                    Cotizaciones
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Empresa */}
            <div>
              <h3 className="text-lg font-bold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/landing/nosotros" className="hover:text-gray-600 transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-600 transition-colors">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link href="/landing/post-venta" className="hover:text-gray-600 transition-colors">
                    Servicio Postventa
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-600 transition-colors">
                    Socios Globales
                  </Link>
                </li>
                <li>
                  <Link href="/landing/contactanos" className="hover:text-gray-600 transition-colors">
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 4: Contacto y redes sociales */}
            <div>
              <h3 className="text-lg font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition-colors"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition-colors"
                >
                  <img className="h-7" src="/tiktok-outline-svgrepo-com.svg" />
                </a>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Visítanos</h4>
                <p className="text-sm">San Pedro Sula, Honduras</p>
                <p className="text-sm">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p className="text-sm">Sábados: 8:00 AM - 4:00 PM</p>
                <p className="text-sm">Domingo: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright y links legales */}
      <div className="text-white py-4" style={{ backgroundColor: carTheme ? carTheme.primary : primaryColor }}>
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">© {currentYear} JETOUR Auto. Todos los derechos reservados.</div>

          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Cookies
            </Link>
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Términos y Condiciones
            </Link>
          </div>

          <div className="mt-4 md:mt-0 text-xs">Diseñado por Gamero Studio</div>
        </div>
      </div>
    </footer>
  );
}
