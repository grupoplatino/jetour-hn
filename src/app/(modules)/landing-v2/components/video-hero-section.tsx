// src/components/ui/landing/video-hero-section/video-hero-section.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ThemeKey } from '../data/vehicles-constant';

interface VideoHeroSectionProps {
  backgroundImage: string | StaticImageData;
  logo: string | StaticImageData;
  title: string;
  subtitle: string;
  themeKey: ThemeKey;
  videos: {
    leftVideo: string;
    rightVideo: string;
  };
}

export function VideoHeroSection({ backgroundImage, logo, title, subtitle, videos }: VideoHeroSectionProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Contenedor principal con elementos superpuestos */}
      <div className="relative w-full h-full flex">
        {/* Sección izquierda - Imagen de fondo con clipPath */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ clipPath: 'polygon(0% 0%, 45% 0%, 35% 100%, 0% 100%)' }}>
          <Image className="object-cover w-full h-full" src={backgroundImage} priority fill alt="Background" />

          {/* Logo y texto superpuestos en la sección izquierda */}
          <div className="absolute top-1/4 left-8 z-10">
            <Image src={logo} width={120} height={80} alt="Logo" className="mb-4" />
            <h1 className="text-white text-xl font-bold uppercase">{title}</h1>
            <p className="text-white mt-2 font-medium uppercase">{subtitle}</p>
          </div>
        </div>

        {/* Sección derecha - Video principal con clipPath */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ clipPath: 'polygon(45% 0%, 100% 0%, 100% 100%, 35% 100%)' }}>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover" src={videos.leftVideo} />

          {/* Texto "VIDEO" en la esquina inferior derecha */}
          <div className="absolute bottom-10 right-10 z-10">
            <h2 className="text-white text-6xl font-bold opacity-60">VIDEO</h2>
          </div>

          {/* Botones 01 02 para cambiar videos (estáticos por ahora) */}
          <div className="absolute bottom-10 right-56 z-20 flex gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold">01</div>
            <div className="w-12 h-12 bg-black/40 text-white rounded-full flex items-center justify-center font-bold">02</div>
          </div>
        </div>

        {/* Tercer elemento - Video pequeño en el medio con clipPath */}
        <div className="absolute bottom-0 left-[20%] w-[25%] h-[60%] z-10" style={{ clipPath: 'polygon(45% 0%, 100% 0%, 70% 100%, 10% 100%)' }}>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover" src={videos.rightVideo} />
        </div>

        {/* Barra superior naranja */}
        <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 z-20"></div>
      </div>
    </section>
  );
}
