import Image, { StaticImageData } from 'next/image';
import { carThemes } from '../page'; // Adjust import path as needed

interface SplitImageSectionProps {
  image1: StaticImageData;
  image2: StaticImageData;
  sectionTitle: string;
  sectionText: string;
  carTheme: keyof typeof carThemes;
}

export function SplitImageSection({ image1, image2, sectionTitle, sectionText, carTheme }: SplitImageSectionProps) {
  const theme = carThemes[carTheme];

  return (
    <section className="relative w-full min-h-[500px] flex">
      {/* Left Side Image */}
      <div className="w-1/2 relative overflow-hidden">
        <Image src={image1} alt="Section Left Image" fill className="object-cover absolute inset-0" />
        <div
          className="absolute inset-0 bg-black/30 flex flex-col justify-center p-8"
          style={{
            clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)',
            paddingRight: '10%'
          }}
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme.colors.primary }}>
            {sectionTitle}
          </h2>
          <p
            className="text-lg font-medium"
            style={{
              color: theme.colors.sectionText || 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
            }}
          >
            {sectionText}
          </p>
        </div>
      </div>

      {/* Right Side Image with Diagonal Cut */}
      <div className="w-1/2 relative overflow-hidden">
        <div className="absolute inset-0" style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)' }}>
          <Image src={image2} alt="Section Right Image" fill className="object-cover absolute inset-0" />
        </div>
      </div>
    </section>
  );
}
