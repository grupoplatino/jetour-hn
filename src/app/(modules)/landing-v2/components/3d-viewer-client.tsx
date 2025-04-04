'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';

const InteriorViewer = dynamic(() => import('./3d-interior-viewer'), { ssr: false });
const ExteriorViewer = dynamic(() => import('./3d-exterior-viewer'), { ssr: false });

interface ColorDetails {
  imageCount: number;
  path: string;
  hexColor?: string;
  colorName?: string;
}

interface ThreeSixtyViewData {
  default: {
    color: string;
    path: string;
  };
  interior: string;
  exterior: {
    [key: string]: ColorDetails;
  };
}

interface Viewer3DClientProps {
  threeSixtyData: ThreeSixtyViewData;
  primaryColor: string;
}

export default function Viewer3DClient({ threeSixtyData, primaryColor }: Viewer3DClientProps) {
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);
  const [exteriorView, setExteriorView] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState(threeSixtyData.default.color);
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const updateImagePaths = () => {
      setIsLoading(true);

      // Verificar que el color seleccionado existe en los datos
      if (threeSixtyData.exterior[selectedColor]) {
        const { imageCount, path } = threeSixtyData.exterior[selectedColor];
        const paths = Array.from({ length: imageCount }, (_, i) => `${path}${i}.png`);
        setImagePaths(paths);
      } else {
        // Usar el color por defecto si el seleccionado no existe
        const defaultColor = threeSixtyData.default.color;
        const { imageCount, path } = threeSixtyData.exterior[defaultColor];
        const paths = Array.from({ length: imageCount }, (_, i) => `${path}${i}.png`);
        setImagePaths(paths);
        setSelectedColor(defaultColor);
      }

      setIsLoading(false);
    };

    updateImagePaths();
  }, [selectedColor, threeSixtyData]);

  const toggleFullScreen = () => {
    const viewerElement = document.getElementById('viewer3d-container');

    if (!isFullScreen) {
      if (viewerElement?.requestFullscreen) {
        viewerElement.requestFullscreen();
        setIsFullScreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  // Listener para detectar cuando se sale del modo pantalla completa
  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  return (
    <div
      id="viewer3d-container"
      className={clsx('flex flex-col w-full items-center transition-all duration-300', isFullScreen ? 'fixed inset-0 z-50 bg-white px-5 py-10' : '')}
    >
      <div className="flex flex-row items-center gap-10">
        <h1
          className={clsx('font-bold cursor-pointer', exteriorView ? 'lg:text-5xl text-3xl' : 'lg:text-3xl text-xl')}
          style={{ color: exteriorView ? primaryColor : '#6b7280' }}
          onClick={() => {
            setExteriorView(true);
          }}
        >
          EXTERIOR
        </h1>
        <h1
          className={clsx('font-bold cursor-pointer', exteriorView ? 'lg:text-3xl text-xl' : 'lg:text-5xl text-3xl')}
          onClick={() => {
            setExteriorView(false);
          }}
          style={{ color: exteriorView ? '#6b7280' : primaryColor }}
        >
          INTERIOR
        </h1>
        <button
          onClick={toggleFullScreen}
          className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 ml-4"
          aria-label={isFullScreen ? 'Salir de pantalla completa' : 'Ver en pantalla completa'}
        >
          {isFullScreen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 3v3a2 2 0 0 1-2 2H3"></path>
              <path d="M21 8h-3a2 2 0 0 1-2-2V3"></path>
              <path d="M3 16h3a2 2 0 0 1 2 2v3"></path>
              <path d="M16 21v-3a2 2 0 0 1 2-2h3"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          )}
        </button>
      </div>

      {isLoading ? (
        <div className="w-full lg:w-[60%] h-full mt-5 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2" style={{ borderColor: primaryColor }}></div>
            <p className="mt-4 text-gray-600">Cargando visualizador...</p>
          </div>
        </div>
      ) : exteriorView ? (
        <ExteriorViewer
          isGrabbing={isGrabbing}
          setIsGrabbing={setIsGrabbing}
          availableColors={threeSixtyData.exterior}
          setSelectedColor={setSelectedColor}
          imagePaths={imagePaths}
          selectedColor={selectedColor}
        />
      ) : (
        <InteriorViewer imagePath={threeSixtyData.interior} />
      )}
    </div>
  );
}
