/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { ReactImageTurntable } from 'react-image-turntable';
import clsx from 'clsx';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';

interface ColorDetails {
  imageCount: number;
  path: string;
  hexColor?: string;
  colorName?: string;
}

interface ExteriorViewerProps {
  isGrabbing: boolean;
  imagePaths: string[];
  setIsGrabbing: Dispatch<SetStateAction<boolean>>;
  availableColors: {
    [key: string]: ColorDetails;
  };
  setSelectedColor: Dispatch<SetStateAction<string>>;
  selectedColor: string;
}

const ExteriorViewer = ({ isGrabbing, imagePaths, setIsGrabbing, availableColors, setSelectedColor, selectedColor }: ExteriorViewerProps) => {
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Precargar las imágenes para una experiencia más fluida
  useEffect(() => {
    const preloadImages = async () => {
      setImagesLoaded(false);

      try {
        const imagePromises = imagePaths.map((src) => {
          return new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = (e) => reject(e);
          });
        });

        const loadedImages = await Promise.all(imagePromises);
        setPreloadedImages(loadedImages);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error al precargar imágenes:', error);
        setImagesLoaded(true); // Continuar incluso si hay errores
      }
    };

    preloadImages();
  }, [imagePaths]);

  return (
    <div className="w-full lg:w-[60%] h-full min-h-[300px] mt-5 flex flex-col items-center">
      {!imagesLoaded ? (
        <div className="flex flex-col items-center justify-center h-[400px]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-4 text-gray-600">Cargando modelo 3D...</p>
        </div>
      ) : (
        <ReactImageTurntable
          className={clsx('w-full h-full mt-5', isGrabbing ? 'cursor-grabbing' : 'cursor-grab')}
          images={imagePaths}
          autoRotate={{ disabled: true }}
          onMouseDown={() => {
            setIsGrabbing(true);
          }}
          onMouseUp={() => {
            setIsGrabbing(false);
          }}
        />
      )}

      <div className="flex justify-center gap-4 mt-8">
        {Object.entries(availableColors).map(([colorKey, colorData]) => (
          <div key={colorKey} className="flex flex-col items-center">
            <button
              className={clsx(
                'h-8 w-8 rounded-full transition-all',
                selectedColor === colorKey ? 'ring-2 ring-offset-2' : '',
                colorKey.includes('white') || colorData.hexColor === '#FFFFFF' ? 'border border-gray-300' : ''
              )}
              style={{
                backgroundColor: colorData.hexColor || '#CCCCCC',
                transform: selectedColor === colorKey ? 'scale(1.1)' : 'scale(1)'
              }}
              onClick={() => {
                setSelectedColor(colorKey);
              }}
              title={colorData.colorName || colorKey}
              aria-label={`Color ${colorData.colorName || colorKey}`}
            />
            {selectedColor === colorKey && <span className="text-xs mt-1 font-medium">{colorData.colorName || colorKey}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExteriorViewer;
