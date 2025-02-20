import '@/app/globals.css';
import LandingProviders from '@landing/presentation/providers/landing-provider/landing-provider';

// export const metadata: Metadata = {
//   title: "Creativo",
//   abstract: "Creativo es una agencia de marketing digital que ayuda a las empresas a crecer en el mundo digital.",
//   keywords:
//     "marketing digital en honduras, marketing social en honduras, estrategias de marketing, agencias de publicidad en honduras, agencias de publicidad honduras, diseño web en honduras, empresas de desarrollo de software en honduras, desarrollo web en honduras, desarrollo de software en honduras, marketing en honduras, aplicaciones web en honduras, posicionamiento web en honduras, agencia marketing digital en honduras, empresa de marketing en honduras, digital marketing digital, marketing digital marketing digital, digital marketing que es",
//   applicationName: "Creativo",
//   archives: "Creativo",
//   authors: {
//     name: "Creativo",
//     url: process.env.NEXT_PUBLIC_SITE_URL,
//   },
//   category: "Creativo",
//   classification: "Creativo",
//   bookmarks: "Creativo",
//   assets: "Creativo",
//   creator: "Creativo",
//   description: "Creativo es una agencia de marketing digital y desarrollo de software que ayuda a las empresas a crecer en el mundo digital.",
//   generator: "Creativo",
//   icons: "Creativo",
//   robots: "index, follow",
//   publisher: "Creativo",
// };

export default function LandingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LandingProviders>
      <main suppressHydrationWarning={true} className="md:gap-y-0 flex flex-col w-full max-w-full grow">
        {children}
      </main>
    </LandingProviders>
  );
}
