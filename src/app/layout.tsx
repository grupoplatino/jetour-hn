import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import './globals.css';
// import { Toaster } from "@/components/ui/sonner";
// import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1d1d1b'
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jetourhn.com'),
  title: {
    template: '%s | Jetour Honduras',
    default: 'Jetour Honduras | Vehículos de Lujo y Tecnología Avanzada'
  },
  description:
    'Concesionario oficial de vehículos Jetour en Honduras. Descubre nuestra línea de vehículos premium con tecnología de vanguardia. Por Autos Aliados.',
  keywords: ['Jetour Honduras', 'autos Jetour', 'SUV Jetour', 'autos de lujo Honduras', 'Dashing', 'T2', 'X50', 'X70 Plus', 'Autos Aliados'],
  openGraph: {
    siteName: 'Jetour Honduras | Autos Aliados',
    type: 'website',
    locale: 'es_HN',
    images: [
      {
        url: '/img/JetourLogo.png',
        width: 800,
        height: 600,
        alt: 'Jetour Honduras'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow'
  },
  alternates: {
    canonical: 'https://www.jetourhn.com'
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon'
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  },
  verification: {
    google: 'AGREGAR_TU_CÓDIGO_DE_VERIFICACIÓN'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
