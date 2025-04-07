/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { CarThemeKey, carThemes, ThemeCars } from '../data/theme-definitions';

interface VideoHeroSectionProps {
  backgroundImage: string | StaticImageData;
  logo: string | StaticImageData;
  title: string;
  subtitle: string;
  themeKey: CarThemeKey;
  videos: {
    leftVideo: string;
    rightVideo: string;
  };
  extraClassName?: string;
}

export default function VideoHeroSection({ backgroundImage, logo, title, subtitle, videos, extraClassName, themeKey }: VideoHeroSectionProps) {
  const theme = carThemes[themeKey] as ThemeCars;

  // Estado para controlar qué video está en qué posición
  const [isSwapped, setIsSwapped] = useState(false);

  // Referencias para los videos
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const smallVideoRef = useRef<HTMLVideoElement>(null);

  // Función para cambiar los videos de posición
  const swapVideos = () => {
    setIsSwapped(!isSwapped);
  };

  // Función para mostrar el video en pantalla completa
  const handleFullscreen = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen();
      }
    }
  };

  // Determinamos qué video mostrar en cada posición
  const mainVideo = isSwapped ? videos.rightVideo : videos.leftVideo;
  const secondaryVideo = isSwapped ? videos.leftVideo : videos.rightVideo;

  return (
    <section className={cn('relative w-full h-screen overflow-hidden', extraClassName)}>
      {/* Contenedor principal con elementos superpuestos */}
      <div className="relative w-full h-full flex">
        {/* Sección izquierda - Imagen de fondo con clipPath */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ clipPath: 'polygon(0% 0%, 45% 0%, 35% 100%, 0% 100%)' }}>
          <Image className="object-contain w-full h-full -ml-[600px]" src={backgroundImage} priority fill alt="Background" />

          {/* Logo y texto superpuestos en la sección izquierda */}
          <div className="absolute top-[60px] left-8 z-10">
            <Image
              src={logo}
              width={theme?.colors?.landingVideoSectionLogiSizes?.width ? theme?.colors?.landingVideoSectionLogiSizes?.width : 170}
              height={theme?.colors?.landingVideoSectionLogiSizes?.height ? theme?.colors?.landingVideoSectionLogiSizes?.height : 170}
              alt="Logo"
              className="h-auto"
            />
            <h1
              className={cn(
                'text-white text-3xl font-bold uppercase max-w-[600px]',
                theme.colors.landingVideoSectionTextColor === 'white' ? 'text-white' : 'text-black',
                theme?.colors?.landingVideoTitleClass
              )}
            >
              {title}
            </h1>
            <p className="text-white mt-2 font-medium uppercase">{subtitle}</p>
          </div>
        </div>

        {/* Sección derecha - Video principal con clipPath */}
        <div
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          style={{ clipPath: 'polygon(45% 0%, 100% 0%, 100% 100%, 35% 100%)' }}
          onDoubleClick={() => handleFullscreen(mainVideoRef as any)}
        >
          <video ref={mainVideoRef} autoPlay loop muted playsInline className="w-full h-full object-cover" src={mainVideo} />

          {/* Botones 01 02 para cambiar videos */}
          <div className="absolute bottom-10 right-10 z-20 flex gap-4">
            <div
              className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all cursor-pointer',
                !isSwapped ? 'bg-white text-black' : 'bg-black/40 text-white'
              )}
              onClick={() => setIsSwapped(false)}
            >
              01
            </div>
            <div
              className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all cursor-pointer',
                isSwapped ? 'bg-white text-black' : 'bg-black/40 text-white'
              )}
              onClick={() => setIsSwapped(true)}
            >
              02
            </div>
          </div>
        </div>

        {/* Tercer elemento - Video pequeño en el medio con clipPath */}
        <div
          className="absolute bottom-0 left-[20%] w-[25%] h-[60%] z-10 cursor-pointer"
          style={{ clipPath: 'polygon(45% 0%, 100% 0%, 70% 100%, 10% 100%)' }}
          onClick={swapVideos}
          onDoubleClick={() => handleFullscreen(smallVideoRef as any)}
        >
          <video ref={smallVideoRef} autoPlay loop muted playsInline className="w-full h-full object-cover" src={secondaryVideo} />
        </div>
      </div>
    </section>
  );
}
