import { ReactNode, useState } from "react";

interface SpecsSectionProps {
  children: (props: {
    activeTitle: string | null;
    toggleSpecs: (title: string) => void;
  }) => ReactNode;
}

const SpecsSection = ({ children }: SpecsSectionProps) => {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  const toggleSpecs = (title: string) => {
    setActiveTitle((prevTitle) => (prevTitle === title ? null : title));
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-8 lg:px-[8rem] pb-12 pt-28">
      <h1 className="font-bold text-4xl mb-16">ESPECIFICACIONES</h1>
      <div className="w-full flex flex-col gap-2">
        {children({ activeTitle, toggleSpecs })}
      </div>
    </section>
  );
};

export { SpecsSection };
