/* eslint-disable @typescript-eslint/no-unused-vars */
import t2Image from '@root/public/img/T2/T2 Jetour.jpg';
import t2Logo from '@root/public/img/T2/Logo.png';

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

import { CarColorModel, CarFeature } from './components/car-features-show-case';
import dynamic from 'next/dynamic';
import WhatsAppButton from './components/whats-app-button';
import TestDriveButton from './components/test-drive-button';
import CarHero from './components/car-hero';

// 🚀 Importación dinámica de componentes
const CarFeaturesShowcase = dynamic(() => import('./components/car-features-show-case'));
const VideoSection = dynamic(() => import('./components/car-video-section'));
const SplitImageSection = dynamic(() => import('./components/split-image-section'));
const FeaturesSection = dynamic(() => import('./components/features-section'));
const SinglePictureSection = dynamic(() => import('./components/single-picture-section'));
const CarGallerySection = dynamic(() => import('./components/car-gallery-section'));
const SpecsSection = dynamic(() => import('./components/specs-section'));
const ContactForm = dynamic(() => import('./components/contact-form'));
const VehicleVisualizer = dynamic(() => import('./components/new-3d'));

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

      <section className="p-16">
        <VehicleVisualizer
          title="VISUALIZADOR 3D"
          basePath="/img/T2/T2 360_"
          filePattern="T2-EXT-{index}.png"
          imageCount={36}
          colors={[
            { name: 'Gris', hex: '#747b89', folderName: 'Highway Grey', class: 'bg-[#747b89]' },
            { name: 'Cian', hex: '#97a8bd', folderName: 'Misty Cyan', class: 'bg-[#97a8bd]' },
            { name: 'Blanco', hex: '#FFFFFF', folderName: 'White', class: 'border border-2' },
            { name: 'Negro', hex: '#1d1d1b', folderName: 'Night Black', class: 'bg-[#030304]' },
            { name: 'Arena', hex: '#d8cbb1', folderName: 'Sand', class: 'bg-[#d8cbb1]' }
          ]}
          interiorImagePath="/img/X70 Plus/X70PLUS_360/INT/X70PLUS-INT.png"
          themeKey="orange"
          defaultColorIndex={0}
        />
      </section>

      <ContactForm themeKey="orange" />
    </>
  );
}
