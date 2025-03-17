import Image from "next/image";
import { usePrimaryColor } from "../color-context";

interface WideImageProps {
  title: string;
  image: string;
}

const WideImage = ({ title, image }: WideImageProps) => {
  const primaryColor = usePrimaryColor();

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center">
      <figure className="relative w-[95%] h-[80%] mt-20">
        <Image
          className=" w-full h-full object-cover"
          src={image}
          width={200}
          height={200}
          alt="Car"
        />
        <h1
          className="absolute top-[-25px] left-0 font-bold uppercase"
          style={{ color: primaryColor }}
        >
          {title}
        </h1>
      </figure>
    </section>
  );
};

export { WideImage };
