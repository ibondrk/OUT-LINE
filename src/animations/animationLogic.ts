import { useAppSelector } from '../app/hooks';

const Animation = (): {
  wordMajorAnimateFrom: object;
  wordMinorAnimateFrom: object;
  dotsAnimateFrom: object;
  animateTo: object;
  transitionSectionNamePart1: object;
  transitionSectionNamePart2: object;
  transitionDot1: object;
  transitionDot2: object;
  transitionDot3: object;
} => {
  const { isWidthPC } = useAppSelector((state) => state.screenWidth);

  const wordMajorAnimateFrom = { opacity: 0, x: 60 };
  const wordMinorAnimateFrom = { opacity: 0, x: -60 };

  const dotsAnimateFrom = isWidthPC
    ? { opacity: 0, x: -40 }
    : { opacity: 0, x: 80 };

  const animateTo = { opacity: 1, x: 0 };

  const transitionSectionNamePart1 = { duration: 0.5, delay: 0.4 };
  const transitionSectionNamePart2 = { duration: 0.5, delay: 0.6 };

  const transitionDot1 = { duration: 0.5, delay: 1.1 };
  const transitionDot2 = { duration: 0.5, delay: 1.4 };
  const transitionDot3 = { duration: 0.5, delay: 1.7 };

  return {
    wordMajorAnimateFrom,
    wordMinorAnimateFrom,
    dotsAnimateFrom,
    animateTo,
    transitionSectionNamePart1,
    transitionSectionNamePart2,
    transitionDot1,
    transitionDot2,
    transitionDot3,
  };
};

export default Animation;
