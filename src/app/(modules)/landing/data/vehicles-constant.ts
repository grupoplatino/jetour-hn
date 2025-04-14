/* eslint-disable @typescript-eslint/no-explicit-any */
// car-data.ts

import { StaticImageData } from 'next/image';

// Importaciones para T2

import t2Image from '@root/public/img/T2/T2 Jetour (2).webp';
import t2Logo from '@root/public/img/T2/Logo.png';
import t2BlackImage from '@root/public/img/T2/car black 0022 (1).webp';
import t2WhiteImage from '@root/public/img/T2/car white 0022.webp';
import t2NeutralImage from '@root/public/img/T2/car.0022.webp';
import dashingWhiteImage from '@root/public/img/DASHING/JETOUR_blanco_cam360_out.0003.webp';
import dashingGrayImage from '@root/public/img/DASHING/JETOUR_gris_cam360_out.0003.webp';
import dashingBlackImage from '@root/public/img/DASHING/JETOUR_negro_cam360_out.0003.webp';
import dashingImageSection from '@root/public/img/DASHING/15.8 in. Digital screen.webp';
import dashingSingleImageSection from '@root/public/img/DASHING/DISEÑO EXCEPCIONAL Y DEPORTIVO.webp';
import dashingImage01 from '@root/public/img/DASHING/Foto 01.webp';
import dashingImage02 from '@root/public/img/DASHING/Foto 02.webp';
import dashingImage03 from '@root/public/img/DASHING/Foto 03.webp';
import dashingImage04 from '@root/public/img/DASHING/Foto 04.webp';
import x70PlusBlue from '@root/public/img/X70 Plus/X70 Plus 45 degree Blue.webp';
import x70PlusWhite from '@root/public/img/X70 Plus/X70 Plus 45 degree White.webp';
import x70PlusBlack from '@root/public/img/X70 Plus/45 degree front left angle Black.webp';
import X70PlusSingleImage from '@root/public/img/X70 Plus/Estabilidad y Seguridad.jpg';
import x70FeatureImage1 from '@root/public/img/X70 Plus/Modelado Palanca.webp';
import x70FeatureImage2 from '@root/public/img/X70 Plus/Techo Corredizo.webp';
import x70FeatureImage3 from '@root/public/img/X70 Plus/Distancia Ejes.webp';
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
import multilevelModel from '@root/public/img/T2/Modelado tridimensional multinivel.webp';
import superLargeAxisDistance from '@root/public/img/T2/Distancia entre ejes súper larga.webp';

// Importaciones para Dashing (ejemplo)
import dashingImage from '@root/public/img/DASHING/Dashing Jetour.webp';
import dashingLogo from '@root/public/img/DASHING/Logo.png';
import backtruckWhite from '@root/public/img/DASHING/JETOUR_JX65_cam010 white.webp';
import surroundHifi from '@root/public/img/DASHING/Surround Hi-fi 8 speaker.webp';

// Importaciones para X50 (ejemplo)
import x50Image from '@root/public/img/X50/X50 Jetour.webp';
import x50Logo from '@root/public/img/X50/Logo.png';

// Importaciones para X70 (ejemplo)
import x70Image from '@root/public/img/X70 Plus/X70 Jetour.webp';
import x70Logo from '@root/public/img/X70 Plus/Logo.webp';
import { CarThemeKey } from './theme-definitions';

import x70gallery1 from '@root/public/img/X70 Plus/Foto 01.webp';
import x70gallery2 from '@root/public/img/X70 Plus/Foto 02.webp';
import x70gallery3 from '@root/public/img/X70 Plus/Foto 03.webp';
import x70gallery4 from '@root/public/img/X70 Plus/Foto 04.webp';
import x70FirstSplitImage1 from '@root/public/img/X70 Plus/First Split Image - Image 1.png';
import x70FirstSplitImage2 from '@root/public/img/X70 Plus/First Split Image - Image 2.png';
import x70SecondSplitImage1 from '@root/public/img/X70 Plus/Second Split Image - Image 1.png';
import x70SecondSplitImage2 from '@root/public/img/X70 Plus/Second Split Image - Image 2.png';

import x50CarSelectorImage from '@root/public/img/X50/x50-360BAI_00005.webp';

import x70CarSelectorImage from '@root/public/img/X70 Plus/X70 Plus 45 degree Blue.webp';

import dashingSelectorImage from '@root/public/img/DASHING/JETOUR_azul_cam360_out.0003.webp';

import x50WhiteImage from '@root/public/img/X50/x50-360BAI_00005.webp';
import x50BlackImage from '@root/public/img/X50/x50-360HEI_00005.webp';
import x50SplitSection1Image2 from '@root/public/img/X50/Console.webp';
import x50SplitSectionImage1 from '@root/public/img/X50/First Split Section - Image 1.png';
import x50SplitSectionImage2 from '@root/public/img/X50/First Split Section - Image 2.png';
import x50SplitSection2Image2 from '@root/public/img/X50/Second Split Section - Image 2.png';

import x50FirstSpecImage from '@root/public/img/X50/Blue&grey.webp';
import x50ThirdSpecImage from '@root/public/img/X50/HAI_6221.webp';
import x50SinglePictureSection from '@root/public/img/X50/Seguridad & Respaldo.jpg';

import x50FirstGalleryImage from '@root/public/img/X50/Left 45 degree angle view.webp';
import x50SecondGalleryImage from '@root/public/img/X50/Dual Screen.webp';
import x50FourthGalleryImage from '@root/public/img/X50/60 drgee front right angle.png';

import x50SplitSection2Image1 from '@root/public/img/X50/360° Panoramic Reversing Camera&180° Transparent Chassis.jpg';
import x50Feature1 from '@root/public/img/X50/Feature 1.png';
import x50Feature2 from '@root/public/img/X50/Feature 2.png';

import t2NewSinglePictureImage from '@root/public/img/T2/Seguridad y Respaldo.jpg';

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
  whiteText?: boolean;
  leftSpacing?: string;
  rightSpacing?: string;
  textLeft?: boolean;
  imageContainLeft?: boolean;
  imageContainRight?: boolean;
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
  interiorImagePath: { path: string; hexColor: string; colorName: string }[];
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
    jetourLogo?: boolean;
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
    carSelecctorImage: t2NeutralImage,
    id: 't2',
    modelName: 'T2',
    tagline: 'AVENTURAS SIN LÍMITES',
    theme: 'orange',
    hero: {
      backgroundImage: t2Image,
      logo: t2Logo,
      jetourLogo: true
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
      },
      {
        carImage: t2NeutralImage,
        color: 'Silver Snow',
        colorName: 'Plateado',
        hexColor: '#8592a2'
      },
      {
        carImage: t2WhiteImage,
        color: 'Misty Cyan',
        colorName: 'Cyan',
        hexColor: '#366da6'
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
      url: '/video/Video-T2/T2 TVC-15s-4K.mp4',
      thumbnail: '/img/T2/T2 Jetour.jpg'
    },
    splitSections: [
      {
        image1: t2ImageSection,
        image2: t2ImageSection2,
        title: 'T2 FUE CREADA PARA LA AVENTURA',
        text: 'Tiene un sistema de tracción en las 4 ruedas que la hace perfecta para cualquier terreno, cuenta con 7 modos de conducción que te permitirán personalizar la conducción.',
        textLeft: true
      },
      {
        image1: screenT2,
        image2: extraStorageT2,
        title: 'ESTILO POR FUERA Y POR DENTRO',
        text: 'La T2 tiene un impresionante tablero, volante multifunción, pantalla touchscreen de 15 pulgadas, parlantes Sony, cargador inalámbrico, interior de lujo con asientos ventilados, luces atmosféricas.',
        brochureUrl: 'https://platinosoftware.blob.core.windows.net/auto-aliados/Ficha_tecnica_t2.pdf',
        whiteText: true,
        textLeft: true
      }
    ],
    featuresSections: {
      title: 'COMODIDAD DESDE DONDE LA VEAS',
      items: [
        {
          image: multilevelModel,
          label: 'MODELADO TRIDIMENSIONAL MULTINIVEL'
        },
        {
          image: screenT2,
          label: 'PANTALLA CENTRAL DE 15.6"'
        },
        {
          image: superLargeAxisDistance,
          label: 'DISTANCIA ENTRE EJES SÚPER LARGA'
        }
      ]
    },
    singlePictureSection: {
      title: 'SEGURIDAD Y RESPALDO',
      image: t2NewSinglePictureImage
    },
    gallery: [t2SkeletonImage, t2TopSkeletonImage, t2SecondSeatsRowImage, t2ProximityImage],
    specs: {
      'Parámetros básicos': {
        'Dimensiones (mm)': '4785 x 2006 x 1880',
        Capacidad: '5 pasajeros',
        'Colores exteriores': 'Blanco, gris claro, negro, arena, cyan'
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
        'Colores interiores': 'Color café, negro'
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
        'Sistema de audio': '12 bocinas sony y subwoofer'
      },
      'Seguridad y tecnología XWD': {
        'Sistema de ruedas': 'Sistema antibloqueo de ruedas',
        'Modos de conducción': '7 modos de conducción',
        Asistentes: 'Asistente de ascenso y descenso en pendientes, asistente de frenado',
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
          hex: '#827058',
          folderName: 'Sand',
          class: 'bg-[#827058]'
        },
        {
          name: 'highwayGrey',
          hex: '#8095a1',
          folderName: 'Highway Grey',
          class: 'bg-[#8095a1]'
        },
        {
          name: 'mistyCyan',
          hex: '#366da6',
          folderName: 'Silver Snow',
          class: 'bg-[#366da6]'
        }
      ],
      interiorImagePath: [
        {
          path: '/img/T2/Interior/Forward-collision warning system copia (2).webp',
          colorName: 'Negro',
          hexColor: '#000000'
        },
        {
          path: '/img/T2/Interior/brown.webp',
          colorName: 'Cafe',
          hexColor: '#654321'
        }
      ],
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
      url: '/video/Video-Dashing/Product CG Video.mp4',
      thumbnail: '/img/DASHING/Dashing Jetour.webp'
    },
    splitSections: [
      // Placeholder para Dashing
      {
        image1: dashingImageSection,
        image2: dashingImageSection,
        title: 'MINIMALISMO Y TECNOLOGÍA',
        text: `El estilo interior minimalista de la Dashing se destaca por su pantalla LCD de 15.6" con un pandel de instrumentos LCD.`,
        whiteText: true
      },
      {
        image1: backtruckWhite,
        image2: surroundHifi,
        title: 'VANGUARDIA AL SERVICIO DEL DISEÑO',
        text: `La carrocería de la Dashing de líneas suaves y recetas, se destaca por su diseño deportivo coupé en 3D y su asa inteligente de detección invisible, lo que le otorga una sensación de tecnología futurista.`,
        brochureUrl: 'https://platinosoftware.blob.core.windows.net/auto-aliados/Ficha_tecnica_dashing.pdf',
        leftSpacing: '-20rem',
        rightSpacing: '16rem',
        whiteText: true
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
          label: 'HEAD ACOUSTICS'
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
    specs: {
      'Motor y rendimiento': {
        Tipo: 'Motor de 1.6 L Turbo',
        Potencia: '197 ps / 5,500 rpm',
        Torque: '290 nm / 2,000 - 4,000 rpm'
      },
      Dimensiones: {
        Largo: '4785 mm',
        Ancho: '2006 mm',
        Altura: '1880 mm'
      },
      'Diseño exterior': {
        Rines: 'Rines de lujo de 20"',
        Llanta: 'Llanta de repuesto',
        Luces: 'DRL (Luces Diurnas), Luces delanteras LED',
        Espejos: 'Espejos retrovisores con ajuste eléctrico y desempañables',
        Techo: 'Techo Panorámico y Sunroof',
        Sensores: 'Sensor de Lluvia',
        'Colores disponibles': 'Blanco, gris, azul, negro'
      },
      'Confort y comodidad': {
        Llave: 'Llave de entrada a distancia',
        Encendido: 'Encendido del motor a distancia',
        Asientos: 'Asientos tapizados en cuero, Asiento del conductor y pasajero con calefacción y enfriamiento',
        Memorias: 'Asiento del conductor con memorias del perfil de manejo',
        Portaobjetos: 'Portaobjetos central tapizado en cuero climatizado'
      },
      'Centro de entretenimiento': {
        Pantalla: 'Pantalla de 15,6 pulgadas',
        Clima: 'Aire acondicionado con control eléctrico y ajuste automático',
        Audio: 'Sistema de sonido SONY, 6 bocinas de sonido',
        Visualizador: 'Visualizador frontal digital para conductor',
        Carga: 'Cargador inalámbrico para celular',
        Conectividad: 'Puertos USB delanteros y traseros, Portalentes, Conectividad Mirror Link, Compatible con Apple Carplay y Android Auto'
      },
      'Sistemas avanzados': {
        Asistencia: 'Sistemas avanzados de asistencia',
        Cámara: 'Cámara de visión de 360 con guías dinámicas',
        Sensores: 'Sensores de estacionamiento traseros y delanteros'
      },
      'Especificaciones de seguridad': {
        Frenos: 'Sistema antibloqueo de ruedas T, Asistente de frenado',
        Control: 'Control de estabilidad electrónico, Sistema de control de tracción',
        Asistentes: 'Asistente de ascenso en pendiente, Control de descenso de pendientes',
        Protección: '6 Airbags',
        Monitoreo: 'Sistema de monitoreo de presión de llantas',
        Advertencias: 'Advertencia de colisión frontal y lateral, Advertencia de abandono de carril'
      }
    }, // Reemplazar con los datos correctos
    visualizer: {
      title: 'VISUALIZADOR 3D',
      basePath: '/img/DASHING/Dashing 360_/360 OUT',
      filePattern: 'DASHING-EXT-{index}.png',
      imageCount: 36,
      colors: [
        {
          name: 'Negro',
          hex: '#000000',
          folderName: 'black',
          class: 'bg-[#000000]'
        },
        {
          name: 'Blanco',
          hex: '#FFFFFF',
          folderName: 'white',
          class: 'bg-[#FFFFFF]'
        },
        {
          name: 'Azul',
          hex: '#9AC7E5',
          folderName: 'blue',
          class: 'bg-[#9AC7E5]'
        },
        {
          name: 'Gris',
          hex: '#808080',
          folderName: 'gray',
          class: 'bg-[#808080]'
        }
      ],
      interiorImagePath: [
        {
          path: '/img/DASHING/Dashing 360_/IN/Grey&white/Grey&white.webp',
          colorName: 'Gris',
          hexColor: '#808080'
        },
        {
          path: '/img/DASHING/Dashing 360_/IN/Black&red/Black&red.webp',
          colorName: 'Negro',
          hexColor: '#000000'
        }
      ],
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
    colorModels: [
      {
        carImage: x70PlusBlue,
        color: 'Blue',
        colorName: 'Azul',
        hexColor: '#2E3A5F'
      },
      {
        carImage: x70PlusBlack,
        color: 'Black',
        colorName: 'Negro',
        hexColor: '#000000'
      },
      {
        carImage: x70PlusWhite,
        color: 'White',
        colorName: 'Blanco',
        hexColor: '#FFFFFF'
      }
    ],
    features: [
      { name: 'CABALLOS DE FUERZA MÁX.', value: 197, position: 'topleft' },
      { name: 'TORQUE MÁXIMO', value: 290, position: 'topcenter' },
      { name: 'VELOCIDAD MÁXIMA (KM/H)', value: 180, position: 'topright' },
      {
        name: 'DISTANCIA ENTRE EJES (MM)',
        value: 2745,
        position: 'bottomleft'
      },
      { name: 'DESPLAZAMIENTO (ML)', value: 1598, position: 'bottomright' }
    ],
    video: {
      url: '/video/Videos-X70-Plus-Web/Video X70 Plus.mp4',
      thumbnail: '/img/X70 Plus/0Y6H8571_1final.jpg'
    },
    splitSections: [
      {
        image1: x70FirstSplitImage1,
        image2: x70FirstSplitImage2,
        title: 'SEGURIDAD ANTE TODO',
        text: 'La X70 Plus cuenta con cuatro airbags (frontales y laterales), ISOFIX, sistema de control de tracción y estabilidad, sistema de frenado AUTOHOLD, sistema de monitoreo de puntos ciegos, entre otros equipos que hacen de esta una SUV segura y confiable.',
        whiteText: true,
        textLeft: true,
        leftSpacing: '-15rem',
        rightSpacing: '20rem',
        imageContainRight: true
      },
      {
        image1: x70SecondSplitImage1,
        image2: x70SecondSplitImage2,
        title: 'Tecnología espacial',
        text: 'La X70 PLUS está equipada con sistema de visión 360, asientos forrados, un excelente sistema de infoentretenimiento con pantalla de 10.25” y cargador inalámbrico para teléfonos.',
        whiteText: true,
        textLeft: true,
        leftSpacing: '-24rem',
        rightSpacing: '20rem',
        imageContainRight: true,
        brochureUrl: 'https://www.jetour.com.co/brochure/X50.pdf'
      }
    ],
    featuresSections: {
      title: 'COMODIDAD DESDE DONDE LO VEAS',
      items: [
        {
          image: x70FeatureImage1,
          label: 'MODELADO TRIDIMENSIONAL MULTINIVEL'
        },
        {
          image: x70FeatureImage2,
          label: 'TECHO CORREDIZO PANORÁMICO'
        },
        {
          image: x70FeatureImage3,
          label: 'DISTANCIA ENTRE EJES SUPER LARGA'
        }
      ]
    },
    singlePictureSection: {
      title: 'SEGURIDAD Y RESPALDO',
      image: X70PlusSingleImage
    },
    gallery: [x70gallery1, x70gallery2, x70gallery3, x70gallery4],
    specs: {
      'Diseño y estilo': {
        Capacidad: 'Asientos: 3 filas, 7 pasajeros',
        Techo: 'Sunroof panorámico',
        Rines: 'Rines de lujo',
        Luces: 'Luces delanteras halógenas y traseras LED',
        Rieles: 'Rieles de techo',
        Antena: 'Antena tipo aleta de tiburón',
        Asientos: 'Asientos tapizados en cuero',
        'Iluminación interior': 'Luces de ambiente interior monocromáticas'
      },
      'Multimedia y conectividad': {
        Pantalla: 'Pantalla: 10.25"',
        Conectividad: 'Conectividad: Mirrorlink',
        Cámara: 'Cámara de visión 360° con guías dinámicas',
        Puertos: 'Puertos USB: delanteros y traseros'
      },
      Motor: {
        Tipo: 'Motor 1.6L TURBO',
        Torque: 'Torque de 290Nm'
      },
      'Seguridad avanzada y asistencia': {
        Frenos: 'Sistema de frenado antibloqueo',
        Estabilidad: 'Control de estabilidad electrónico',
        'Asistencia conducción': 'Asistente de mantenimiento de carril',
        Monitoreo: 'Monitor de punto ciego',
        Cámara: 'Cámara de 360° con modelo 3D',
        Protección: '6 airbags',
        'Distribución frenado': 'Distribución electrónica de frenado',
        'Control descenso': 'Control de descenso en pendientes',
        'Seguridad infantil': 'Puertas con Child Lock'
      },
      'Confort y ajustes': {
        Climatización: 'Aire acondicionado: control digital',
        Audio: 'Sonido: 6 bocinas',
        Controles: 'Botones multifuncionales en el timón',
        'Asientos ajustables': 'Asientos del conductor: ajuste eléctrico'
      },
      Colores: {
        Exteriores: 'Negro, blanco, azul',
        Interiores: 'Color negro, rojo'
      }
    },
    visualizer: {
      title: 'VISUALIZADOR 3D',
      basePath: '/img/X70 Plus/X70PLUS_360',
      filePattern: 'X70PLUS-EXT-{index}.png',
      imageCount: 36,
      colors: [
        {
          name: 'blue',
          hex: '#4c6280',
          folderName: 'deep-blue',
          class: 'bg-[#4c6280]'
        },
        {
          name: 'black',
          hex: '#000000',
          folderName: 'black',
          class: 'bg-black'
        },
        {
          name: 'white',
          hex: '#FFFFFF',
          folderName: 'white',
          class: 'border border-2'
        }
      ],
      interiorImagePath: [
        {
          path: '/img/X70 Plus/X70PLUS_360/INT/X70PLUS-INT.webp',
          colorName: 'black',
          hexColor: '#000000'
        }
      ],
      defaultColorIndex: 0
    }
  },
  x50: {
    carSelecctorImage: x50BlackImage,
    id: 'x50',
    modelName: 'X50',
    tagline: 'DISFRUTA EL VIAJE DE TU VIDA',
    theme: 'orange',
    hero: {
      backgroundImage: x50Image,
      logo: x50Logo
    },
    // Datos parciales - completar con información real
    colorModels: [
      {
        carImage: x50BlackImage,
        color: 'Black',
        colorName: 'Negro',
        hexColor: '#000000'
      },
      {
        carImage: x50WhiteImage,
        color: 'white',
        colorName: 'Blanco',
        hexColor: '#FFFFFF'
      },
      {
        carImage: x50WhiteImage,
        color: 'Blue',
        colorName: 'Azul',
        hexColor: '#9AC7E5'
      }
    ],
    features: [
      { name: 'CABALLOS DE FUERZA MÁX.', value: 156, position: 'topleft' },
      { name: 'TORQUE MÁXIMO', value: 230, position: 'topcenter' },
      { name: 'VELOCIDAD MÁXIMA (KM/H)', value: 180, position: 'topright' },
      {
        name: 'DISTANCIA ENTRE EJES (MM)',
        value: 2601,
        position: 'bottomleft'
      },
      { name: 'DESPLAZAMIENTO (ML)', value: 1499, position: 'bottomright' }
    ],
    video: {
      url: '/video/Video-X50/No Subtitle(1).mp4',
      thumbnail: '/img/X50/X50 Jetour.webp'
    },
    splitSections: [
      // Placeholder para Dashing
      {
        image1: x50SplitSectionImage1,
        image2: x50SplitSectionImage2,
        title: 'TAMAÑO Y DISEÑO',
        text: 'El X50 se destaca por su interior, al igual que por sus dimensiones exteriores, con un diseño estilizado y detalles de alta calidad. Un espacio muy bien aprovechado, ideal para tí quien piensa en la seguridad y es amante a la tecnología.',
        leftSpacing: '-40rem',
        rightSpacing: '20rem',
        whiteText: true,
        imageContainRight: true
      },
      {
        image1: x50SplitSection2Image1,
        image2: x50SplitSection2Image2,
        title: 'DISFRUTA SUS DETALLES',
        text: 'El Jetour X50 ofrece comodidad con asientos revestidos en cuero sintético, y una amplia fila de asientos. Este auto es perfecto para salir y disfrutar del día y la noche, junto a tu familia o amigos.',
        leftSpacing: '-35rem',
        rightSpacing: '20rem',
        brochureUrl: 'https://www.jetour.com.co/brochure/X50.pdf',
        whiteText: true,
        imageContainRight: true
      }
    ],
    featuresSections: {
      title: 'COMODIDAD DESDE DONDE LA VEAS',
      items: [
        // Placeholder para Dashing
        {
          image: x50Feature1,
          label: 'CAMBIO PRECISO, CONTROL ABSOLUTO'
        },
        {
          image: x50FirstSpecImage,
          label: 'PANTALLA CENTRAL DE 10.3'
        },
        {
          image: x50Feature2,
          label: 'DISTANCIA ENTRE EJES EXTENDIDA'
        }
      ]
    },
    singlePictureSection: {
      title: 'SEGURIDAD Y RESPALDO',
      image: x50SinglePictureSection
    },
    gallery: [
      // Placeholder para Dashing
      x50FirstGalleryImage,
      x50SecondGalleryImage,
      x50SplitSection1Image2,
      x50FourthGalleryImage
    ],
    specs: {
      'Características principales': {
        Motor: 'Motor 1.5 L turbo',
        Pantalla: 'Pantalla central dual de 20.5 pulgadas',
        Cámara: 'Cámara de visión 360°',
        Seguridad: '6 bolsas de aire'
      },
      'Diseño y estilo exterior': {
        Luces: 'Luces delanteras LED y de encendido automático',
        Techo: 'Sunroof',
        Espejos: 'Espejos retrovisores eléctricos y abatibles',
        Antena: 'Antena tiburón',
        Spoiler: 'Spoiler trasero',
        Rines: 'Rines de lujo de 18"'
      },
      'Comodidad interior': {
        Asientos: 'Asientos tapizados en cuero sintético',
        Ajustes: 'Asiento del conductor con ajuste eléctrico',
        Climatización: 'Aire acondicionado con control de velocidad'
      },
      'Tecnología y conectividad': {
        Pantalla: 'Pantalla digital de 10.25"',
        Radio: 'Radio AM/FM/Bluetooth',
        Compatibilidad: 'CarPlay y Android Auto',
        Controles: 'Botones multifunción en el timón',
        Audio: '6 bocinas de sonido',
        Carga: 'Cargador de teléfono inalámbrico',
        Puertos: 'Puertos USB delanteros y traseros'
      },
      'Seguridad y rendimiento': {
        Protección: '6 bolsas de aire',
        Cámara: 'Cámara de visión 360° con guías dinámicas',
        Sensores: 'Sensores de estacionamiento delanteros y traseros',
        Monitoreo: 'Sistema de monitoreo de presión de llantas (TPMS)',
        Cinturones: 'Cinturones de seguridad en todos los asientos',
        'Sistema infantil': 'Sistema ISOFIX para silla de bebé'
      },
      'Motorización y especificaciones clave': {
        Motor: 'Motor 1.5L Turbo / 156 hp / 230 Nm',
        Transmisión: 'Transmisión automática de 6 velocidades',
        Tracción: 'Tracción delantera',
        Capacidad: '5 pasajeros'
      },
      Medidas: {
        Largo: '4397 mm',
        Altura: '1664 mm'
      },
      Colores: {
        Exteriores: 'Negro, Blanco',
        Interiores: 'Negro, Azul'
      }
    },
    visualizer: {
      title: 'VISUALIZADOR 3D',
      basePath: '/img/X50/Exterior 360_',
      filePattern: 'X50-EXT-{index}.png',
      imageCount: 71,
      colors: [
        {
          name: 'white',
          hex: '#FFFFFF',
          folderName: 'white',
          class: 'bg-white'
        },
        {
          name: 'black',
          hex: '#000000',
          folderName: 'black',
          class: 'bg-[#000000]'
        },
        {
          name: 'blue',
          hex: '#8399B7',
          folderName: 'blue',
          class: 'bg-[#8399B7]'
        }
      ],
      interiorImagePath: [
        {
          path: '/img/X50/Interior-2/Blue&grey/Blue&grey (1).webp',
          colorName: 'blue',
          hexColor: '#2E3A5F'
        },
        {
          path: '/img/X50/Interior-2/Black&Red/Black&Red.jpg',
          colorName: 'black',
          hexColor: '#000000'
        }
      ],
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
