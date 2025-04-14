import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { carThemes } from '../data/theme-definitions';

interface SplitImageSectionProps {
  image1: StaticImageData | string;
  image2: StaticImageData | string;
  sectionTitle: string;
  sectionText: string;
  carTheme: keyof typeof carThemes;
  carModelName: string;
  brochureUrl?: string;
  textWhite?: boolean;
  leftSpacing?: string;
  rightSpacing?: string;
  textLeft?: boolean;
  imageContainLeft?: boolean;
  imageContainRight?: boolean;
}

export default function SplitImageSection({
  image1,
  image2,
  sectionTitle,
  sectionText,
  carTheme,
  carModelName,
  brochureUrl,
  textWhite,
  textLeft,
  imageContainLeft,
  imageContainRight
}: SplitImageSectionProps) {
  const theme = carThemes[carTheme];

  return (
    <section className="relative w-full flex flex-col gap-y-8 justify-center items-center px-4 sm:px-8 md:px-16 py-10">
      {/* Título de la sección */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mr-auto" style={{ color: theme.colors.primary }}>
        {sectionTitle}
      </h1>

      {/* Imagen izquierda con overlay para mejor legibilidad del texto */}
      {image1 !== image2 ? (
        <>
          <figure className="relative w-full h-[70vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-between">
            <div
              className="absolute top-0 z-10 left-0 w-full h-full overflow-hidden"
              style={{
                clipPath: 'polygon(0% 0%, 56% 0%, 46% 100%, 0% 100%)'
              }}
            >
              {/* {image1 !== image2 && (
                <div className="absolute inset-0 bg-black/30 z-10"></div>
              )} */}
              <Image className={`w-[60%] h-full ${imageContainLeft ? 'object-cover' : 'object-cover'}`} src={image1} alt="Car View 1" placeholder="blur" />
            </div>

            {/* Imagen derecha */}
            <div className="absolute top-0 !right-0 w-[60%] h-full overflow-hidden">
              <Image className={`w-full h-full ${imageContainRight ? 'object-cover' : 'object-cover'}`} src={image2} alt="Car View 2" placeholder="blur" />
            </div>

            {/* Texto de la sección */}
            <div
              className={`absolute top-2 ${textLeft ? 'left-8 md:left-16 lg:left-20 text-start' : image1 !== image2 ? 'left-20' : 'right-4'} text-right ${
                textWhite ? 'text-white drop-shadow-lg' : 'text-black'
              } font-bold max-w-[40rem] z-20`}
            >
              <p className={`text-xs -ml-4 drop-shadow-lg -mt-0 md:-mt-0 w-32 md:text-lg md:text-right md:w-64 lg:w-full ${theme.colors.sectionText}`}>
                {sectionText}
              </p>
            </div>

            {/* Botón para descargar brochure */}
            {brochureUrl && (
              <a
                href={brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-10 right-10 z-30 flex items-center gap-2 hover:opacity-90 transition-opacity"
                download
              >
                <div className="flex items-center gap-2 px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span className="font-bold text-white text-xl">Brochure {carModelName}</span>
                </div>
              </a>
            )}
          </figure>
        </>
      ) : (
        <>
          <figure className="h-[900px] relative mx-auto w-full">
            <Image src={image1} alt="Image Section" width={200} height={200} className="w-full mx-auto" />
            {/* Texto de la sección */}
            <div
              className={`absolute top-2 ${textLeft ? 'left-8 md:left-16 lg:left-24 text-start' : 'right-4'} text-right ${
                textWhite ? 'text-white drop-shadow-lg' : 'text-black'
              } font-bold max-w-[40rem] z-20`}
            >
              <p className={`text-xs -ml-4 drop-shadow-lg -mt-0 md:-mt-0 w-32 md:text-lg md:text-right md:w-64 lg:w-full ${theme.colors.sectionText}`}>
                {sectionText}
              </p>
            </div>

            {/* Botón para descargar brochure */}
            {brochureUrl && (
              <a
                href={brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-10 right-10 z-30 flex items-center gap-2 hover:opacity-90 transition-opacity"
                download
              >
                <div className="flex items-center gap-2 px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span className="font-bold text-white text-xl">Brochure {carModelName}</span>
                </div>
              </a>
            )}
          </figure>
        </>
      )}
    </section>
  );
}
