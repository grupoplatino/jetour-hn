import { ReactImageTurntable } from "react-image-turntable";
import { CarColorSection } from "./benchmarks-section";
import { CarColor } from "./car-benchmarks";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface ExteriorViewerProps {
  isGrabbing: boolean;
  imagePaths: string[];
  setIsGrabbing: Dispatch<SetStateAction<boolean>>; // Corrected type
  carColors: { hex: string; class: string; folderName: string }[];
  setSelectedColor: Dispatch<SetStateAction<string>>; // Corrected type
}

const ExteriorViewer = ({
  isGrabbing,
  imagePaths,
  setIsGrabbing,
  carColors,
  setSelectedColor,
}: ExteriorViewerProps) => {
  return (
    <div className=" w-[60%] h-full mt-5">
      <ReactImageTurntable
        className={clsx(
          " w-full h-full mt-5 ",
          isGrabbing ? "cursor-grabbing" : "cursor-grab"
        )}
        images={imagePaths}
        autoRotate={{ disabled: true }}
        onMouseDown={() => {
          setIsGrabbing(true);
        }}
        onMouseUp={() => {
          setIsGrabbing(false);
        }}
      />
      <CarColorSection>
        {carColors.map((color, index: number) => (
          <CarColor
            key={index}
            color={color.hex}
            customClass={color.class}
            onClick={() => {
              setSelectedColor(color.folderName);
            }}
          />
        ))}
      </CarColorSection>
    </div>
  );
};

export { ExteriorViewer };
