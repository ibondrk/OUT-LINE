import React from 'react';
import s from './HeadSection.module.scss';
import cn from 'classnames';

import { Out_line_project } from './Out-line-ptoject';
import { HereBlock } from './HereBlock';
import { IsBlock } from './IsBlock';
import { Theme } from '../../../components/Header/Theme';
import { OutLineText } from './OutLineText';

export const HeadSection: React.FC = () => {
  return (
    <section className={s.section} id="headSection">
      <div className={cn(s.themeWrapper, 'D--1-1')}>
        <Theme />
      </div>
      <div className={cn(s.image_container, 'S--1-4', 'T--5-8', 'D--7-12')}>
        <div className={cn(s.text_container)}>
          <OutLineText />
        </div>
        <img
          className={cn(s.mainPicture)}
          src="../../../images/main/320.webp"
          alt="out-line main picture"
          srcSet={`
          ${require('../../../images/main/1920.webp')} 1920w,
          ${require('../../../images/main/1550.webp')} 1550w,
          ${require('../../../images/main/1024.webp')} 1024w,
          ${require('../../../images/main/768.webp')} 720w,
          ${require('../../../images/main/320.webp')} 320w`}
          sizes="
            (min-width: 1920px) 1920px,
            (min-width: 1550px) 1550px,
            (min-width: 1024px) 1024px,
            (min-width: 768px) 768px,
            (min-width: 320px) 320px"
        />
        <source
          srcSet={`
          ${require('../../../images/main/1920.webp')} 1920w,
          ${require('../../../images/main/1550.webp')} 1550w,
          ${require('../../../images/main/1024.webp')} 1024w,
          ${require('../../../images/main/768.webp')} 720w,
          ${require('../../../images/main/320.webp')} 320w`}
          type="image/webp"
        />
      </div>
      <div className={cn(s.spinTextWrapper, 'S--1-4', 'T--9-10', 'D--13-14')}>
        <Out_line_project />
      </div>
      <HereBlock />
      <IsBlock />

      <div className={cn(s.categorie__wrapper, 'S--1-4', 'T--1-4', 'D--13-15')}>
        <p className={s.categorie__number}>01</p>
        <p className={s.categorie__name}>
          <span>PROJECT</span> MANAGEMENT
        </p>
      </div>
      <div
        className={cn(
          s.categorie__wrapper,
          s.wrapper_02,
          'S--1-4',
          'T--5-8',
          'D--16-19'
        )}
      >
        <p className={s.categorie__number}>02</p>
        <p className={s.categorie__name}>
          <span>CORPORATE</span> SERVICES
        </p>
      </div>
      <div
        className={cn(
          s.categorie__wrapper,
          s.wrapper_03,
          'S--1-4',
          'T--9-12',
          'D--20-23'
        )}
      >
        <p className={s.categorie__number}>03</p>
        <p className={s.categorie__name}>
          <span>INVESTMENT</span> <br /> IN COMMERCIAL ENTERPRISES
        </p>
      </div>
    </section>
  );
};
