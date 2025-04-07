/* eslint-disable @typescript-eslint/no-explicit-any */
// car-data.ts

import { StaticImageData } from 'next/image';

// Importaciones para T2

import t2Image from '@root/public/img/T2/T2 Jetour.jpg';
import t2Logo from '@root/public/img/T2/Logo.png';
import t2BlackImage from '@root/public/img/T2/car black 0022 (1).webp';
import t2WhiteImage from '@root/public/img/T2/car white 0022.webp';
import t2NeutralImage from '@root/public/img/T2/car.0022.webp';
import dashingWhiteImage from '@root/public/img/Dashing/JETOUR_blanco_cam360_out.0003.webp';
import dashingGrayImage from '@root/public/img/Dashing/JETOUR_gris_cam360_out.0003.webp';
import dashingBlackImage from '@root/public/img/Dashing/JETOUR_negro_cam360_out.0003.webp';
import dashingImageSection from '@root/public/img/DASHING/15.8 in. Digital screen.webp';
import dashingSingleImageSection from '@root/public/img/DASHING/3.webp';
import dashingImage01 from '@root/public/img/DASHING/Foto 01.webp';
import dashingImage02 from '@root/public/img/DASHING/Foto 02.webp';
import dashingImage03 from '@root/public/img/DASHING/Foto 03.webp';
import dashingImage04 from '@root/public/img/DASHING/Foto 04.webp';
import rubikKey from '@root/public/img/DASHING/Rubik_s cube key.webp';
import headAcoustics from '@root/public/img/DASHING/Head acoustics(optional).webp';
import wirelessCharging from '@root/public/img/DASHING/40 watts of wireless charging.webp';
import t2ImageSection from '@root/public/img/T2/Approach and departure angles.webp';
import t2ImageSection2 from '@root/public/img/T2/Magic Electric Door.webp';
import securityImage from '@root/public/img/T2/Seaside scenery.webp';
import extraStorageT2 from '@root/public/img/T2/Extra Large Storage Space.webp';
import screenT2 from '@root/public/img/T2/15.6_high-resolution color touchscreen.webp';
import t2SkeletonImage from '@root/public/img/T2/Steel skeletonized body.webp';
import t2TopSkeletonImage from '@root/public/img/T2/Matrix protected roof.webp';
import t2SecondSeatsRowImage from '@root/public/img/T2/Second row seats faced down.webp';
import t2ProximityImage from '@root/public/img/T2/Forward-collision warning system copia.webp';
import heatedSeats from '@root/public/img/T2/Heated front seats.jpg';

// Importaciones para Dashing (ejemplo)
import dashingImage from '@root/public/img/DASHING/Dashing Jetour.webp';
import dashingLogo from '@root/public/img/DASHING/Logo.png';

// Importaciones para X50 (ejemplo)
import x50Image from '@root/public/img/X50/X50 Jetour.png';
import x50Logo from '@root/public/img/X50/Logo.png';

// Importaciones para X70 (ejemplo)
import x70Image from '@root/public/img/X70 Plus/X70 Jetour.jpg';
import x70Logo from '@root/public/img/X70 Plus/Logo.png';
import { CarThemeKey } from './theme-definitions';

import x50CarSelectorImage from '@root/public/img/X50/x50-360BAI_00005.webp';

import x70CarSelectorImage from '@root/public/img/X70 Plus/X70 Plus 45 degree Blue.webp';

import dashingSelectorImage from '@root/public/img/DASHING/JETOUR_azul_cam360_out.0003.webp';

// Importación de datos de especificaciones

// Tipos

interface CarFeature {
  name: string;
  value: number;
  position: 'topleft' | 'topcenter' | 'topright' | 'bottomleft' | 'bottomcenter' | 'bottomright';
}

interface SplitImageSection {
  image1: StaticImageData;
  image2: StaticImageData;
  title: string;
  text: string;
  brochureUrl?: string;
}

interface FeatureItem {
  image: StaticImageData;
  label: string;
}

interface Visualizer {
  title: string;
  basePath: string;
  filePattern: string;
  imageCount: number;
  colors: {
    name: string;
    hex: string;
    folderName: string;
    class: string;
  }[];
  interiorImagePath: string;
  defaultColorIndex: number;
}

// name: string;
// hex: string;
// folderName: string;
// class: string;
// color: string;
// colorName: string;
// hexColor: string;

// Estructura principal de datos del vehículo
export interface VehicleData {
  id: string;
  carSelecctorImage: StaticImageData;
  modelName: string;
  tagline: string;
  theme: CarThemeKey;
  hero: {
    backgroundImage: StaticImageData;
    logo: StaticImageData;
  };
  colorModels: {
    carImage: StaticImageData;
    color: string;
    colorName: string;
    hexColor: string;
  }[];
  features: CarFeature[];
  video: {
    url: string;
    thumbnail: string;
  };
  splitSections: SplitImageSection[];
  featuresSections: {
    title: string;
    items: FeatureItem[];
  };
  singlePictureSection: {
    title: string;
    image: StaticImageData;
  };
  gallery: StaticImageData[];
  specs: Record<string, Record<string, string>>;
  visualizer: Visualizer;
}

// Definición de datos de vehículos
export const vehiclesData: Record<string, VehicleData> = {
  t2: {
    carSelecctorImage: t2WhiteImage,
    id: 't2',
    modelName: 'T2',
    tagline: 'AVENTURAS SIN LÍMITES',
    theme: 'orange',
    hero: {
      backgroundImage: t2Image,
      logo: t2Logo
    },
    colorModels: [
      {
        carImage: t2BlackImage,
        color: 'nightBlack',
        colorName: 'Negro',
        hexColor: '#030304'
      },
      {
        carImage: t2WhiteImage,
        color: 'white',
        colorName: 'Blanco',
        hexColor: '#ffffff'
      },
      {
        carImage: t2NeutralImage,
        color: 'neutralColor',
        colorName: 'Color Neutral',
        hexColor: '#d8cbb1'
      }
    ],
    features: [
      { name: 'CABALLOS DE FUERZA MÁX.', value: 250, position: 'topleft' },
      { name: 'TORQUE MÁXIMO', value: 390, position: 'topcenter' },
      { name: 'VELOCIDAD MÁXIMA (KM/H)', value: 197, position: 'topright' },
      {
        name: 'DISTANCIA ENTRE EJES (MM)',
        value: 2800,
        position: 'bottomleft'
      },
      { name: 'DESPLAZAMIENTO (ML)', value: 1998, position: 'bottomright' }
    ],
    video: {
      url: '/video/Video-T2/Dubai Night Tour.mp4',
      thumbnail: '/img/T2/T2 Jetour.jpg'
    },
    splitSections: [
      {
        image1: t2ImageSection,
        image2: t2ImageSection2,
        title: 'T2 FUE CREADA PARA LA AVENTURA',
        text: 'Tiene un sistema de tracción en las 4 ruedas que la hace perfecta para cualquier terreno, cuenta con 7 modos de conducción que te permitirán personalizar la conducción.'
      },
      {
        image1: screenT2,
        image2: extraStorageT2,
        title: 'ESTILO POR FUERA Y POR DENTRO',
        text: 'La T2 tiene un impresionante tablero, Volante multifunción, pantalla touchscreen de 15 pulgadas, parlantes Sony, cargador inalámbrico, interior de lujo con asientos ventilados, luces atmosféricas.',
        brochureUrl: 'https://www.jetour.com.co/brochure/T2.pdf'
      }
    ],
    featuresSections: {
      title: 'COMODIDAD DESDE DONDE LA VEAS',
      items: [
        {
          image: heatedSeats,
          label: 'MODELADO TRIDIMENSIONAL MULTINIVEL'
        },
        {
          image: screenT2,
          label: 'PANTALLA CENTRAL DE 15.6'
        },
        {
          image: extraStorageT2,
          label: 'DISTANCIA ENTRE EJES SÚPER LARGA'
        }
      ]
    },
    singlePictureSection: {
      title: 'SEGURIDAD Y RESPALDO PARA DISFRUTAR EL VIAJE',
      image: securityImage
    },
    gallery: [t2SkeletonImage, t2TopSkeletonImage, t2SecondSeatsRowImage, t2ProximityImage],
    specs: {
      'Parámetros básicos': {
        'Dimensiones (mm)': '4785 x 2006 x 1880',
        Capacidad: '5 pasajeros',
        'Colores exteriores': 'Blanco, Gris Claro, Negro, Arena, Cyan'
      },
      Motor: {
        Tipo: '2.0 Turbo',
        'Sistema de tracción': 'XWD'
      },
      'Diseño y estilo exterior': {
        Diseño: 'Elegante, aerodinámico, moderno y futurista',
        Luces: 'LED con forma lumínica distintiva',
        Rines: 'De lujo de 20"'
      },
      'Confort y comodidad interior': {
        Asientos: 'De lujo tapizados en cuero',
        Ajustes: 'Asientos delanteros con ajuste eléctrico',
        Climatización: 'Asientos delanteros con calefacción y enfriamiento',
        Iluminación: 'Luces de ambiente interior',
        'Colores interiores': 'Color café, Color negro'
      },
      'Funcionalidad y tecnología': {
        Techo: 'Panorámico y sunroof',
        Encendido: 'Botón de encendido y apagado',
        Pantalla: 'Táctil de 15,6 pulgadas',
        Procesador: 'Chip Qualcomm Snapdragon 8155',
        Conectividad: 'Apple CarPlay y Android Auto',
        'Control por voz': 'Inteligente (8 trillones de cálculos/segundo)',
        Cargador: 'Inalámbrico'
      },
      'Sonido y entretenimiento': {
        'Sistema de audio': '12 bocinas y subwoofer'
      },
      'Seguridad y tecnología XWD': {
        'Sistema de ruedas': 'Sistema antibloqueo de ruedas',
        'Modos de conducción': '8 modos de conducción',
        Asistentes: 'Asistente de ascenso y descenso en pendientes, Asistente de frenado',
        'Sistema off-road': 'Sistema XWD para principiantes en off-road',
        'Capacidad de remolque': 'Hasta 1,600 kg (trailer con frenos)',
        Chasis: 'Con rigidez torsional de 3100 Nm/deg',
        Estructura: 'Más del 80% de acero de alta resistencia',
        Transmisión: 'De 7 velocidades',
        'Seguridad activa': 'Detección de punto ciego',
        'Sistemas de protección': '6 airbags'
      }
    },
    visualizer: {
      title: 'VISUALIZADOR 3D',
      basePath: '/img/T2/T2 360_',
      filePattern: 'T2-EXT-{index}.png',
      imageCount: 36,
      colors: [
        {
          name: 'highwayGrey',
          hex: '#747b89',
          folderName: 'Highway Grey',
          class: 'bg-[#747b89]'
        },
        {
          name: 'mistyCyan',
          hex: '#97a8bd',
          folderName: 'Misty Cyan',
          class: 'bg-[#97a8bd]'
        },
        {
          name: 'white',
          hex: '#FFFFFF',
          folderName: 'White',
          class: 'border border-2'
        },
        {
          name: 'nightBlack',
          hex: '#1d1d1b',
          folderName: 'Night Black',
          class: 'bg-[#030304]'
        },
        {
          name: 'sand',
          hex: '#d8cbb1',
          folderName: 'Sand',
          class: 'bg-[#d8cbb1]'
        }
      ],
      interiorImagePath: '/img/X70 Plus/X70PLUS_360/INT/X70PLUS-INT.png',
      defaultColorIndex: 0
    }
  },
  dashing: {
    carSelecctorImage: dashingSelectorImage,
    id: 'dashing',
    modelName: 'Dashing',
    tagline: 'EXPERIMENTA LA TECNOLOGÍA DE VANGUARDIA',
    theme: 'turquoise',
    hero: {
      backgroundImage: dashingImage,
      logo: dashingLogo
    },
    colorModels: [
      {
        carImage: dashingBlackImage,
        color: 'Black',
        colorName: 'Negro',
        hexColor: '#000000'
      },
      {
        carImage: dashingWhiteImage,
        color: 'white',
        colorName: 'Blanco',
        hexColor: '#FFFFFF'
      },
      {
        carImage: dashingSelectorImage,
        color: 'blue',
        colorName: 'Azul',
        hexColor: '#9AC7E5'
      },
      {
        carImage: dashingGrayImage,
        color: 'gray',
        colorName: 'Gris',
        hexColor: '#808080'
      }
    ],
    features: [
      { name: 'CABALLOS DE FUERZA MÁX.', value: 197, position: 'topleft' },
      { name: 'TORQUE MÁXIMO', value: 290, position: 'topcenter' },
      { name: 'VELOCIDAD MÁXIMA (KM/H)', value: 180, position: 'topright' },
      {
        name: 'DISTANCIA ENTRE EJES (MM)',
        value: 2720,
        position: 'bottomleft'
      },
      { name: 'DESPLAZAMIENTO (ML)', value: 1598, position: 'bottomright' }
    ],
    video: {
      url: '/video/Video-Dashing/Product CG Video.MP4',
      thumbnail: '/img/DASHING/Dashing Jetour.webp'
    },
    splitSections: [
      // Placeholder para Dashing
      {
        image1: dashingImageSection,
        image2: dashingImageSection,
        title: 'MINIMALISMO Y TECNOLOGÍA',
        text: 'El estilo interior minimalista de la Dashing se destaca por su pantalla LCD de control central.'
      }
    ],
    featuresSections: {
      title: 'CARACTERÍSTICAS Y ACABADOS DE LUJO',
      items: [
        // Placeholder para Dashing
        {
          image: rubikKey,
          label: 'ARRANQUE REMOTO Y ENCENDIDO SIN LLAVE'
        },
        {
          image: headAcoustics,
          label: 'HEAD ACOUSTICS (OPTIONAL)'
        },
        {
          image: wirelessCharging,
          label: 'ALMOHADILLA DE CARGA INALÁMBRICA DE 40 W'
        }
      ]
    },
    singlePictureSection: {
      title: 'DISEÑO EXCEPCIONAL Y DEPORTIVO',
      image: dashingSingleImageSection
    },
    gallery: [
      // Placeholder para Dashing
      dashingImage01,
      dashingImage02,
      dashingImage03,
      dashingImage04
    ],
    specs: {}, // Reemplazar con los datos correctos
    visualizer: {
      title: 'VISUALIZADOR 3D',
      basePath: '/img/DASHING/Dashing 360_/360 OUT',
      filePattern: 'DASHING-EXT-{index}.png',
      imageCount: 36,
      colors: [
        {
          name: 'black',
          hex: '#000000',
          folderName: 'black',
          class: 'bg-[#000000]'
        }
      ],
      interiorImagePath: '/img/DASHING/Dashing 360_/IN/Black&red/Black&red.jpg',
      defaultColorIndex: 0
    }
  },
  x50: {
    carSelecctorImage: x50CarSelectorImage,
    id: 'x50',
    modelName: 'X50',
    tagline: 'DISFRUTA EL VIAJE DE TU VIDA',
    theme: 'orange',
    hero: {
      backgroundImage: x50Image,
      logo: x50Logo
    },
    // Datos parciales - completar con información real
    colorModels: [],
    features: [],
    video: { url: '', thumbnail: '' },
    splitSections: [],
    featuresSections: { title: '', items: [] },
    singlePictureSection: { title: '', image: securityImage },
    gallery: [],
    specs: {},
    visualizer: {
      title: 'VISUALIZADOR 3D',
      basePath: '',
      filePattern: '',
      imageCount: 0,
      colors: [],
      interiorImagePath: '',
      defaultColorIndex: 0
    }
  },
  x70plus: {
    carSelecctorImage: x70CarSelectorImage,
    id: 'x70plus',
    modelName: 'X70 Plus',
    tagline: 'INNOVACIÓN Y AMPLITUD REDEFINIDAS',
    theme: 'turquoise',
    hero: {
      backgroundImage: x70Image,
      logo: x70Logo
    },
    // Datos parciales - completar con información real
    colorModels: [],
    features: [],
    video: { url: '', thumbnail: '' },
    splitSections: [],
    featuresSections: { title: '', items: [] },
    singlePictureSection: { title: '', image: securityImage },
    gallery: [],
    specs: {},
    visualizer: {
      title: 'VISUALIZADOR 3D',
      basePath: '',
      filePattern: '',
      imageCount: 0,
      colors: [],
      interiorImagePath: '',
      defaultColorIndex: 0
    }
  }
};

// Obtener un vehículo por ID
export const getVehicleById = (id: string): VehicleData | undefined => {
  return vehiclesData[id];
};

// Obtener todos los vehículos
export const getAllVehicles = (): VehicleData[] => {
  return Object.values(vehiclesData);
};
