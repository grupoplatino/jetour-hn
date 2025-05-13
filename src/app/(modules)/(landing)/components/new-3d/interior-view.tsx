import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import clsx from 'clsx';
import { CarThemeKey, carThemes } from '../../data/theme-definitions';
import LoadingIndicator from './loading-indicator';

interface InteriorImage {
  path: string;
  hexColor: string;
  colorName: string;
}

interface InteriorViewProps {
  imagePaths: InteriorImage[];
  themeKey: CarThemeKey;
}

const InteriorView: React.FC<InteriorViewProps> = ({ imagePaths, themeKey }) => {
  const [selectedImage, setSelectedImage] = useState<InteriorImage>(imagePaths[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Ref to store preloaded image cache
  const imageCache = useRef<{ [key: string]: HTMLImageElement }>({});

  // Memoize image paths to prevent unnecessary re-renders
  const memoizedImagePaths = useMemo(() => imagePaths, [imagePaths]);

  // Memoize theme colors
  const theme = useMemo(() => carThemes[themeKey].colors, [themeKey]);

  // Preload images eagerly
  useEffect(() => {
    const preloadImages = () => {
      memoizedImagePaths.forEach((image) => {
        // Only preload if not already cached
        if (!imageCache.current[image.path]) {
          const img = new Image();
          img.src = image.path;
          imageCache.current[image.path] = img;
        }
      });
    };

    preloadImages();

    // Initial image load
    const initialImg = new Image();
    initialImg.onload = () => {
      setIsLoading(false);
      setLoadingProgress(100);
    };
    initialImg.src = selectedImage.path;
  }, [memoizedImagePaths, selectedImage.path]);

  // Optimized image change handler
  const handleImageChange = useCallback((image: InteriorImage) => {
    // Immediately show loading
    setIsLoading(true);
    setLoadingProgress(0);

    // Check if image is already in cache
    const cachedImage = imageCache.current[image.path];

    if (cachedImage && cachedImage.complete) {
      // If cached and loaded, update immediately
      setSelectedImage(image);
      setLoadingProgress(100);

      // Slight delay before hiding loading to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    } else {
      // If not cached or not fully loaded, load the image
      const img = new Image();
      img.onload = () => {
        // Cache the image
        imageCache.current[image.path] = img;

        // Update selected image
        setSelectedImage(image);

        // Simulate loading progress
        let progress = 0;
        const progressInterval = setInterval(() => {
          progress += 10;
          setLoadingProgress(Math.min(progress, 100));

          if (progress >= 100) {
            clearInterval(progressInterval);
            // Slight delay before hiding loading
            setTimeout(() => {
              setIsLoading(false);
            }, 200);
          }
        }, 50);
      };
      img.src = image.path;
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {isLoading ? (
        <LoadingIndicator progress={loadingProgress} themeKey={themeKey} />
      ) : (
        <ReactPhotoSphereViewer
          src={selectedImage.path}
          height="100%"
          width="100%"
          littlePlanet={false}
          container="div"
          navbar={['autorotate', 'zoom', 'fullscreen']}
          loadingTxt="" // Remove default loading text
        />
      )}

      <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center">
        <div className="flex justify-center items-center gap-3 rounded-full px-4 py-2">
          {memoizedImagePaths.map((image) => (
            <button
              key={image.colorName}
              onClick={() => handleImageChange(image)}
              className={clsx(
                'w-8 h-8 rounded-full transition-transform duration-200 border-2',
                'hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2',
                selectedImage.colorName === image.colorName ? 'border-2 border-current scale-110' : 'border-transparent'
              )}
              aria-label={`Select ${image.colorName} interior`}
              style={{
                backgroundColor: image.hexColor,
                borderColor: selectedImage.colorName === image.colorName ? theme.primary : image.colorName.toLowerCase().includes('white') ? 'gray' : 'gray'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorView;
