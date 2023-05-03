import React, { useState } from 'react';
import s from './AboutUs.module.scss';
import cn from 'classnames';

import dot1 from '../../images/dots/dot1.webp';
import dot2 from '../../images/dots/dot2.webp';
import dot3 from '../../images/dots/dot3.webp';

import Plug from '../../images/animation.png';

export const AboutUs: React.FC = () => {
  const [showMoreDescr, setShowMoreDescr] = useState(false);
  const [showMoreCorpEstablish, setShowMoreCorpEstablish] = useState(false);
  const [showMoreIntExpansion, setShowMoreIntExpansion] = useState(false);
  const [showMorePrMengm, setShowMorePrMengm] = useState(false);

  return (
    <section className={s.section} id="aboutUs">
      <div className={cn(s.sectionTitle, 'T--1-5', 'D--1-11')}>
        <div className={cn(s.dots, 'T--1-2')}>
          <img src={dot1} alt="dot" className={s.dot1} />
          <img src={dot2} alt="dot" className={s.dot2} />
          <img src={dot3} alt="dot" className={s.dot3} />
        </div>
        <div className={cn(s.text_wrapper, 'T--1-6')}>
          <span className={s.sectionTitle__main}>
            About <br />
          </span>
          <span className={s.sectionTitle__secoundary}>Us</span>
        </div>
      </div>

      <div className={cn(s.description, 'T--1-6', 'D--1-7')}>
        <div
          className={cn(s.description__text_wrapper, {
            [s.opened]: showMoreDescr,
          })}
        >
          <p>
            As a purpose-based team, we work on the opportunities and challenges
            that transform businesses, governments, and communities. We build
            confidence in what we can achieve together with our clients.
          </p>
          <br />
          <p>
            We recognize the diversity of our client&apos;s needs, are ready to
            solve challenges and bring people, ideas, and analyses together. We
            think deeply and adaptively to find the best possible answers,
            creating dynamic commercial projects and assisting businesses in
            their growth.
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
        src={Plug}
        alt="Plug animation"
        className={cn(s.animation, 'T--7-12', 'D--3-12')}
      />

      <div
        className={cn(
          s.enterpriseDev,
          s.corporateEstablishment,
          'T--1-4',
          'D--13-15'
        )}
      >
        <div className={s.entDevHead}>
          <p className={s.entDevHead__name}>
            <span>CORPORATE</span> ESTABLISHMENT
          </p>
          <div
            className={cn(s.buttonArrow, { [s.active]: showMoreCorpEstablish })}
            onClick={() => setShowMoreCorpEstablish(!showMoreCorpEstablish)}
          >
            <div className={cn(s.arrow)}></div>
          </div>
        </div>
        <p
          className={cn(s.enterpriseDev__block_description, {
            [s.opened]: showMoreCorpEstablish,
          })}
        >
          Setting up a company in UAE / United Arab Emirates doesn’t have to be
          complicated, we are ready to guide you through every step of the
          process, from deciding the ideal business structure to obtaining the
          necessary registrations and approvals. We cover an exhaustive list of
          services to guarantee a seamless registration process from l advice on
          deciding the most suitable business structure all way to submission of
          necessary financial statements on yearly basis.
        </p>

        <div
          className={s.description_block_btn}
          onClick={() => setShowMoreCorpEstablish(!showMoreCorpEstablish)}
        >
          {!showMoreCorpEstablish ? 'Read more' : 'Hide'}
        </div>
      </div>
      <div
        className={cn(
          s.enterpriseDev,
          s.internationalExpansion,
          'T--5-8',
          'D--16-19'
        )}
      >
        <div className={s.entDevHead}>
          <p className={s.entDevHead__name}>
            <span>INTERNATIONAL</span> EXPANSION
          </p>
          <div
            className={cn(s.buttonArrow, { [s.active]: showMoreIntExpansion })}
            onClick={() => setShowMoreIntExpansion(!showMoreIntExpansion)}
          >
            <div className={cn(s.arrow)}></div>
          </div>
        </div>
        <p
          className={cn(s.enterpriseDev__block_description, {
            [s.opened]: showMoreIntExpansion,
          })}
        >
          Global expansion service is designed to help build strong business
          foundations in a new market. Having a clear strategy and support all
          the way through. Expansion requires knowledge of local laws and new
          cultural and economic realities. We will ensure the whole process runs
          smoothly and effortlessly, meets all the local regulations, and also
          deal with HR, financial and legal issues.
        </p>
        <div
          className={s.description_block_btn}
          onClick={() => setShowMoreIntExpansion(!showMoreIntExpansion)}
        >
          {!showMoreIntExpansion ? 'Read more' : 'Hide'}
        </div>
      </div>
      <div
        className={cn(
          s.enterpriseDev,
          s.projectManagement,
          'T--9-12',
          'D--20-23'
        )}
      >
        <div className={s.entDevHead}>
          <p className={s.entDevHead__name}>
            <span>END-TO-END</span> PROJECT MANAGEMENT
          </p>
          <div
            className={cn(s.buttonArrow, { [s.active]: showMorePrMengm })}
            onClick={() => setShowMorePrMengm(!showMorePrMengm)}
          >
            <div className={cn(s.arrow)}></div>
          </div>
        </div>
        <p
          className={cn(s.enterpriseDev__block_description, {
            [s.opened]: showMorePrMengm,
          })}
        >
          With an intimate knowledge of all facets of local regulations and
          statutory requirements and long-term relationships with trusted
          service providers and partners, assuring that the project we undertake
          runs smoothly. Our Project Management services are the control center
          for a project – the central point of contact for all parties involved
          in the day-to-day activities of a project, providing a grounded and
          informed perspective on the project, that ensures all work is carried
          out efficiently and effectively and meets cost and quality
          expectations.
        </p>
        <div
          className={s.description_block_btn}
          onClick={() => setShowMorePrMengm(!showMorePrMengm)}
        >
          {!showMorePrMengm ? 'Read more' : 'Hide'}
        </div>
      </div>
    </section>
  );
};
