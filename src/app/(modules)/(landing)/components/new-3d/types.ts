// src/components/VehicleVisualizer/types.ts

export interface VehicleColor {
  name: string;
  hex: string;
  folderName: string;
  class?: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  text: string;
  background: string;
  testDriveText: string;
  sectionText: string;
}

export interface Theme {
  colors: ThemeColors;
}

export interface ThemeConfig {
  [key: string]: Theme;
}

export interface VehicleVisualizerProps {
  title?: string;
  basePath: string;
  filePattern: string; // Patrón como "T2-EXT-{index}.png"
  imageCount: number;
  colors: VehicleColor[];
  interiorImagePath?: { path: string; hexColor: string; colorName: string }[];
  defaultColorIndex?: number;
  themeKey: string;
  fileExtension?: string;
}

export interface ExteriorViewProps {
  colors: VehicleColor[];
  selectedColor: VehicleColor;
  onColorChange: (color: VehicleColor) => void;
  basePath: string;
  filePattern: string;
  imageCount: number;
  fileExtension: string;
}

export interface InteriorViewProps {
  imagePath: { path: string; hexColor: string; colorName: string }[];
}

export type ViewMode = 'exterior' | 'interior';
