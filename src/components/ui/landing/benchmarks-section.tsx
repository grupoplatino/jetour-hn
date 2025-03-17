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
        "w-full flex flex-row justify-around text-xl absolute",
        top ? "top-28" : "bottom-5"
      )}
    >
      {children}
    </div>
  );
};

const CarColorSection = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="flex flex-row gap-5 absolute left-[50%] top-[85%]"
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
