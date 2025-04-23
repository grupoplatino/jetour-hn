import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/'
        // Agrega cualquier otra ruta que no quieras que sea indexada
      ]
    },
    sitemap: 'https://www.jetourhn.com/sitemap.xml',
    host: 'https://www.jetourhn.com'
  };
}
