import { Metadata } from 'next';
import HomePageSchema from './home-page-schema';
import OrganizationSchema from './organization-schema';

export function LandingSEO() {
  return (
    <>
      <HomePageSchema />
      <OrganizationSchema />
    </>
  );
}

export function generateLandingMetadata(): Metadata {
  return {
    title: 'Jetour Honduras | Vehículos SUV de Lujo y Tecnología Avanzada',
    description:
      'Descubre la línea de vehículos SUV premium de Jetour en Honduras. Modelos T2, Dashing, X50 y X70 Plus con tecnología de vanguardia y diseño excepcional.',
    alternates: {
      canonical: 'https://www.jetourhn.com/landing'
    },
    openGraph: {
      title: 'Jetour Honduras | Vehículos SUV de Lujo y Tecnología Avanzada',
      description:
        'Descubre la línea de vehículos SUV premium de Jetour en Honduras. Modelos T2, Dashing, X50 y X70 Plus con tecnología de vanguardia y diseño excepcional.',
      url: 'https://www.jetourhn.com/landing',
      images: [
        {
          url: 'https://www.jetourhn.com/landing/jetour_logo_white_drive_your_future.png',
          width: 1200,
          height: 630,
          alt: 'Jetour Honduras - SUVs Premium'
        }
      ]
    }
  };
}
