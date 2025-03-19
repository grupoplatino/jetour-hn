import { useState } from "react";
import clsx from "clsx";
import { PlayIcon } from "lucide-react";
import { usePrimaryColor } from "../color-context";

const CarSpects = ({
  title,
  specs,
}: {
  title: string;
  specs: Record<string, string>;
}) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [showData, setShowData] = useState(false);

  const primaryColor = usePrimaryColor();

  return (
    <div
      className={clsx(
        "group transition-all flex flex-col w-full px-4 py-6 rounded-2xl",
        {
          "bg-transparent": !mouseOver && !showData,
        }
      )}
      style={{
        backgroundColor: mouseOver || showData ? primaryColor : "transparent",
      }}
      onMouseOver={() => {
        setMouseOver(true);
      }}
      onMouseOut={() => {
        setMouseOver(false);
      }}
      onClick={() => {
        setShowData(!showData);
      }}
    >
      <div className="flex flex-row justify-between">
        <p
          className={clsx(
            "transition-all group-hover:text-white text-xl font-bold",
            showData ? "text-white" : "text-black"
          )}
        >
          {title}
        </p>
        <PlayIcon
          style={{
            fill: mouseOver || showData ? "white" : primaryColor, // Simplified fill logic
            color: mouseOver || showData ? "white" : primaryColor, // Simplified color logic
          }}
          className={clsx(
            "transition transform", // Ensure transition and transform are applied for smooth effect
            mouseOver || showData ? "rotate-90" : "rotate-180", // Apply rotate-90 when either condition is true
            "group-hover:rotate-90"
          )}
        />
      </div>

      <div
        className={clsx(
          "overflow-hidden transition-max-height duration-300 ease-in-out",
          showData ? "max-h-screen" : "max-h-0"
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
