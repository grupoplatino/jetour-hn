import Image from "next/image";
import { ReactNode } from "react";
import { usePrimaryColor } from "../color-context";

interface SlicedWideImageProps {
  images: string[];
  title: string;
  children?: ReactNode;
}

const SlicedWideImage = ({ images, title, children }: SlicedWideImageProps) => {
  const primaryColor = usePrimaryColor();

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center">
      <figure className="relative w-[95%] h-[80%] mt-20">
        {/* Left Side of the Image */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{ clipPath: "polygon(0% 0%, 60% 0%, 40% 100%, 0% 100%)" }}
        >
          <Image
            className="w-full h-full object-cover"
            style={{ objectPosition: "-20rem" }} // Adjust scaling to fit better
            src={images[0]}
            width={800}
            height={500}
            alt="Car Left"
          />
        </div>

        {/* Right Side of the Image */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{ clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%)" }}
        >
          <Image
            className="w-full h-full object-cover"
            style={{ objectPosition: "20rem" }}
            src={images[1]}
            width={800}
            height={500}
            alt="Car Right"
          />
        </div>

        {/* Title */}
        <h1
          className="absolute top-[-25px] left-0 font-bold uppercase z-auto"
          style={{ color: primaryColor }}
        >
          {title}
        </h1>
      </figure>
      {children}
    </section>
  );
};

export { SlicedWideImage };
