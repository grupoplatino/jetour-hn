import { Metadata } from 'next';
import { VehicleData } from '@/app/(modules)/landing/data/vehicles-constant';
import OrganizationSchema from './organization-schema';
import VehicleSchema from './vehicle-schema';

interface VehiclePageSEOProps {
  vehicleData: VehicleData;
}

export function VehiclePageSEO({ vehicleData }: VehiclePageSEOProps) {
  return (
    <>
      <VehicleSchema vehicleData={vehicleData} />
      <OrganizationSchema />
    </>
  );
}

export function generateVehicleMetadata(vehicleData: VehicleData): Metadata {
  // Construir descripción rica en keywords
  const features = vehicleData.features
    .map((feature) =>
      feature.name.includes('CABALLOS')
        ? `${feature.value} HP`
        : feature.name.includes('TORQUE')
        ? `${feature.value} Nm de torque`
        : feature.name.includes('VELOCIDAD')
        ? `velocidad máxima de ${feature.value} km/h`
        : ''
    )
    .filter(Boolean)
    .join(', ');

  const description = `Jetour ${vehicleData.modelName} en Honduras: ${vehicleData.tagline}. ${features}. Descubre este SUV premium con tecnología de vanguardia y diseño excepcional.`;

  // Extraer colores disponibles para keywords
  const colorKeywords = vehicleData.colorModels.map((model) => `${vehicleData.modelName} ${model.colorName}`).join(', ');

  return {
    title: `Jetour ${vehicleData.modelName} | ${vehicleData.tagline}`,
    description,
    keywords: [
      `Jetour ${vehicleData.modelName}`,
      `${vehicleData.modelName} Honduras`,
      `SUV ${vehicleData.modelName}`,
      colorKeywords,
      'SUV premium',
      'vehículos de lujo'
    ],
    alternates: {
      canonical: `https://www.jetourhn.com/landing/${vehicleData.id}`
    },
    openGraph: {
      title: `Jetour ${vehicleData.modelName} | ${vehicleData.tagline}`,
      description,
      url: `https://www.jetourhn.com/landing/${vehicleData.id}`,
      type: 'website',
      images: [
        {
          url: vehicleData.hero.backgroundImage as string,
          width: 1200,
          height: 630,
          alt: `Jetour ${vehicleData.modelName}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Jetour ${vehicleData.modelName} | ${vehicleData.tagline}`,
      description,
      images: [vehicleData.hero.backgroundImage as string]
    }
  };
}
