// src/components/VehicleVisualizer/ColorSelector.tsx
import React from 'react';
import { VehicleColor } from './types';
import clsx from 'clsx';
import { CarThemeKey, carThemes } from '../../data/theme-definitions';

interface ColorSelectorProps {
  colors: VehicleColor[];
  selectedColor: VehicleColor;
  onColorChange: (color: VehicleColor) => void;
  themeKey: CarThemeKey;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, selectedColor, onColorChange, themeKey }) => {
  const theme = carThemes[themeKey].colors;

  return (
    <div className="flex justify-center items-center gap-3 mt-4">
      {colors.map((color) => (
        <button
          key={color.folderName}
          onClick={() => onColorChange(color)}
          className={clsx(
            'w-8 h-8 rounded-full transition-transform duration-200 border-2',
            'hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2',
            selectedColor.folderName === color.folderName ? `border-2 border-current scale-110` : 'border-transparent'
          )}
          aria-label={`Seleccionar color ${color.name}`}
          style={{
            backgroundColor: color.hex,
            borderColor: selectedColor.folderName === color.folderName ? theme.primary : selectedColor.folderName.includes('white') ? 'gray' : 'gray'
          }}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
