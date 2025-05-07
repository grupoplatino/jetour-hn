'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { useParams, usePathname } from 'next/navigation';
import { getVehicleById } from '../data/vehicles-constant';

interface NavbarProps {
  disableTransparent?: boolean;
  primaryColor?: string;
}

export function Navbar({ disableTransparent = false, primaryColor = '#FF7A00' }: NavbarProps) {
  const [toggledNav, setToggledNav] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [primaryColorState, setPrimaryColorState] = useState(primaryColor);

  const params = useParams();
  const pathName = usePathname();

  useEffect(() => {
    const selectedVehicleData = getVehicleById(params.id as string);
    if (selectedVehicleData) {
      const selectedVehicleTheme = selectedVehicleData.theme;
      setPrimaryColorState(selectedVehicleTheme);
    }
  }, [params, pathName]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Marcar como cargado después de que los componentes se monten
    setIsLoaded(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    {
      label: 'MODELOS',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Dashing', href: '/landing/dashing' },
        { label: 'T2', href: '/landing/t2' },
        { label: 'X50', href: '/landing/x50' },
        { label: 'X70 PLUS', href: '/landing/x70plus' }
      ]
    },
    { label: 'SOLICITA UNA COTIZACIÓN', href: '/landing#cotizacion' },
    { label: 'POSTVENTA', href: '/landing/post-venta' },
    { label: 'NOSOTROS', href: '/landing/nosotros' },
    { label: 'CONTÁCTANOS', href: '/landing/contactanos' }
  ];

  return (
    <nav
      className={clsx(
        'transition flex flex-col fixed w-full z-40 lg:h-[100px]',
        scrollPosition > 0 && !disableTransparent ? 'bg-black text-white' : disableTransparent ? 'bg-black text-white' : 'bg-transparent text-white',
        // Importante: altura fija para evitar layout shift
        'h-[100px]'
      )}
    >
      <section className="flex flex-row px-4 md:px-16 py-2 justify-between items-center h-[calc(100%-8px)] w-full max-w-[1920px] mx-auto">
        {/* Contenedor con ancho fijo para los logos */}
        <figure className="flex flex-row items-center gap-4 md:gap-10 text-white w-[250px] md:w-[350px] h-16">
          {isLoaded && (
            <>
              <Link href="/" className="w-fit h-fit">
                <Image src={'/landing/jetour_logo_white_drive_your_future.webp'} alt="Logo Jetour" width={512} height={300} className="w-28 md:w-36" priority />
              </Link>
              <Image src={'/landing/autos_aliados_logo_white.webp'} alt="Logo Auto Aliados" width={512} height={300} className="w-28 md:w-32" priority />
            </>
          )}
        </figure>

        {/* Desktop Navigation */}
        <div className="lg:flex flex-row gap-6 xl:gap-10 text-xs text-white hidden">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.hasDropdown ? (
                <>
                  <button className="flex items-center gap-1 hover:text-gray-300" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    {link.label}
                    <ChevronDown size={16} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-black text-white shadow-lg rounded-lg flex flex-col z-50">
                      {link.dropdownItems?.map((item, idx) => (
                        <Link href={item.href} key={idx} className="p-2 hover:bg-gray-700 font-medium" onClick={() => setDropdownOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href} className="hover:text-gray-300 font-medium">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle - Fijo en posición */}
        <div className="block lg:hidden text-white">
          <Menu
            onClick={() => {
              setToggledNav(!toggledNav);
            }}
            className="transition-all hover:scale-125 cursor-pointer"
          />
        </div>
      </section>

      {/* Línea de color principal */}
      <div className="h-2" style={{ backgroundColor: primaryColorState }} />

      {/* Mobile Menu */}
      {toggledNav && (
        <div className="fixed lg:hidden top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white">
          <X className="absolute top-5 right-5 text-white text-3xl cursor-pointer" onClick={() => setToggledNav(false)} />

          <div className="flex flex-col gap-6 text-xl text-center">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.hasDropdown ? (
                  <>
                    <button className="flex items-center gap-1 justify-center" onClick={() => setDropdownOpen(!dropdownOpen)}>
                      {link.label}
                      <ChevronDown size={20} />
                    </button>
                    {dropdownOpen && (
                      <div className="mt-2 flex flex-col bg-black text-white rounded-lg">
                        {link.dropdownItems?.map((item, idx) => (
                          <Link
                            href={item.href}
                            key={idx}
                            onClick={() => {
                              setDropdownOpen(false);
                              setToggledNav(false);
                            }}
                            className="p-2 hover:bg-gray-700"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} onClick={() => setToggledNav(false)}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
