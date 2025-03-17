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
      }}
    >
      <div className="absolute top-[65%] left-[10%] font-bold text-white">
        <h1 className="text-[5.1rem] font-st">{title}</h1>
        <h2 className="text-3xl">{subtitle}</h2>
      </div>
    </section>
  );
};

export { HeroSection };
