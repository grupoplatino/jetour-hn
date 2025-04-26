import { Metadata } from 'next';
import VehicleDetailPage from '../components/vehicle-deatail-page';
import { getVehicleById } from '../data/vehicles-constant';
import { generateVehicleMetadata } from './metadata-generator';
import { notFound } from 'next/navigation';
import { VehiclePageSEO } from '@/components/seo/vehicle-page.seo';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const result = await params;

  const carData = getVehicleById(result.id);

  // Si no existe el vehículo, usamos metadatos por defecto
  if (!carData) {
    return {
      title: 'Vehículo no encontrado | Jetour Honduras',
      description: 'Lo sentimos, el vehículo que buscas no está disponible. Explora otros modelos de Jetour en Honduras.'
    };
  }

  // Generamos metadatos específicos para este vehículo
  return generateVehicleMetadata(result.id);
}

export default async function VehicleDetailRoute({ params }: { params: { id: string } }) {
  const result = await params;
  const carData = getVehicleById(result.id);

  // Si no existe el vehículo, mostramos 404
  if (!carData) {
    notFound();
  }

  return (
    <>
      {/* Componente SEO */}
      <VehiclePageSEO vehicleData={carData} />

      <VehicleDetailPage carData={carData} />
    </>
  );
}

export function generateStaticParams() {
  return ['t2', 'dashing', 'x50', 'x70plus'].map((id) => ({
    id
  }));
}
