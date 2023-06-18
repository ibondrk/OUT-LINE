import React from 'react';
import s from './page404.module.scss';

export const Page404: React.FC = () => {
  return (
    <article className={s.page}>
      <p className={s.error}>
        E <span>r</span>ror
      </p>
      <p className={s.code}>
        4<span>0</span>
        <span>4</span>
      </p>
    </article>
  );
};
