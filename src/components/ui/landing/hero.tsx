interface HeroSectionProps {
  image: string;
  title: string;
  subtitle: string;
}

const HeroSection = ({ image, title, subtitle }: HeroSectionProps) => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("${image}")`,
        backgroundPosition: window?.innerWidth >= 1024 ? 'center' : window?.innerWidth >= 768 ? '-25rem' : '-23rem'
      }}
    >
      <div className="absolute top-[65%] left-[10%] font-bold text-white">
        <h1 className="md:text-[5rem] text-[4rem]">{title}</h1>
        <h2 className="md:text-3xl text-[2rem]">{subtitle}</h2>
      </div>
    </section>
  );
};

export { HeroSection };
