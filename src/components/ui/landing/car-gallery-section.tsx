import Image from "next/image";

interface CarGallerySection {
  images: string[];
}

const CarGallerySection = ({ images }: CarGallerySection) => {
  return (
    <section className="relative h-screen w-full flex justify-center items-center px-5 lg:px-[8rem] pb-12 pt-28 ">
      <div className="grid md:grid-cols-2 grid-rows-2 gap-2 w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={200}
            height={200}
            className="w-full h-full"
            alt={`Exterior ${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export { CarGallerySection };
