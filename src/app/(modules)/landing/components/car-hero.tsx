import { StaticImageData } from 'next/image';
import { CarThemeKey, carThemes } from '../data/theme-definitions';
import WarrantyBadge from './warrabty-badge';
import Image from 'next/image';

interface CarHeroProps {
  backgroundImageUrl: string;
  backgroundImage: StaticImageData | string;
  carLogo: StaticImageData | string;
  tagline: string;
  carTheme: CarThemeKey;
  displayJetourLogo?: boolean;
}

const CarHero: React.FC<CarHeroProps> = ({ backgroundImage, carLogo, tagline, carTheme, displayJetourLogo }) => {
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
          <div className="flex flex-row gap-0">
            <Image
              src={carLogo}
              alt="Car Logo"
              width={250}
              height={100}
              className={`object-contain -ml-[6rem] md:-ml-0 scale-50 md:scale-100 ${displayJetourLogo ? '' : 'mb-4'}`}
            />
            {displayJetourLogo && (
              <Image
                src={jetourLogo}
                alt="Jetour Logo"
                width={250}
                height={250}
                className="object-contain -ml-[8rem] md:-ml-0 mt-autNo -mb-5 scale-50 md:scale-100"
              />
            )}
          </div>
          <h1
            className="text-4xl font-bold uppercase text-white"
            // style={{ color: theme.primary }}
          >
            {tagline}
          </h1>
        </div>
      </div>

      <WarrantyBadge className="absolute bottom-28 max-w-full" />
    </section>
  );
};

export default CarHero;
