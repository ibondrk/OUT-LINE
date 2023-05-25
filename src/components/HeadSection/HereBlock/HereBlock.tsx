import React, { FC, useRef } from 'react';
import s from './hereBlock.module.scss';
import cn from 'classnames';
import { motion, useInView } from 'framer-motion';

import dot from './smallDot.webp';
import roundBlock from './roundBlock.webp';

export const HereBlock: FC = () => {
  const animateFrom = { opacity: 0, x: 40 };
  const animateTo = { opacity: 1, x: 0 };

  // Animation refs
  const hereRef = useRef(null);
  const hereRefInView = useInView(hereRef);

  const dotRef = useRef(null);
  const dotRefInView = useInView(dotRef);

  const lineRef = useRef(null);
  const lineRefInView = useInView(lineRef);

  return (
    <div className={cn(s.wrapper, 'T--9-12', 'D--16-20')}>
      <div className={s.here_wrapper}>
        <motion.p
          ref={hereRef}
          initial={{ opacity: 0, x: 70 }}
          animate={hereRefInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 70 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={s.here}
        >
          here
        </motion.p>
        <motion.div
          ref={dotRef}
          initial={animateFrom}
          animate={dotRefInView ? animateTo : animateFrom}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <img src={dot} alt="dot" className={s.dot} />
        </motion.div>
        <motion.div
          ref={lineRef}
          initial={{ opacity: 0, x: 70 }}
          animate={lineRefInView ? animateTo : { opacity: 0, x: 70 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <img
            src={roundBlock}
            alt="rounded block"
            className={s.roundedBlock}
          />
        </motion.div>
      </div>
      <p className={s.description}>
        to support finding the right direction for the establishment and project
        delivery
      </p>
    </div>
  );
};
