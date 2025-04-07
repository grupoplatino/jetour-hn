import Image from "next/image";
interface HeroSectionProps {
  image: string;
  logoWidth: number;
  logoHeight: number;
  logo: string;
  subtitle: string;
}

const HeroSection = ({
  image,
  logo,
  logoWidth,
  logoHeight,
  subtitle,
}: HeroSectionProps) => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("${image}")`,
        backgroundPosition: window?.innerWidth >= 1024 ? 'center' : window?.innerWidth >= 768 ? '-25rem' : '-23rem'
      }}
    >
      <div className="absolute top-[60%] left-[10%] font-bold text-white">
        <Image
          src={logo}
          width={logoWidth}
          height={logoHeight}
          alt="Model Logo"
        />
        <h2 className="md:text-3xl text-[2rem]">{subtitle}</h2>
      </div>
      <Image
        src="/img/Certificado.png"
        width={200}
        height={200}
        alt="Certificado"
        className="absolute bottom-2 left-2"
      />
    </section>
  );
};

export { HeroSection };
