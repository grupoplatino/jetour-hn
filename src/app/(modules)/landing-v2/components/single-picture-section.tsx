import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface SinglePictureSectionProps {
  title: string;
  image: StaticImageData | string;
  altText?: string;
}

const SinglePictureSection: React.FC<SinglePictureSectionProps> = ({ title, image, altText = 'Vehículo Jetour' }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-start py-16 items-center lg:px-0 px-12">
      <h1 className="font-bold text-4xl uppercase text-center mb-8">{title}</h1>
      <div className="w-full lg:w-[60%] h-full">
        <Image className="w-full h-auto object-cover" src={image} alt={altText} priority />
      </div>
    </section>
  );
};

export default SinglePictureSection;
