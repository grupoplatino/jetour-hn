import '@/app/globals.css';
import LandingProviders from '@landing/presentation/providers/landing-provider/landing-provider';
import { Navbar } from './components/navigation';
import { Footer } from './components/footer';

export default function LandingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LandingProviders>
      <Navbar disableTransparent={true} />
      <main suppressHydrationWarning={true} className="md:gap-y-0 flex flex-col w-full max-w-full grow h-fit bg-white">
        {children}
      </main>
      <Footer />
    </LandingProviders>
  );
}
