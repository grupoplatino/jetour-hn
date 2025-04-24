import { Metadata } from 'next';
import VehicleDetailPage from '../components/vehicle-deatail-page';
import { getVehicleById } from '../data/vehicles-constant';
import { generateVehicleMetadata } from './metadata-generator';

interface PageProps {
  params: { id: string };
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const res = await params;
  const { id } = res;
  return generateVehicleMetadata(id);
}

export default async function VehicleDetailRoute({ params }: { params: Promise<{ id: string }> }) {
  const res = await params;
  const { id } = res;

  const carData = getVehicleById(id);

  if (!carData) {
    return null;
  }

  return <VehicleDetailPage carData={carData} />;
}
