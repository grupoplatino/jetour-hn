import { ReactNode } from "react";
import clsx from "clsx";

// <CarBenchmarks title="Caballos de Fuerza Máx." benchMark="197" />
//     <CarBenchmarks title="Torque Máximo" benchMark="290" />
//     <CarBenchmarks title="Velocidad Máxima (KM/H)" benchMark="180" />

interface BenchmarkRowProps {
  children: ReactNode;
  top: boolean;
}

const BenchmarkRow = ({ children, top }: BenchmarkRowProps) => {
  return (
    <div
      className={clsx(
        "w-full flex lg:flex-row flex-col gap-5 items-center justify-around text-xl absolute",
        top ? "top-28" : window.innerWidth >= 1024 ? "bottom-5" : "bottom-24"
      )}
    >
      {children}
    </div>
  );
};

const CarColorSection = ({
  customClass,
  children,
}: {
  customClass?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`flex flex-row gap-5 absolute left-[50%] lg:top-[85%] md:top-[70%] top-[62%] ${customClass}`}
      style={{ transform: "translate(-50%, -50%)" }}
    >
      {children}
    </div>
  );
};

const BenchMarkSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="h-screen w-full relative uppercase overflow-clip">
      {children}
    </section>
  );
};

export { BenchMarkSection, BenchmarkRow, CarColorSection };
