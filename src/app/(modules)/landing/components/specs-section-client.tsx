// SpecsSectionClient.tsx
'use client';

import { ReactNode, useState } from 'react';
import { carThemes } from '../page';

type ThemeKey = keyof typeof carThemes;

interface SpecsSectionClientProps {
  children: (props: { activeTitle: string | null; toggleSpecs: (title: string) => void; theme: (typeof carThemes)[ThemeKey] }) => ReactNode;
  themeKey: ThemeKey;
}

export const SpecsSectionClient = ({ children, themeKey }: SpecsSectionClientProps) => {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  const toggleSpecs = (title: string) => {
    setActiveTitle((prevTitle) => (prevTitle === title ? null : title));
  };

  const theme = carThemes[themeKey];

  return <div className="w-full flex flex-col gap-2">{children({ activeTitle, toggleSpecs, theme })}</div>;
};
