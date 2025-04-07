// car-features-showcase.tsx
import { StaticImageData } from 'next/image';
import { CarFeatureStats } from './car-feature-stats';
import { CarColorSelector } from './car-color-selector';
import { CarThemeKey } from '../data/theme-definitions';

// Definición de tipos
export interface CarFeature {
  name: string;
  value: string | number;
  position: 'topleft' | 'topright' | 'topcenter' | 'bottomleft' | 'bottomright' | 'bottomcenter';
}

export interface CarColorModel {
  carImage: StaticImageData | string;
  color: string;
  colorName: string;
  hexColor: string;
}

interface CarFeaturesShowcaseProps {
  carModels: CarColorModel[];
  features: CarFeature[];
  carTheme: CarThemeKey;
}

// Este es el componente principal renderizado por el servidor
export default function CarFeaturesShowcase({ carModels, features, carTheme }: CarFeaturesShowcaseProps) {
  if (!carModels.length) return null;

  // Filtrar características por posición para mostrarlas en la parte superior o inferior
  const topFeatures = features.filter((f) => f.position === 'topleft' || f.position === 'topright' || f.position === 'topcenter');

  const bottomFeatures = features.filter((f) => f.position === 'bottomleft' || f.position === 'bottomright' || f.position === 'bottomcenter');

  return (
    <section className="relative w-full py-4 overflow-hidden">
      <div className="flex justify-around gap-4 px-4 w-full">
        {topFeatures.map((feature, index) => (
          <CarFeatureStats key={index} name={feature.name} value={feature.value} position={feature.position} carTheme={carTheme} />
        ))}
      </div>

      <CarColorSelector carModels={carModels} carTheme={carTheme} />

      <div className="flex justify-around gap-4 mt-6 px-4 w-ful">
        {bottomFeatures.map((feature, index) => (
          <CarFeatureStats key={index} name={feature.name} value={feature.value} position={feature.position} carTheme={carTheme} />
        ))}
      </div>
    </section>
  );
}
