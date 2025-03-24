import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

const PageSection = ({
  title,
  subtitle,
  imgSrc,
  videoSrc,
  page,
}: {
  title: string;
  subtitle: string;
  imgSrc: string;
  videoSrc: string;
  page: number;
}) => (
  <>
    {/* Text Content */}
    <div
      className={clsx(
        "text-white absolute top-[10rem] transform -translate-x-1/2 z-20 text-left",
        page === 1 ? "left-[15rem]" : "left-[20rem]"
      )}
    >
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-3xl max-w-[35rem] mx-auto">{subtitle}</p>
    </div>

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
        src={videoSrc}
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
        src={videoSrc}
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
      <div className="absolute bottom-20 right-10 z-20 flex flex-row gap-5 justify-center items-center font-bold select-none">
        {[1, 2].map((num) => (
          <p
            key={num}
            onClick={() => setPage(num)}
            className={clsx(
              "hover:cursor-pointer transition-all",
              page === num
                ? "text-white text-[4rem]"
                : "text-gray-400 text-[3rem]"
            )}
          >
            0{num}
          </p>
        ))}
      </div>

      {page === 1 ? (
        <PageSection
          title="T2"
          subtitle="PIENSA EN LA AVENTURA"
          imgSrc="/img/T2/Approach and departure angles.jpg"
          videoSrc="/video/Video-T2/Dubai night tour.mp4"
          page={1}
        />
      ) : (
        <PageSection
          title="DASHING"
          subtitle="DISEÑADA PARA SATISFACER A LOS MÁS EXIGENTES."
          imgSrc="/img/DASHING/3.jpg"
          videoSrc="/video/Video-Dashing/Product CG Video.MP4"
          page={2}
        />
      )}
    </section>
  );
};

export { VideoHero };
