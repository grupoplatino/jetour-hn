import clsx from "clsx";
import { usePrimaryColor } from "./color-context";

const BookDrive = ({ fixed }: { fixed?: boolean }) => {
  const primaryColor = usePrimaryColor();

  return (
    <div
      className={clsx(
        "flex flex-row gap-2 w-full md:w-auto md:right-[-2.25rem] lg:right-0 md:scale-75 lg:scale-100",
        fixed
          ? "fixed md:fixed bottom-[45%] right-5 z-50"
          : "absolute md:absolute"
      )}
    >
      <div
        className={`w-2 h-12 -skew-x-[20deg] md:-skew-x-12`}
        style={{ backgroundColor: primaryColor }}
      ></div>
      <div
        className={`w-2 h-12 -skew-x-[20deg] md:-skew-x-12`}
        style={{ backgroundColor: primaryColor }}
      ></div>
      <div
        className="ml-[-8px] md:ml-[-3px] w-full flex flex-row justify-center items-center px-8"
        style={{
          backgroundColor: primaryColor,
          clipPath: "polygon(3.5% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <p className="font-bold">AGENDA TU TEST DRIVE</p>
      </div>
    </div>
  );
};

export { BookDrive };
