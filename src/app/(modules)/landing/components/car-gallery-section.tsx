import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface CarGallerySectionProps {
  images: (string | StaticImageData)[];
  title?: string;
}

const CarGallerySection: React.FC<CarGallerySectionProps> = ({ images, title }) => {
  return (
    <section className="relative w-full flex flex-col justify-start py-16 md:py-20 lg:py-28 items-center px-4 md:px-8 lg:px-16">
      {title && (
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl uppercase text-center mb-8 md:mb-10 lg:mb-12">
          {title}
        </h1>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden shadow-md h-48 sm:h-56 md:h-64 lg:h-72"
          >
            <Image
            placeholder="blur"
              src={image}
              width={800}
              height={600}
              alt={`Jetour vehicle feature ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarGallerySection;