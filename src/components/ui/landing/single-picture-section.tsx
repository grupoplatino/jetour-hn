import Image from "next/image";

interface SinglePictureSectionProps {
  title: string;
  image: string;
}

const SinglePictureSection = ({ title, image }: SinglePictureSectionProps) => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-start py-28 items-center">
      <h1 className="font-bold text-5xl uppercase">{title}</h1>
      <Image
        className=" w-[60%] h-full mt-5"
        src={image}
        width={200}
        height={200}
        alt="Car"
      />
    </section>
  );
};

export { SinglePictureSection };
