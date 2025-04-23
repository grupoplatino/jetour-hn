import JsonLd from './json-ld';

export default function ServicePageSchema() {
  const servicePageData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Servicio Postventa - Jetour Honduras',
    serviceType: 'Mantenimiento y servicio técnico de vehículos',
    provider: {
      '@type': 'AutoRepair',
      name: 'Jetour Honduras - Centro de Servicio',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Barrio La Guardia, entre 28 y 29 calle en el Bulevar del Sur, contiguo a Tropigas',
        addressLocality: 'San Pedro Sula',
        addressRegion: 'Cortés',
        postalCode: '21101',
        addressCountry: 'HN'
      },
      telephone: '+5043182071'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Honduras'
    },
    offers: {
      '@type': 'Offer',
      offeredBy: {
        '@type': 'Organization',
        name: 'Jetour Honduras - Autos Aliados'
      },
      itemOffered: [
        {
          '@type': 'Service',
          name: 'Mantenimiento Básico',
          description: 'Cambio de aceite y filtro, revisión de niveles de fluidos, inspección visual de componentes, diagnóstico computarizado básico.'
        },
        {
          '@type': 'Service',
          name: 'Mantenimiento Intermedio',
          description: 'Todo lo incluido en el mantenimiento básico, cambio de filtro de aire, rotación de neumáticos, revisión del sistema de frenos.'
        },
        {
          '@type': 'Service',
          name: 'Mantenimiento Mayor',
          description:
            'Todo lo incluido en el mantenimiento intermedio, cambio de filtro de combustible, cambio de bujías, inspección completa de suspensión y dirección, limpieza del sistema de inyección.'
        }
      ]
    },
    serviceOutput: {
      '@type': 'Thing',
      name: 'Vehículos Jetour en óptimas condiciones'
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://www.jetourhn.com/landing/post-venta',
      servicePhone: '+5043182071',
      serviceSmsNumber: '+5043182071'
    },
    termsOfService: 'Todos los servicios de mantenimiento cuentan con garantía.',
    hoursAvailable: [
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
  };

  return <JsonLd data={servicePageData} />;
}
