'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { CarThemeKey, carThemes, ThemeCars } from '../data/theme-definitions';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the interface for a single section
interface SectionData {
  imageLeftExtraClassName?: string;
  backgroundImage: string | StaticImageData;
  logo: string | StaticImageData;
  title: string;
  subtitle: string;
  videos: {
    leftVideo: string;
    rightVideo?: string; // Make rightVideo optional
  };
  themeKey: CarThemeKey;
}

interface VideoHeroSectionProps {
  sections: SectionData[];
  extraClassName?: string;
  autoSwipeInterval?: number; // Optional auto-swipe interval in milliseconds
}

export default function VideoHeroSection({
  sections,
  extraClassName,
  autoSwipeInterval = 10000 // Default: 10 seconds for auto-swipe
}: VideoHeroSectionProps) {
  // Ensure we have at least one section
  if (sections.length === 0) {
    throw new Error('At least one section is required');
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // References for videos
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const newIndex = emblaApi.selectedScrollSnap();
      setPrevIndex(currentIndex);
      setCurrentIndex(newIndex);

      // Reset any playing videos
      videoRefs.current.forEach((video, idx) => {
        if (idx === newIndex && video) {
          video.currentTime = 0;
          video.play().catch(() => {
            console.log('Video autoplay prevented by browser');
          });
        }
      });
    };

    emblaApi.on('select', onSelect);

    // Setup auto-slide if interval provided
    let intervalId: NodeJS.Timeout | null = null;
    if (autoSwipeInterval > 0 && sections.length > 1) {
      intervalId = setInterval(() => {
        if (!emblaApi.canScrollNext()) {
          emblaApi.scrollTo(0);
        } else {
          emblaApi.scrollNext();
        }
      }, autoSwipeInterval);
    }

    return () => {
      emblaApi.off('select', onSelect);
      if (intervalId) clearInterval(intervalId);
    };
  }, [emblaApi, autoSwipeInterval, sections.length, currentIndex]);

  // Fullscreen handler
  const handleFullscreen = (videoRef: HTMLVideoElement | null) => {
    if (!videoRef) return;

    try {
      if (videoRef.requestFullscreen) {
        videoRef.requestFullscreen();
      } else if ((videoRef as any).webkitRequestFullscreen) {
        (videoRef as any).webkitRequestFullscreen();
      } else if ((videoRef as any).msRequestFullscreen) {
        (videoRef as any).msRequestFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen request failed:', error);
    }
  };

  // Function to handle manual section change
  const changeSection = (index: number) => {
    if (emblaApi) {
      setIsTransitioning(true);
      emblaApi.scrollTo(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Get current section
  const currentSection = sections[currentIndex];
  const theme = carThemes[currentSection.themeKey] as ThemeCars;

  return (
    <section
      style={{
        height: 'calc(100vh - 60px)'
      }}
      className={cn('relative w-full overflow-hidden', extraClassName)}
    >
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Progress bar at top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-black/20 z-30">
          <div
            className="h-full transition-all duration-300 ease-linear"
            style={{
              width: `${(currentIndex + 1) * (100 / sections.length)}%`,
              backgroundColor: theme.colors.primary || '#000'
            }}
          />
        </div>
      </div>

      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {sections.map((section, index) => {
            const sectionTheme = carThemes[section.themeKey] as ThemeCars;
            const isActive = index === currentIndex;

            return (
              <div key={index} className="embla__slide relative w-full h-full flex-shrink-0 overflow-hidden">
                {/* Mobile view - simplified version for smaller screens */}
                <div className="block md:hidden relative w-full h-full">
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src={section.videos.leftVideo}
                  />
                  <div className="absolute top-[60px] left-6 right-6 z-20">
                    <Image
                      src={section.logo}
                      width={sectionTheme?.colors?.landingVideoSectionLogiSizes?.width || 170}
                      height={sectionTheme?.colors?.landingVideoSectionLogiSizes?.height || 170}
                      alt="Logo"
                      className="h-auto mb-4"
                    />
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20
                      }}
                      transition={{ duration: 0.5 }}
                      className={cn(
                        'text-white text-2xl font-bold uppercase max-w-full',
                        sectionTheme.colors.landingVideoSectionTextColor === 'white' ? 'text-white' : 'text-black',
                        sectionTheme?.colors?.landingVideoTitleClass
                      )}
                    >
                      {section.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-white mt-2 font-medium uppercase"
                    >
                      {section.subtitle}
                    </motion.p>
                  </div>
                </div>

                {/* Desktop view - complex layout with clip paths */}
                <div className="hidden md:block relative w-full h-full">
                  {/* Sección izquierda - Imagen de fondo con clipPath */}
                  <div
                    className="absolute top-0 left-0 w-full h-full transition-opacity duration-500"
                    style={{
                      clipPath: 'polygon(0% 0%, 45% 0%, 35% 100%, 0% 100%)',
                      opacity: isActive ? 1 : 0
                    }}
                  >
                    <Image
                      unoptimized
                      className={cn('object-contain w-full h-full md:-ml-[400px] lg:-ml-[500px]', section.imageLeftExtraClassName)}
                      src={section.backgroundImage}
                      fill
                      alt="Background"
                      priority={index === 0}
                    />
                  </div>

                  {/* Logo y texto superpuestos en la sección izquierda */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : -20
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute overflow-visible top-[60px] left-6 z-20"
                  >
                    <Image
                      src={section.logo}
                      width={sectionTheme?.colors?.landingVideoSectionLogiSizes?.width || 170}
                      height={sectionTheme?.colors?.landingVideoSectionLogiSizes?.height || 170}
                      alt="Logo"
                      className="h-auto"
                    />
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20
                      }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={cn(
                        'text-white text-2xl md:text-3xl font-bold uppercase max-w-[600px]',
                        sectionTheme.colors.landingVideoSectionTextColor === 'white' ? 'text-white' : 'text-black',
                        sectionTheme?.colors?.landingVideoTitleClass
                      )}
                    >
                      {section.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20
                      }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-white mt-2 font-medium uppercase"
                    >
                      {section.subtitle}
                    </motion.p>
                  </motion.div>

                  {/* Sección derecha - Video principal con clipPath */}
                  <div
                    className="absolute top-0 left-0 w-full h-full cursor-pointer transition-opacity duration-500"
                    style={{
                      clipPath: 'polygon(45% 0%, 100% 0%, 100% 100%, 35% 100%)',
                      opacity: isActive ? 1 : 0
                    }}
                    onDoubleClick={() => handleFullscreen(videoRefs.current[index])}
                  >
                    <video
                      key={`main-${section.videos.leftVideo}`}
                      ref={(el) => (videoRefs.current[index] = el)}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full absolute left-60 h-full object-cover"
                      src={section.videos.leftVideo}
                    />
                  </div>

                  {/* Tercer elemento - Video pequeño en el medio con clipPath */}
                  {section.videos.rightVideo && (
                    <div
                      className="absolute bottom-0 left-[20%] w-[25%] h-[60%] z-10 cursor-pointer transition-opacity duration-500"
                      style={{
                        clipPath: 'polygon(45% 0%, 100% 0%, 70% 100%, 10% 100%)',
                        opacity: isActive ? 1 : 0
                      }}
                    >
                      <video
                        key={`secondary-${section.videos.rightVideo}`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        src={section.videos.rightVideo}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Botones para cambiar secciones */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-4">
        {sections.map((_, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all cursor-pointer',
              currentIndex === index ? 'bg-white text-black' : 'bg-black/40 text-white hover:bg-black/60'
            )}
            onClick={() => !isTransitioning && changeSection(index)}
          >
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
