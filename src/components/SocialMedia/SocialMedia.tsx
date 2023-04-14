import React from 'react';
import s from './socialmedia.module.scss';
import sprite from '../../images/sprite.svg';

export const SocialMedia: React.FC = () => {
  return (
    <div className={s.icons_wrapper}>
      <a href="#">
        <svg className={s.icon}>
          <use xlinkHref={`${sprite}#instagram-logo`} />
        </svg>
      </a>
      <a href="#">
        <svg className={s.icon}>
          <use xlinkHref={`${sprite}#linkedin-logo`} />
        </svg>
      </a>
    </div>
  );
};
