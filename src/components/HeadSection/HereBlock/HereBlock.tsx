import React, { FC } from 'react';
import s from './hereBlock.module.scss';
import cn from 'classnames';

import dot from './smallDot.webp';
import roundBlock from './roundBlock.webp';

export const HereBlock: FC = () => {
  return (
    <div className={cn(s.wrapper, 'T--9-12', 'D--16-20')}>
      <div className={s.here_wrapper}>
        <p className={s.here}>here</p>
        <img src={dot} alt="dot" className={s.dot} />
        <img src={roundBlock} alt="rounded block" className={s.roundedBlock} />
      </div>
      <p className={s.description}>
        to support finding the right direction for the establishment and project
        delivery
      </p>
    </div>
  );
};
