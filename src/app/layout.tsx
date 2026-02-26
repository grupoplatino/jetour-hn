import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

import './globals.css'
import { Footer } from './(modules)/(landing)/components/footer'
import LandingProviders from '@/modules/landing/presentation/providers/landing-provider/landing-provider'
import Navbar from './(modules)/(landing)/components/navigation'
// import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1d1d1b',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jetourhn.com'),
  title: {
    template: '%s | Jetour Honduras',
    default: 'Jetour Honduras | Vehículos de Lujo y Tecnología Avanzada',
  },
  description:
    'Concesionario oficial de vehículos Jetour en Honduras. Descubre nuestra línea de vehículos premium con tecnología de vanguardia. Por Autos Aliados.',
  keywords: [
    'Jetour Honduras',
    'autos Jetour',
    'SUV Jetour',
    'autos de lujo Honduras',
    'Dashing',
    'T2',
    'X50',
    'X70 Plus',
    'Autos Aliados',
  ],
  authors: [{ name: 'Jetour Honduras', url: 'https://www.jetourhn.com' }],
  creator: 'Autos Aliados',
  publisher: 'Jetour Honduras',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    siteName: 'Jetour Honduras | Autos Aliados',
    type: 'website',
    locale: 'es_HN',
    alternateLocale: ['es_MX', 'es_GT', 'es_SV', 'es_NI', 'es_CR', 'es_PA'],
    url: 'https://www.jetourhn.com',
    title: 'Jetour Honduras | Vehículos de Lujo y Tecnología Avanzada',
    description:
      'Concesionario oficial de vehículos Jetour en Honduras. Descubre nuestra línea de vehículos premium con tecnología de vanguardia. Por Autos Aliados.',
    countryName: 'Honduras',
    images: [
      {
        url: 'https://www.jetourhn.com/landing/jetour_logo_white_drive_your_future.png',
        width: 800,
        height: 600,
        alt: 'Jetour Honduras',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jetour Honduras | Vehículos de Lujo y Tecnología Avanzada',
    description:
      'Concesionario oficial de vehículos Jetour en Honduras. Descubre nuestra línea de SUVs premium con tecnología de vanguardia.',
    images: ['/img/JetourLogo.png'],
    site: '@jetourhn',
    creator: '@autosaliados',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  alternates: {
    canonical: 'https://www.jetourhn.com',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  verification: {
    google: 'TU_CÓDIGO_DE_VERIFICACIÓN_GOOGLE', // Reemplaza con tu código cuando lo tengas
    yandex: 'TU_CÓDIGO_DE_VERIFICACIÓN_YANDEX', // Opcional
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LandingProviders>
          <Navbar disableTransparent={true} />
          <main
            suppressHydrationWarning={true}
            className="md:gap-y-0 flex flex-col w-full max-w-full grow h-fit bg-white"
          >
            {children}
          </main>
          <Footer />
        </LandingProviders>
      </body>
    </html>
  )
}
