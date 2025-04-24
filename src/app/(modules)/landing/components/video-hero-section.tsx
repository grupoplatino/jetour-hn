'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { CarThemeKey, carThemes, ThemeCars } from '../data/theme-definitions';

// Define the interface for a single section
interface SectionData {
  imageLeftExtraClassName?: string;
  backgroundImage: string | StaticImageData;
  logo: string | StaticImageData;
  title: string;
  subtitle: string;
  videos: {
    leftVideo: string;
    rightVideo: string;
  };
  themeKey: CarThemeKey;
}

interface VideoHeroCarouselProps {
  sections: SectionData[];
  extraClassName?: string;
  autoSwipeInterval?: number; // Optional auto-swipe interval in milliseconds
}

export default function VideoHeroCarousel({
  sections,
  extraClassName,
  autoSwipeInterval = 0 // Default: no auto-swipe
}: VideoHeroCarouselProps) {
  // Ensure we have at least one section
  if (sections.length === 0) {
    throw new Error('At least one section is required');
  }

  // Current section index
  const [currentIndex, setCurrentIndex] = useState(0);

  // References for videos
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const smallVideoRef = useRef<HTMLVideoElement>(null);

  // Auto-swipe effect
  useEffect(() => {
    if (autoSwipeInterval > 0 && sections.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
      }, autoSwipeInterval);

      return () => clearInterval(intervalId);
    }
  }, [autoSwipeInterval, sections.length]);

  // Function to handle manual section change
  const changeSection = (index: number) => {
    setCurrentIndex(index);
  };

  // Get current section
  const currentSection = sections[currentIndex];
  const theme = carThemes[currentSection.themeKey] as ThemeCars;

  // Fullscreen handler
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

  return (
    <section className={cn('relative w-full h-screen overflow-hidden', extraClassName)}>
      {/* Contenedor principal con elementos superpuestos */}
      <div className="relative w-full h-full flex">
        {/* Sección izquierda - Imagen de fondo con clipPath */}
        <div
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-500"
          style={{
            clipPath: 'polygon(0% 0%, 45% 0%, 35% 100%, 0% 100%)',
            opacity: 1 // You could add more sophisticated transition if needed
          }}
        >
          <Image
            className={cn('object-contain w-full h-full md:-ml-[400px] lg:-ml-[600px]', currentSection.imageLeftExtraClassName)}
            src={currentSection.backgroundImage}
            fill
            alt="Background"
          />
        </div>

        {/* Logo y texto superpuestos en la sección izquierda */}
        <div className="absolute overflow-visible top-[60px] left-6 z-20">
          <Image
            src={currentSection.logo}
            width={theme?.colors?.landingVideoSectionLogiSizes?.width ? theme?.colors?.landingVideoSectionLogiSizes?.width : 170}
            height={theme?.colors?.landingVideoSectionLogiSizes?.height ? theme?.colors?.landingVideoSectionLogiSizes?.height : 170}
            alt="Logo"
            className="h-auto"
          />
          <h1
            className={cn(
              'text-white text-2xl md:text-3xl font-bold uppercase max-w-[600px]',
              theme.colors.landingVideoSectionTextColor === 'white' ? 'text-white' : 'text-black',
              theme?.colors?.landingVideoTitleClass
            )}
          >
            {currentSection.title}
          </h1>
          <p className="text-white mt-2 font-medium uppercase">{currentSection.subtitle}</p>
        </div>

        {/* Sección derecha - Video principal con clipPath */}
        <div
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          style={{ clipPath: 'polygon(45% 0%, 100% 0%, 100% 100%, 35% 100%)' }}
          onDoubleClick={() => handleFullscreen(mainVideoRef as any)}
        >
          <video
            key={currentSection.videos.leftVideo} // Force re-render on video change
            ref={mainVideoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={currentSection.videos.leftVideo}
          />

          {/* Botones para cambiar secciones */}
          <div className="absolute bottom-10 right-10 z-20 flex gap-4">
            {sections.map((_, index) => (
              <div
                key={index}
                className={cn(
                  'w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all cursor-pointer',
                  currentIndex === index ? 'bg-white text-black' : 'bg-black/40 text-white'
                )}
                onClick={() => changeSection(index)}
              >
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Tercer elemento - Video pequeño en el medio con clipPath */}
        <div className="absolute bottom-0 left-[20%] w-[25%] h-[60%] z-10 cursor-pointer" style={{ clipPath: 'polygon(45% 0%, 100% 0%, 70% 100%, 10% 100%)' }}>
          <video
            key={currentSection.videos.rightVideo} // Force re-render on video change
            ref={smallVideoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={currentSection.videos.rightVideo}
          />
        </div>
      </div>
    </section>
  );
}
