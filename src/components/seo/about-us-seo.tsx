import { Metadata } from 'next';
import AboutPageSchema from './about-us-schema';
import OrganizationSchema from './organization-schema';

export function AboutPageSEO() {
  return (
    <>
      <AboutPageSchema />
      <OrganizationSchema />
    </>
  );
}

export function generateAboutMetadata(): Metadata {
  return {
    title: 'Acerca de Nosotros | Jetour Honduras',
    description:
      'Conoce más sobre Jetour Honduras, el concesionario oficial de la marca Jetour en Honduras respaldado por Auto Aliados. Descubre nuestra historia, valores y compromiso con la excelencia.',
    keywords: ['historia Jetour Honduras', 'concesionario oficial Jetour', 'Auto Aliados Honduras', 'SUVs premium Honduras', 'valores Jetour'],
    alternates: {
      canonical: 'https://www.jetourhn.com/nosotros'
    },
    openGraph: {
      title: 'Acerca de Nosotros | Jetour Honduras',
      description:
        'Conoce más sobre Jetour Honduras, el concesionario oficial de la marca Jetour en Honduras respaldado por Auto Aliados. Descubre nuestra historia, valores y compromiso con la excelencia.',
      url: 'https://www.jetourhn.com/nosotros',
      images: [
        {
          url: 'https://www.jetourhn.com/nosotros/hero_background.webp',
          width: 1200,
          height: 630,
          alt: 'Concesionario Jetour Honduras'
        }
      ]
    }
  };
}
