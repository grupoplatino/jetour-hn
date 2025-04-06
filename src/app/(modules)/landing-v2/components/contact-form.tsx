import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { CarThemeKey, carThemes } from '../data/theme-definitions';
import CotizacionForm from './contact-form-client';
import certificateImage from '@root/public/img/Certificado.jpg';

interface CotizacionProps {
  backgroundImage?: StaticImageData | string;
  themeKey: CarThemeKey;
}

export default function ContactForm({ backgroundImage = '/img/Fondo Cotización.jpg', themeKey }: CotizacionProps) {
  const theme = carThemes[themeKey];
  const textColor = theme.colors.sectionText;

  return (
    <section
      className="relative w-full bg-cover bg-no-repeat py-20 min-h-screen flex items-center"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        color: textColor
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Columna izquierda - puede contener información adicional o estar vacía para dar espacio */}
          <div className="hidden md:flex md:items-end md:justify-start relative">
            {/* Badge de garantía */}
            <div className="absolute bottom-4 left-4">
              <Image src={certificateImage} width={180} height={240} alt="Certificado de Garantía" className="w-auto h-auto" />
            </div>
          </div>

          {/* Columna derecha - formulario */}
          <div className="bg-black/30 p-8 rounded-lg backdrop-blur-sm md:ml-auto w-full max-w-lg">
            <h1 className="text-4xl md:text-4xl font-bold mb-8">SOLICITA TU COTIZACIÓN</h1>
            <CotizacionForm themeKey={themeKey} />
          </div>
        </div>

        {/* Badge de garantía en móvil */}
        <div className="md:hidden absolute bottom-4 left-4">
          <Image src={certificateImage} width={120} height={160} alt="Certificado de Garantía" className="w-auto h-auto" />
        </div>
      </div>
    </section>
  );
}
