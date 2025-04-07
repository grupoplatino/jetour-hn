"use client";

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { CarThemeKey, carThemes } from '../data/theme-definitions';
import { X } from 'lucide-react';

interface TestDriveButtonProps {
  carTheme: CarThemeKey;
  fixed?: boolean;
}

const TestDriveButton: React.FC<TestDriveButtonProps> = ({ carTheme, fixed = true }) => {
  const theme = carThemes[carTheme].colors;
  const [isVisible, setIsVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detectar cambio de tamaño de pantalla
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    // Comprobar tamaño inicial
    checkScreenSize();
    
    // Añadir listener para cambios de tamaño
    window.addEventListener('resize', checkScreenSize);
    
    // Limpiar listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Si el botón está oculto, mostrar un pequeño indicador para recuperarlo
  const handleClose = () => {
    setIsVisible(false);
    // Guardar estado en localStorage para mantenerlo entre páginas
    localStorage.setItem('testDriveHidden', 'true');
    
    // Configurar timer para mostrar el botón nuevamente después de cierto tiempo
    setTimeout(() => {
      setIsVisible(true);
      localStorage.removeItem('testDriveHidden');
    }, 300000); // Reaparece después de 5 minutos
  };

  // Comprobar localStorage al cargar
  useEffect(() => {
    const isHidden = localStorage.getItem('testDriveHidden') === 'true';
    setIsVisible(!isHidden);
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className={`fixed z-50 p-2 rounded-full shadow-lg ${isSmallScreen ? 'bottom-24 right-5' : 'top-1/2 right-0 transform -translate-y-1/2'}`}
        style={{ backgroundColor: theme.primary }}
      >
        <span className={`text-sm ${theme.testDriveText === 'black' ? 'text-black' : 'text-white'}`}>TD</span>
      </button>
    );
  }

  return (
    <div
      className={clsx(
        'group flex flex-row gap-2',
        isSmallScreen 
          ? 'fixed bottom-24 right-5 z-50 max-w-[200px]' // Posición para móviles, encima del WhatsApp
          : fixed
            ? 'fixed right-0 z-50 top-1/2 transform -translate-y-1/2' // Centrado verticalmente en desktop
            : 'absolute'
      )}
    >
      {/* Barras diagonales */}
      <div className={`hidden md:block w-2 h-12 -skew-x-[20deg] md:-skew-x-12`} style={{ backgroundColor: theme.primary }}></div>
      <div className={`hidden md:block w-2 h-12 -skew-x-[20deg] md:-skew-x-12`} style={{ backgroundColor: theme.primary }}></div>
      
      {/* Botón principal */}
      <div
        className={clsx(
          'relative flex flex-row justify-center items-center px-5 py-3 md:py-0 md:px-8 rounded-lg md:rounded-none shadow-md md:shadow-none',
          isSmallScreen ? 'ml-0' : 'ml-[-8px] md:ml-[-3px]'
        )}
        style={{
          backgroundColor: theme.primary,
          clipPath: isSmallScreen ? 'none' : 'polygon(3.5% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }}
      >
        <p className={clsx('font-bold text-sm md:text-base', theme.testDriveText === 'black' ? 'text-black' : 'text-white')}>
          AGENDA TU TEST DRIVE
        </p>
        
        {/* Botón para cerrar */}
        <button 
          onClick={handleClose}
          className={clsx(
            'absolute -top-2 -right-2 md:top-1 md:right-1 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity',
            theme.testDriveText === 'black' ? 'bg-black/10 text-black' : 'bg-white/10 text-white'
          )}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default TestDriveButton;