// src/components/ui/car-models-gallery/car-models-gallery.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { VehicleData } from '../data/vehicles-constant';
import { CarThemeKey, carThemes } from '../data/theme-definitions';

// Tipos de datos
export interface CarModel {
  id: string;
  name: string;
  image: string | StaticImageData;
  href: string;
}

interface CarModelsGalleryProps {
  title?: string;
  models: VehicleData[];
  className?: string;
  themeKey: CarThemeKey;
}

export default function CarModelsGallery({ title = 'Nuestros Modelos', models, className, themeKey }: CarModelsGalleryProps) {
  const theme = carThemes[themeKey];

  return (
    <section className={cn('w-full py-16 px-6 md:px-10 lg:px-16 overflow-hidden', className)}>
      {/* Título con efecto de entrada */}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold mb-12 relative  before:absolute before:h-1 before:w-16 before:-bottom-4 animate-fade-right animate-once animate-duration-700'
        )}
      >
        {title}
      </h2>

      {/* Grid de vehículos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-10">
        {models.map((model, index) => (
          <Link
            key={model.id}
            href={`/landing-v2/${model.id}`}
            className="group relative flex flex-col items-center transition-all duration-300 hover:scale-[1.02]"
            prefetch={false}
          >
            {/* Contenedor de imagen con efecto de entrada escalonado */}
            <div
              className="relative w-full h-60 md:h-64 lg:h-72 overflow-hidden rounded-lg mb-4"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <Image
                src={model.carSelecctorImage}
                alt={`${model.id} model`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
                priority={index < 2} // Prioriza la carga de las dos primeras imágenes
              />
            </div>

            {/* Nombre del modelo con animación */}
            <h3 className="text-2xl md:text-3xl font-bold text-center relative">
              {model.modelName}
              <span style={{ backgroundColor: theme?.colors?.primary }} className="block h-0.5 w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
