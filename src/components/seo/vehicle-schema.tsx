import { VehicleData } from '@/app/(modules)/(landing)/data/vehicles-constant';
import JsonLd from './json-ld';

interface VehicleSchemaProps {
  vehicleData: VehicleData;
}

export default function VehicleSchema({ vehicleData }: VehicleSchemaProps) {
  const getVehicleType = () => {
    // Asignar tipo de vehículo según modelo
    // SUV es el tipo más común para los modelos Jetour
    return 'SUV';
  };

  const getColorOptions = () => {
    return vehicleData.colorModels.map((model) => model.colorName);
  };

  const getVehicleSpecifications = () => {
    // Extraer especificaciones técnicas para el esquema
    const specs: Record<string, any> = {};

    // Buscar en las diversas categorías de especificaciones
    Object.entries(vehicleData.specs).forEach(([category, categorySpecs]) => {
      Object.entries(categorySpecs).forEach(([key, value]) => {
        specs[key] = value;
      });
    });

    return specs;
  };

  const specs = getVehicleSpecifications();

  const vehicleSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: `Jetour ${vehicleData.modelName}`,
    model: vehicleData.modelName,
    brand: {
      '@type': 'Brand',
      name: 'Jetour'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Jetour Motors'
    },
    vehicleType: getVehicleType(),
    fuelType: 'Gasolina',
    numberOfDoors: '5',
    numberOfSeats: specs['Capacidad'] || specs['Asientos'] || '5',
    vehicleTransmission: specs['Transmisión'] || 'Automática',
    driveWheelConfiguration: specs['Tracción'] || specs['Sistema de tracción'] || 'FWD',
    fuelEfficiency: specs['Rendimiento de combustible'],
    vehicleEngine: {
      '@type': 'EngineSpecification',
      name: specs['Motor'] || specs['Tipo'],
      enginePower: {
        '@type': 'QuantitativeValue',
        value: vehicleData.features.find((f) => f.name.includes('CABALLOS'))?.value || '',
        unitText: 'HP'
      }
    },
    color: getColorOptions(),
    cargoVolume: {
      '@type': 'QuantitativeValue',
      value: specs['Capacidad de carga'] || '',
      unitText: 'LTR'
    },
    speed: {
      '@type': 'QuantitativeValue',
      value: vehicleData.features.find((f) => f.name.includes('VELOCIDAD'))?.value || '',
      unitText: 'KMH'
    },
    weight: {
      '@type': 'QuantitativeValue',
      value: specs['Peso'] || '',
      unitText: 'KG'
    },
    width: {
      '@type': 'QuantitativeValue',
      value: specs['Ancho'] || (specs['Dimensiones'] ? specs['Dimensiones'].split('x')[1]?.trim() : ''),
      unitText: 'mm'
    },
    height: {
      '@type': 'QuantitativeValue',
      value: specs['Altura'] || (specs['Dimensiones'] ? specs['Dimensiones'].split('x')[2]?.trim() : ''),
      unitText: 'mm'
    },
    length: {
      '@type': 'QuantitativeValue',
      value: specs['Largo'] || (specs['Dimensiones'] ? specs['Dimensiones'].split('x')[0]?.trim() : ''),
      unitText: 'mm'
    },
    image: `https://www.jetourhn.com/img/${vehicleData.modelName}/${vehicleData.modelName}.webp`,
    url: `https://www.jetourhn.com/${vehicleData.id}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      priceCurrency: 'HNL',
      seller: {
        '@type': 'Organization',
        name: 'Jetour Honduras - Autos Aliados'
      }
    }
  };

  return <JsonLd data={vehicleSchemaData} />;
}
