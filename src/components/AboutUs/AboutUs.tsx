import React, { useState, useRef } from 'react';
import s from './AboutUs.module.scss';
import cn from 'classnames';

import dot1 from '../../images/dots/dot1.webp';
import dot2 from '../../images/dots/dot2.webp';
import dot3 from '../../images/dots/dot3.webp';

import Animation from '../../animations/animationLogic';

import { motion, useInView, Variants } from 'framer-motion';

export const AboutUs: React.FC = () => {
  const [showMoreDescr, setShowMoreDescr] = useState(false);
  const [showMoreCorpEstablish, setShowMoreCorpEstablish] = useState(false);
  const [showMoreIntExpansion, setShowMoreIntExpansion] = useState(false);
  const [showMorePrMengm, setShowMorePrMengm] = useState(false);

  const svgRef = useRef(null);
  const isSvgInView = useInView(svgRef);

  const svgVariants: Variants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 3 },
    },
  };

  const svgAnimateFrom = { opacity: 0, x: -40 };
  const linesAnimateTo = {
    opacity: isSvgInView ? 1 : 0,
    x: isSvgInView ? 0 : -40,
    transition: isSvgInView
      ? {
          duration: 0.6,
          fill: 'freeze',
        }
      : {},
  };

  const firstCircleElem: Variants = {
    initial: {
      opacity: 0,
      y: -40,
    },
    animate: {
      opacity: isSvgInView ? 1 : 0,
      y: isSvgInView ? 0 : -40,
      transition: isSvgInView
        ? {
            duration: 0.6,
            delay: 0.5,
          }
        : {},
    },
  };

  const secondCircleElem: Variants = {
    initial: {
      opacity: 0,
      y: -40,
      transform: 'rotate(13deg) scale(0)',
    },
    animate: {
      opacity: isSvgInView ? 1 : 0,
      y: isSvgInView ? 0 : -40,
      transform: 'rotate(0deg) scale(1)',
      transition: isSvgInView
        ? {
            duration: 0.6,
            delay: 1.5,
          }
        : {},
    },
  };

  const thirdCircleElem: Variants = {
    initial: {
      opacity: 0,
      y: -40,
      transform: 'rotate(11deg) scale(0)',
    },
    animate: {
      opacity: isSvgInView ? 1 : 0,
      y: isSvgInView ? 0 : -40,
      transform: 'rotate(0deg) scale(1)',
      transition: isSvgInView
        ? {
            duration: 0.6,
            delay: 2.5,
          }
        : {},
    },
  };

  const fourCircleElem: Variants = {
    initial: {
      opacity: 0,
      y: -40,
      x: -25,
      transform: 'rotate(13deg) scale(0)',
    },
    animate: {
      opacity: isSvgInView ? 1 : 0,
      y: isSvgInView ? 0 : -40,
      x: isSvgInView ? 0 : -25,
      transform: 'rotate(0deg) scale(1)',
      transition: isSvgInView
        ? {
            duration: 0.6,
            delay: 3.5,
          }
        : {},
    },
  };

  // it could be deleted after approve
  // const lastCircleElem: Variants = {
  //   initial: {
  //     opacity: 0,
  //     // x: -20,
  //     y: -35,
  //     transform: 'rotate(13deg) scale(0)',
  //   },
  //   animate: {
  //     opacity: isSvgInView ? 1 : 0,
  //     // x: isSvgInView ? 0 : -20,
  //     y: isSvgInView ? 0 : -35,
  //     transform: 'rotate(0deg) scale(1)',
  //     transition: isSvgInView
  //       ? {
  //           duration: 0.6,
  //           delay: 4.5,
  //         }
  //       : {},
  //   },
  // };

  const svgWordsAnimateFrom = { opacity: 0, x: -70 };

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
    <section className={s.section} id="aboutUs">
      <div className={cn(s.sectionTitle, 'T--1-5', 'D--1-11')}>
        <div className={cn(s.dots, 'T--1-2')} ref={dotsRef}>
          <motion.div
            style={{ display: 'inline-block' }}
            initial={dotsAnimateFrom}
            animate={dotsRefInView ? animateTo : dotsAnimateFrom}
            transition={dotsRefInView ? transitionDot1 : {}}
          >
            <img src={dot1} alt="dot" className={s.dot1} />
          </motion.div>
          <motion.div
            style={{ display: 'inline-block' }}
            initial={dotsAnimateFrom}
            animate={dotsRefInView ? animateTo : dotsAnimateFrom}
            transition={dotsRefInView ? transitionDot2 : {}}
          >
            <img src={dot2} alt="dot" className={s.dot2} />
          </motion.div>
          <motion.div
            style={{ display: 'inline-block' }}
            initial={dotsAnimateFrom}
            animate={dotsRefInView ? animateTo : dotsAnimateFrom}
            transition={dotsRefInView ? transitionDot3 : {}}
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
            transition={secMajorRefInView ? transitionSectionNamePart1 : {}}
          >
            About
          </motion.p>
          <motion.p
            className={s.sectionTitle__secoundary}
            ref={secMinorRef}
            initial={wordMinorAnimateFrom}
            animate={secMinorRefInView ? animateTo : wordMinorAnimateFrom}
            transition={secMinorRefInView ? transitionSectionNamePart2 : {}}
          >
            Us
          </motion.p>
        </div>
      </div>

      <div className={cn(s.description, 'T--1-6', 'D--1-7')}>
        <div
          className={cn(s.description__text_wrapper, {
            [s.opened]: showMoreDescr,
          })}
        >
          <p>
            As a purpose-based team, we work on opportunities and challenges
            that transform businesses, governments, and communities. We build
            confidence in what we can achieve together with our clients.
          </p>
          <br />
          <p>
            We recognize the diversity of our client&apos;s needs, are ready to
            solve challenges and bring people, ideas, and analyses together. We
            think deeply and adaptively to find the best possible answers,
            dynamic commercial projects and assisting businesses in their
            growth.
          </p>
        </div>
        <div
          className={s.showMoreBtn}
          onClick={() => setShowMoreDescr(!showMoreDescr)}
        >
          {!showMoreDescr ? 'Read more' : 'Hide'}
        </div>
      </div>

      <motion.svg
        id="outline-logo"
        className={cn(s.animation, 'T--7-12', 'D--2-7')}
        width="565"
        height="348"
        viewBox="0 0 565 348"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        variants={svgVariants}
        initial="initial"
        animate="animate"
      >
        <motion.path
          d="M44.122 68V56.1H53.013V58.31H46.825V60.877H52.248V63.019H46.825V65.79H53.2V68H44.122ZM54.108 68L58.715 62.05L54.108 56.1H57.474L60.279 59.874L63.084 56.1H66.467L61.86 62.05L66.467 68H63.084L60.279 64.226L57.474 68H54.108ZM67.663 68V56.1H76.554V58.31H70.366V60.877H75.789V63.019H70.366V65.79H76.741V68H67.663ZM84.064 68.272C80.494 68.272 78.029 65.739 78.029 62.05C78.029 58.361 80.494 55.828 84.064 55.828C87.192 55.828 89.47 57.698 89.725 60.69H86.852C86.58 59.262 85.713 58.276 84.064 58.276C81.922 58.276 80.868 59.738 80.868 62.05C80.868 64.362 81.922 65.824 84.064 65.824C85.713 65.824 86.58 64.838 86.852 63.41H89.725C89.47 66.402 87.192 68.272 84.064 68.272ZM96.5171 68.272C93.7291 68.272 91.4341 66.98 91.4341 63.648V56.1H94.1541V63.342C94.1541 64.94 94.8341 65.994 96.5171 65.994C98.2001 65.994 98.8971 64.94 98.8971 63.342V56.1H101.6V63.648C101.6 66.98 99.3221 68.272 96.5171 68.272ZM106.866 68V58.31H102.956V56.1H113.496V58.31H109.586V68H106.866ZM114.961 68V56.1H117.681V68H114.961ZM125.552 68.272C121.931 68.272 119.483 65.739 119.483 62.05C119.483 58.361 121.931 55.828 125.552 55.828C129.173 55.828 131.621 58.361 131.621 62.05C131.621 65.739 129.173 68.272 125.552 68.272ZM122.356 62.05C122.356 64.362 123.393 65.824 125.552 65.824C127.711 65.824 128.731 64.362 128.731 62.05C128.731 59.738 127.711 58.276 125.552 58.276C123.393 58.276 122.356 59.738 122.356 62.05ZM133.422 68V56.1H136.176L141.31 64.022L141.242 56.1H143.911V68H141.157L136.023 60.231L136.091 68H133.422Z"
          fill="var(--main-text)"
          initial={svgWordsAnimateFrom}
          animate={Object.assign({}, linesAnimateTo, {
            transition: {
              ...linesAnimateTo.transition,
              delay: 0.5,
            },
          })}
        />
        <motion.path
          d="M0.122 155V143.1H9.013V145.31H2.825V148.081H8.248V150.274H2.825V155H0.122ZM15.9922 155.272C12.3712 155.272 9.92316 152.739 9.92316 149.05C9.92316 145.361 12.3712 142.828 15.9922 142.828C19.6132 142.828 22.0612 145.361 22.0612 149.05C22.0612 152.739 19.6132 155.272 15.9922 155.272ZM12.7962 149.05C12.7962 151.362 13.8332 152.824 15.9922 152.824C18.1512 152.824 19.1712 151.362 19.1712 149.05C19.1712 146.738 18.1512 145.276 15.9922 145.276C13.8332 145.276 12.7962 146.738 12.7962 149.05ZM23.8622 155V143.1H29.4552C32.1072 143.1 33.6542 144.545 33.6542 146.619C33.6542 148.353 32.2262 149.407 30.7982 149.407V149.509C32.4642 149.662 33.1782 150.563 33.3312 152.093C33.5012 153.725 33.6032 154.524 33.7902 155H31.0022C30.8662 154.677 30.6962 154.014 30.5602 152.484C30.4582 151.294 29.9992 150.937 28.8262 150.937H26.5652V155H23.8622ZM26.5652 148.88H28.8092C29.8972 148.88 30.9172 148.302 30.9172 146.959C30.9172 145.735 29.8972 145.242 28.8092 145.242H26.5652V148.88ZM35.7656 155V143.1H39.6246L42.4296 152.45H42.5316L45.3366 143.1H49.2126V155H46.6116L46.6796 146.534H46.5946L43.9256 155H41.0526L38.3836 146.534H38.2986L38.3666 155H35.7656ZM56.435 155.272C53.647 155.272 51.352 153.98 51.352 150.648V143.1H54.072V150.342C54.072 151.94 54.752 152.994 56.435 152.994C58.118 152.994 58.815 151.94 58.815 150.342V143.1H61.518V150.648C61.518 153.98 59.24 155.272 56.435 155.272ZM63.6562 155V143.1H66.3592V152.79H72.2582V155H63.6562ZM72.7631 155L77.4381 143.1H80.7021L85.3771 155H82.4701L81.4671 152.297H76.6561L75.6531 155H72.7631ZM77.3701 150.223H80.7701L79.1211 145.599H79.0191L77.3701 150.223ZM88.7148 155V145.31H84.8048V143.1H95.3448V145.31H91.4348V155H88.7148ZM96.8095 155V143.1H99.5295V155H96.8095ZM107.4 155.272C103.779 155.272 101.331 152.739 101.331 149.05C101.331 145.361 103.779 142.828 107.4 142.828C111.021 142.828 113.469 145.361 113.469 149.05C113.469 152.739 111.021 155.272 107.4 155.272ZM104.204 149.05C104.204 151.362 105.241 152.824 107.4 152.824C109.559 152.824 110.579 151.362 110.579 149.05C110.579 146.738 109.559 145.276 107.4 145.276C105.241 145.276 104.204 146.738 104.204 149.05ZM115.27 155V143.1H118.024L123.158 151.022L123.09 143.1H125.759V155H123.005L117.871 147.231L117.939 155H115.27ZM135.453 142.675C136.065 142.675 136.586 142.783 137.017 142.998C137.459 143.202 137.799 143.497 138.037 143.882C138.275 144.267 138.394 144.738 138.394 145.293C138.394 146.007 138.162 146.613 137.697 147.112C137.244 147.611 136.666 148.064 135.963 148.472L139.244 151.634C139.539 151.283 139.777 150.88 139.958 150.427C140.151 149.962 140.309 149.464 140.434 148.931H141.947C141.766 149.656 141.539 150.331 141.267 150.954C140.995 151.577 140.644 152.121 140.213 152.586L142.695 155H140.672L139.193 153.572C138.921 153.81 138.638 154.031 138.343 154.235C138.06 154.428 137.748 154.592 137.408 154.728C137.068 154.864 136.7 154.972 136.303 155.051C135.918 155.13 135.487 155.17 135.011 155.17C134.229 155.17 133.549 155.045 132.971 154.796C132.404 154.535 131.962 154.156 131.645 153.657C131.339 153.158 131.186 152.552 131.186 151.838C131.186 151.26 131.288 150.761 131.492 150.342C131.707 149.923 132.013 149.549 132.41 149.22C132.807 148.891 133.271 148.574 133.804 148.268C133.566 147.996 133.334 147.713 133.107 147.418C132.88 147.123 132.693 146.806 132.546 146.466C132.399 146.115 132.325 145.735 132.325 145.327C132.325 144.772 132.45 144.296 132.699 143.899C132.948 143.502 133.305 143.202 133.77 142.998C134.246 142.783 134.807 142.675 135.453 142.675ZM134.705 149.203C134.297 149.441 133.946 149.685 133.651 149.934C133.368 150.172 133.147 150.438 132.988 150.733C132.829 151.028 132.75 151.379 132.75 151.787C132.75 152.41 132.96 152.909 133.379 153.283C133.798 153.657 134.359 153.844 135.062 153.844C135.787 153.844 136.411 153.725 136.932 153.487C137.453 153.249 137.89 152.966 138.241 152.637L134.705 149.203ZM135.402 143.899C134.926 143.899 134.535 144.024 134.229 144.273C133.934 144.522 133.787 144.868 133.787 145.31C133.787 145.718 133.895 146.098 134.11 146.449C134.325 146.789 134.637 147.169 135.045 147.588C135.714 147.203 136.19 146.84 136.473 146.5C136.768 146.149 136.915 145.746 136.915 145.293C136.915 144.885 136.779 144.551 136.507 144.29C136.235 144.029 135.867 143.899 135.402 143.899ZM0.122 175V163.1H5.715C8.367 163.1 9.914 164.545 9.914 166.619C9.914 168.353 8.486 169.407 7.058 169.407V169.509C8.724 169.662 9.438 170.563 9.591 172.093C9.761 173.725 9.863 174.524 10.05 175H7.262C7.126 174.677 6.956 174.014 6.82 172.484C6.718 171.294 6.259 170.937 5.086 170.937H2.825V175H0.122ZM2.825 168.88H5.069C6.157 168.88 7.177 168.302 7.177 166.959C7.177 165.735 6.157 165.242 5.069 165.242H2.825V168.88ZM12.0253 175V163.1H20.9163V165.31H14.7283V167.877H20.1513V170.019H14.7283V172.79H21.1033V175H12.0253ZM31.3333 174.439C30.8233 174.881 29.5993 175.272 28.4603 175.272C24.8393 175.272 22.3913 172.739 22.3913 169.05C22.3913 165.361 24.8393 162.828 28.4603 162.828C32.0813 162.828 34.5293 165.361 34.5293 169.05C34.5293 170.716 33.9003 172.144 33.0333 173.045L35.1583 175.391H32.2343L31.3333 174.439ZM25.2643 169.05C25.2643 171.362 26.3013 172.824 28.4603 172.824C28.8853 172.824 29.3103 172.773 29.6503 172.671L27.2703 170.104H30.1263L31.2483 171.243C31.5203 170.665 31.6393 169.9 31.6393 169.05C31.6393 166.738 30.6193 165.276 28.4603 165.276C26.3013 165.276 25.2643 166.738 25.2643 169.05ZM41.9419 175.272C39.1539 175.272 36.8589 173.98 36.8589 170.648V163.1H39.5789V170.342C39.5789 171.94 40.2589 172.994 41.9419 172.994C43.6249 172.994 44.3219 171.94 44.3219 170.342V163.1H47.0249V170.648C47.0249 173.98 44.7469 175.272 41.9419 175.272ZM49.163 175V163.1H51.883V175H49.163ZM54.1269 175V163.1H63.0179V165.31H56.8299V167.877H62.2529V170.019H56.8299V172.79H63.2049V175H54.1269ZM65.1669 175V163.1H70.7599C73.4119 163.1 74.9589 164.545 74.9589 166.619C74.9589 168.353 73.5309 169.407 72.1029 169.407V169.509C73.7689 169.662 74.4829 170.563 74.6359 172.093C74.8059 173.725 74.9079 174.524 75.0949 175H72.3069C72.1709 174.677 72.0009 174.014 71.8649 172.484C71.7629 171.294 71.3039 170.937 70.1309 170.937H67.8699V175H65.1669ZM67.8699 168.88H70.1139C71.2019 168.88 72.2219 168.302 72.2219 166.959C72.2219 165.735 71.2019 165.242 70.1139 165.242H67.8699V168.88ZM77.0702 175V163.1H80.9292L83.7342 172.45H83.8362L86.6412 163.1H90.5172V175H87.9162L87.9842 166.534H87.8992L85.2302 175H82.3572L79.6882 166.534H79.6032L79.6712 175H77.0702ZM92.7587 175V163.1H101.65V165.31H95.4617V167.877H100.885V170.019H95.4617V172.79H101.837V175H92.7587ZM103.799 175V163.1H106.553L111.687 171.022L111.619 163.1H114.288V175H111.534L106.4 167.231L106.468 175H103.799ZM119.66 175V165.31H115.75V163.1H126.29V165.31H122.38V175H119.66ZM131.822 175.272C128.847 175.272 127.079 173.861 127.079 171.26H130.02C130.054 172.28 130.683 173.147 131.89 173.147C132.978 173.147 133.743 172.688 133.743 171.787C133.743 169.475 127.538 171.09 127.538 166.398C127.538 164.137 129.408 162.828 132.332 162.828C135.222 162.828 136.905 164.222 136.905 166.806H134.049C134.015 165.786 133.403 164.936 132.23 164.936C131.176 164.936 130.394 165.429 130.394 166.279C130.394 168.608 136.701 166.959 136.701 171.668C136.701 173.946 134.831 175.272 131.822 175.272Z"
          fill="var(--main-text)"
          initial={svgWordsAnimateFrom}
          animate={Object.assign({}, linesAnimateTo, {
            transition: {
              ...linesAnimateTo.transition,
              delay: 1.5,
            },
          })}
        />
        <motion.path
          d="M58.122 245V233.1H67.013V235.31H60.825V238.081H66.248V240.274H60.825V245H58.122ZM68.6142 245V233.1H74.2072C76.8592 233.1 78.4062 234.545 78.4062 236.619C78.4062 238.353 76.9782 239.407 75.5502 239.407V239.509C77.2162 239.662 77.9302 240.563 78.0832 242.093C78.2532 243.725 78.3552 244.524 78.5422 245H75.7542C75.6182 244.677 75.4482 244.014 75.3122 242.484C75.2102 241.294 74.7512 240.937 73.5782 240.937H71.3172V245H68.6142ZM71.3172 238.88H73.5612C74.6492 238.88 75.6692 238.302 75.6692 236.959C75.6692 235.735 74.6492 235.242 73.5612 235.242H71.3172V238.88ZM85.2661 245.272C82.4781 245.272 80.1831 243.98 80.1831 240.648V233.1H82.9031V240.342C82.9031 241.94 83.5831 242.994 85.2661 242.994C86.9491 242.994 87.6461 241.94 87.6461 240.342V233.1H90.3491V240.648C90.3491 243.98 88.0711 245.272 85.2661 245.272ZM92.4872 245V233.1H95.2072V245H92.4872ZM100.579 245V235.31H96.6691V233.1H107.209V235.31H103.299V245H100.579ZM108.674 245V233.1H111.394V245H108.674ZM119.265 245.272C115.644 245.272 113.196 242.739 113.196 239.05C113.196 235.361 115.644 232.828 119.265 232.828C122.886 232.828 125.334 235.361 125.334 239.05C125.334 242.739 122.886 245.272 119.265 245.272ZM116.069 239.05C116.069 241.362 117.106 242.824 119.265 242.824C121.424 242.824 122.444 241.362 122.444 239.05C122.444 236.738 121.424 235.276 119.265 235.276C117.106 235.276 116.069 236.738 116.069 239.05ZM127.135 245V233.1H129.889L135.023 241.022L134.955 233.1H137.624V245H134.87L129.736 237.231L129.804 245H127.135Z"
          fill="var(--main-text)"
          initial={svgWordsAnimateFrom}
          animate={Object.assign({}, linesAnimateTo, {
            transition: {
              ...linesAnimateTo.transition,
              delay: 2.5,
            },
          })}
        />
        <motion.path
          d="M54.122 302V290.1H59.358C62.095 290.1 63.863 291.681 63.863 294.18C63.863 296.696 62.095 298.26 59.358 298.26H56.825V302H54.122ZM56.825 296.118H59.069C60.225 296.118 61.075 295.506 61.075 294.18C61.075 292.871 60.225 292.242 59.069 292.242H56.825V296.118ZM65.4941 302V290.1H68.1971V299.79H74.0961V302H65.4941ZM74.601 302L79.276 290.1H82.54L87.215 302H84.308L83.305 299.297H78.494L77.491 302H74.601ZM79.208 297.223H82.608L80.959 292.599H80.857L79.208 297.223ZM88.4706 302V290.1H91.2246L96.3586 298.022L96.2906 290.1H98.9596V302H96.2056L91.0716 294.231L91.1396 302H88.4706ZM101.204 302V290.1H103.958L109.092 298.022L109.024 290.1H111.693V302H108.939L103.805 294.231L103.873 302H101.204ZM113.937 302V290.1H116.657V302H113.937ZM118.901 302V290.1H121.655L126.789 298.022L126.721 290.1H129.39V302H126.636L121.502 294.231L121.57 302H118.901ZM137.211 302.272C133.454 302.272 131.21 299.739 131.21 296.05C131.21 292.361 133.675 289.828 137.245 289.828C140.373 289.828 142.668 291.596 142.906 294.282H140.033C139.778 293.16 138.894 292.276 137.245 292.276C135.103 292.276 134.049 293.738 134.049 296.05C134.049 298.362 135.205 299.824 137.347 299.824C138.945 299.824 140.016 298.94 140.05 297.818H136.718V295.71H142.923C143.28 299.739 141.121 302.272 137.211 302.272Z"
          fill="var(--main-text)"
          initial={svgWordsAnimateFrom}
          animate={Object.assign({}, linesAnimateTo, {
            transition: {
              ...linesAnimateTo.transition,
              delay: 3.5,
            },
          })}
        />
        <motion.path
          d="M 161.5 61.5 L 201.5 61.5"
          fill="none"
          stroke="#ced2e5"
          strokeLinecap="round"
          initial={svgAnimateFrom}
          animate={Object.assign({}, linesAnimateTo, {
            transition: {
              ...linesAnimateTo.transition,
              delay: 0.5,
            },
          })}
        />
        <motion.path
          d="M 156.5 154.5 L 196.5 154.5"
          fill="none"
          stroke="#ced2e5"
          strokeLinecap="round"
          initial={svgAnimateFrom}
          animate={Object.assign({}, linesAnimateTo, {
            transition: {
              ...linesAnimateTo.transition,
              delay: 1.5,
            },
          })}
        />
        <motion.path
          d="M 156.5 238.5 L 196.5 238.5"
          fill="none"
          stroke="#ced2e5"
          strokeLinecap="round"
          initial={svgAnimateFrom}
          animate={Object.assign({}, linesAnimateTo, {
            transition: {
              ...linesAnimateTo.transition,
              delay: 2.5,
            },
          })}
        />
        <motion.path
          d="M 161.5 295.5 L 201.5 295.5"
          fill="none"
          stroke="#ced2e5"
          strokeLinecap="round"
          initial={svgAnimateFrom}
          animate={Object.assign({}, linesAnimateTo, {
            transition: {
              ...linesAnimateTo.transition,
              delay: 3.5,
            },
          })}
        />
        <motion.path
          d="M371.209 1C321.176 1 276.679 24.7066 248.339 61.5L510.073 88C484.899 36.4818 432.42 1 371.209 1Z"
          fill="var(--logo)"
          stroke="var(--logo)"
          variants={firstCircleElem}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M248.5 61.5L510 88L510.5 89L217 155C217 107 238.5 75 248.5 61.5Z"
          fill="var(--logo)"
          stroke="var(--logo)"
          variants={secondCircleElem}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M217 155L510.5 89L511 90.5L241.5 238.5C220.7 206.9 216.333 169.833 217 155Z"
          fill="var(--logo)"
          stroke="var(--logo)"
          variants={thirdCircleElem}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M241.5 238.5L511 90.5L512 92.5L308.5 296C270.5 278 253.5 256 241.5 238.5Z"
          fill="var(--logo)"
          stroke="var(--logo)"
          variants={fourCircleElem}
          initial="initial"
          animate="animate"
        />
        <path
          d="M321.153 304.36C334.47 308.036 348.504 310 363 310C449.156 310 519 240.604 519 155C519 133.779 514.708 113.555 506.939 95.1363L321.153 304.36Z"
          fill="transparent"
        />
        <path
          d="M 563.085 41.211 L 292.035 346.915"
          stroke="var(--logo)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="371"
          cy="155"
          r="154.5"
          stroke="var(--logo)"
          strokeWidth="2"
        />
      </motion.svg>

      <div
        className={cn(
          s.enterpriseDev,
          s.corporateEstablishment,
          'T--1-4',
          'D--17-19'
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
          Setting up a company in the United Arab Emirates doesn’t have to be
          complicated. We are ready to guide you through every step of the
          process, from deciding the ideal business structure to obtaining the
          necessary registrations and approvals. We cover an exhaustive list of
          services to guarantee a seamless registration process from l advice on
          deciding the most suitable business structure all the way to
          submission of necessary financial statements yearly.
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
          'D--20-21'
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
          deals with HR, financial and legal issues.
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
          'D--22-23'
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
