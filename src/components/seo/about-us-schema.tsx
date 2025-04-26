import JsonLd from './json-ld';

export default function AboutPageSchema() {
  const aboutPageData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Nosotros - Jetour Honduras',
    description: 'Conozca más sobre Jetour Honduras, el concesionario oficial de la marca Jetour en Honduras, respaldado por Auto Aliados.',
    url: 'https://www.jetourhn.com/landing/nosotros',
    mainEntity: {
      '@type': 'Organization',
      name: 'Jetour Honduras - Autos Aliados',
      foundingDate: '2023',
      founders: [
        {
          '@type': 'Person',
          name: 'Autos Aliados'
        }
      ],
      description:
        'En JETOUR Honduras, nos enorgullece ofrecer vehículos de clase mundial que combinan innovación, rendimiento y diseño excepcional. Somos el distribuidor oficial de la marca JETOUR en Honduras, comprometidos con brindar a nuestros clientes una experiencia de conducción inigualable.',
      slogan: 'Drive Your Future',
      image: 'https://www.jetourhn.com/contactnos/hero_background.webp',
      award: ['Concesionario oficial Jetour en Honduras'],
      brand: {
        '@type': 'Brand',
        name: 'Jetour',
        logo: 'https://www.jetourhn.com/img/JetourLogo.png'
      }
    }
  };

  return <JsonLd data={aboutPageData} />;
}
