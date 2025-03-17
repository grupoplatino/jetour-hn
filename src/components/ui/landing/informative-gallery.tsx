import { ReactNode } from "react";

interface InformativeGalleryProps {
  title: string;
  children: ReactNode;
}

const InformativeGallery = ({ title, children }: InformativeGalleryProps) => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-start py-28 items-center uppercase">
      <h1 className="font-bold text-4xl">{title}</h1>
      <figure className="mt-5 flex flex-row gap-2 justify-center flex-wrap">
        {children}
      </figure>
    </section>
  );
};

export { InformativeGallery };
