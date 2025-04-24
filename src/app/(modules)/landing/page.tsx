/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from 'next/dynamic';
import WhatsAppButton from './components/whats-app-button';
import TestDriveButton from './components/test-drive-button';

import { getVehicleById, vehiclesData } from './data/vehicles-constant';

const VideoHeroSection = dynamic(() => import('./components/video-hero-section'));

import Image from 'next/image';

import { Metadata } from 'next';
import CarModelsGallery from './components/car-model-gallery';

export const metadata: Metadata = {
  title: 'Jetour Honduras | SUVs de Lujo y Alta Tecnología',
  description:
    'Concesionario oficial de vehículos Jetour en Honduras. Modernos SUVs con tecnología de vanguardia y diseño premium. Distribuido por Autos Aliados.',
  alternates: {
    canonical: 'https://www.jetourhn.com/landing'
  },
  openGraph: {
    title: 'Jetour Honduras | SUVs de Lujo y Alta Tecnología',
    description:
      'Concesionario oficial de vehículos Jetour en Honduras. Modernos SUVs con tecnología de vanguardia y diseño premium. Distribuido por Autos Aliados.',
    url: 'https://www.jetourhn.com/landing',
    images: [
      {
        url: '/img/landing/T2/Fashion Blocks 2.jpg',
        width: 1200,
        height: 630,
        alt: 'Jetour Honduras'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jetour Honduras | SUVs de Lujo y Alta Tecnología',
    description:
      'Concesionario oficial de vehículos Jetour en Honduras. Modernos SUVs con tecnología de vanguardia y diseño premium. Distribuido por Autos Aliados.',
    images: [
      {
        url: '/img/landing/T2/Fashion Blocks 2.jpg',
        width: 1200,
        height: 630,
        alt: 'Jetour Honduras'
      }
    ]
  }
};

export default function LandingPage() {
  const carTheme = 'orange'; // Cambia esto según el vehículo seleccionado

  const landingCar = getVehicleById('t2');
  if (!landingCar) {
    return <div>Car not found</div>;
  }

  return (
    <>
      <WhatsAppButton />
      {/* <TestDriveButton carTheme={carTheme} /> */}

      <section className="mt-[10px] relative">
        <Image className="w-full" alt="Logo home jetour" height={512} width={512} src={'/landing/main_hero_background.jpg'} />

        <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[18rem] ">
          <div className="flex flex-col">
            <h1 className="font-bold text-6xl text-center text-white">Bienvenido a</h1>
            <Image
              className="w-auto h-[140px] object-contain -mt-8"
              alt="Logo jetour"
              height={512}
              width={512}
              src={'/landing/jetour_logo_white_drive_your_future.png'}
            />
          </div>
          <h2 className="font-semibold text-3xl text-center text-white -mt-5">Diseñado para moverte, creado para inspirarte</h2>
        </div>
      </section>

      <VideoHeroSection
        extraClassName=""
        sections={[
          {
            backgroundImage: '/landing/videosection1_background.jpg',
            logo: '/landing/videosection1_car_logo.png',
            title: 'PIENSA EN LA AVENTURA',
            subtitle: '',
            themeKey: 'orange',
            videos: {
              leftVideo: '/landing/videosection1_mainvideo.mp4'
            }
          },
          {
            imageLeftExtraClassName: 'md:-ml-[0] lg:-ml-[400px]',
            backgroundImage: '/landing/videosection2_background.jpg',
            logo: '/landing/videosection2_car_logo.png',
            title: 'DISEÑADA PARA SATISFACER A LOS MAS EXIGENTES',
            subtitle: '',
            themeKey: 'turquoise',
            videos: {
              leftVideo: '/landing/videosection2_mainvideo.mp4'
            }
          }
        ]}
      />

      <CarModelsGallery models={Object.values(vehiclesData)} themeKey="orange" />

      {/*

      <VehicleDetailPage showTestDriveButton={false} carData={landingCar} /> */}
    </>
  );
}
