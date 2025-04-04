// src/components/VehicleVisualizer/InteriorView.tsx
import React, { useState, useEffect } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { InteriorViewProps } from './types';
import LoadingIndicator from './loading-indicator';
import { carThemes } from '../../page';

const InteriorView: React.FC<InteriorViewProps & { themeKey: string }> = ({ imagePath, themeKey }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoading(false);
      setLoadingProgress(100);
    };

    img.src = imagePath;

    // Simulamos progreso de carga ya que la biblioteca no proporciona eventos de progreso
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + (100 - prev) * 0.1;
        return Math.min(newProgress, 99);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [imagePath]);

  return (
    <div className="w-full h-full relative">
      {isLoading && <LoadingIndicator progress={loadingProgress} themeKey={themeKey as keyof typeof carThemes} />}

      <div className={`w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <ReactPhotoSphereViewer src={imagePath} height="100%" width="100%" littlePlanet={false} container="div" navbar={['autorotate', 'zoom', 'fullscreen']} />
      </div>
    </div>
  );
};

export default InteriorView;
