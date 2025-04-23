/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from 'next/dynamic';
import WhatsAppButton from './components/whats-app-button';
import TestDriveButton from './components/test-drive-button';

import t2LandingBackground from '@root/public/img/landing/T2/Fashion Blocks 2.webp';
import t2LandingLogo from '@root/public/img/T2/Logo.png';

import dashingLandingBackground from '@root/public/img/landing/DASHING/Dashing Portada.jpg';
import dashingLandingLogo from '@root/public/img/DASHING/Logo.png';
import CarModelsGallery from './components/car-model-gallery';
import { getVehicleById, vehiclesData } from './data/vehicles-constant';
import VehicleDetailPage from './components/vehicle-deatail-page';

const VideoHeroSection = dynamic(() => import('./components/video-hero-section'));

import Image from 'next/image';
import homeImage from '@root/public/img/landing/Home Jetour.jpg';
import jetourLogo from '@root/public/img/JetourLogo.png';

import { Metadata } from 'next';

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
      <TestDriveButton carTheme={carTheme} />

      <section className="mt-[10px] relative">
        <Image className="w-full" alt="Logo home jetour" height={512} width={512} src={homeImage} placeholder="blur" />

        <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[18rem] ">
          <div className="flex flex-col">
            <h1 className="font-bold text-6xl text-center text-white">Bienvenido a</h1>
            <Image className="w-auto h-[140px] object-contain -mt-8" alt="Logo jetour" height={512} width={512} src={jetourLogo} placeholder="blur" />
          </div>
          <h2 className="font-semibold text-3xl text-center text-white -mt-5">Diseñado para moverte, creado para inspirarte</h2>
        </div>
      </section>

      <VideoHeroSection
        extraClassName=""
        sections={[
          {
            backgroundImage: t2LandingBackground,
            logo: t2LandingLogo,
            title: 'PIENSA EN LA AVENTURA',
            subtitle: '',
            themeKey: 'orange',
            videos: {
              rightVideo: '/img/landing/T2/9X16-40S - Trim.mp4',
              leftVideo: '/img/landing/T2/T2 TVC-30s-4K.mp4'
            }
          },
          {
            imageLeftExtraClassName: 'md:-ml-[0] lg:-ml-[400px]',
            backgroundImage: dashingLandingBackground,
            logo: dashingLandingLogo,
            title: 'DISEÑADA PARA SATISFACER A LOS MAS EXIGENTES',
            subtitle: '',
            themeKey: 'turquoise',
            videos: {
              leftVideo: '/img/landing/DASHING/1 days to go.mp4',
              rightVideo: '/video/Video-Dashing/Product CG Video.mp4'
            }
          }
        ]}
      />

      <CarModelsGallery models={Object.values(vehiclesData)} themeKey="orange" />

      <VehicleDetailPage showTestDriveButton={false} carData={landingCar} />
    </>
  );
}
