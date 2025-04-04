import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { carThemes } from '../page';
import { ThemeKey } from '../data/theme-definitions';
import CotizacionForm from './contact-form-client';

import certificateImage from '@root/public/img/Certificado.jpg';

interface CotizacionProps {
  backgroundImage?: StaticImageData | string;
  themeKey: ThemeKey;
}

export default function ContactForm({ backgroundImage = '/img/Fondo Cotización.jpg', themeKey }: CotizacionProps) {
  const theme = carThemes[themeKey];
  const textColor = theme.colors.sectionText;

  return (
    <section
      className="relative h-screen w-full bg-cover bg-no-repeat min-h-fit"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        color: textColor
      }}
    >
      <div className="absolute flex flex-col gap-y-6 lg:right-12 md:right-44 right-[1rem] top-32 w-[22rem] min-h-fit h-full">
        <h1 className="text-5xl font-bold">SOLICITA TU COTIZACIÓN</h1>

        <CotizacionForm themeKey={themeKey} />
      </div>

      {/* Badge de garantía */}
      <div className="absolute bottom-8 left-8">
        <Image src={certificateImage} width={150} height={200} alt="Certificado de Garantía" className="w-auto h-auto" />
      </div>
    </section>
  );
}
