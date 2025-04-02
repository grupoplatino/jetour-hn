import Image from "next/image";
import { ReactNode, useState } from "react";
import clsx from "clsx";

const PageSection = ({
  imgSrc,
  firstVideoSrc,
  secondVideoSrc,
  page,
  children,
}: {
  imgSrc: string;
  firstVideoSrc: string;
  secondVideoSrc: string;
  page: number;
  children: ReactNode;
}) => (
  <>
    {/* Text Content */}
    {children}

    {/* Left Image */}
    <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden"
      style={{ clipPath: "polygon(0% 0%, 45% 0%, 35% 100%, 0% 100%)" }}
    >
      <Image
        className="w-full h-full object-cover"
        style={{ objectPosition: "center" }}
        src={imgSrc}
        width={800}
        height={500}
        alt="Car Left"
      />
    </div>

    {/* Right Video */}
    <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden"
      style={{ clipPath: "polygon(45% 0%, 100% 0%, 100% 100%, 35% 100%)" }}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={firstVideoSrc}
        typeof="video/mp4"
      ></video>
    </div>

    {/* Bottom Center Video */}
    <div
      className="absolute bottom-0 left-[35%] transform -translate-x-1/2 w-[50%] md:w-[25%] h-[60%] overflow-hidden"
      style={{ clipPath: "polygon(45% 0%, 100% 0%, 70% 100%, 10% 100%)" }}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={secondVideoSrc}
        typeof="video/mp4"
      ></video>
    </div>
  </>
);

const VideoHero = () => {
  const [page, setPage] = useState(1);

  return (
    <section className="relative w-full h-screen">
      {/* Page Selector */}
      <div className="absolute bottom-8 right-10 z-20 flex flex-row gap-5 justify-center items-center font-bold select-none">
        {[1, 2].map((num) => (
          <p
            key={num}
            onClick={() => setPage(num)}
            className={clsx(
              "hover:cursor-pointer transition-all",
              page === num
                ? "text-white text-[3rem]"
                : "text-gray-400 text-[2rem]"
            )}
          >
            0{num}
          </p>
        ))}
      </div>

      {page === 1 ? (
        <PageSection
          imgSrc="/img/landing/T2/Fashion Blocks 2.jpg"
          firstVideoSrc="/img/landing/T2/T2 TVC-30s-4K.mp4"
          secondVideoSrc="/img/landing/T2/9x16-40s.mp4"
          page={1}
        >
          <figure className="absolute z-10 top-44 left-8 flex flex-col justify-start">
            <Image
              src="/img/T2/Logo.png"
              width={200}
              height={200}
              alt="Logo T2"
            />
            <h1 className="ml-12 text-3xl font-bold text-white">
              PIENSA EN LA AVENTURA
            </h1>
          </figure>
        </PageSection>
      ) : (
        <PageSection
          imgSrc="/img/DASHING/3.jpg"
          firstVideoSrc="/img/landing/DASHING/Product CG Video.MP4"
          secondVideoSrc="/img/landing/DASHING/Jetour Jx65 Showroom 高清 无字幕.mp4"
          page={2}
        >
          <figure className="absolute z-10 top-28 left-8 flex flex-col justify-start">
            <Image
              src="/img/Dashing/Logo.png"
              width={400}
              height={400}
              alt="Logo DASHING"
            />
            <h1 className="ml-8 -mt-16 text-2xl font-bold w-[23rem] text-white">
              DISEÑADA PARA SATISFACER A LOS MÁS EXIGENTES
            </h1>
          </figure>
        </PageSection>
      )}
    </section>
  );
};

export { VideoHero };
