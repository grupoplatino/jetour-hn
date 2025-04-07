// src/components/ui/landing/video-hero-section/video-hero-section.tsx
import React from 'react';
import Image from 'next/image';
import { VideoPlayerClient } from './video-player-client';

interface VideoHeroSectionProps {
  backgroundImage: string;
  logo: string;
  title: string;
  subtitle: string;
  themeKey: 'dashing' | 't2' | 'x70' | 'x50';
  videos: {
    leftVideo: string;
    rightVideo: string;
  };
}

export function VideoHeroSection({ backgroundImage, logo, title, subtitle, themeKey, videos }: VideoHeroSectionProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Left section with background image and logo/text overlay */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full">
        <div className="relative w-full h-full">
          {/* Background Image */}
          <Image src={backgroundImage} alt={title} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />

          {/* Overlay with logo and text */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/10 flex flex-col justify-center p-8">
            <div className="w-4/5 max-w-md">
              <Image src={logo} alt={`${title} logo`} width={300} height={150} className="w-auto h-auto" priority />
              <h1 className="text-white mt-4 font-bold text-lg md:text-2xl">{title}</h1>
              <p className="text-white mt-2 uppercase font-medium">{subtitle}</p>
            </div>
          </div>

          {/* "VIDEO" text for left side */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <h2 className="text-white text-5xl md:text-7xl font-bold opacity-70">VIDEO</h2>
          </div>
        </div>
      </div>

      {/* Right section with videos */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full md:left-1/2">
        <VideoPlayerClient leftVideo={videos.leftVideo} rightVideo={videos.rightVideo} themeKey={themeKey} />
      </div>
    </section>
  );
}
