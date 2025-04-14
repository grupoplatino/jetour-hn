"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CarColorModel } from "./car-features-show-case";
import { cn } from "@/lib/utils";
import { CarThemeKey } from "../data/theme-definitions";

interface CarColorSelectorProps {
  carModels: CarColorModel[];
  carTheme: CarThemeKey;
}

export function CarColorSelector({ carModels }: CarColorSelectorProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<
    "left" | "right" | null
  >(null);
  const previousIndex = useRef(selectedColorIndex);

  // Renderizar los 3 carros en el carousel con efecto de perspectiva
  const getCarModelsToShow = () => {
    const totalModels = carModels.length;
    const displayModels = [];

    for (let i = 0; i < 3; i++) {
      const modelIndex =
        (selectedColorIndex + i - 1 + totalModels) % totalModels;
      displayModels.push({ model: carModels[modelIndex], index: modelIndex });
    }

    return displayModels;
  };

  const handleColorSelect = (index: number) => {
    if (index === selectedColorIndex || isAnimating) return;

    // Determinar dirección de la transición
    const totalModels = carModels.length;
    const clockwiseDistance =
      (index - selectedColorIndex + totalModels) % totalModels;
    const counterClockwiseDistance =
      (selectedColorIndex - index + totalModels) % totalModels;
    const direction =
      clockwiseDistance <= counterClockwiseDistance ? "right" : "left";

    setTransitionDirection(direction);
    setIsAnimating(true);
    previousIndex.current = selectedColorIndex;

    setTimeout(() => {
      setSelectedColorIndex(index);

      // Pequeña pausa adicional después de cambiar el modelo
      setTimeout(() => {
        setIsAnimating(false);
        setTransitionDirection(null);
      }, 100);
    }, 900); // Casi toda la duración de la animación
  };

  const models = getCarModelsToShow();

  return (
    <div className="relative px-4">
      {/* Carrusel de imágenes de autos con efecto de perspectiva */}
      <div className="flex justify-center items-center py-8 relative h-[350px]">
        {models.map(({ model, index }, arrayIndex) => {
          const isCenter = arrayIndex === 1;
          const isLeft = arrayIndex === 0;
          const isRight = arrayIndex === 2;

          // Determinar la animación específica basada en la posición y dirección
          let animationStyle = {};
          if (isAnimating) {
            if (transitionDirection === "right") {
              if (isLeft)
                animationStyle = {
                  animation:
                    "slideLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                };
              if (isCenter)
                animationStyle = {
                  animation:
                    "slideCenterToLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                };
              if (isRight)
                animationStyle = {
                  animation:
                    "slideRightToCenter 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                };
            } else if (transitionDirection === "left") {
              if (isLeft)
                animationStyle = {
                  animation:
                    "slideLeftToCenter 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                };
              if (isCenter)
                animationStyle = {
                  animation:
                    "slideCenterToRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                };
              if (isRight)
                animationStyle = {
                  animation:
                    "slideRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                };
            }
          }

          return (
            <div
              key={`${index}-${arrayIndex}`}
              className={`
                absolute transition-all duration-700
                ${isCenter ? "z-30 opacity-100" : "z-10 opacity-90"}
                ${isLeft ? "left-60 -mt-20" : ""}
                ${isRight ? "right-52 -mt-20" : ""}
                cursor-pointer hover:brightness-110 hover:drop-shadow-xl
              `}
              style={{
                transform: `
                  ${isCenter ? "translateX(0) scale(1)" : ""}
                  ${isLeft ? "translateX(-33%) scale(0.75)" : ""}
                  ${isRight ? "translateX(33%) scale(0.75)" : ""}
                `,
                transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                ...animationStyle,
              }}
              onClick={() => handleColorSelect(index)}
            >
              <Image
                src={model.carImage}
                alt={`${model.colorName} model`}
                width={isCenter ? 600 : 500}
                height={350}
                className={cn("object-contain", { "drop-shadow-md": isCenter })}
                priority={isCenter}
              />
            </div>
          );
        })}
      </div>

      {/* Selector de colores */}
      <div className="flex justify-center gap-4 relative">
        {carModels.map((car, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => handleColorSelect(index)}
              className={`
                w-8 h-8 rounded-full transition-all
                ${
                  index === selectedColorIndex
                    ? "transform scale-110 border-[3px]"
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
                  index === selectedColorIndex
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
              disabled={isAnimating}
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
