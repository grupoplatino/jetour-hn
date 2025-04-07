import { StaticImageData } from 'next/image';
import { CarThemeKey, carThemes } from '../data/theme-definitions';
import WarrantyBadge from './warrabty-badge';
import jetourLogo from '@root/public/img/JetourLogo.png';
import Image from 'next/image';

interface CarHeroProps {
  backgroundImageUrl: string;
  backgroundImage: StaticImageData | string;
  carLogo: StaticImageData | string;
  tagline: string;
  carTheme: CarThemeKey;
}

const CarHero: React.FC<CarHeroProps> = ({ backgroundImage, carLogo, tagline, carTheme }) => {
  const theme = carThemes[carTheme].colors;

  return (
    <section className="relative w-full h-screen">
      {/* Línea superior en el color del tema */}
      {/* <div className="absolute top-0 left-0 right-0 h-1.5 z-10 max-w-full" style={{ backgroundColor: theme.primary }} /> */}

      {/* Imagen de fondo */}
      <div className="w-full h-full relative max-w-full">
        <Image src={backgroundImage} alt="Background" fill className="object-cover object-center max-w-full" priority />

        {/* Contenido del hero */}
        <div className="absolute bottom-32 left-16 z-20 flex flex-col max-w-full">
          <div className="flex w-fit">
            <Image src={carLogo} alt="Car Logo" width={250} height={100} className="object-contain -ml-10" />
            <Image src={jetourLogo} alt="Jetour Logo" width={250} height={250} className="object-contain mt-auto -ml-10 -mb-5" />
          </div>
          <h1 className="text-4xl font-bold uppercase" style={{ color: theme.primary }}>
            {tagline}
          </h1>
        </div>
      </div>

      <WarrantyBadge className="absolute bottom-28 max-w-full" />
    </section>
  );
};

export default CarHero;
