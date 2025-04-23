import { MetadataRoute } from 'next';
import { getAllVehicles } from './(modules)/landing/data/vehicles-constant';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jetourhn.com';

  // Páginas estáticas principales
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0
    },
    {
      url: `${baseUrl}/landing`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/landing/contactanos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/landing/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/landing/post-venta`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }
  ];

  // Obtener todos los vehículos para crear páginas dinámicas
  const vehicles = getAllVehicles();

  // Crear entradas para cada modelo de vehículo
  const vehicleRoutes = vehicles.map((vehicle) => ({
    url: `${baseUrl}/landing/${vehicle.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  return [...staticPages, ...vehicleRoutes];
}
