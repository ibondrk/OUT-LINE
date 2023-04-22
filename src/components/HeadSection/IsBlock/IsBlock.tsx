import React from 'react';
import s from './isBlock.module.scss';
import cn from 'classnames';

import dot1 from './dot1.webp';
import dot2 from './dot2.webp';
import dot3 from './dot3.webp';

export const IsBlock: React.FC = () => {
  return (
    <div className={cn(s.wrapper, 'T--1-4')}>
      <div className={s.is_wrapper}>
        <p className={s.is}>is</p>
        <img src={dot1} alt="dot" className={s.dot} />
        <img src={dot2} alt="dot" className={s.dot2} />
        <img src={dot3} alt="dot" className={s.dot3} />
      </div>
      <p className={s.description}>
        a corporate service provider and project management business that
        focuses on small and medium-sized establishments
      </p>
    </div>
  );
};
