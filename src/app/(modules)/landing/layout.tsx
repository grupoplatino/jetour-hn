import '@/app/globals.css';
import LandingProviders from '@landing/presentation/providers/landing-provider/landing-provider';

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
