import JsonLd from './json-ld';

export default function HomePageSchema() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jetour Honduras',
    alternateName: 'Jetour HN',
    url: 'https://www.jetourhn.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.jetourhn.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'Jetour Honduras - Concesionario Oficial',
    image: 'https://www.jetourhn.com/contactanos/hero_background.jpg',
    '@id': 'https://www.jetourhn.com',
    url: 'https://www.jetourhn.com',
    telephone: '+50433620335',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Barrio La Guardia, entre 28 y 29 calle en el Bulevar del Sur, contiguo a Tropigas',
      addressLocality: 'San Pedro Sula',
      addressRegion: 'Cortés',
      postalCode: '21101',
      addressCountry: 'HN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 15.499673,
      longitude: -88.025027
    },
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
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '00:00',
        closes: '00:00'
      }
    ],
    sameAs: ['https://www.facebook.com/jetourhonduras', 'https://www.instagram.com/jetour.honduras/']
  };

  return (
    <>
      <JsonLd data={websiteData} />
      <JsonLd data={localBusinessData} />
    </>
  );
}
