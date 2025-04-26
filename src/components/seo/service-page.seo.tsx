import { Metadata } from 'next';
import ServicePageSchema from './serevice-page-schema';
import OrganizationSchema from './organization-schema';

export function ServicePageSEO() {
  return (
    <>
      <ServicePageSchema />
      <OrganizationSchema />
    </>
  );
}

export function generateServiceMetadata(): Metadata {
  return {
    title: 'Servicio Postventa | Jetour Honduras',
    description:
      'Servicio técnico especializado para vehículos Jetour en Honduras. Mantenimiento preventivo, correctivo, repuestos originales y garantía extendida para tu SUV Jetour.',
    keywords: ['servicio técnico Jetour', 'mantenimiento SUV Jetour', 'repuestos originales Jetour', 'taller autorizado Jetour', 'garantía Jetour Honduras'],
    alternates: {
      canonical: 'https://www.jetourhn.com/landing/post-venta'
    },
    openGraph: {
      title: 'Servicio Postventa | Jetour Honduras',
      description:
        'Servicio técnico especializado para vehículos Jetour en Honduras. Mantenimiento preventivo, correctivo, repuestos originales y garantía extendida para tu SUV Jetour.',
      url: 'https://www.jetourhn.com/landing/post-venta',
      images: [
        {
          url: 'https://www.jetourhn.com/postventa/hero_background.jpg',
          width: 1200,
          height: 630,
          alt: 'Servicio Técnico Jetour Honduras'
        }
      ]
    }
  };
}
