import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { CarThemeKey, carThemes } from '../data/theme-definitions';
import CotizacionForm from './contact-form-client';

interface ContactFormProps {
  backgroundImage?: StaticImageData | string;
  themeKey: CarThemeKey;
}

export default function ContactForm({ backgroundImage = '/landing/form_background.webp', themeKey }: ContactFormProps) {
  const theme = carThemes[themeKey];
  const textColor = theme.colors.sectionText;

  return (
    <section id="cotizacion" className="relative py-20 min-h-screen flex items-center overflow-hidden w-full max-w-[1920px] mx-auto">
      {/* Background Image using Next.js Image component */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image src={backgroundImage} alt="Form Background" fill priority unoptimized className="object-cover" />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Certificate badge for desktop */}
          <div className="hidden md:flex md:items-end md:justify-start relative">
            <div className="absolute bottom-0 md:-bottom-16 left-0 lg:left-5 w-fit">
              <Image
                src="/landing/certficate_logo.webp"
                width={250}
                height={330}
                alt="Certificado de Garantía JETOUR"
                className="w-auto h-auto max-w-[250px] object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-black/40 p-6 md:p-8 col-span-2 rounded-lg backdrop-blur-md md:ml-auto w-full max-w-lg" style={{ color: textColor }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">SOLICITA TU COTIZACIÓN</h1>
            <CotizacionForm themeKey={themeKey} />
          </div>
        </div>

        {/* Certificate badge for mobile */}
        <div className="md:hidden absolute lg:bottom-8 left-4 z-20">
          <Image
            src="/landing/certficate_logo.webp"
            width={150}
            height={200}
            alt="Certificado de Garantía JETOUR"
            className="w-auto h-auto max-w-[150px] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
