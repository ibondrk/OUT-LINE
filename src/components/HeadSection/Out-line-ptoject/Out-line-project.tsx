import React, { useEffect } from 'react';
import s from './out-line-project.module.scss';

const radius = 25;

const startAngle = (3 * Math.PI) / 2;

export const Out_line_project: React.FC = () => {
  const letters = [
    'o',
    'u',
    't',
    '-',
    'l',
    'i',
    'n',
    'e',
    '-',
    'p',
    'r',
    'o',
    'j',
    'e',
    'c',
    't',
    '-',
  ];

  const angleBetweenLetters = (2 * Math.PI) / letters.length;
  // const halfCircleAngle = Math.PI;

  useEffect(() => {
    const letters = document.querySelectorAll(
      '.letter'
    ) as NodeListOf<HTMLElement>;

    let rotation = 0;
    const rotationStep = 360 / (10 * 60);

    const intervalId = setInterval(() => {
      rotation += rotationStep;
      letters.forEach((letter) => {
        letter.style.transform = `rotate(${rotation}deg)`;
      });
    }, 8);

    return () => clearInterval(intervalId);
  }, []);

  const letterElements = letters.map((letter, index) => {
    const angle = startAngle + index * angleBetweenLetters;
    // const isLeftHalf =
    //   angle > startAngle - halfCircleAngle && angle < startAngle;

    // const getLetterColor = (() => {
    //   const letterColor = isLeftHalf
    //     ? getComputedStyle(document.documentElement).getPropertyValue(
    //         '--inverted-main-text'
    //       )
    //     : getComputedStyle(document.documentElement).getPropertyValue(
    //         '--main-text'
    //       );
    //   return () => letterColor;
    // })();
    // console.log(getLetterColor());
    const style = {
      height: `${radius * 2}px`,
      transform: `rotate(${(angle - startAngle) * (180 / Math.PI)}deg)`,
      // color: getLetterColor(),
    };
    return (
      <span key={index} className={s.letter} style={style}>
        {letter}
      </span>
    );
  });
  return <div className={s.letter_container}>{letterElements}</div>;
};
