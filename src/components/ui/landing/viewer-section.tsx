import { useState, useEffect } from "react";
import clsx from "clsx";
import { ExteriorViewer } from "./exterior-viewer";
import Viewer from "./interior-viewer";

interface CarData {
  primaryColor: string;
  hero: {
    title: string;
    subTitle: string;
    backgroundImage: string;
  };
  carBenchmarks: {
    [key: string]: string;
  };
  carModels: string[];
  carColors: { class: string; hex: string; folderName: string }[];
  video: string;
  wideImages: { title: string; image: string }[];
  cropedWideImages: {
    title: string;
    images: string[];
    text: {
      text: string;
      class: string;
    };
  }[];
  informativeGallery: {
    title: string;
    informativeCards: { text: string; image: string }[];
  };
  singleImageSection: {
    title: string;
    image: string;
  };
  carGallery: string[];
  carSpecs: {
    [key: string]:
      | {
          [key: string]: string | undefined;
        }
      | undefined; // Allow missing properties
  };
  ThreeSixtyView: {
    default: { color: string; path: string };
    interior: string;
    exterior: {
      [key: string]: { imageCount: number; path: string };
    };
  };
}

interface Viewer3DProps {
  carData: CarData;
}

export default function Viewer3D({ carData }: Viewer3DProps) {
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);
  const [exteriorView, setExteriorView] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState(
    carData.ThreeSixtyView.default.color
  );
  const [imagePaths, setImagePaths] = useState(() =>
    Array.from(
      { length: 37 },
      (_, i) => `${carData.ThreeSixtyView.exterior["black"]}${i}.png`
    )
  );

  useEffect(() => {
    setImagePaths(() =>
      Array.from(
        { length: carData.ThreeSixtyView.exterior[selectedColor].imageCount },
        (_, i) =>
          `${carData.ThreeSixtyView.exterior[selectedColor].path}${i}.png`
      )
    );
  }, [selectedColor]);

  return (
    <section className="relative h-screen w-full flex flex-col justify-start py-28 items-center">
      <div className="px-32 w-full flex flex-row justify-between">
        <h1 className="font-bold text-5xl">VISUALIZADOR 3D</h1>
        <div className="flex flex-row items-center gap-10">
          <h1
            className={clsx(
              "font-bold cursor-pointer",
              exteriorView ? "text-5xl" : "text-3xl"
            )}
            style={{ color: exteriorView ? carData.primaryColor : "#6b7280" }}
            onClick={() => {
              setExteriorView(true);
            }}
          >
            EXTERIOR
          </h1>
          <h1
            className={clsx(
              "font-bold cursor-pointer",
              exteriorView ? "text-3xl" : "text-5xl"
            )}
            onClick={() => {
              setExteriorView(false);
            }}
            style={{ color: exteriorView ? "#6b7280" : carData.primaryColor }}
          >
            INTERIOR
          </h1>
        </div>
      </div>
      {exteriorView ? (
        <ExteriorViewer
          isGrabbing={isGrabbing}
          setIsGrabbing={setIsGrabbing}
          carColors={carData.carColors}
          setSelectedColor={setSelectedColor}
          imagePaths={imagePaths}
        />
      ) : (
        <Viewer imagePath={carData.ThreeSixtyView.interior} />
      )}
    </section>
  );
}
