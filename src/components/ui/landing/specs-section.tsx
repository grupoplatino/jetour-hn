import { ReactNode } from "react";

const SpecsSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-8 lg:px-[8rem] pb-12 pt-28">
      <h1 className="font-bold text-4xl mb-16">ESPECIFICACIONES</h1>
      <div className="w-full flex flex-col gap-2">{children}</div>
    </section>
  );
};

export { SpecsSection };
