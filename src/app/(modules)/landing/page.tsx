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

      <VideoHeroSection
        extraClassName="mt-[50px]"
        sections={[
          {
            backgroundImage: t2LandingBackground,
            logo: t2LandingLogo,
            title: 'PIENSA EN LA AVENTURA',
            subtitle: '',
            themeKey: 'orange',
            videos: {
              rightVideo: '/img/landing/T2/9X16-40S.mp4',
              leftVideo: '/img/landing/T2/T2 TVC-30s-4K.mp4'
            }
          },
          {
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
