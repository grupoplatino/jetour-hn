/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { NavBar } from "@/components/ui/navbar";
import ContactForm from "@/components/ui/cotizacion";
import Viewer3D from "@/components/ui/landing/viewer-section";
import { SpecsSection } from "@/components/ui/landing/specs-section";
import { CarSpects } from "@/components/ui/landing/car-specs";
import { CarGallerySection } from "@/components/ui/landing/car-gallery-section";
import { SinglePictureSection } from "@/components/ui/landing/single-picture-section";
import { InformativeGallery } from "@/components/ui/landing/informative-gallery";
import { InformativeCard } from "@/components/ui/landing/informative-card";
import { WideImage } from "@/components/ui/landing/wide-image";
import { VideoPlayer } from "@/components/ui/landing/video-player";
import { vehicleData } from "../../../../vehicle-data";
import {
  BenchmarkRow,
  BenchMarkSection,
  CarColorSection,
} from "@/components/ui/landing/benchmarks-section";
import {
  CarBenchmarks,
  CarColor,
} from "@/components/ui/landing/car-benchmarks";
import { HeroSection } from "@/components/ui/landing/hero";
import ColorContext from "@/components/ui/color-context";
import { SlicedWideImage } from "@/components/ui/landing/sliced-wide-image";
import { Footer } from "@/components/ui/footer";

export default function LandingPage() {
  const CarPlaceholder = ({
    image,
    customClass,
  }: {
    image: string;
    customClass: string;
  }) => {
    return (
      <Image
        src={image}
        width={400}
        height={400}
        alt="Car Placeholder"
        className={`absolute ${customClass}`}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    );
  };

  const carData = vehicleData[2] as any;

  return (
    <>
      <ColorContext.Provider value={carData.primaryColor}>
        <NavBar />
      </ColorContext.Provider>
      <HeroSection
        image={carData.hero.backgroundImage}
        title={carData.hero.title}
        subtitle={carData.hero.subTitle}
      />

      <BenchMarkSection>
        <CarPlaceholder
          image={carData.carModels[0]}
          customClass="lg:top-[60%] top-[50%] z-10 left-[50%] md:h-[25rem] md:w-[45rem]"
        />
        <CarPlaceholder
          image={carData.carModels[1]}
          customClass="md:h-[16rem] md:w-[30rem] top-[40%] left-[15%] hidden lg:block"
        />
        {carData.carModels[2] ? (
          <CarPlaceholder
            image={carData.carModels[2]}
            customClass="md:h-[16rem] md:w-[30rem] top-[40%] left-[85%] hidden lg:block"
          />
        ) : (
          <></>
        )}

        <BenchmarkRow top={true}>
          {Object.entries(carData.carBenchmarks)
            .slice(0, 3)
            .map(([keyframes, value], index) => (
              <CarBenchmarks
                key={index}
                title={keyframes}
                benchMark={value as any}
              />
            ))}
        </BenchmarkRow>

        <BenchmarkRow top={false}>
          {Object.entries(carData.carBenchmarks)
            .slice(3, 6)
            .map(([key, value], index) => (
              <CarBenchmarks key={index} title={key} benchMark={value as any} />
            ))}
        </BenchmarkRow>

        <CarColorSection>
          {carData.carColors.map((color: any, index: any) => (
            <CarColor key={index} color={color.hex} customClass={color.class} />
          ))}
        </CarColorSection>
      </BenchMarkSection>

      <VideoPlayer video={carData.video} />

      {carData.wideImages.map((sectionData: any, index: any) => {
        if (carData.wideImages.length == 0) {
          return <></>;
        }
        return (
          <ColorContext.Provider key={index} value={carData.primaryColor}>
            <WideImage
              key={index}
              title={sectionData.title}
              image={sectionData.image}
            />
          </ColorContext.Provider>
        );
      })}

      {carData.cropedWideImages.map((sectionData: any, index: any) => {
        if (carData.cropedWideImages.length == 0) {
          return <></>;
        }

        return (
          <ColorContext.Provider key={index} value={carData.primaryColor}>
            <SlicedWideImage
              title={sectionData.title}
              images={sectionData.images}
            >
              <p className={`${sectionData.text.class}`}>
                {sectionData.text.text}
              </p>
            </SlicedWideImage>
          </ColorContext.Provider>
        );
      })}

      <InformativeGallery title={carData.informativeGallery.title}>
        {carData.informativeGallery.informativeCards.map(
          (card: any, index: any) => (
            <InformativeCard key={index} image={card.image} text={card.text} />
          )
        )}
      </InformativeGallery>

      <SinglePictureSection
        title={carData.singleImageSection.title}
        image={carData.singleImageSection.image}
      />

      <CarGallerySection images={carData.carGallery} />

      <SpecsSection>
        {Object.entries(carData.carSpecs).map(([key, value], index) => (
          <ColorContext.Provider key={index} value={carData.primaryColor}>
            <CarSpects key={index} title={key} specs={value as any} />
          </ColorContext.Provider>
        ))}
      </SpecsSection>

      <Viewer3D carData={carData} />

      <ColorContext.Provider value={carData.primaryColor}>
        <ContactForm />
      </ColorContext.Provider>

      <Footer />
    </>
  );
}
