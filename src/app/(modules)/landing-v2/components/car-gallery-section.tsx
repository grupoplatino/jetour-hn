import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface CarGallerySectionProps {
  images: (string | StaticImageData)[];
  title?: string;
}

const CarGallerySection: React.FC<CarGallerySectionProps> = ({ images, title }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 lg:px-[8rem] pb-12 pt-28">
      {title && <h1 className="font-bold text-5xl uppercase text-center mb-12">{title}</h1>}

      <div className="grid md:grid-cols-2 grid-rows-2 gap-4 w-full">
        {images.map((image, index) => (
          <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={image}
              width={800}
              height={600}
              alt={`Jetour vehicle feature ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarGallerySection;
