import Image from "next/image";

interface InformativeCardProps {
  image: string;
  text: string;
}

const InformativeCard = ({ image, text }: InformativeCardProps) => {
  return (
    <div className="flex flex-col gap-3 justify-between items-center w-[250px] h-[380px]">
      <Image
        className="object-cover w-full min-h-[400px]"
        src={image}
        width={250}
        height={300}
        alt="informative image"
      />
      <p className="uppercase font-bold text-center w-full">{text}</p>
    </div>
  );
};

export { InformativeCard };
