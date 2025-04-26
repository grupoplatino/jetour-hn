/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from 'next/dynamic';
import WhatsAppButton from './components/whats-app-button';

import { getVehicleById, vehiclesData } from './data/vehicles-constant';

const VideoHeroSection = dynamic(() => import('./components/video-hero-section'));

import Image from 'next/image';

import { Metadata } from 'next';
import CarModelsGallery from './components/car-model-gallery';
import ContactForm from './components/contact-form';
import { generateLandingMetadata, LandingSEO } from '@/components/seo/landing-seo';

export const metadata: Metadata = generateLandingMetadata();

export default function LandingPage() {
  const carTheme = 'orange'; // Cambia esto según el vehículo seleccionado

  const landingCar = getVehicleById('t2');
  if (!landingCar) {
    return <div>Car not found</div>;
  }

  return (
    <>
      <LandingSEO />

      <WhatsAppButton />
      {/* <TestDriveButton carTheme={carTheme} /> */}

      <section className="mt-[10px] relative">
        <Image className="w-full" alt="Logo home jetour" height={800} width={800} unoptimized src={'/landing/main_hero_background.webp'} />

        {/* <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[18rem] ">
          <div className="flex flex-col">
            <h1 className="font-bold text-6xl text-center text-black">Bienvenido a</h1>
            <Image
              className="w-auto h-[140px] object-contain -mt-8"
              alt="Logo jetour"
              height={512}
              width={512}
              src={'/landing/jetour_logo_black_drive_your_future.png'}
            />
          </div>
        </div> */}
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

      <ContactForm themeKey="orange" />
    </>
  );
}
