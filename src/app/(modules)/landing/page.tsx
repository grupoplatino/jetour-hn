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
import { useParams } from "next/navigation";
import { CarSelector } from "@/components/ui/carSelector";

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

  const params = useParams();
  const carIds: Record<string, number> = {
    dashing: 0,
    x50: 1,
    t2: 2,
    x70: 3,
  };

  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  return (
    <>
      <ColorContext.Provider value={"#000000"}>
        <NavBar />
      </ColorContext.Provider>
      <div className="min-h-screen"></div>
      <CarSelector />

      <Footer />
    </>
  );
}
