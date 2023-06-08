import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import s from './out-line-project.module.scss';

export const Out_line_project: React.FC = () => {
  // creating dynamic projects
  const text = ' creating dynamic projects';
  const chars = text.split('');
  const angleStep = 360 / chars.length; // angle between letters
  const angleOffset = -90; // beginning angle of rotating for text
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const radius = isSmallScreen ? 25 : 35; // circle radius
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    // <div ref={containerRef}>
    <div
      className={s.circle}
      style={{
        position: 'relative',
        // changed from radius * 2 to this:
        height: radius * 1.75,
        transform: `rotate(${rotation}deg)`,
      }}
      ref={containerRef}
    >
      {chars.map((char, index) => (
        <span
          key={index}
          className={s.letter}
          // condition just for this text. Here only for letter 'i' at the 15 place
          style={{
            transform: `rotate(${
              index === 15 ? 212.692 : angleStep * index
            }deg) translateY(-${radius * 1.75}px)`,
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
    // </div>
  );
};
