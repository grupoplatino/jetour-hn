'use client';

import { useState, useEffect } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

interface InteriorViewerProps {
  imagePath: string;
}

const InteriorViewer = ({ imagePath }: InteriorViewerProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Verificar que la imagen exista
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => {
      console.error(`Error al cargar la imagen panorámica: ${imagePath}`);
      setIsImageLoaded(false);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imagePath]);

  if (!isImageLoaded) {
    return (
      <div className="w-full h-full min-h-[400px] flex flex-col justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Cargando vista interior...</p>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-[80%] h-[400px] mt-5">
      <ReactPhotoSphereViewer
        src={imagePath}
        height="100%"
        width="100%"
        littlePlanet={false}
        mousewheelCtrlKey={true}
        navbar={['zoom', 'fullscreen']}
        containerClass="photo-sphere-container"
      />
    </div>
  );
};

export default InteriorViewer;
