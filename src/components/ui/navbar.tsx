"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { usePrimaryColor } from "./color-context";

function NavBar() {
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
        <div className="flex flex-row gap-10 text-xs text-white">
          <Link href={"/"}>MODELOS</Link>
          <Link href={"/"}>SOLICITA UNA COTIZACIÓN</Link>
          <Link href={"/"}>POSTVENTA</Link>
          <Link href={"/"}>NOSOTROS</Link>
          <Link href={"/"}>NOVEDADES</Link>
          <Link href={"/"}>BLOG</Link>
          <Link href={"/"}>CONTÁCTANOS</Link>
        </div>
      </section>
      <div className="h-2" style={{ backgroundColor: primaryColor }} />
    </nav>
  );
}

export { NavBar };
