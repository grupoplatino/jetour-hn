import { useState } from "react";
import clsx from "clsx";
import { PlayIcon } from "lucide-react";
import { usePrimaryColor } from "../color-context";

const CarSpects = ({
  title,
  specs,
  activeTitle,
  toggleSpecs,
}: {
  title: string;
  specs: Record<string, string>;
  activeTitle: string | null;
  toggleSpecs: (title: string) => void;
}) => {
  const [mouseOver, setMouseOver] = useState(false);
  const primaryColor = usePrimaryColor();
  const isActive = activeTitle === title;

  return (
    <div
      className={clsx(
        "group transition-all flex flex-col w-full px-4 py-6 rounded-2xl",
        { "bg-transparent": !mouseOver && !isActive }
      )}
      style={{
        backgroundColor: mouseOver || isActive ? primaryColor : "transparent",
      }}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      onClick={() => toggleSpecs(title)}
    >
      <div className="flex flex-row justify-between">
        <p
          className={clsx(
            "transition-all group-hover:text-white text-xl font-bold",
            isActive ? "text-white" : "text-black"
          )}
        >
          {title}
        </p>
        <PlayIcon
          style={{
            fill: mouseOver || isActive ? "white" : primaryColor,
            color: mouseOver || isActive ? "white" : primaryColor,
          }}
          className={clsx(
            "transition transform",
            isActive ? "rotate-90" : "rotate-180",
            "group-hover:rotate-90"
          )}
        />
      </div>

      <div
        className={clsx(
          "overflow-hidden transition-max-height duration-300 ease-in-out",
          isActive ? "max-h-screen" : "max-h-0"
        )}
      >
        <table className="w-full table-auto">
          <tbody>
            {Object.entries(specs).map(([keyframes, value], index) => (
              <tr key={index} className="text-white font-bold text-lg">
                <td className="md:w-[50%] p-1">{keyframes}</td>
                <td className="md:w-[50%] p-1">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { CarSpects };
