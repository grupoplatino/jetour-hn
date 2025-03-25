import Image from "next/image";
import Link from "next/link";

const CarSelector = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center">
      <h1 className="md:absolute top-20 md:top-12 md:left-16 lg:top-24 lg:left-16 font-bold text-3xl">
        Nuestros Modelos
      </h1>
      <div className="w-[70%] py-10 grid grid-cols-1 md:grid-cols-2">
        <Link className="flex flex-col items-center" href={"/landing/t2"}>
          <Image
            src={"/img/T2/car.0022.png"}
            width={400}
            height={400}
            alt="T2"
            className="w-full h-full"
          />
          <h1 className="font-bold text-4xl">T2</h1>
        </Link>
        <Link className="flex flex-col items-center" href={"/landing/dashing"}>
          <Image
            src={"/img/DASHING/JETOUR_azul_cam360_out.0003.png"}
            width={400}
            height={400}
            alt="Dashing"
            className="w-full h-full"
          />
          <h1 className="font-bold text-4xl">DASHING</h1>
        </Link>
        <Link className="flex flex-col items-center" href={"/landing/x70"}>
          <Image
            src={"/img/X70 Plus/X70 Plus 45 degree Blue.png"}
            width={400}
            height={400}
            alt="X70 Plus"
            className="w-full h-full"
          />
          <h1 className="font-bold text-4xl">X70 Plus</h1>
        </Link>
        <Link className="flex flex-col items-center" href={"/landing/x50"}>
          <Image
            src={"/img/X50/x50-360HEI_00005.png"}
            width={400}
            height={400}
            alt="Car Placeholder"
            className="w-full h-full"
          />
          <h1 className="font-bold text-4xl">X50</h1>
        </Link>
      </div>
      <div className="flex flex-row gap-2 w-full md:w-auto md:absolute md:right-[-2.25rem] lg:right-0 md:scale-75 lg:scale-100">
        <div className="bg-[#f28b2d] w-2 h-12 -skew-x-[20deg] md:-skew-x-12"></div>
        <div className="bg-[#f28b2d] w-2 h-12 -skew-x-[20deg] md:-skew-x-12"></div>
        <div
          className="ml-[-8px] md:ml-[-3px] w-full bg-[#f28b2d] flex flex-row justify-center items-center px-8"
          style={{ clipPath: "polygon(3.5% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <p className="font-bold">AGENDA TU TEST DRIVE</p>
        </div>
      </div>
    </section>
  );
};

export { CarSelector };
