'use client';
// src/components/ui/landing/video-hero-section/video-player-client.tsx
import React, { useState, useRef, useEffect } from 'react';
import { carThemes } from '../data/theme-definitions';
import { ThemeKey } from '../data/vehicles-constant';

interface VideoPlayerClientProps {
  leftVideo: string;
  rightVideo: string;
  themeKey: ThemeKey;
}



export function VideoPlayerClient({ leftVideo, rightVideo, themeKey }: VideoPlayerClientProps) {
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [video1Loaded, setVideo1Loaded] = useState(false);
  const [video2Loaded, setVideo2Loaded] = useState(false);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const themeColor = carThemes[themeKey] ;
  
  // Auto-switch between videos every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo(prev => prev === 1 ? 2 : 1);
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  // Handle video loading and play/pause
  useEffect(() => {
    const handleVideo1Loaded = () => {
      setVideo1Loaded(true);
      if (activeVideo === 1 && video1Ref.current) {
        playVideo(video1Ref.current).catch(err => 
          console.warn("Could not autoplay video 1:", err)
        );
      }
    };

    const handleVideo2Loaded = () => {
      setVideo2Loaded(true);
      if (activeVideo === 2 && video2Ref.current) {
        playVideo(video2Ref.current).catch(err => 
          console.warn("Could not autoplay video 2:", err)
        );
      }
    };

    // Add event listeners
    if (video1Ref.current) {
      video1Ref.current.addEventListener('loadeddata', handleVideo1Loaded);
    }
    
    if (video2Ref.current) {
      video2Ref.current.addEventListener('loadeddata', handleVideo2Loaded);
    }

    // Handle play/pause based on active video
    const handlePlayPause = async () => {
      try {
        if (activeVideo === 1 && video1Ref.current && video1Loaded) {
          video2Ref.current?.pause();
          await playVideo(video1Ref.current);
        } else if (activeVideo === 2 && video2Ref.current && video2Loaded) {
          video1Ref.current?.pause();
          await playVideo(video2Ref.current);
        }
      } catch (err) {
        console.warn("Error managing video playback:", err);
      }
    };

    handlePlayPause();

    // Cleanup event listeners
    return () => {
      if (video1Ref.current) {
        video1Ref.current.removeEventListener('loadeddata', handleVideo1Loaded);
      }
      if (video2Ref.current) {
        video2Ref.current.removeEventListener('loadeddata', handleVideo2Loaded);
      }
    };
  }, [activeVideo, video1Loaded, video2Loaded]);

  // Helper function to play video with proper error handling
  const playVideo = async (videoElement: HTMLVideoElement) => {
    try {
      await videoElement.play();
    } catch (err) {
      console.warn("Autoplay prevented:", err);
      // If autoplay is prevented, we'll show a play button
      // But for this component, we'll just log the error
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Video 1 */}
      <div 
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
          activeVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <video
          ref={video1Ref}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={leftVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video 2 */}
      <div 
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
          activeVideo === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <video
          ref={video2Ref}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={rightVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* "VIDEO" text for right side */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20">
        <h2 className="text-white text-5xl md:text-7xl font-bold opacity-70">
          VIDEO
        </h2>
      </div>

      {/* Video selection indicators */}
      <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 flex gap-4 z-20 md:right-24 md:translate-x-0">
        <button
          onClick={() => setActiveVideo(1)}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-colors ${
            activeVideo === 1 
              ? 'bg-white text-black' 
              : 'bg-black/50 text-white hover:bg-black/70'
          }`}
          aria-label="Watch video one"
        >
          01
        </button>
        <button
          onClick={() => setActiveVideo(2)}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-colors ${
            activeVideo === 2 
              ? 'bg-white text-black' 
              : 'bg-black/50 text-white hover:bg-black/70'
          }`}
          aria-label="Watch video two"
        >
          02
        </button>
      </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-black/20 z-30">
        <div
          className="h-full transition-all duration-300 ease-linear"
          style={{ 
            width: `${activeVideo === 1 ? '50%' : '100%'}`, 
            backgroundColor: themeColor ? themeColor.colors.primary : '#000'
          }}
        />
      </div>
    </div>
  );
}