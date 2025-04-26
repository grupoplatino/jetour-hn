'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CarThemeKey, carThemes } from '../data/theme-definitions';

interface VideoPlayerClientProps {
  leftVideo: string;
  rightVideo?: string;
  themeKey: CarThemeKey;
}

export function VideoPlayerClient({ leftVideo, rightVideo, themeKey }: VideoPlayerClientProps) {
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [isLoaded, setIsLoaded] = useState({ video1: false, video2: false });
  const [isPlaying, setIsPlaying] = useState(true);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const themeColor = carThemes[themeKey];

  // Handle video loading
  useEffect(() => {
    const handleVideo1Loaded = () => setIsLoaded((prev) => ({ ...prev, video1: true }));
    const handleVideo2Loaded = () => setIsLoaded((prev) => ({ ...prev, video2: true }));

    if (video1Ref.current) {
      video1Ref.current.addEventListener('loadeddata', handleVideo1Loaded);
    }

    if (video2Ref.current && rightVideo) {
      video2Ref.current.addEventListener('loadeddata', handleVideo2Loaded);
    } else {
      // If there's no second video, mark it as loaded
      setIsLoaded((prev) => ({ ...prev, video2: true }));
    }

    return () => {
      if (video1Ref.current) {
        video1Ref.current.removeEventListener('loadeddata', handleVideo1Loaded);
      }
      if (video2Ref.current && rightVideo) {
        video2Ref.current.removeEventListener('loadeddata', handleVideo2Loaded);
      }
    };
  }, [rightVideo]);

  // Auto-switch between videos every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (rightVideo) {
        // Only auto-switch if there's a second video
        setActiveVideo((prev) => (prev === 1 ? 2 : 1));
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [rightVideo]);

  // Handle play/pause based on active video
  useEffect(() => {
    const handlePlayPause = async () => {
      try {
        if (activeVideo === 1 && video1Ref.current && isLoaded.video1) {
          if (video2Ref.current) video2Ref.current.pause();
          if (isPlaying) await playVideo(video1Ref.current);
          else video1Ref.current.pause();
        } else if (activeVideo === 2 && video2Ref.current && isLoaded.video2 && rightVideo) {
          if (video1Ref.current) video1Ref.current.pause();
          if (isPlaying) await playVideo(video2Ref.current);
          else video2Ref.current.pause();
        }
      } catch (err) {
        console.warn('Error managing video playback:', err);
      }
    };

    handlePlayPause();

    // Setup progress tracking
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    progressInterval.current = setInterval(() => {
      if (progressRef.current) {
        const activeVidRef = activeVideo === 1 ? video1Ref.current : video2Ref.current;
        if (activeVidRef && !activeVidRef.paused) {
          const progress = (activeVidRef.currentTime / activeVidRef.duration) * 100;
          progressRef.current.style.width = `${progress}%`;
        }
      }
    }, 100);

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [activeVideo, isLoaded.video1, isLoaded.video2, isPlaying, rightVideo]);

  // Helper function to play video with proper error handling
  const playVideo = async (videoElement: HTMLVideoElement) => {
    try {
      await videoElement.play();
      return true;
    } catch (err) {
      console.warn('Autoplay prevented:', err);
      setIsPlaying(false);
      return false;
    }
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Loading states
  const isFullyLoaded = isLoaded.video1 && isLoaded.video2;

  return (
    <div className="relative w-full h-full">
      {/* Loading indicator */}
      <AnimatePresence>
        {!isFullyLoaded && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-50 bg-black flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-t-4 border-t-[#FF7A00] border-white rounded-full animate-spin"></div>
              <p className="mt-4 text-white font-medium">Cargando videos...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video 1 */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
        animate={{
          opacity: activeVideo === 1 ? 1 : 0,
          zIndex: activeVideo === 1 ? 10 : 0
        }}
      >
        <video ref={video1Ref} className="w-full h-full object-cover" muted loop playsInline preload="auto">
          <source src={leftVideo} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </motion.div>

      {/* Video 2 */}
      {rightVideo && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
          animate={{
            opacity: activeVideo === 2 ? 1 : 0,
            zIndex: activeVideo === 2 ? 10 : 0
          }}
        >
          <video ref={video2Ref} className="w-full h-full object-cover" muted loop playsInline preload="auto">
            <source src={rightVideo} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </motion.div>
      )}

      {/* "VIDEO" text overlay */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20">
        <h2 className="text-white text-5xl md:text-7xl font-bold opacity-70">VIDEO</h2>
      </div>

      {/* Video controls */}
      <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 flex gap-4 z-20 md:right-24 md:translate-x-0">
        {/* Play/Pause button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlayPause}
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-black/50 text-white hover:bg-black/70"
          aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
        >
          {isPlaying ? '❚❚' : '▶'}
        </motion.button>

        {/* Video selection buttons */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveVideo(1)}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-colors ${
            activeVideo === 1 ? 'bg-white text-black' : 'bg-black/50 text-white hover:bg-black/70'
          }`}
          aria-label="Ver video uno"
        >
          01
        </motion.button>

        {rightVideo && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveVideo(2)}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-colors ${
              activeVideo === 2 ? 'bg-white text-black' : 'bg-black/50 text-white hover:bg-black/70'
            }`}
            aria-label="Ver video dos"
          >
            02
          </motion.button>
        )}
      </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-black/20 z-30">
        <motion.div
          ref={progressRef}
          className="h-full"
          style={{
            width: activeVideo === 1 ? '0%' : '50%',
            backgroundColor: themeColor ? themeColor.colors.primary : '#000'
          }}
        />
      </div>
    </div>
  );
}
