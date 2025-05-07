import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { CarThemeKey, carThemes } from '../data/theme-definitions';
import CotizacionForm from './contact-form-client';

interface CotizacionProps {
  backgroundImage?: StaticImageData | string;
  themeKey: CarThemeKey;
}

export default function ContactForm({ backgroundImage = '/landing/form_background.webp', themeKey }: CotizacionProps) {
  const theme = carThemes[themeKey];
  const textColor = theme.colors.sectionText;

  return (
    <section
      id="cotizacion"
      className="relative w-full bg-cover bg-no-repeat py-20 min-h-screen flex items-center"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        color: textColor
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Columna izquierda - puede contener información adicional o estar vacía para dar espacio */}
          <div className="hidden md:flex md:items-end md:justify-start relative">
            {/* Badge de garantía */}
            <div className="absolute -bottom-16 md:-left-0 lg:left-5 w-fit">
              <Image src={'/landing/certficate_logo.webp'} width={512} height={512} alt="Certificado de Garantía" className="w-[250px] h-auto" />
            </div>
          </div>

          {/* Columna derecha - formulario */}
          <div className="bg-black/30 p-8 col-span-2 rounded-lg backdrop-blur-sm md:ml-auto w-full max-w-lg">
            <h1 className="text-4xl md:text-4xl font-bold mb-8">SOLICITA TU COTIZACIÓN</h1>
            <CotizacionForm themeKey={themeKey} />
          </div>
        </div>

        {/* Badge de garantía en móvil */}
        <div className="md:hidden absolute bottom-4 left-4">
          <Image unoptimized src={'/landing/certficate_logo.webp'} width={120} height={160} alt="Certificado de Garantía" className="w-auto h-auto" />
        </div>
      </div>
    </section>
  );
}
