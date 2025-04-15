'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CarColorModel {
  colorName: string;
  hexColor: string;
  carImage: string;
}

interface CarColorSelectorProps {
  carModels: CarColorModel[];
}

export function CarColorSelector({ carModels }: CarColorSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0); // Default center index

  const getDisplayModels = () => {
    const total = carModels.length;
    if (total < 3) return []; // Optional: return empty if less than 3

    const leftIndex = (selectedIndex - 1 + total) % total;
    const rightIndex = (selectedIndex + 1) % total;

    return [
      {
        model: carModels[leftIndex],
        index: leftIndex,
        position: 'left'
      },
      {
        model: carModels[selectedIndex],
        index: selectedIndex,
        position: 'center'
      },
      {
        model: carModels[rightIndex],
        index: rightIndex,
        position: 'right'
      }
    ];
  };

  const handleClick = (clickedIndex: number) => {
    const total = carModels.length;
    const leftIndex = (selectedIndex - 1 + total) % total;
    const rightIndex = (selectedIndex + 1) % total;

    if (clickedIndex === leftIndex) {
      setSelectedIndex(leftIndex);
    } else if (clickedIndex === rightIndex) {
      setSelectedIndex(rightIndex);
    }
  };

  const displayModels = getDisplayModels();

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Carousel */}
      <div className="flex justify-center items-center py-12 relative h-[400px]">
        {displayModels.map(({ model, index, position }) => {
          const isCenter = position === 'center';

          const translateMap = {
            left: '-100%',
            center: '0%',
            right: '100%'
          };

          const translateYMap = {
            left: -80,
            center: 0,
            right: -80
          };

          return (
            <motion.div
              key={index}
              onClick={() => handleClick(index)}
              initial={false}
              animate={{
                x: translateMap[position],
                y: translateYMap[position],
                scale: 1,
                zIndex: isCenter ? 30 : 10,
                opacity: 1
              }}
              transition={{
                duration: 0.6,
                ease: 'easeInOut'
              }}
              className="absolute cursor-pointer mt-24"
            >
              <Image
                src={model.carImage}
                alt={`${model.colorName} model`}
                width={isCenter ? 600 : 500}
                height={350}
                className={`object-contain transition-shadow ${isCenter ? 'drop-shadow-2xl' : ''}`}
                priority={isCenter}
                style={model.scaleCar ? { scale: model.scaleCar } : {}}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Color Selector */}
      <div className="flex justify-center gap-4 mt-6 relative">
        {carModels.map((car, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => setSelectedIndex(index)}
              className={`
                w-8 h-8 rounded-full transition-all
                ${index === selectedIndex ? 'scale-110 border-[3px]' : 'border-2 hover:border-gray-500'}
                ${car.hexColor === '#ffffff' ? 'border-gray-300' : 'border-gray-400'}
              `}
              style={{
                backgroundColor: car.hexColor,
                borderColor:
                  index === selectedIndex
                    ? car.hexColor === '#ffffff'
                      ? '#333333'
                      : car.hexColor === '#000000'
                      ? '#555555'
                      : 'gray'
                    : car.hexColor === '#ffffff'
                    ? '#cccccc'
                    : '#a0a0a0'
              }}
              aria-label={`Select ${car.colorName} color`}
            />
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
