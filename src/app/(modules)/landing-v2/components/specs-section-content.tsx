'use client';

import { useState } from 'react';
import { carThemes } from '../page';
import { ThemeKey } from '../data/theme-definitions';
import CarSpects from './car-specs';

interface SpecsSectionContentProps {
  specs: Record<string, Record<string, string>>;
  themeKey: ThemeKey;
}

export const SpecsSectionContent = ({ specs, themeKey }: SpecsSectionContentProps) => {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  const toggleSpecs = (title: string) => {
    setActiveTitle((prevTitle) => (prevTitle === title ? null : title));
  };

  const theme = carThemes[themeKey];

  return (
    <div className="w-full flex flex-col gap-2">
      {Object.entries(specs).map(([key, value], index) => (
        <CarSpects key={index} title={key} specs={value} activeTitle={activeTitle} toggleSpecs={toggleSpecs} theme={theme} />
      ))}
    </div>
  );
};
