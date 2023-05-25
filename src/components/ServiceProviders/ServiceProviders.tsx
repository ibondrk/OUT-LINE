import React, { useState, useEffect, useRef } from 'react';
import s from './serviceProviders.module.scss';
import cn from 'classnames';

import { ProvidersCol1 } from './ProvidersCol1/ProvidersCol1';
import { ProvidersCol2 } from './ProvidersCol2/ProvidersCol2';
import { ProvidersCol3 } from './ProvidersCol3/ProvidersCol3';

import { ColumnOfProviders } from './ColumnsOfProviders';

import { SwiperComponent } from './SwiperComponent';

import dot1 from '../../images/dots/dot1.webp';
import dot2 from '../../images/dots/dot2.webp';
import dot3 from '../../images/dots/dot3.webp';

import Animation from '../../animations/animationLogic';

import { motion, useInView } from 'framer-motion';

export const ServiceProviders: React.FC = () => {
  const [showMoreDescr, setShowMoreDescr] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const {
    wordMajorAnimateFrom,
    wordMinorAnimateFrom,
    dotsAnimateFrom,
    animateTo,
    transitionSectionNamePart1,
    transitionSectionNamePart2,
    transitionDot1,
    transitionDot2,
    transitionDot3,
  } = Animation();

  const secMajorRef = useRef(null);
  const secMajorRefInView = useInView(secMajorRef);

  const secMinorRef = useRef(null);
  const secMinorRefInView = useInView(secMinorRef);

  const dotsRef = useRef(null);
  const dotsRefInView = useInView(dotsRef);

  return (
    <section className={s.section} id="ServiceProviders">
      {/* Title */}
      <div className={cn(s.sectionTitle, 'T--1-5', 'D--1-11')}>
        <div className={cn(s.dots, 'T--1-2')} ref={dotsRef}>
          <motion.div
            style={{ display: 'inline-block' }}
            initial={dotsAnimateFrom}
            animate={dotsRefInView ? animateTo : dotsAnimateFrom}
            transition={transitionDot1}
          >
            <img src={dot1} alt="dot" className={s.dot1} />
          </motion.div>
          <motion.div
            style={{ display: 'inline-block' }}
            initial={dotsAnimateFrom}
            animate={dotsRefInView ? animateTo : dotsAnimateFrom}
            transition={transitionDot2}
          >
            <img src={dot2} alt="dot" className={s.dot2} />
          </motion.div>
          <motion.div
            style={{ display: 'inline-block' }}
            initial={dotsAnimateFrom}
            animate={dotsRefInView ? animateTo : dotsAnimateFrom}
            transition={transitionDot3}
          >
            <img src={dot3} alt="dot" className={s.dot3} />
          </motion.div>
        </div>
        <div className={cn(s.text_wrapper, 'T--1-6')}>
          <motion.p
            className={s.sectionTitle__main}
            ref={secMajorRef}
            initial={wordMajorAnimateFrom}
            animate={secMajorRefInView ? animateTo : wordMajorAnimateFrom}
            transition={transitionSectionNamePart1}
          >
            Our <br />
            Service
          </motion.p>
          <motion.p
            className={s.sectionTitle__secoundary}
            ref={secMinorRef}
            initial={wordMinorAnimateFrom}
            animate={secMinorRefInView ? animateTo : wordMinorAnimateFrom}
            transition={transitionSectionNamePart2}
          >
            Providers
          </motion.p>
        </div>
      </div>
      {/* Description */}
      <div className={cn(s.description, 'T--1-5', 'D--1-7')}>
        <p
          className={cn(s.description__text_wrapper, {
            [s.opened]: showMoreDescr,
          })}
        >
          We closely work with the leaders in the field, to facilitate project
          development, management, and company structuring, to consistently
          deliver on the client&apos;s vision, with an ongoing commitment to the
          latest technology and leading-edge solutions.
        </p>
        <div
          className={s.showMoreBtn}
          onClick={() => setShowMoreDescr(!showMoreDescr)}
        >
          {!showMoreDescr ? 'Read more' : 'Hide'}
        </div>
      </div>

      {isMobile ? (
        <div className={cn(s.icons_container)}>
          <SwiperComponent
            slides={[
              <ProvidersCol1 key="ProvidersMobileCol1" />,
              <ProvidersCol2 key="ProvidersMobileCol2" />,
              <ProvidersCol3 key="ProvidersMobileCol3" />,
            ]}
          />
        </div>
      ) : (
        <ColumnOfProviders />
      )}

      <span className={cn(s.lineNotForView, 'T--1-12')}></span>
    </section>
  );
};
