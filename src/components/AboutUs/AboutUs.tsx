import React, { useState } from 'react';
import s from './AboutUs.module.scss';
import cn from 'classnames';

import dot1 from '../../images/dots/dot1.webp';
import dot2 from '../../images/dots/dot2.webp';
import dot3 from '../../images/dots/dot3.webp';

export const AboutUs: React.FC = () => {
  const [showMoreDescr, setShowMoreDescr] = useState(false);
  const [showMoreCorpEstablish, setShowMoreCorpEstablish] = useState(false);
  const [showMoreIntExpansion, setShowMoreIntExpansion] = useState(false);
  const [showMorePrMengm, setShowMorePrMengm] = useState(false);

  return (
    <section className={s.section}>
      <div className={cn(s.sectionTitle, 'T--1-5', 'D--1-11')}>
        <div className={cn(s.dots, 'T--1-2')}>
          <img src={dot1} alt="dot" className={s.dot1} />
          <img src={dot2} alt="dot" className={s.dot2} />
          <img src={dot3} alt="dot" className={s.dot3} />
        </div>
        <div className={cn(s.text_wrapper, 'T--1-6')}>
          <span className={s.sectionTitle__about}>
            About <br />
          </span>
          <span className={s.sectionTitle__us}>Us</span>
        </div>
      </div>

      <div className={cn(s.description, 'T--1-6')}>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eos
          repudiandae odit aspernatur repellat maiores voluptates aliquam
          necessitatibus porro. Deserunt hic culpa alias. Debitis aliquam autem
          quam animi sed iste culpa facere, accusamus natus asperiores eum optio
          ab minus saepe eveniet, iusto voluptas velit ipsa ratione similique
          illo! Eaque fugit voluptates quas numquam aut dolorem dolore ad,
          corporis impedit totam dicta? Sint dolorum doloribus nisi vero
          perspiciatis at adipisci laborum dolore explicabo ipsa dolor inventore
          praesentium maxime labore nihil, quas placeat. Animi doloribus
          asperiores voluptatem! Accusamus harum, sint dolor dolore laboriosam
          eligendi non cum. Cupiditate eaque voluptatum consectetur culpa
          perferendis!
        </p>

        <div
          className={s.showMoreBtn}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eos
          repudiandae odit aspernatur repellat maiores voluptates aliquam
          necessitatibus porro. Deserunt hic culpa alias. Debitis aliquam autem
          quam animi sed iste culpa facere, accusamus natus asperiores eum optio
          ab minus saepe eveniet, iusto voluptas velit ipsa ratione similique
          illo! Eaque fugit voluptates quas numquam aut dolorem dolore ad,
          corporis impedit totam dicta? Sint dolorum doloribus nisi vero
          perspiciatis at adipisci laborum dolore explicabo ipsa dolor inventore
          praesentium maxime labore nihil, quas placeat. Animi doloribus
          asperiores voluptatem! Accusamus harum, sint dolor dolore laboriosam
          eligendi non cum. Cupiditate eaque voluptatum consectetur culpa
          perferendis!
        </p>
        <div
          className={s.showMoreBtn}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eos
          repudiandae odit aspernatur repellat maiores voluptates aliquam
          necessitatibus porro. Deserunt hic culpa alias. Debitis aliquam autem
          quam animi sed iste culpa facere, accusamus natus asperiores eum optio
          ab minus saepe eveniet, iusto voluptas velit ipsa ratione similique
          illo! Eaque fugit voluptates quas numquam aut dolorem dolore ad,
          corporis impedit totam dicta? Sint dolorum doloribus nisi vero
          perspiciatis at adipisci laborum dolore explicabo ipsa dolor inventore
          praesentium maxime labore nihil, quas placeat. Animi doloribus
          asperiores voluptatem! Accusamus harum, sint dolor dolore laboriosam
          eligendi non cum. Cupiditate eaque voluptatum consectetur culpa
          perferendis!
        </p>
        <div
          className={s.showMoreBtn}
          onClick={() => setShowMorePrMengm(!showMorePrMengm)}
        >
          {!showMorePrMengm ? 'Read more' : 'Hide'}
        </div>
      </div>
    </section>
  );
};
