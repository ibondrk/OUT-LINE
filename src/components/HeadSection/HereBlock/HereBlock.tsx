import React, { FC } from 'react';
import s from './hereBlock.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

import dot from './smallDot.webp';
import roundBlock from './roundBlock.webp';

export const HereBlock: FC = () => {
  const animateFrom = { opacity: 0, x: 40 };
  const animateTo = { opacity: 1, x: 0 };
  return (
    <div className={cn(s.wrapper, 'T--9-12', 'D--16-20')}>
      <div className={s.here_wrapper}>
        <motion.p
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className={s.here}
        >
          here
        </motion.p>
        <motion.div
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <img src={dot} alt="dot" className={s.dot} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={animateTo}
          transition={{ duration: 0.3, delay: 0.4 }}
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
