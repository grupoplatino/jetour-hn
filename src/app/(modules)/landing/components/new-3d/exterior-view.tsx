// src/components/VehicleVisualizer/ExteriorView.tsx
import React, { useState } from 'react';
import { ReactImageTurntable } from 'react-image-turntable';
import { ExteriorViewProps } from './types';
import clsx from 'clsx';
import { useVehicleImages } from './use-vehicleImages';
import LoadingIndicator from './loading-indicator';
import ColorSelector from './color-selector';
import { carThemes } from '../../data/theme-definitions';

const ExteriorView: React.FC<ExteriorViewProps & { themeKey: string }> = ({
  colors,
  selectedColor,
  onColorChange,
  basePath,
  filePattern,
  imageCount,
  fileExtension,
  themeKey
}) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const { imagePaths, isLoading, loadingProgress, loadingError } = useVehicleImages({
    basePath,
    filePattern,
    selectedColor,
    imageCount,
    fileExtension
  });

  if (loadingError) {
    console.error(loadingError);
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {isLoading && <LoadingIndicator progress={loadingProgress} themeKey={themeKey as keyof typeof carThemes} />}

      <div className="w-full lg:w-[80%] h-full">
        <ReactImageTurntable
          className={clsx(
            'w-full h-full',
            isGrabbing ? 'cursor-grabbing' : 'cursor-grab',
            isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'
          )}
          images={imagePaths}
          autoRotate={{ disabled: true }}
          onMouseDown={() => setIsGrabbing(true)}
          onMouseUp={() => setIsGrabbing(false)}
          onTouchStart={() => setIsGrabbing(true)}
          onTouchEnd={() => setIsGrabbing(false)}
        />
      </div>

      <div className="absolute -bottom-12 left-0 right-0">
        <ColorSelector colors={colors} selectedColor={selectedColor} onColorChange={onColorChange} themeKey={themeKey} />
      </div>
    </div>
  );
};

export default ExteriorView;
