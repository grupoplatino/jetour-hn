import dynamic from 'next/dynamic';

const Viewer3DClient = dynamic(() => import('./3d-viewer-client'));

interface CarData {
  primaryColor: string;
  ThreeSixtyView: {
    default: { color: string; path: string };
    interior: string;
    exterior: {
      [key: string]: { imageCount: number; path: string; hexColor?: string; colorName?: string };
    };
  };
}

interface Viewer3DProps {
  carData: CarData;
}

export default function Viewer3D({ carData }: Viewer3DProps) {
  const { ThreeSixtyView, primaryColor } = carData;

  return (
    <section id="visualizador" className="relative min-h-screen w-full py-20 flex flex-col items-center bg-gray-50">
      <div className="w-full max-w-7xl px-4 md:px-8 lg:px-12">
        <h1 className="font-bold text-4xl md:text-5xl text-left mb-12">VISUALIZADOR 3D</h1>
        <div className="w-full">
          <Viewer3DClient threeSixtyData={ThreeSixtyView} primaryColor={primaryColor} />
        </div>
      </div>
    </section>
  );
}
