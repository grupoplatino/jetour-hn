import clsx from "clsx";

interface CarBenchmarksProps {
  title: string;
  benchMark: string;
}

const CarBenchmarks = ({ title, benchMark }: CarBenchmarksProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <p className="font-medium">{title}</p>
      <span className="text-5xl text-red-700 font-bold">{benchMark}</span>
    </div>
  );
};

const CarColor = ({
  customClass,
  color,
  onClick,
}: {
  customClass: string;
  color?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={clsx(`w-8 h-8 rounded-full`, customClass)}
      style={{ backgroundColor: color ?? "" }}
      onClick={onClick}
    ></div>
  );
};

export { CarBenchmarks, CarColor };
