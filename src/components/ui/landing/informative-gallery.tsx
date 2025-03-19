import { ReactNode } from "react";

interface InformativeGalleryProps {
  title: string;
  children: ReactNode;
}

const InformativeGallery = ({ title, children }: InformativeGalleryProps) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-start py-28 items-center uppercase lg:px-0 px-20">
      <h1 className="font-bold text-4xl text-center">{title}</h1>
      <figure className="mt-5 flex lg:flex-row flex-col lg:gap-2 gap-28 justify-center flex-wrap">
        {children}
      </figure>
    </section>
  );
};

export { InformativeGallery };
