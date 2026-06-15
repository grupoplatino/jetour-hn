import JsonLd from './json-ld';

export default function ContactPageSchema() {
  const contactPageData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contacto - Jetour Honduras',
    description:
      'Ponte en contacto con el concesionario oficial de Jetour en Honduras. Estamos aquí para ayudarte con cualquier consulta sobre nuestros vehículos.',
    url: 'https://www.jetourhn.com/contactanos',
    mainEntity: {
      '@type': 'Organization',
      name: 'Jetour Honduras - Autos Aliados',
      telephone: '+50433620335',
      email: 'info@jetourhn.com',
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
        telephone: '+50433620335',
        email: 'info@jetourhn.com',
        availableLanguage: {
          '@type': 'Language',
          name: 'Spanish'
        }
      }
    }
  };

  return <JsonLd data={contactPageData} />;
}
