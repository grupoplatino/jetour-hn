'use client';
import React, { useState, useMemo } from 'react';
import { VehicleVisualizerProps, ViewMode, VehicleColor } from './types';
import ViewToggle from './view-toggle';
import ExteriorView from './exterior-view';
import InteriorView from './interior-view';
import { carThemes } from '../../data/theme-definitions';

const VehicleVisualizer: React.FC<VehicleVisualizerProps> = ({
  title = 'VISUALIZADOR 3D',
  basePath,
  filePattern,
  imageCount,
  colors,
  interiorImagePath,
  defaultColorIndex = 0,
  themeKey,
  fileExtension = 'png'
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('exterior');
  const [selectedColorIndex, setSelectedColorIndex] = useState(defaultColorIndex);

  const selectedColor = useMemo(() => {
    return colors[selectedColorIndex] || colors[0];
  }, [colors, selectedColorIndex]);

  const handleColorChange = (color: VehicleColor) => {
    const index = colors.findIndex((c) => c.folderName === color.folderName);
    if (index !== -1) {
      setSelectedColorIndex(index);
    }
  };

  const handleViewChange = (view: ViewMode) => {
    setViewMode(view);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-start py-10 items-center">
      <div className="px-8 md:px-16 lg:px-32 w-full flex flex-col items-center lg:flex-row lg:justify-between">
        <h1 className="font-bold text-4xl text-center mb-8 lg:mb-0">{title}</h1>
        <ViewToggle
          currentView={viewMode}
          onViewChange={handleViewChange}
          themeKey={themeKey as keyof typeof carThemes}
          hasInteriorView={!!interiorImagePath}
        />
      </div>

      <div className="w-full h-[70vh] mt-8">
        {viewMode === 'exterior' ? (
          <ExteriorView
            colors={colors}
            selectedColor={selectedColor}
            onColorChange={handleColorChange}
            basePath={basePath}
            filePattern={filePattern}
            imageCount={imageCount}
            fileExtension={fileExtension}
            themeKey={themeKey}
          />
        ) : (
          interiorImagePath && <InteriorView imagePath={interiorImagePath} themeKey={themeKey} />
        )}
      </div>
    </section>
  );
};

export default VehicleVisualizer;
