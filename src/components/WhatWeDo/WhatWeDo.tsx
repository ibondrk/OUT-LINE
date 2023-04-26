import React, { useState } from 'react';
import s from './whatWeDo.module.scss';
import cn from 'classnames';

import dot1 from '../../images/dots/dot1.webp';
import dot2 from '../../images/dots/dot2.webp';
import dot3 from '../../images/dots/dot3.webp';

export const WhatWeDo: React.FC = () => {
  const [showMoreDescr, setShowMoreDescr] = useState(false);

  const [showMoreProjManag, setShowMoreProjManag] = useState(false);
  const [showMoreCorpServ, setShowMoreCorpServ] = useState(false);
  const [showMoreDevManag, setShowMoreDevManag] = useState(false);
  return (
    <section className={s.section} id="WhatWeDo">
      <div className={cn(s.sectionTitle, 'T--1-5', 'D--1-11')}>
        <div className={cn(s.dots, 'T--1-2')}>
          <img src={dot1} alt="dot" className={s.dot1} />
          <img src={dot2} alt="dot" className={s.dot2} />
          <img src={dot3} alt="dot" className={s.dot3} />
        </div>
        <div className={cn(s.text_wrapper, 'T--1-6')}>
          <span className={s.sectionTitle__what}>
            What <br />
          </span>
          <span className={s.sectionTitle__weDo}>We Do</span>
        </div>
      </div>

      <div className={cn(s.description, 'T--1-12', 'D--1-7')}>
        <div
          className={cn(s.description__text_wrapper, {
            [s.opened]: showMoreDescr,
          })}
        >
          <p>
            We know we can make the greatest impact through collaboration with
            our clients, and long-term strategic relationships to deliver a
            quality outcome. We put newly established businesses, expanded
            companies, and projects on the right track for growth and success in
            UAE. We find a solution that answers business issues and fulfills
            objectives.
          </p>
        </div>
        <div
          className={s.showMoreBtn}
          onClick={() => setShowMoreDescr(!showMoreDescr)}
        >
          {!showMoreDescr ? 'Read more' : 'Hide'}
        </div>
      </div>

      <img
        className={cn(s.cloud_img, 'T--11-12', 'D--4-10')}
        src={require('../../images/cloud/320.webp')}
        alt="clouds"
        srcSet={`
          ${require('../../images/cloud/1920.webp')} 1920w,
          ${require('../../images/cloud/1550.webp')} 1550w,
          ${require('../../images/cloud/1024.webp')} 1024w,
          ${require('../../images/cloud/768.webp')} 768w,
          ${require('../../images/cloud/320.webp')} 320w
        `}
        sizes="
        (min-width: 1920px) 1920px,
        (min-width: 1550px) 1550px,
        (min-width: 1024px) 321px,
        (min-width: 768px) 320px,
        (min-width: 320px) 320px
        "
      />
      <source
        srcSet={`
          ${require('../../images/cloud/1920.webp')} 1920w,
          ${require('../../images/cloud/1550.webp')} 1550w,
          ${require('../../images/cloud/1024.webp')} 1024w,
          ${require('../../images/cloud/768.webp')} 768w,
          ${require('../../images/cloud/320.webp')} 320w
          `}
        type="image/webp"
      />
      <p className={cn(s.descr_diverse, 'T--1-3')}>
        Our diverse team helps tackle today’s most urgent challenges by
        strengthening ethical and responsible business practices and working day
        by day to help build a sustainable and inclusive future and make a
        difference in society.
      </p>

      <div
        className={cn(s.services, s.projectManagement, 'T--1-12', 'D--12-24')}
      >
        <div className={s.serviceHead}>
          <p className={s.serviceHead__name}>
            <span>PROJECT</span> <br /> MANAGEMENT
          </p>
          <div
            className={cn(s.buttonArrow, { [s.active]: showMoreProjManag })}
            onClick={() => setShowMoreProjManag(!showMoreProjManag)}
          >
            <div className={s.arrow}></div>
          </div>
        </div>
        <ul
          className={cn(s.services__list, {
            [s.opened]: showMoreProjManag,
          })}
        >
          <li className={s.services__item}>Project Brief</li>
          <li className={s.services__item}>Development Design</li>
          <li className={s.services__item}>Management Contract</li>
          <li className={s.services__item}>Tendering</li>
          <li className={s.services__item}>Reporting</li>
          <li className={s.services__item}>Project Planning/Scheduling</li>
          <li className={s.services__item}>Quality Assurance</li>
          <li className={s.services__item}>
            Independent Certification & <br />
            Verification
          </li>
          <li className={s.services__item}>Advisory Project</li>
          <li className={s.services__item}>Commissioning & Handover</li>
          <li className={s.services__item}>Tenancy Coordination</li>
        </ul>
      </div>

      <div
        className={cn(s.services, s.corporateServices, 'T--1-12', 'D--12-24')}
      >
        <div className={s.serviceHead}>
          <p className={s.serviceHead__name}>
            <span>CORPORATE</span> <br /> SERVICES
          </p>
          <div
            className={cn(s.buttonArrow, { [s.active]: showMoreCorpServ })}
            onClick={() => setShowMoreCorpServ(!showMoreCorpServ)}
          >
            <div className={s.arrow}></div>
          </div>
        </div>
        <ul
          className={cn(s.services__list, {
            [s.opened]: showMoreCorpServ,
          })}
        >
          <li className={s.services__item}>Company Incorporation</li>
          <li className={s.services__item}>Corporate Identity</li>
          <li className={s.services__item}>Outsourced Accounting</li>
          <li className={s.services__item}>Payroll & HR Administration</li>
          <li className={s.services__item}>Outsourcing</li>
        </ul>
      </div>

      <div
        className={cn(
          s.services,
          s.corporateEstablishment,
          'T--1-12',
          'D--12-24'
        )}
      >
        <div className={s.serviceHead}>
          <p className={s.serviceHead__name}>
            <span>DEVELOPMENT</span> <br /> MANAGEMENT
          </p>
          <div
            className={cn(s.buttonArrow, { [s.active]: showMoreDevManag })}
            onClick={() => setShowMoreDevManag(!showMoreDevManag)}
          >
            <div className={s.arrow}></div>
          </div>
        </div>
        <ul
          className={cn(s.services__list, {
            [s.opened]: showMoreDevManag,
          })}
        >
          <li className={s.services__item}>Planning & Concept Analysis</li>
          <li className={s.services__item}>Authorities Approvals</li>
          <li className={s.services__item}>Procurement Controls</li>
          <li className={s.services__item}>Contracting</li>
          <li className={s.services__item}>Strategies & Management</li>
        </ul>
      </div>
    </section>
  );
};
