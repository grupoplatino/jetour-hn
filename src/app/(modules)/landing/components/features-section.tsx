import Image from "next/image";
import { StaticImageData } from "next/image";
import { carThemes } from "../data/theme-definitions";

interface Feature {
  image: StaticImageData | string;
  label: string;
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
  carTheme: keyof typeof carThemes;
}

export default function FeaturesSection({
  title,
  features,
}: FeaturesSectionProps) {
  return (
    <section className="w-full py-8 px-4 md:px-8 lg:px-20">
      {/* Título principal centrado */}
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center uppercase mb-6">
        {title}
      </h1>

      {/* Grid de características */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto px-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Tarjeta con imagen */}
            <div className="relative w-full aspect-square overflow-hidden mb-4 bg-gray-100 min-h-[450px]">
              <Image
                src={feature.image}
                alt={feature.label}
                fill
                className="object-cover"
                placeholder="blur"
                style={{
                  objectPosition: "50%",
                  transformOrigin: "left center",
                }}
              />
            </div>

            {/* Etiqueta centrada debajo de la imagen */}
            <h3 className="text-lg font-bold text-center uppercase max-w-[11rem]">
              {feature.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
