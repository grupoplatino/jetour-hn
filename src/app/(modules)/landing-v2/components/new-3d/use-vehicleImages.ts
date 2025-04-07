// src/components/VehicleVisualizer/hooks/useVehicleImages.ts
import { useState, useEffect } from 'react';
import { VehicleColor } from './types';

interface UseVehicleImagesProps {
  basePath: string;
  filePattern: string;
  selectedColor: VehicleColor;
  imageCount: number;
  fileExtension: string;
}

interface UseVehicleImagesReturn {
  imagePaths: string[];
  isLoading: boolean;
  loadingProgress: number;
  loadingError: string | null;
}

/**
 * Hook para generar y precargar imágenes del vehículo
 */
export function useVehicleImages({ basePath, filePattern, selectedColor, imageCount, fileExtension }: UseVehicleImagesProps): UseVehicleImagesReturn {
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setLoadingProgress(0);
    setLoadingError(null);

    // Construir las rutas de las imágenes
    const colorPath = `${basePath}/${selectedColor.folderName}/`;
    const paths = Array.from({ length: imageCount }, (_, i) => {
      // Reemplazar {index} en el patrón del archivo con el número actual
      return `${colorPath}${filePattern.replace('{index}', i.toString())}`;
    });

    setImagePaths(paths);

    // Precargar las imágenes para un rendimiento más suave
    let loadedCount = 0;
    const totalImages = paths.length;

    paths.forEach((path) => {
      const img = new Image();
      img.onload = () => {
        if (!isMounted) return;

        loadedCount++;
        const progress = Math.round((loadedCount / totalImages) * 100);
        setLoadingProgress(progress);

        if (loadedCount === totalImages) {
          setIsLoading(false);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        setLoadingError(`Error al cargar la imagen: ${path}`);
        loadedCount++;
        const progress = Math.round((loadedCount / totalImages) * 100);
        setLoadingProgress(progress);

        if (loadedCount === totalImages) {
          setIsLoading(false);
        }
      };

      img.src = path;
    });

    return () => {
      isMounted = false;
    };
  }, [basePath, filePattern, selectedColor, imageCount, fileExtension]);

  return { imagePaths, isLoading, loadingProgress, loadingError };
}
