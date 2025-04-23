import { useState, useEffect, useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import clsx from 'clsx';

interface InteriorViewerProps {
  imagePath: string;
  interiorColors?: {
    path: string;
    color: string;
    name: string;
  }[];
}

const InteriorViewer = ({ imagePath, interiorColors = [] }: InteriorViewerProps) => {
  // Estado para la imagen actual seleccionada
  const [currentPath, setCurrentPath] = useState(imagePath);
  // Estado para rastrear qué imágenes ya están cargadas
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  // Estado para mostrar/ocultar el indicador de carga
  const [isLoading, setIsLoading] = useState(true);
  // Referencia para el caché de imágenes
  const imageCache = useRef<Map<string, HTMLImageElement>>(new Map());
  // Estado para el color seleccionado (si hay colores disponibles)
  const [selectedColor, setSelectedColor] = useState(interiorColors.length > 0 ? interiorColors[0].color : '');

  // Función para precargar una imagen y añadirla al caché
  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve) => {
      // Si ya está en el caché y cargada, resolvemos inmediatamente
      if (imageCache.current.has(src)) {
        const cachedImg = imageCache.current.get(src);
        if (cachedImg && cachedImg.complete) {
          setLoadedImages((prev) => new Set(prev).add(src));
          resolve();
          return;
        }
      }

      // Si no está en caché o no está completa, cargamos la imagen
      const img = new Image();
      img.onload = () => {
        imageCache.current.set(src, img);
        setLoadedImages((prev) => new Set(prev).add(src));
        resolve();
      };
      img.onerror = () => {
        // En caso de error, también resolvemos pero no la añadimos al caché
        console.error(`Error cargando imagen: ${src}`);
        resolve();
      };
      img.src = src;
    });
  };

  // Efecto para cargar la imagen inicial y luego el resto en segundo plano
  useEffect(() => {
    const loadInitialImage = async () => {
      setIsLoading(true);

      // Primero cargamos la imagen inicial
      await preloadImage(imagePath);
      setIsLoading(false);

      // Luego cargamos el resto de imágenes si hay colores disponibles
      if (interiorColors.length > 0) {
        // Cargamos el resto de imágenes en segundo plano
        interiorColors.forEach((color) => {
          if (color.path !== imagePath) {
            preloadImage(color.path);
          }
        });
      }
    };

    loadInitialImage();
  }, [imagePath, interiorColors]);

  // Manejador para cambiar el color/imagen
  const handleColorChange = (colorPath: string, colorHex: string) => {
    // Si ya está cargada, cambiamos inmediatamente sin mostrar loading
    if (loadedImages.has(colorPath)) {
      setCurrentPath(colorPath);
      setSelectedColor(colorHex);
    } else {
      // Si no está cargada, mostramos loading y cargamos la imagen
      setIsLoading(true);
      preloadImage(colorPath).then(() => {
        setCurrentPath(colorPath);
        setSelectedColor(colorHex);
        setIsLoading(false);
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="relative flex-grow">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
            <div className="animate-pulse rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <ReactPhotoSphereViewer src={currentPath} height={'100%'} width="100%" />
        )}
      </div>

      {interiorColors.length > 0 && (
        <div className="flex justify-center mt-4 gap-3">
          {interiorColors.map((colorOption, index) => (
            <button
              key={index}
              className={clsx(
                'w-8 h-8 rounded-full transition-all',
                selectedColor === colorOption.color ? 'ring-2 ring-offset-2 ring-primary transform scale-110' : 'hover:scale-105'
              )}
              style={{ backgroundColor: colorOption.color }}
              onClick={() => handleColorChange(colorOption.path, colorOption.color)}
              aria-label={`Ver interior ${colorOption.name}`}
              title={colorOption.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InteriorViewer;
