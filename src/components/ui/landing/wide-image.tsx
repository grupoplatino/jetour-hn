import Image from "next/image";
import { usePrimaryColor } from "../color-context";

interface WideImageProps {
  title: string;
  image: string;
  text: string;
}

const WideImage = ({ title, image, text }: WideImageProps) => {
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
        <p className="absolute right-4 top-4 w-[27rem] text-right text-white font-bold text-lg">
          {text}
        </p>
      </figure>
    </section>
  );
};

export { WideImage };
