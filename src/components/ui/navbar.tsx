"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { usePrimaryColor } from "./color-context";
import { Menu, X, ChevronDown } from "lucide-react";

function NavBar() {
  const [toggledNav, setToggledNav] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const primaryColor = usePrimaryColor();

  return (
    <nav
      className={clsx(
        "transition flex flex-col fixed w-full bg-none z-40",
        scrollPosition > 0 && "bg-customBlack text-white"
      )}
      style={{ color: primaryColor }}
    >
      <section className="flex flex-row px-16 py-2 justify-between items-center">
        <figure className="flex flex-col items-center text-white">
          <h1 className="text-xl font-bold">JETOUR</h1>
          <p className="text-md font-normal">--Drive Your Future--</p>
        </figure>

        {/* Desktop Navigation */}
        <div className="lg:flex flex-row gap-10 text-xs text-white hidden">
          {/* Dropdown for MODELOS */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-gray-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              MODELOS
              <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-customBlack text-white shadow-lg rounded-lg flex flex-col">
                <Link
                  href={"/landing/dashing"}
                  className="p-2 hover:bg-gray-700"
                >
                  Dashing
                </Link>
                <Link href={"/landing/t2"} className="p-2 hover:bg-gray-700">
                  T2
                </Link>
                <Link href={"/landing/x50"} className="p-2 hover:bg-gray-700">
                  X50
                </Link>
                <Link href={"/landing/x70"} className="p-2 hover:bg-gray-700">
                  X70 PLUS
                </Link>
              </div>
            )}
          </div>

          <Link href={"/"}>SOLICITA UNA COTIZACIÓN</Link>
          <Link href={"/"}>POSTVENTA</Link>
          <Link href={"/"}>NOSOTROS</Link>
          <Link href={"/"}>NOVEDADES</Link>
          <Link href={"/"}>BLOG</Link>
          <Link href={"/"}>CONTÁCTANOS</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <Menu
          onClick={() => {
            setToggledNav(!toggledNav);
          }}
          className="transition-all block lg:hidden text-white hover:scale-125 cursor-pointer"
        />
      </section>
      <div className="h-2" style={{ backgroundColor: primaryColor }} />

      {/* Mobile Menu */}
      {toggledNav && (
        <div className="fixed lg:hidden top-0 left-0 w-full h-full bg-customBlack bg-opacity-90 z-50 flex flex-col items-center justify-center text-white">
          <X
            className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
            onClick={() => setToggledNav(false)}
          />
          <div className="flex flex-col gap-6 text-xl text-center">
            {/* Dropdown for MODELOS in Mobile */}
            <div className="relative">
              <button
                className="flex items-center gap-1 justify-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                MODELOS
                <ChevronDown size={20} />
              </button>
              {dropdownOpen && (
                <div className="mt-2 flex flex-col bg-customBlack text-white rounded-lg">
                  <Link
                    href={"/landing/dashing"}
                    onClick={() => setToggledNav(false)}
                    className="p-2 hover:bg-gray-700"
                  >
                    Dashing
                  </Link>
                  <Link
                    href={"/landing/t2"}
                    onClick={() => setToggledNav(false)}
                    className="p-2 hover:bg-gray-700"
                  >
                    T2
                  </Link>
                  <Link
                    href={"/landing/x50"}
                    onClick={() => setToggledNav(false)}
                    className="p-2 hover:bg-gray-700"
                  >
                    X50
                  </Link>
                  <Link
                    href={"/landing/x70"}
                    onClick={() => setToggledNav(false)}
                    className="p-2 hover:bg-gray-700"
                  >
                    X70 PLUS
                  </Link>
                </div>
              )}
            </div>

            <Link href={"/"} onClick={() => setToggledNav(false)}>
              SOLICITA UNA COTIZACIÓN
            </Link>
            <Link href={"/"} onClick={() => setToggledNav(false)}>
              POSTVENTA
            </Link>
            <Link href={"/"} onClick={() => setToggledNav(false)}>
              NOSOTROS
            </Link>
            <Link href={"/"} onClick={() => setToggledNav(false)}>
              NOVEDADES
            </Link>
            <Link href={"/"} onClick={() => setToggledNav(false)}>
              BLOG
            </Link>
            <Link href={"/"} onClick={() => setToggledNav(false)}>
              CONTÁCTANOS
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export { NavBar };
