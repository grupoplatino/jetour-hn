// src/app/(modules)/landing/contactanos/page.tsx
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import ContactForm from "../components/contact-form";
import WhatsAppButton from "../components/whats-app-button";
import TestDriveButton from "../components/test-drive-button";
import {
  ContactPageSEO,
  generateContactMetadata,
} from "@/components/seo/contact-page.seo";

export const metadata = generateContactMetadata();

export default function ContactPage() {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto bg-white">
      <TestDriveButton carTheme={"orange"} />

      <ContactPageSEO />

      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
        <Image
          unoptimized
          src={"/contactanos/hero_background.webp"}
          alt="JETOUR Concesionaria"
          fill
          className="object-cover brightness-50 mt-[90px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contáctanos</h1>
          <div className="h-1 w-20 bg-[#FF7A00]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto">
        <div className="px-8 md:px-24 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Información de Contacto</h2>
              <p className="text-lg">
                Estamos aquí para ayudarte con cualquier consulta sobre nuestros
                vehículos. Ponte en contacto con nosotros a través de los
                siguientes medios:
              </p>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/10">
                    <Phone className="h-6 w-6 text-[#FF7A00]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">
                      Teléfono / WhatsApp
                    </h3>
                    <p className="mt-1">
                      <a
                        href="https://wa.me/50433620335"
                        className="text-lg hover:text-[#FF7A00] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (+504) 3362-0335
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/10">
                    <MapPin className="h-6 w-6 text-[#FF7A00]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">
                      Dirección Concesionaria
                    </h3>
                    <p className="mt-1 text-lg">
                      Barrio La Guardia, entre 28 y 29 calle en el Bulevar del
                      Sur, contiguo a Tropigas, SPS, Cortés, Honduras.
                    </p>
                  </div>
                </div>

                {/* Customer Service */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/10">
                    <MessageSquare className="h-6 w-6 text-[#FF7A00]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">
                      Servicio al Cliente
                    </h3>
                    <p className="mt-1 text-lg">
                      Nuestro equipo está listo para ayudarte con cualquier
                      consulta sobre nuestros vehículos o servicios.
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00]/10">
                    <Clock className="h-6 w-6 text-[#FF7A00]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">
                      Horario de Atención
                    </h3>
                    <div className="mt-1 space-y-1">
                      <p className="text-lg">
                        Lunes a Viernes: 8:00 AM - 5:00 PM
                      </p>
                      <p className="text-lg">Sábado: 8:00 AM - 12:00 PM</p>
                      <p className="text-lg">Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              {/* Social Media */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Síguenos en Redes Sociales
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/jejourhonduras"
                    className="h-12 w-12 rounded-full bg-[#FF7A00] flex items-center justify-center text-white hover:bg-[#E06800] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/jejourhonduras"
                    className="h-12 w-12 rounded-full bg-[#FF7A00] flex items-center justify-center text-white hover:bg-[#E06800] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>

                  <a
                    href="https://wa.me/50433620335"
                    className="h-12 w-12 rounded-full bg-[#FF7A00] flex items-center justify-center text-white hover:bg-[#E06800] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                  <a
                    href="https://tiktok.com/@jejourhonduras"
                    className="h-12 w-12 rounded-full bg-[#FF7A00] flex items-center justify-center text-white hover:bg-[#E06800] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] lg:h-auto bg-gray-200 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.0355820665595!2d-88.03410344033641!3d15.482518132010053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f665d04f9d935ef%3A0x565bba667ef47ce!2sAutos%20Aliados!5e0!3m2!1ses-419!2shn!4v1746827627036!5m2!1ses-419!2shn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                aria-label="Ubicación de la concesionaria JETOUR"
                className="transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        <ContactForm themeKey="orange" />

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#FF7A00] to-orange-600 p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Interesado en nuestros vehículos?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Descubre la mejor experiencia de manejo con JETOUR. Agenda una
            prueba de manejo hoy mismo.
          </p>
          <div className="inline-block">
            <Link
              href="/#cotizacion"
              className="bg-white text-[#FF7A00] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              AGENDA TU TEST DRIVE
            </Link>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
}
