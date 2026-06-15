import JsonLd from './json-ld';

export default function OrganizationSchema() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'Jetour Honduras - Autos Aliados',
    legalName: 'Autos Aliados S.A.',
    url: 'https://www.jetourhn.com',
    logo: 'https://www.jetourhn.com/landing/jetour_logo_white_drive_your_future.png',
    foundingDate: '2023',
    founders: [
      {
        '@type': 'Person',
        name: 'Autos Aliados'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Barrio La Guardia, entre 28 y 29 calle en el Bulevar del Sur, contiguo a Tropigas',
      addressLocality: 'San Pedro Sula',
      addressRegion: 'Cortés',
      postalCode: '21101',
      addressCountry: 'HN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '[+504-3362-0335]',
      email: 'info@jetourhn.com'
    },
    sameAs: ['https://www.facebook.com/jetourhonduras', 'https://www.instagram.com/jetourhonduras'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '16:00'
      }
    ],
    department: [
      {
        '@type': 'AutoRepair',
        name: 'Servicio Técnico Jetour',
        description: 'Servicio técnico especializado para vehículos Jetour en Honduras',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '08:00',
            closes: '12:00'
          }
        ]
      }
    ]
  };

  return <JsonLd data={organizationData} />;
}
