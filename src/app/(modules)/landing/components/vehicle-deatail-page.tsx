import dynamic from 'next/dynamic';

const CarFeaturesShowcase = dynamic(() => import('./car-features-show-case'));
const CarGallerySection = dynamic(() => import('./car-gallery-section'));
const CarHero = dynamic(() => import('./car-hero'));
const VideoSection = dynamic(() => import('./car-video-section'));
const ContactForm = dynamic(() => import('./contact-form'));
const FeaturesSection = dynamic(() => import('./features-section'));
const VehicleVisualizer = dynamic(() => import('./new-3d/vehicle-visualiser'));
const SinglePictureSection = dynamic(() => import('./single-picture-section'));
const SpecsSection = dynamic(() => import('./specs-section'));
const SplitImageSection = dynamic(() => import('./split-image-section'));
const TestDriveButton = dynamic(() => import('./test-drive-button'));
const WhatsAppButton = dynamic(() => import('./whats-app-button'));

import { VehicleData } from '../data/vehicles-constant';

export default function VehicleDetailPage({ carData, showTestDriveButton = true }: { carData: VehicleData; showTestDriveButton?: boolean }) {
  const carTheme = carData.theme;

  return (
    <>
      <WhatsAppButton />

      {showTestDriveButton && <TestDriveButton carTheme={carTheme} />}
      <CarHero
        backgroundImageUrl={carData.hero.backgroundImage.src}
        backgroundImage={carData.hero.backgroundImage}
        carLogo={carData.hero.logo}
        tagline={carData.tagline}
        carTheme={carTheme}
      />
      <CarFeaturesShowcase carModels={carData.colorModels} features={carData.features} carTheme="orange" />
      <VideoSection videoUrl={carData.video.url} thumbnailUrl={carData.video.thumbnail} />

      {carData.splitSections.map((section, index) => (
        <SplitImageSection
          key={index}
          image1={section.image1}
          image2={section.image2}
          sectionTitle={section.title}
          sectionText={section.text}
          carTheme={carTheme}
          carModelName={carData.modelName}
          brochureUrl={section.brochureUrl}
        />
      ))}

      <FeaturesSection carTheme={carTheme} features={carData.featuresSections.items} title={carData.featuresSections.title} />

      <SinglePictureSection title={carData.singlePictureSection.title} image={carData.singlePictureSection.image} />

      <CarGallerySection images={carData.gallery} />

      <SpecsSection specs={carData.specs} themeKey={carTheme} />

      <section className="p-6 pb-12">
        <VehicleVisualizer
          title={carData.visualizer.title}
          basePath={carData.visualizer.basePath}
          filePattern={carData.visualizer.filePattern}
          imageCount={carData.visualizer.imageCount}
          colors={carData.visualizer.colors}
          interiorImagePath={carData.visualizer.interiorImagePath}
          themeKey={carTheme}
          defaultColorIndex={0}
        />
      </section>

      <ContactForm themeKey={carTheme} />
    </>
  );
}
