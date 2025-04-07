// src/components/VehicleVisualizer/LoadingIndicator.tsx
import React from 'react';
import { carThemes } from '../../data/theme-definitions';

interface LoadingIndicatorProps {
  progress: number;
  themeKey: keyof typeof carThemes;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ progress, themeKey }) => {
  const theme = carThemes[themeKey] || carThemes.turquoise;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 z-[9]">
      <div className="mb-4 text-white text-xl font-bold">Cargando visualizador 3D</div>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
            backgroundColor: theme.colors.primary
          }}
        />
      </div>
      <div className="mt-2 text-white">{progress}%</div>
    </div>
  );
};

export default LoadingIndicator;
