// car-feature-stats.tsx

import { CarThemeKey, carThemes } from '../data/theme-definitions';

interface CarFeatureStatsProps {
  name: string;
  value: string | number;
  position: 'topleft' | 'topright' | 'topcenter' | 'bottomleft' | 'bottomright' | 'bottomcenter';
  carTheme: CarThemeKey;
}

export function CarFeatureStats({ name, value, position, carTheme }: CarFeatureStatsProps) {
  const theme = carThemes[carTheme].colors;

  // Clases adicionales según la posición
  const positionClasses = {
    topleft: 'text-left',
    topright: 'text-right',
    topcenter: 'text-center',
    bottomleft: 'text-left',
    bottomright: 'text-right',
    bottomcenter: 'text-center'
  };

  return (
    <div className={`flex items-center gap-2 ${positionClasses[position]}`}>
      <h3 className="text-sm font-semibold uppercase">{name}</h3>
      <span className="text-6xl font-bold" style={{ color: theme.primary }}>
        {value}
      </span>
    </div>
  );
}
