import { Metadata } from 'next';
import { getVehicleById } from '../data/vehicles-constant';

export async function generateVehicleMetadata(id: string): Promise<Metadata> {
  const vehicle = getVehicleById(id);

  if (!vehicle) {
    return {
      title: 'Vehículo no encontrado',
      description: 'El vehículo solicitado no está disponible'
    };
  }

  // Extrae características principales para la descripción
  const features = vehicle.features.map((f) => `${f.name}: ${f.value}`).join(', ');

  // Formatea colores disponibles
  const colors = vehicle.colorModels.map((c) => c.colorName).join(', ');

  return {
    title: `${vehicle.modelName} | SUV Jetour Honduras`,
    description: `Descubre el SUV Jetour ${vehicle.modelName} en Honduras. ${vehicle.tagline}. ${features}. Disponible en ${colors}.`,
    keywords: [
      `Jetour ${vehicle.modelName}`,
      'SUV Jetour',
      'Autos Jetour Honduras',
      `${vehicle.modelName} Honduras`,
      'SUV premium Honduras',
      'Concesionario Jetour',
      'Autos Aliados',
      ...colors.split(', ').map((color) => `Jetour ${vehicle.modelName} ${color}`)
    ],
    openGraph: {
      title: `Jetour ${vehicle.modelName} | SUV Premium Honduras`,
      description: `Descubre el SUV Jetour ${vehicle.modelName} en Honduras. ${vehicle.tagline}`,
      url: `https://www.jetourhn.com/landing/${id}`,
      siteName: 'Jetour Honduras',
      images: [
        {
          url: vehicle.hero.backgroundImage.src,
          width: 1200,
          height: 630,
          alt: `Jetour ${vehicle.modelName}`
        }
      ],
      locale: 'es_HN',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `Jetour ${vehicle.modelName} | SUV Premium Honduras`,
      description: `Descubre el SUV Jetour ${vehicle.modelName} en Honduras. ${vehicle.tagline}`,
      images: [vehicle.hero.backgroundImage.src]
    },
    alternates: {
      canonical: `https://www.jetourhn.com/landing/${id}`
    }
  };
}
