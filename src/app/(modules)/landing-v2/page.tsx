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

import t2ImageSection from '@root/public/img/T2/Approach and departure angles.webp'; // Cambia esto por la ruta correcta de tu imagen
import t2ImageSection2 from '@root/public/img/T2/Magic Electric Door.webp'; // Cambia esto por la ruta correcta de tu imagen

import securityImage from '@root/public/img/T2/Seaside scenery.webp'; // Cambia esto por la ruta correcta de tu imagen

import extraStorageT2 from '@root/public/img/T2/Extra Large Storage Space.webp'; // Cambia esto por la ruta correcta de tu imagen
import screenT2 from '@root/public/img/T2/15.6_high-resolution color touchscreen.webp'; // Cambia esto por la ruta correcta de tu imagen

import t2SkeletonImage from '@root/public/img/T2/Steel skeletonized body.webp'; // Cambia esto por la ruta correcta de tu imagen
import t2TopSkeletonImage from '@root/public/img/T2/Matrix protected roof.webp'; // Cambia esto por la ruta correcta de tu imagen
import t2SecondSeatsRowImage from '@root/public/img/T2/Second row seats faced down.webp'; // Cambia esto por la ruta correcta de tu imagen
import t2ProximityImage from '@root/public/img/T2/Forward-collision warning system copia.webp'; // Cambia esto por la ruta correcta de tu imagen

import CarFeaturesShowcase, { CarColorModel, CarFeature } from './components/car-features-show-case';
import { VideoSection } from './components/car-video-section';
import { SplitImageSection } from './components/split-image-section';
import { FeaturesSection } from './components/features-section';
import SinglePictureSection from './components/single-picture-section';
import CarGallerySection from './components/car-gallery-section';
import { SpecsSection } from './components/specs-section';
import { CarSpects } from './components/car-specs';
import { t2SpecsData } from './data/t2-specs-data';
import Viewer3D from './components/3d-viewer-server';
import ContactForm from './components/contact-form';

const carData = {
  primaryColor: '#f28b2d', // Color naranja para T2
  ThreeSixtyView: {
    default: {
      color: 'nightBlack', // Color por defecto
      path: '/img/T2/T2 360_/Night Black/T2-EXT-'
    },
    interior: '/img/X70 Plus/X70PLUS_360/INT/X70PLUS-INT.png', // Imagen de placeholder
    exterior: {
      white: {
        imageCount: 36,
        path: '/img/T2/T2 360_/White/T2-EXT-',
        hexColor: '#FFFFFF',
        colorName: 'Blanco'
      },
      nightBlack: {
        imageCount: 36,
        path: '/img/T2/T2 360_/Night Black/T2-EXT-',
        hexColor: '#181818',
        colorName: 'Negro Noche'
      },
      sand: {
        imageCount: 36,
        path: '/img/T2/T2 360_/Sand/T2-EXT-',
        hexColor: '#d8cbb1',
        colorName: 'Arena'
      },
      highwayGrey: {
        imageCount: 36,
        path: '/img/T2/T2 360_/Highway Grey/T2-EXT-',
        hexColor: '#747b89',
        colorName: 'Gris Carretera'
      },
      mistyCyan: {
        imageCount: 36,
        path: '/img/T2/T2 360_/Misty Cyan/T2-EXT-',
        hexColor: '#97a8bd',
        colorName: 'Azul Niebla'
      }
    }
  }
};

// Definimos los temas de colores para cada modelo de vehículo
export const carThemes = {
  orange: {
    colors: {
      primary: '#FF7A00', // Color naranja para T2
      secondary: '#FFA866',
      text: '#FFFFFF',
      background: '#1D1D1B',
      testDriveText: 'black', // Color del texto para el botón de test drive,
      sectionText: '#FFFFFF' // Color del texto para la sección
    }
  },
  turquoise: {
    colors: {
      primary: '#00A3B4', // Color turquesa para Dashing
      secondary: '#66D8E3',
      text: '#FFFFFF',
      background: '#1D1D1B',
      testDriveText: '#FFFFFF',
      sectionText: '#FFFFFF' // Color del texto para la sección
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

      <SplitImageSection
        image1={t2ImageSection}
        image2={t2ImageSection2}
        sectionTitle="T2 FUE CREADA PARA LA AVENTURA"
        sectionText="Tiene un sistema de tracción en las 4 ruedas que la hace perfecta para cualquier terreno, cuenta con 7 modos de conducción que te permitirán personalizar la conducción."
        carTheme="orange"
        carModelName="T2"
      />

      <SplitImageSection
        image1={screenT2}
        image2={extraStorageT2}
        sectionTitle="ESTILO POR FUERA Y POR DENTRO"
        sectionText="La T2 tiene un impresionante tablero, Volante multifunción, pantalla touchscreen de 15 pulgadas, parlantes Sony, cargador inalámbrico, interior de lujo con asientos ventilados, luces atmosféricas."
        carTheme="orange"
        carModelName="T2"
        brochureUrl="https://www.jetour.com.co/brochure/T2.pdf"
      />

      <FeaturesSection
        carTheme="orange"
        features={[
          {
            image: t2ImageSection,
            label: 'MODELADO TRIDIMENSIONAL MULTINIVEL'
          },
          {
            image: t2ImageSection2,
            label: 'PANTALLA CENTRAL DE 15.6'
          },
          {
            image: screenT2,
            label: 'DISTANCIA ENTRE EJES SÚPER LARGA'
          }
        ]}
        title="COMODIDAD DESDE DONDE LA VEAS"
      />

      <SinglePictureSection title="SEGURIDAD Y RESPALDO PARA DISFRUTAR EL VIAJE" image={securityImage} />

      <CarGallerySection images={[t2SkeletonImage, t2TopSkeletonImage, t2SecondSeatsRowImage, t2ProximityImage]} />

      <SpecsSection specs={t2SpecsData} themeKey="orange" />

      <Viewer3D carData={carData} />

      <ContactForm themeKey="orange" />
    </>
  );
}
