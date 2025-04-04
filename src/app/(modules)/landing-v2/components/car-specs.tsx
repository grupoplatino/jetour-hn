'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import { carThemes } from '../page';

type ThemeKey = keyof typeof carThemes;

interface CarSpectsProps {
  title: string;
  specs: Record<string, string>;
  activeTitle: string | null;
  toggleSpecs: (title: string) => void;
  theme: (typeof carThemes)[ThemeKey];
}

const CarSpects = ({ title, specs, activeTitle, toggleSpecs, theme }: CarSpectsProps) => {
  const [mouseOver, setMouseOver] = useState(false);
  const isActive = activeTitle === title;

  return (
    <div
      className={clsx('group transition-all flex flex-col w-full px-4 py-6 rounded-2xl cursor-pointer', { 'bg-transparent': !mouseOver && !isActive })}
      style={{
        backgroundColor: mouseOver || isActive ? theme.colors.primary : 'transparent'
      }}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      onClick={() => toggleSpecs(title)}
    >
      <div className="flex flex-row justify-between items-center">
        <p className={clsx('transition-all group-hover:text-white text-xl font-bold', isActive ? 'text-white' : 'text-black')}>{title}</p>
        <ChevronRight
          style={{
            color: mouseOver || isActive ? 'white' : theme.colors.primary
          }}
          className={clsx('transition transform w-6 h-6', isActive ? 'rotate-90' : 'rotate-0', 'group-hover:rotate-90')}
        />
      </div>

      <div className={clsx('overflow-hidden transition-max-height duration-300 ease-in-out', isActive ? 'max-h-screen mt-4' : 'max-h-0')}>
        <table className="w-full table-auto">
          <tbody>
            {Object.entries(specs).map(([key, value], index) => (
              <tr key={index} className="text-white font-bold text-lg">
                <td className="md:w-[50%] p-1">{key}</td>
                <td className="md:w-[50%] p-1">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { CarSpects };
