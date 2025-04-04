// src/components/VehicleVisualizer/ViewToggle.tsx
import React from 'react';
import { ViewMode } from './types';
import clsx from 'clsx';
import { carThemes } from '../../data/theme-definitions';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  themeKey: keyof typeof carThemes;
  hasInteriorView: boolean;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onViewChange, themeKey, hasInteriorView }) => {
  const theme = carThemes[themeKey] || carThemes.turquoise;

  if (!hasInteriorView) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-10 justify-center md:justify-end">
      <button
        onClick={() => onViewChange('exterior')}
        className={clsx('font-bold cursor-pointer transition-all', currentView === 'exterior' ? 'text-3xl md:text-5xl' : 'text-xl md:text-3xl')}
        style={{
          color: currentView === 'exterior' ? theme.colors.primary : '#6b7280'
        }}
      >
        EXTERIOR
      </button>
      <button
        onClick={() => onViewChange('interior')}
        className={clsx('font-bold cursor-pointer transition-all', currentView === 'interior' ? 'text-3xl md:text-5xl' : 'text-xl md:text-3xl')}
        style={{
          color: currentView === 'interior' ? theme.colors.primary : '#6b7280'
        }}
      >
        INTERIOR
      </button>
    </div>
  );
};

export default ViewToggle;
