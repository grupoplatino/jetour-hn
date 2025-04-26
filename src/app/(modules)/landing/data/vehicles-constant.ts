/* eslint-disable @typescript-eslint/no-explicit-any */
// car-data.ts

import { StaticImageData } from 'next/image';

// Mantener esta importación ya que no es una imagen
import { CarThemeKey } from './theme-definitions';

// Tipos
interface CarFeature {
  name: string;
  value: number;
  position: 'topleft' | 'topcenter' | 'topright' | 'bottomleft' | 'bottomcenter' | 'bottomright';
}

interface SplitImageSection {
  image1: StaticImageData | string;
  image2: StaticImageData | string;
  title: string;
  text: string;
  brochureUrl?: string;
  whiteText?: boolean;
  leftSpacing?: string;
  rightSpacing?: string;
  textLeft?: boolean;
  imageContainLeft?: boolean;
  imageContainRight?: boolean;
  leftImageClassName?: string;
}

interface FeatureItem {
  image: StaticImageData | string;
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
  carSelecctorImage: StaticImageData | string;
  modelName: string;
  tagline: string;
  theme: CarThemeKey;
  hero: {
    backgroundImage: StaticImageData | string;
    logo: StaticImageData | string;
    jetourLogo?: boolean;
  };
  colorModels: {
    carImage: StaticImageData | string;
    color: string;
    colorName: string;
    hexColor: string;
    scaleCar?: number;
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
    image: StaticImageData | string;
  };
  gallery: StaticImageData[] | string[];
  specs: Record<string, Record<string, string>>;
  visualizer: Visualizer;
}

// Definición de datos de vehículos
export const vehiclesData: Record<string, VehicleData> = {
  t2: {
    carSelecctorImage: '/landing/t2_car_selector.webp',
    id: 't2',
    modelName: 'T2',
    tagline: 'AVENTURAS SIN LÍMITES',
    theme: 'orange',
    hero: {
      backgroundImage: '/t2/car_hero_background.webp',
      logo: '/t2/car_logo_white.webp',
      jetourLogo: true
    },
    colorModels: [
      {
        carImage: '/t2/car_black_carousel.webp',
        color: 'nightBlack',
        colorName: 'Negro',
        hexColor: '#030304'
      },
      {
        carImage: '/t2/car_white_carousel.webp',
        color: 'white',
        colorName: 'Blanco',
        hexColor: '#ffffff'
      },
      {
        carImage: '/t2/car_neutral_carousel.webp',
        color: 'neutralColor',
        colorName: 'Arena',
        hexColor: '#d8cbb1'
      },
      {
        carImage: '/t2/car_silver_carousel.webp',
        color: 'Silver Snow',
        colorName: 'Gris',
        hexColor: '#8592a2'
      },
      {
        carImage: '/t2/car_blue_carousel.webp',
        color: 'Misty Cyan',
        colorName: 'Cyan',
        hexColor: '#336caf'
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
      url: '/t2/single_video_section_video.mp4',
      thumbnail: '/img/T2/T2 Jetour.jpg'
    },
    splitSections: [
      {
        image1: '/t2/car_split_image_1.webp',
        image2: '/t2/car_split_image_2.webp',
        title: 'T2 FUE CREADA PARA LA AVENTURA',
        text: 'Tiene un sistema de tracción en las 4 ruedas que la hace perfecta para cualquier terreno, cuenta con 7 modos de conducción que te permitirán personalizar la conducción.',
        textLeft: true
      },
      {
        image1: '/t2/car_split_image_3.webp',
        image2: '/t2/car_split_image_4.webp',
        title: 'ESTILO POR FUERA Y POR DENTRO',
        text: 'La T2 tiene un impresionante tablero, volante multifunción, pantalla touchscreen de 15 pulgadas, parlantes SONY, cargador inalámbrico, interior de lujo con asientos ventilados, luces atmosféricas.',
        brochureUrl: 'https://platinosoftware.blob.core.windows.net/auto-aliados/Ficha_tecnica_t2_v2.pdf',
        whiteText: true,
        textLeft: true
      }
    ],
    featuresSections: {
      title: 'COMODIDAD DESDE DONDE LA VEAS',
      items: [
        {
          image: '/t2/spec_first_image.webp',
          label: 'MODELADO TRIDIMENSIONAL MULTINIVEL'
        },
        {
          image: '/t2/spec_second_image.webp',
          label: 'PANTALLA CENTRAL DE 15.6"'
        },
        {
          image: '/t2/spec_third_image.webp',
          label: 'DISTANCIA ENTRE EJES SÚPER LARGA'
        }
      ]
    },
    singlePictureSection: {
      title: 'SEGURIDAD Y RESPALDO',
      image: '/t2/single_picture_image.webp'
    },
    gallery: ['/t2/car_gallery_image1.webp', '/t2/car_gallery_image2.webp', '/t2/car_gallery_image3.webp', '/t2/car_gallery_image4.webp'],
    specs: {
      'Parámetros básicos': {
        'Dimensiones (mm)': '4785 x 2006 x 1880',
        Capacidad: '5 pasajeros',
        'Colores exteriores': 'Sand (arena), silver snow (gris), white, black, misty cyan (azul)'
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
        'Colores interiores': 'café, negro'
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
        'Sistema de audio': '12 bocinas SONY y subwoofer'
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
      basePath: '/t2/3d/exterior',
      filePattern: 'T2-EXT-{index}.webp',
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
          folderName: 'Black',
          class: 'bg-[#030304]'
        },
        {
          name: 'sand',
          hex: '#827058',
          folderName: 'Sand (Arena)',
          class: 'bg-[#827058]'
        },
        {
          name: 'silverSnow',
          hex: '#8592a2',
          folderName: 'Silver Snow',
          class: 'bg-[#8592a2]'
        },
        {
          name: 'mistyCyan',
          hex: '#336caf',
          folderName: 'Misty Cyan (Azul)',
          class: 'bg-[#336caf]'
        }
      ],
      interiorImagePath: [
        {
          path: '/t2/3d/interior/black.webp',
          colorName: 'Negro',
          hexColor: '#000000'
        },
        {
          path: '/t2/3d/interior/brown.webp',
          colorName: 'Cafe',
          hexColor: '#654321'
        }
      ],
      defaultColorIndex: 0
    }
  },
  dashing: {
    carSelecctorImage: '/landing/dashing_car_selector.webp',
    id: 'dashing',
    modelName: 'Dashing',
    tagline: 'EXPERIMENTA LA TECNOLOGÍA DE VANGUARDIA',
    theme: 'turquoise',
    hero: {
      backgroundImage: '/dashing/car_hero_background.webp',
      logo: '/dashing/car_logo_white.webp'
    },
    colorModels: [
      {
        carImage: '/dashing/car_black_carousel.webp',
        color: 'black',
        colorName: 'Black',
        hexColor: '#000000'
      },
      {
        carImage: '/dashing/car_white_carousel.webp',
        color: 'white',
        colorName: 'White',
        hexColor: '#FFFFFF'
      },
      {
        carImage: '/dashing/car_blue_carousel.webp',
        color: 'blue',
        colorName: 'Blue',
        hexColor: '#9AC7E5'
      },
      {
        carImage: '/dashing/car_gray_carousel.webp',
        color: 'gray',
        colorName: 'Shadow Gray',
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
      url: '/dashing/single_video_section_video.mp4',
      thumbnail: '/img/DASHING/Dashing Jetour.webp'
    },
    splitSections: [
      // Placeholder para Dashing
      {
        image1: '/dashing/car_split_image_1.webp',
        image2: '/dashing/car_split_image_1.webp',
        title: 'MINIMALISMO Y TECNOLOGÍA',
        text: `El estilo interior minimalista de la Dashing se destaca por su pantalla LCD de 15.6" con un panel de instrumentos.`,
        whiteText: true
      },
      {
        image1: '/dashing/car_split_image_2.webp',
        image2: '/dashing/car_split_image_3.webp',
        title: 'VANGUARDIA AL SERVICIO DEL DISEÑO',
        text: `La carrocería de la Dashing de líneas suaves, se destaca por su diseño deportivo coupé en 3D y su asa inteligente de detección invisible, lo que le otorga una sensación de tecnología futurista.`,
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
          image: '/dashing/spec_first_image.webp',
          label: 'ARRANQUE REMOTO Y ENCENDIDO SIN LLAVE'
        },
        {
          image: '/dashing/spec_second_image.webp',
          label: 'HEAD ACOUSTICS'
        },
        {
          image: '/dashing/spec_third_image.webp',
          label: 'ALMOHADILLA DE CARGA INALÁMBRICA DE 40 W'
        }
      ]
    },
    singlePictureSection: {
      title: 'DISEÑO EXCEPCIONAL Y DEPORTIVO',
      image: '/dashing/single_picture_image.webp'
    },
    gallery: [
      // Placeholder para Dashing
      '/dashing/car_gallery_image1.webp',
      '/dashing/car_gallery_image2.webp',
      '/dashing/car_gallery_image3.webp',
      '/dashing/car_gallery_image4.webp'
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
        Luces: 'DRL (Luces Diurnas), Luces delanteras LED, Luces traseras',
        Espejos: 'Espejos retrovisores con ajuste eléctrico y desempañables',
        Techo: 'Techo Panorámico y Sunroof',
        Sensores: 'Sensor de Lluvia',
        'Colores disponibles': 'Black, white, blue, shadow gray'
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
      basePath: '/dashing/3d/exterior',
      filePattern: 'DASHING-EXT-{index}.webp',
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
          path: '/dashing/3d/interior/grey_white.webp',
          colorName: 'Gris',
          hexColor: '#808080'
        },
        {
          path: '/dashing/3d/interior/black_red.webp',
          colorName: 'Negro',
          hexColor: '#000000'
        }
      ],
      defaultColorIndex: 0
    }
  },

  x70plus: {
    carSelecctorImage: '/landing/x70plust_car_selector.webp',
    id: 'x70plus',
    modelName: 'X70 Plus',
    tagline: 'INNOVACIÓN Y AMPLITUD REDEFINIDAS',
    theme: 'turquoise',
    hero: {
      backgroundImage: '/x70plus/car_hero_background.webp',
      logo: '/x70plus/car_logo_white.webp'
    },
    // Datos parciales - completar con información real
    colorModels: [
      {
        carImage: '/x70plus/car_blue_carousel.webp',
        color: 'Blue',
        colorName: 'Blue',
        hexColor: '#2E3A5F'
      },
      {
        carImage: '/x70plus/car_black_carousel.webp',
        color: 'Black',
        colorName: 'Black',
        hexColor: '#000000'
      },
      {
        carImage: '/x70plus/car_white_carousel.webp',
        color: 'white',
        colorName: 'White',
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
      url: '/x70plus/single_video_section_video.mp4',
      thumbnail: '/img/X70 Plus/0Y6H8571_1final.jpg'
    },
    splitSections: [
      {
        image1: '/x70plus/car_split_image_1.webp',
        image2: '/x70plus/car_split_image_2.webp',
        title: 'SEGURIDAD ANTE TODO',
        text: 'La X70 Plus cuenta con cuatro airbags (frontales y laterales), ISOFIX, sistema de control de tracción y estabilidad, sistema de frenado AUTOHOLD, sistema de monitoreo de puntos ciegos, entre otros equipos que hacen de esta una SUV segura y confiable.',
        whiteText: true,
        textLeft: true,
        leftSpacing: '-15rem',
        rightSpacing: '20rem',
        imageContainRight: true
      },
      {
        image1: '/x70plus/car_split_image_3.webp',
        image2: '/x70plus/car_split_image_4.webp',
        title: 'Tecnología espacial',
        text: 'La X70 PLUS está equipada con sistema de visión 360, asientos forrados, un excelente sistema de infoentretenimiento con pantalla de 10.25” y cargador inalámbrico para teléfonos.',
        whiteText: true,
        textLeft: true,
        leftSpacing: '-24rem',
        rightSpacing: '20rem',
        imageContainRight: true,
        brochureUrl: 'https://platinosoftware.blob.core.windows.net/auto-aliados/Ficha_tecnica_x70plus.pdf'
      }
    ],
    featuresSections: {
      title: 'COMODIDAD DESDE DONDE LO VEAS',
      items: [
        {
          image: '/x70plus/spec_first_image.webp',
          label: 'MODELADO TRIDIMENSIONAL MULTINIVEL'
        },
        {
          image: '/x70plus/spec_second_image.webp',
          label: 'TECHO CORREDIZO PANORÁMICO'
        },
        {
          image: '/x70plus/spec_third_image.webp',
          label: 'DISTANCIA ENTRE EJES SUPER LARGA'
        }
      ]
    },
    singlePictureSection: {
      title: 'SEGURIDAD Y RESPALDO',
      image: '/x70plus/single_picture_image.webp'
    },
    gallery: ['/x70plus/car_gallery_image1.webp', '/x70plus/car_gallery_image2.webp', '/x70plus/car_gallery_image3.webp', '/x70plus/car_gallery_image4.webp'],
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
        Exteriores: 'White, black, blue',
        Interiores: 'Black, red'
      }
    },
    visualizer: {
      title: 'VISUALIZADOR 3D',
      basePath: '/x70plus/3d/exterior',
      filePattern: 'X70PLUS-EXT-{index}.webp',
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
          class: 'bg-[#000000]'
        }
      ],
      interiorImagePath: [
        {
          path: '/x70plus/3d/interior/red.webp',
          colorName: 'black',
          hexColor: '#000000'
        }
      ],
      defaultColorIndex: 0
    }
  },
  x50: {
    carSelecctorImage: '/landing/x50_car_selector.webp',
    id: 'x50',
    modelName: 'X50',
    tagline: 'DISFRUTA EL VIAJE DE TU VIDA',
    theme: 'orange',
    hero: {
      backgroundImage: '/x50/car_hero_background.webp',
      logo: '/x50/car_logo_white.webp'
    },
    // Datos parciales - completar con información real
    colorModels: [
      {
        carImage: '/x50/car_black_carousel.webp',
        color: 'Black',
        colorName: 'Black',
        hexColor: '#000000'
      },
      {
        carImage: '/x50/car_white_carousel.webp',
        color: 'white',
        colorName: 'White',
        hexColor: '#FFFFFF'
      },
      {
        carImage: '/x50/car_blue_carousel.webp',
        color: 'Blue',
        colorName: 'Blue',
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
      url: '/x50/single_video_section_video.mp4',
      thumbnail: '/img/X50/X50 Jetour.webp'
    },
    splitSections: [
      // Placeholder para Dashing
      {
        image1: '/x50/car_split_image_1.webp',
        image2: '/x50/car_split_image_2.webp',
        title: 'TAMAÑO Y DISEÑO',
        text: 'El X50 se destaca por su interior, al igual que por sus dimensiones exteriores, con un diseño estilizado y detalles de alta calidad. Un espacio muy bien aprovechado, ideal para tí quien piensa en la seguridad y es amante a la tecnología.',
        leftSpacing: '-40rem',
        rightSpacing: '20rem',
        whiteText: true,
        imageContainRight: true,
        leftImageClassName: '!h-auto -mt-28'
      },
      {
        image1: '/x50/car_split_image_3.webp',
        image2: '/x50/car_split_image_4.webp',
        title: 'DISFRUTA SUS DETALLES',
        text: 'El Jetour X50 ofrece comodidad con asientos revestidos en cuero sintético, y una amplia fila de asientos. Este auto es perfecto para salir y disfrutar del día y la noche, junto a tu familia o amigos.',
        leftSpacing: '-35rem',
        rightSpacing: '20rem',
        brochureUrl: 'https://platinosoftware.blob.core.windows.net/auto-aliados/Ficha_tecnica_x50.pdf',
        whiteText: true,
        imageContainRight: true,
        leftImageClassName: 'h-[800px] -mt-16 -ml-14'
      }
    ],
    featuresSections: {
      title: 'COMODIDAD DESDE DONDE LA VEAS',
      items: [
        // Placeholder para Dashing
        {
          image: '/x50/spec_first_image.webp',
          label: 'CAMBIO PRECISO, CONTROL ABSOLUTO'
        },
        {
          image: '/x50/spec_second_image.webp',
          label: 'PANTALLA CENTRAL DE 10.3'
        },
        {
          image: '/x50/spec_third_image.webp',
          label: 'DISTANCIA ENTRE EJES EXTENDIDA'
        }
      ]
    },
    singlePictureSection: {
      title: 'SEGURIDAD Y RESPALDO',
      image: '/x50/single_picture_image.webp'
    },
    gallery: ['/x50/car_gallery_image1.webp', '/x50/car_gallery_image2.webp', '/x50/car_gallery_image3.webp', '/x50/car_gallery_image4.webp'],
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
        Exteriores: 'White, black',
        Interiores: 'Negro, azul'
      }
    },
    visualizer: {
      title: 'VISUALIZADOR 3D',
      basePath: '/x50/3d/exterior',
      filePattern: 'X50-EXT-{index}.webp',
      imageCount: 71,
      colors: [
        {
          name: 'White',
          hex: '#FFFFFF',
          folderName: 'white',
          class: 'bg-white'
        },
        {
          name: 'Black',
          hex: '#000000',
          folderName: 'black',
          class: 'bg-[#000000]'
        },
        {
          name: 'Blue',
          hex: '#8399B7',
          folderName: 'blue',
          class: 'bg-[#8399B7]'
        }
      ],
      interiorImagePath: [
        {
          path: '/x50/3d/interior/blue.webp',
          colorName: 'blue',
          hexColor: '#2E3A5F'
        },
        {
          path: '/x50/3d/interior/black.jpg',
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
