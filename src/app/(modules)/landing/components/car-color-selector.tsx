"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

interface CarColorModel {
  colorName: string;
  hexColor: string;
  carImage: string;
  scaleCar?: number;
}

interface CarColorSelectorProps {
  carModels: CarColorModel[];
}

export function CarColorSelector({ carModels }: CarColorSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(carModels.length - 1);
  const [nextIndex, setNextIndex] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: "keepSnaps",
    dragFree: false,
  });

  const onColorSelect = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const updateIndices = useCallback(
    (selected: number) => {
      const total = carModels.length;
      const prev = (selected - 1 + total) % total;
      const next = (selected + 1) % total;

      setSelectedIndex(selected);
      setPrevIndex(prev);
      setNextIndex(next);
    },
    [carModels.length]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const selected = emblaApi.selectedScrollSnap();
    updateIndices(selected);
  }, [emblaApi, updateIndices]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Initialize indices
  useEffect(() => {
    updateIndices(selectedIndex);
  }, [selectedIndex, updateIndices]);

  const getPositionStyles = (index: number) => {
    if (index === selectedIndex) {
      return {
        scale: 1,
        y: 0,
        x: "-5%",
        opacity: 1,
        zIndex: 30,
      };
    } else if (index === prevIndex) {
      return {
        scale: 0.8,
        y: -60,
        x: "-85%",
        opacity: 1,
        zIndex: 20,
      };
    } else if (index === nextIndex) {
      return {
        scale: 0.8,
        y: -60,
        x: "80%",
        opacity: 1,
        zIndex: 20,
      };
    } else {
      return {
        scale: 0.8,
        y: -60,
        x: "-85%",
        opacity: 0,
        zIndex: 10,
      };
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Three car display section - always visible */}
      <div className="relative h-[450px] flex items-center justify-center overflow-visible">
        {carModels.map((car, index) => {
          const posStyles = getPositionStyles(index);

          return (
            <motion.div
              key={car.colorName}
              className="absolute cursor-pointer"
              animate={posStyles}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              onClick={() => {
                if (index === prevIndex) {
                  onColorSelect(prevIndex);
                } else if (index === nextIndex) {
                  onColorSelect(nextIndex);
                }
              }}
            >
              <Image
                src={car.carImage}
                alt={`${car.colorName} model`}
                width={600}
                height={350}
                className={`object-contain transition-shadow ${
                  index === selectedIndex ? "drop-shadow-2xl" : ""
                }`}
                priority={index === selectedIndex}
                style={car.scaleCar !== null ? { scale: car.scaleCar } : {}}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Hidden Embla carousel for handling gestures and navigation */}
      <div
        className="absolute opacity-0 pointer-events-auto h-[1px]"
        ref={emblaRef}
      >
        <div className="flex">
          {carModels.map((car) => (
            <div
              key={`carousel-${car.colorName}`}
              className="min-w-0 flex-shrink-0 basis-full"
            />
          ))}
        </div>
      </div>

      {/* Color Selector */}
      <div className="flex justify-center gap-4 mt-2 relative">
        {carModels.map((car, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => onColorSelect(index)}
              className={`
                w-8 h-8 rounded-full transition-all
                ${
                  index === selectedIndex
                    ? "scale-110 border-[3px]"
                    : "border-2 hover:border-gray-500"
                }
                ${
                  car.hexColor === "#ffffff"
                    ? "border-gray-300"
                    : "border-gray-400"
                }
              `}
              style={{
                backgroundColor: car.hexColor,
                borderColor:
                  index === selectedIndex
                    ? car.hexColor === "#ffffff"
                      ? "#333333"
                      : car.hexColor === "#000000"
                      ? "#555555"
                      : "gray"
                    : car.hexColor === "#ffffff"
                    ? "#cccccc"
                    : "#a0a0a0",
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
