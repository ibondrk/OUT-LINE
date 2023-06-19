import React from 'react';
import s from './outLineText.module.scss';
import { useAppSelector } from '../../../../app/hooks';

export const OutLineText: React.FC = () => {
  const { themeName } = useAppSelector((state) => state.theme);
  const gradientColor = themeName === 'dark' ? '#000000' : '#ffffff';

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="459"
        viewBox="0 0 400 459"
        fill="none"
        className={s.textSVG}
      >
        <path
          d="M63.52 117.56c34.08 0 57.12-23.84 57.12-58.56S97.6.44 63.52.44 6.4 24.28 6.4 59s23.04 58.56 57.12 58.56ZM33.44 59c0-21.76 9.76-35.52 30.08-35.52S93.44 37.24 93.44 59c0 21.76-9.6 35.52-29.92 35.52S33.44 80.76 33.44 59Zm162.231 58.56c26.4 0 47.84-12.16 47.84-43.52V3h-25.44v68.16c0 15.04-6.56 24.96-22.4 24.96s-22.24-9.92-22.24-24.96V3h-25.6v71.04c0 31.36 21.6 43.52 47.84 43.52ZM304.275 115h25.6V23.8h36.8V3h-99.2v20.8h36.8V115ZM10.56 459h80.96v-20.8H36V347H10.56v112Zm106.512 0h25.6V347h-25.6v112Zm57.919 0h25.12l-.64-73.12 48.32 73.12h25.92V347h-25.12l.64 74.56-48.32-74.56h-25.92v112Zm131.044 0h85.44v-20.8h-60v-26.08h51.04v-20.16h-51.04V367.8h58.24V347h-83.68v112Z"
          fill={`url(#b-${themeName})`}
        />
        <defs>
          <linearGradient
            id={`b-${themeName}`}
            x1="0%"
            x2="100%"
            y1="0%"
            y2="0%"
          >
            <stop offset="0.503" stopColor="#bbd1ff" />
            <stop offset="0.503" stopColor={gradientColor} />
          </linearGradient>
        </defs>
      </svg>
      <span className={s.slash}></span>
    </>
  );
};
