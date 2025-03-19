import Image from "next/image";

interface SinglePictureSectionProps {
  title: string;
  image: string;
}

const SinglePictureSection = ({ title, image }: SinglePictureSectionProps) => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-start py-28 items-center lg:px-0 px-12">
      <h1 className="font-bold text-5xl uppercase text-center">{title}</h1>
      <Image
        className="w-full lg:w-[60%] h-full mt-5"
        src={image}
        width={200}
        height={200}
        alt="Car"
      />
    </section>
  );
};

export { SinglePictureSection };
