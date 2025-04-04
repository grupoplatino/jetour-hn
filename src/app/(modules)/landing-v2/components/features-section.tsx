import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { carThemes } from '../page';

interface Feature {
  image: StaticImageData | string;
  label: string;
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
  carTheme: keyof typeof carThemes;
}

export default function FeaturesSection({ title, features, carTheme }: FeaturesSectionProps) {
  const theme = carThemes[carTheme];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-20">
      {/* Título principal centrado */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center uppercase mb-12">{title}</h1>

      {/* Grid de características */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Tarjeta con imagen */}
            <div className="relative w-full aspect-square overflow-hidden mb-4 bg-gray-100 min-h-[500px]">
              <Image src={feature.image} alt={feature.label} fill className="object-cover" placeholder="blur" />
            </div>

            {/* Etiqueta centrada debajo de la imagen */}
            <h3 className="text-lg md:text-xl font-bold text-center uppercase">{feature.label}</h3>
          </div>
        ))}
      </div>

      {/* Botón de Test Drive (versión móvil) */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <button className="flex items-center px-4 py-2 rounded-md font-bold text-white" style={{ backgroundColor: theme.colors.primary }}>
          AGENDA TU TEST DRIVE
        </button>
      </div>
    </section>
  );
}
