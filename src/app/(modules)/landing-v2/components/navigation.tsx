'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

import jetourLogo from '@root/public/img/JetourLogo.png';
import autosAliadosLogo from '@root/public/img/AutosAliados.png';
import { useParams } from 'next/navigation';
import { getVehicleById } from '../data/vehicles-constant';
import { carThemes } from '../data/theme-definitions';

interface NavbarProps {
  disableTransparent?: boolean;
  primaryColor?: string;
}

export function Navbar({ disableTransparent = false, primaryColor = '#00a3b4' }: NavbarProps) {
  const [toggledNav, setToggledNav] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const params = useParams();

  const carData = getVehicleById(params.id as string);

  const carTheme = carData ? carThemes?.[carData.theme]?.colors : null;

  useEffect(() => {
    console.log('Params:', params);
  }, [params]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
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
        { label: 'Dashing', href: '/landing-v2/dashing' },
        { label: 'T2', href: '/landing-v2/t2' },
        { label: 'X50', href: '/landing-v2/x50' },
        { label: 'X70 PLUS', href: '/landing-v2/x70' }
      ]
    },
    { label: 'SOLICITA UNA COTIZACIÓN', href: '/landing-v2' },
    { label: 'POSTVENTA', href: '/landing-v2' },
    { label: 'NOSOTROS', href: '/landing-v2' },
    { label: 'NOVEDADES', href: '/landing-v2' },
    { label: 'BLOG', href: '/landing-v2' },
    { label: 'CONTÁCTANOS', href: '/landing-v2' }
  ];

  return (
    <nav
      className={clsx(
        'transition flex flex-col fixed w-full z-40',
        scrollPosition > 0 && !disableTransparent ? 'bg-black text-white' : disableTransparent ? 'bg-black text-white' : 'bg-transparent text-white'
      )}
    >
      <section className="flex flex-row px-4 md:px-16 py-2 justify-between items-center">
        <figure className="flex flex-row items-center gap-4 md:gap-10 text-white">
          <Image src={jetourLogo} alt="Logo Jetour" width={150} height={150} className="w-28 md:w-auto" />
          <Image src={autosAliadosLogo} alt="Logo Auto Aliados" width={150} height={150} className="w-28 md:w-auto" />
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
                        <Link href={item.href} key={idx} className="p-2 hover:bg-gray-700" onClick={() => setDropdownOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href} className="hover:text-gray-300">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <Menu
          onClick={() => {
            setToggledNav(!toggledNav);
          }}
          className="transition-all block lg:hidden text-white hover:scale-125 cursor-pointer"
        />
      </section>

      {scrollPosition > 0 && <div className="h-2" style={{ backgroundColor: carTheme ? carTheme.primary : primaryColor }} />}

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
