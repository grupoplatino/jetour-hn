import clsx from 'clsx';
import { CarThemeKey, carThemes } from '../data/theme-definitions';

interface TestDriveButtonProps {
  carTheme: CarThemeKey;
  fixed?: boolean;
}

const TestDriveButton: React.FC<TestDriveButtonProps> = ({ carTheme, fixed = true }) => {
  const theme = carThemes[carTheme].colors;

  return (
    <div
      className={clsx(
        'flex flex-row gap-2 w-full md:w-auto md:right-[-2.25rem] lg:right-0 md:scale-75 lg:scale-100',
        fixed
          ? 'fixed md:fixed right-5 z-50 top-1/2 transform -translate-y-1/2' // Centrado verticalmente
          : 'absolute md:absolute'
      )}
    >
      <div className={`w-2 h-12 -skew-x-[20deg] md:-skew-x-12`} style={{ backgroundColor: theme.primary }}></div>
      <div className={`w-2 h-12 -skew-x-[20deg] md:-skew-x-12`} style={{ backgroundColor: theme.primary }}></div>
      <div
        className="ml-[-8px] md:ml-[-3px] w-full flex flex-row justify-center items-center px-8"
        style={{
          backgroundColor: theme.primary,
          clipPath: 'polygon(3.5% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }}
      >
        <p className={clsx('font-bold', theme.testDriveText === 'black' ? 'text-black' : 'text-white')}>AGENDA TU TEST DRIVE</p>
      </div>
    </div>
  );
};

export default TestDriveButton;
