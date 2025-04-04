'use client';
import { useState } from 'react';
import Image from 'next/image';
import { CarTheme } from '../page';
import { CarColorModel } from './car-features-show-case';
import { cn } from '@/lib/utils';

interface CarColorSelectorProps {
  carModels: CarColorModel[];
  carTheme: CarTheme;
}

export function CarColorSelector({ carModels }: CarColorSelectorProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(1);

  // Renderizar los 3 carros en el carousel con efecto de perspectiva
  const getCarModelsToShow = () => {
    const totalModels = carModels.length;
    const displayModels = [];

    for (let i = 0; i < 3; i++) {
      const modelIndex = (selectedColorIndex + i - 1 + totalModels) % totalModels;
      displayModels.push({ model: carModels[modelIndex], index: modelIndex });
    }

    return displayModels;
  };

  return (
    <div className="relative px-4">
      {/* Carrusel de imágenes de autos con efecto de perspectiva */}
      <div className="flex justify-center items-center py-8 relative h-[350px]">
        {getCarModelsToShow().map(({ model, index }, arrayIndex) => {
          const isCenter = arrayIndex === 1;
          const isLeft = arrayIndex === 0;
          const isRight = arrayIndex === 2;

          return (
            <div
              key={index}
              className={`
                absolute transition-all duration-500 
                ${isCenter ? 'z-30 opacity-100 scale-100 transform-none' : 'z-10 -mt-40'}
                ${isLeft ? 'left-0 -translate-x-1/3 scale-75 rotate-y-[-20deg]' : ''}
                ${isRight ? 'right-0 translate-x-1/3 scale-75 rotate-y-[20deg]' : ''}
                cursor-pointer hover:brightness-110
              `}
              onClick={() => setSelectedColorIndex(index)}
            >
              <Image
                src={model.carImage}
                alt={`${model.colorName} model`}
                width={isCenter ? 600 : 500}
                height={350}
                className={cn('object-contain transition-transform', {
                  'scale-100': isCenter,
                  'scale-75': isLeft || isRight,
                  'rotate-y-[-20deg]': isLeft,
                  'rotate-y-[20deg]': isRight
                })}
                priority={isCenter}
              />
            </div>
          );
        })}
      </div>

      {/* Selector de colores */}
      <div className="flex justify-center gap-4 mt-6 relative">
        {carModels.map((car, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => setSelectedColorIndex(index)}
              className={`
                w-12 h-12 rounded-full border-2 transition-all border-gray-400 
                ${index === selectedColorIndex ? 'transform scale-110 border-gray-800' : 'border-transparent hover:border-gray-300'}
                ${car.hexColor === '#ffffff' ? 'border-gray-300' : 'border-transparent'}
              `}
              style={{ backgroundColor: car.hexColor }}
              aria-label={`Select ${car.colorName} color`}
            />
            {/* Tooltip */}
            <div
              className="
                absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                bg-black text-white text-xs px-2 py-1 rounded-md 
                opacity-0 group-hover:opacity-100 transition-opacity
                pointer-events-none z-50
              "
            >
              {car.colorName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
