import Image from "next/image";
import { ReactNode } from "react";
import { usePrimaryColor } from "../color-context";
import { Download } from "lucide-react";

interface SlicedWideImageProps {
  images: string[];
  title: string;
  model: string;
  color: string;
  children?: ReactNode;
  brochure?: boolean;
}

const SlicedWideImage = ({
  images,
  title,
  model,
  color,
  children,
  brochure,
}: SlicedWideImageProps) => {
  const primaryColor = usePrimaryColor();

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
      <figure className="relative w-full h-[70vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center">
        {/* Left Side of the Image */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{
            clipPath: "polygon(0% 0%, 55% 0%, 45% 100%, 0% 100%)",
          }}
        >
          <Image
            className="w-full h-full object-cover"
            style={{ objectPosition: "-30rem" }}
            src={images[0]}
            width={800}
            height={500}
            alt="Car Left"
          />
        </div>

        {/* Right Side of the Image */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{
            clipPath: "polygon(55% 0%, 100% 0%, 100% 100%, 45% 100%)",
          }}
        >
          <Image
            className="w-full h-full object-cover"
            style={{ objectPosition: "30rem" }}
            src={images[1]}
            width={800}
            height={500}
            alt="Car Right"
          />
        </div>

        {/* Title */}
        <h1
          className="absolute top-[-30px] left-0 text-lg sm:text-xl md:text-2xl font-bold uppercase z-10"
          style={{ color: primaryColor }}
        >
          {title}
        </h1>
        <div className="absolute text-right z-10 top-[-7rem] lg:left-[3rem] lg:w-[40rem] md:w-[20rem] md:left-[0rem] left-[2rem] w-32  ">
          {children}
        </div>

        {brochure && (
          <div
            className="flex flex-row gap-4 items-center absolute bottom-5 right-5 font-bold text-2xl"
            style={{ color: color }}
          >
            <Download />
            <h1 className="font-bold">Brochure {model}</h1>
          </div>
        )}
      </figure>
    </section>
  );
};

export { SlicedWideImage };
