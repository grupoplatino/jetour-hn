import Image from 'next/image';
import Link from 'next/link';
import { BookDrive } from './book-drive';

const CarSelector = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-cente w-fullr">
      <h1 className="md:absolute top-20 md:top-12 md:left-16 lg:top-24 lg:left-16 font-bold text-3xl">Nuestros Modelos</h1>
      <div className="w-[70%] py-10 grid grid-cols-1 md:grid-cols-2">
        <Link className="flex flex-col items-center" href={'/landing/t2'}>
          <Image src={'/img/T2/car.0022.png'} width={400} height={400} alt="T2" className="w-full h-full object-contain" />
          <h1 className="font-bold text-4xl">T2</h1>
        </Link>
        <Link className="flex flex-col items-center" href={'/landing/dashing'}>
          <Image src={'/img/DASHING/JETOUR_azul_cam360_out.0003.png'} width={400} height={400} alt="Dashing" className="w-full h-full object-contain" />
          <h1 className="font-bold text-4xl">DASHING</h1>
        </Link>
        <Link className="flex flex-col items-center" href={'/landing/x70'}>
          <Image src={'/img/X70 Plus/X70 Plus 45 degree Blue.png'} width={400} height={400} alt="X70 Plus" className="w-full h-full object-contain" />
          <h1 className="font-bold text-4xl">X70 Plus</h1>
        </Link>
        <Link className="flex flex-col items-center" href={'/landing/x50'}>
          <Image src={'/img/X50/x50-360HEI_00005.png'} width={400} height={400} alt="Car Placeholder" className="w-full h-full object-contain" />
          <h1 className="font-bold text-4xl">X50</h1>
        </Link>
      </div>
      <BookDrive color="#f28b2d" />
    </section>
  );
};

export { CarSelector };
