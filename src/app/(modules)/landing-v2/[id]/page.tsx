import VehicleDetailPage from '../components/vehicle-deatail-page';
import { getVehicleById } from '../data/vehicles-constant';

export default async function VehicleDetailRoute({ params }: { params: Promise<{ id: string }> }) {
  const res = await params;
  const { id } = await res;

  const carData = getVehicleById(id);

  if (!carData) {
    return null;
  }

  return <VehicleDetailPage carData={carData} />;
}
