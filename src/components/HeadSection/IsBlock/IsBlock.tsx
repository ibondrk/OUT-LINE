import React from 'react';
import s from './isBlock.module.scss';
import cn from 'classnames';

import dot1 from './dot1.webp';
import dot2 from './dot2.webp';
import dot3 from './dot3.webp';

import { motion } from 'framer-motion';

export const IsBlock: React.FC = () => {
  return (
    <div className={cn(s.wrapper, 'T--1-4')}>
      <div className={s.is_wrapper}>
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className={s.is}
        >
          is
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <img src={dot1} alt="dot" className={s.dot} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <img src={dot2} alt="dot" className={s.dot2} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          <img src={dot3} alt="dot" className={s.dot3} />
        </motion.div>
      </div>
      <p className={s.description}>
        a corporate service provider and project management business that
        focuses on small and medium-sized establishments
      </p>
    </div>
  );
};
