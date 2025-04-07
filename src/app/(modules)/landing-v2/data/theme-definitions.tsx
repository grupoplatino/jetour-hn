export interface ThemeCars {
  colors: {
    primary?: string;
    secondary?: string;
    text?: string;
    background?: string;
    testDriveText?: string; // Color del texto para el botón de test drive
    sectionText?: string; // Color del texto para la sección
    landingVideoTitleClass?: string;
    landingVideoSectionTextColor?: string; // Color del texto para la sección de video de landing,
    landingVideoSectionLogiSizes?: {
      width?: number;
      height?: number;
    };
  };
}

export interface CarThemesConstants {
  orange: ThemeCars;
  turquoise: ThemeCars;
}

export const carThemes: CarThemesConstants = {
  orange: {
    colors: {
      primary: '#FF7A00', // Color naranja para T2
      secondary: '#FFA866',
      text: '#FFFFFF',
      background: '#1D1D1B',
      testDriveText: 'black', // Color del texto para el botón de test drive,
      sectionText: '#FFFFFF', // Color del texto para la sección,
      landingVideoSectionTextColor: 'white', // Color del texto para la sección de video de landing,
    }
  },
  turquoise: {
    colors: {
      primary: '#00A3B4', // Color turquesa para Dashing
      secondary: '#66D8E3',
      text: '#FFFFFF',
      background: '#1D1D1B',
      testDriveText: '#FFFFFF',
      sectionText: '#FFFFFF', // Color del texto para la sección,
      landingVideoSectionTextColor: 'white', // Color del texto para la sección de video de landing,
      landingVideoSectionLogiSizes: {
        width: 300,
        height: 300
      },
      landingVideoTitleClass: '-mt-10'
    }
  }
};

// Tipo para el tema
export type CarThemeKey = keyof typeof carThemes;
