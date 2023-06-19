import React, { useRef } from 'react';
import s from './isBlock.module.scss';
import cn from 'classnames';

import dot1 from './dot1.webp';
import dot2 from './dot2.webp';
import dot3 from './dot3.webp';

import { motion, useInView } from 'framer-motion';

export const IsBlock: React.FC = () => {
  const dotsAnimateFrom = { opacity: 0, x: -40 };
  const animateTo = { opacity: 1, x: 0 };

  const isRef = useRef(null);
  const isRefInView = useInView(isRef);

  const dot1Ref = useRef(null);
  const dot1RefInView = useInView(dot1Ref);

  const dot2Ref = useRef(null);
  const dot2RefInView = useInView(dot2Ref);

  const dot3Ref = useRef(null);
  const dot3RefInView = useInView(dot3Ref);

  return (
    <div className={cn(s.wrapper, 'T--1-4')}>
      <div className={s.is_wrapper}>
        <motion.p
          ref={isRef}
          initial={{ opacity: 0, x: -60 }}
          animate={isRefInView ? animateTo : { opacity: 0, x: -60 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={s.is}
        >
          is
        </motion.p>
        <motion.div
          ref={dot1Ref}
          initial={dotsAnimateFrom}
          animate={dot1RefInView ? animateTo : dotsAnimateFrom}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <img src={dot1} alt="dot" className={s.dot} />
        </motion.div>
        <motion.div
          ref={dot2Ref}
          initial={dotsAnimateFrom}
          animate={dot2RefInView ? animateTo : dotsAnimateFrom}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <img src={dot2} alt="dot" className={s.dot2} />
        </motion.div>
        <motion.div
          ref={dot3Ref}
          initial={dotsAnimateFrom}
          animate={dot3RefInView ? animateTo : dotsAnimateFrom}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <img src={dot3} alt="dot" className={s.dot3} />
        </motion.div>
      </div>
      <p className={s.description}>
        a corporate service provider and project management business that
        focuses on small and medium-sized establishments.
      </p>
    </div>
  );
};
