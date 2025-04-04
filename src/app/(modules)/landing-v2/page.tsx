/* eslint-disable @typescript-eslint/no-unused-vars */
import t2Image from '@root/public/img/T2/T2 Jetour.jpg';
import t2Logo from '@root/public/img/T2/Logo.png';
import certificateLogo from '@root/public/img/Certificado.png';
import whatsAppLogo from '@root/public/img/WhatsappLogo.png';
import jetourLogo from '@root/public/img/JetourLogo.png';

import { StaticImageData } from 'next/image';
import Image from 'next/image';
import clsx from 'clsx';

import t2BlackImage from '@root/public/img/T2/car black 0022 (1).webp';
import t2WhiteImage from '@root/public/img/T2/car white 0022.webp';
import t2NeutralImage from '@root/public/img/T2/car.0022.webp';
import CarFeaturesShowcase, { CarColorModel, CarFeature } from './components/car-features-show-case';
import { VideoSection } from './components/car-video-section';

// Definimos los temas de colores para cada modelo de vehículo
export const carThemes = {
  orange: {
    colors: {
      primary: '#FF7A00', // Color naranja para T2
      secondary: '#FFA866',
      text: '#FFFFFF',
      background: '#1D1D1B',
      testDriveText: 'black' // Color del texto para el botón de test drive
    }
  },
  turquoise: {
    colors: {
      primary: '#00A3B4', // Color turquesa para Dashing
      secondary: '#66D8E3',
      text: '#FFFFFF',
      background: '#1D1D1B',
      testDriveText: '#FFFFFF'
    }
  }
};

// Tipo para el tema
export type CarTheme = keyof typeof carThemes;

// Componente para "Agenda tu test drive"
interface TestDriveButtonProps {
  carTheme: CarTheme;
  fixed?: boolean;
}

const TestDriveButton: React.FC<TestDriveButtonProps> = ({ carTheme, fixed = true }) => {
  const theme = carThemes[carTheme].colors;

  return (
    <div
      className={clsx(
        'flex flex-row gap-2 w-full md:w-auto md:right-[-2.25rem] lg:right-0 md:scale-75 lg:scale-100',
        fixed
          ? 'fixed md:fixed right-5 z-50 top-1/2 transform -translate-y-1/2' // Centrado verticalmente
          : 'absolute md:absolute'
      )}
    >
      <div className={`w-2 h-12 -skew-x-[20deg] md:-skew-x-12`} style={{ backgroundColor: theme.primary }}></div>
      <div className={`w-2 h-12 -skew-x-[20deg] md:-skew-x-12`} style={{ backgroundColor: theme.primary }}></div>
      <div
        className="ml-[-8px] md:ml-[-3px] w-full flex flex-row justify-center items-center px-8"
        style={{
          backgroundColor: theme.primary,
          clipPath: 'polygon(3.5% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }}
      >
        <p className={clsx('font-bold', theme.testDriveText === 'black' ? 'text-black' : 'text-white')}>AGENDA TU TEST DRIVE</p>
      </div>
    </div>
  );
};

// Componente para el botón de WhatsApp
const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Image src={whatsAppLogo} alt="WhatsApp" width={100} height={100} className="cursor-pointer" />
    </div>
  );
};

// Componente para la garantía
interface WarrantyBadgeProps {
  className?: string;
}

const WarrantyBadge: React.FC<WarrantyBadgeProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={certificateLogo} alt="5 años de garantía" width={200} height={150} className="object-contain" />
    </div>
  );
};

// Componente principal del Hero
interface CarHeroProps {
  backgroundImageUrl: string;
  backgroundImage: StaticImageData;
  carLogo: StaticImageData;
  tagline: string;
  carTheme: CarTheme;
}

const CarHero: React.FC<CarHeroProps> = ({ backgroundImage, carLogo, tagline, carTheme }) => {
  const theme = carThemes[carTheme].colors;

  return (
    <section className="relative w-full h-screen">
      {/* Línea superior en el color del tema */}
      <div className="absolute top-0 left-0 right-0 h-1.5 z-10 max-w-full" style={{ backgroundColor: theme.primary }} />

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

// Componente principal que integra todo
export default function LandingPage() {
  const carTheme = 'orange'; // Cambia esto según el vehículo seleccionado

  const t2Models: CarColorModel[] = [
    {
      carImage: t2BlackImage,
      color: 'nightBlack',
      colorName: 'Negro',
      hexColor: '#030304'
    },
    {
      carImage: t2WhiteImage,
      color: 'white',
      colorName: 'Blanco',
      hexColor: '#ffffff'
    },
    {
      carImage: t2NeutralImage,
      color: 'neutralColor',
      colorName: 'Color Neutral',
      hexColor: '#d8cbb1' // Este es un color similar al arena que vi en la imagen
    }
  ];

  const t2Features: CarFeature[] = [
    { name: 'CABALLOS DE FUERZA MÁX.', value: 250, position: 'topleft' },
    { name: 'TORQUE MÁXIMO', value: 390, position: 'topcenter' },
    { name: 'VELOCIDAD MÁXIMA (KM/H)', value: 197, position: 'topright' },
    { name: 'DISTANCIA ENTRE EJES (MM)', value: 2800, position: 'bottomleft' },
    { name: 'DESPLAZAMIENTO (ML)', value: 1998, position: 'bottomright' }
  ];

  return (
    <>
      <WhatsAppButton />
      <TestDriveButton carTheme={carTheme} />
      <CarHero backgroundImageUrl={t2Image.src} backgroundImage={t2Image} carLogo={t2Logo} tagline="AVENTURAS SIN LÍMITES" carTheme="orange" />
      {/* Añade el componente de características del carro */}
      <CarFeaturesShowcase carModels={t2Models} features={t2Features} carTheme="orange" />
      <VideoSection videoUrl="/video/Video-T2/Dubai Night Tour.mp4" thumbnailUrl="/img/T2/T2 Jetour.jpg" />
    </>
  );
}
