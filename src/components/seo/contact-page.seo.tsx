import { Metadata } from 'next';
import ContactPageSchema from './contact-page-schema';
import OrganizationSchema from './organization-schema';

export function ContactPageSEO() {
  return (
    <>
      <ContactPageSchema />
      <OrganizationSchema />
    </>
  );
}

export function generateContactMetadata(): Metadata {
  return {
    title: 'Contáctanos | Jetour Honduras',
    description:
      'Ponte en contacto con el concesionario oficial de Jetour en Honduras. Visítanos en San Pedro Sula o llámanos al +504 3182-0711 para más información sobre nuestros vehículos.',
    keywords: ['contacto Jetour Honduras', 'concesionario Jetour', 'Jetour San Pedro Sula', 'venta de SUVs Jetour', 'servicio técnico Jetour'],
    alternates: {
      canonical: 'https://www.jetourhn.com/landing/contactanos'
    },
    openGraph: {
      title: 'Contáctanos | Jetour Honduras',
      description:
        'Ponte en contacto con el concesionario oficial de Jetour en Honduras. Visítanos en San Pedro Sula o llámanos al +504 3182-0711 para más información sobre nuestros vehículos.',
      url: 'https://www.jetourhn.com/landing/contactanos',
      images: [
        {
          url: '/contactanos/hero_background.webp',
          width: 1200,
          height: 630,
          alt: 'Concesionario Jetour Honduras'
        }
      ]
    }
  };
}
