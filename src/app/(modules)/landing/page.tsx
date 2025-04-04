/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { NavBar } from '@/components/ui/navbar';

import ColorContext from '@/components/ui/color-context';
import { Footer } from '@/components/ui/footer';
import { CarSelector } from '@/components/ui/carSelector';
import { VideoHero } from '@/components/ui/video-hero';

export default function LandingPage() {
  return (
    <>
      <ColorContext.Provider value={'#000000'}>
        <NavBar disableTransparent />
      </ColorContext.Provider>
      <VideoHero />
      <CarSelector />

      <Footer />
    </>
  );
}
