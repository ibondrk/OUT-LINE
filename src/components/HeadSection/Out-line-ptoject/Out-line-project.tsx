import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import s from './out-line-project.module.scss';

export const Out_line_project: React.FC = () => {
  const text = 'out-line-project-';
  const chars = text.split('');
  const angleStep = 360 / chars.length; // angle between letters
  const angleOffset = -90; // beginning angle of rotating for text
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const radius = isSmallScreen ? 20 : 25; // circle radius

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef}>
      <div
        className={s.circle}
        style={{
          position: 'relative',
          height: radius * 2,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {chars.map((char, index) => (
          <span
            key={index}
            className={s.letter}
            style={{
              transform: `rotate(${angleStep * index}deg) translateY(-${
                radius * 2
              }px)`,
              color: isSmallScreen
                ? (angleStep * index + rotation + angleOffset) % 360 > 180
                  ? 'var(--spin-text-color)'
                  : 'var(--inverted-spin-text-color)'
                : (angleStep * index + rotation) % 360 > 180
                ? 'var(--spin-text-color)'
                : 'var(--inverted-spin-text-color)',
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};
