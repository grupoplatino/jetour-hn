// SpecsSection.tsx
import { CarThemeKey } from '../data/theme-definitions';
import { SpecsSectionContent } from './specs-section-content';

interface SpecsSectionProps {
  specs: Record<string, Record<string, string>>;
  themeKey: CarThemeKey;
}

const SpecsSection = ({ specs, themeKey }: SpecsSectionProps) => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-8 lg:px-[8rem] pb-12 pt-28">
      <h1 className="font-bold text-4xl mb-16">ESPECIFICACIONES</h1>
      <SpecsSectionContent specs={specs} themeKey={themeKey} />
    </section>
  );
};

export default SpecsSection;
