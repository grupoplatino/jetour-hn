export const carThemes = {
  orange: {
    colors: {
      primary: '#FF7A00', // Color naranja para T2
      secondary: '#FFA866',
      text: '#FFFFFF',
      background: '#1D1D1B',
      testDriveText: 'black', // Color del texto para el botón de test drive,
      sectionText: '#FFFFFF' // Color del texto para la sección
    }
  },
  turquoise: {
    colors: {
      primary: '#00A3B4', // Color turquesa para Dashing
      secondary: '#66D8E3',
      text: '#FFFFFF',
      background: '#1D1D1B',
      testDriveText: '#FFFFFF',
      sectionText: '#FFFFFF' // Color del texto para la sección
    }
  }
};

// Tipo para el tema
export type CarThemeKey = keyof typeof carThemes;
