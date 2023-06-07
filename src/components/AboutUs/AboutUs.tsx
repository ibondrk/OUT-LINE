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
    },
    animate: {
      opacity: isSvgInView ? 1 : 0,
      y: isSvgInView ? 0 : -40,
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
    },
    animate: {
      opacity: isSvgInView ? 1 : 0,
      y: isSvgInView ? 0 : -40,
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
    },
    animate: {
      opacity: isSvgInView ? 1 : 0,
      y: isSvgInView ? 0 : -40,
      x: isSvgInView ? 0 : -25,
      transition: isSvgInView
        ? {
            duration: 0.6,
            delay: 3.5,
          }
        : {},
    },
  };

  const lastCircleElem: Variants = {
    initial: {
      opacity: 0,
      x: -20,
      y: -35,
    },
    animate: {
      opacity: isSvgInView ? 1 : 0,
      x: isSvgInView ? 0 : -20,
      y: isSvgInView ? 0 : -35,
      transition: isSvgInView
        ? {
            duration: 0.6,
            delay: 4.5,
          }
        : {},
    },
  };

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
            About
          </motion.p>
          <motion.p
            className={s.sectionTitle__secoundary}
            ref={secMinorRef}
            initial={wordMinorAnimateFrom}
            animate={secMinorRefInView ? animateTo : wordMinorAnimateFrom}
            transition={transitionSectionNamePart2}
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

      <motion.svg
        id="outline-logo"
        className={cn(s.animation, 'T--7-12', 'D--2-7')}
        width="554"
        height="348"
        viewBox="0 0 554 348"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        variants={svgVariants}
        initial="initial"
        animate="animate"
      >
        <motion.path
          d="M40.122 74H49.2V71.79H42.825V69.019H48.248V66.877H42.825V64.31H49.013V62.1H40.122V74ZM50.108 74H53.474L56.279 70.226L59.084 74H62.467L57.86 68.05L62.467 62.1H59.084L56.279 65.874L53.474 62.1H50.108L54.715 68.05L50.108 74ZM63.663 74H72.741V71.79H66.366V69.019H71.789V66.877H66.366V64.31H72.554V62.1H63.663V74ZM80.047 74.272C83.175 74.272 85.453 72.402 85.708 69.41H82.835C82.563 70.838 81.696 71.824 80.047 71.824C77.905 71.824 76.851 70.362 76.851 68.05C76.851 65.738 77.905 64.276 80.047 64.276C81.696 64.276 82.563 65.262 82.835 66.69H85.708C85.453 63.698 83.175 61.828 80.047 61.828C76.477 61.828 74.012 64.361 74.012 68.05C74.012 71.739 76.477 74.272 80.047 74.272ZM92.4839 74.272C95.2889 74.272 97.5669 72.98 97.5669 69.648V62.1H94.8639V69.342C94.8639 70.94 94.1669 71.994 92.4839 71.994C90.8009 71.994 90.1209 70.94 90.1209 69.342V62.1H87.4009V69.648C87.4009 72.98 89.6959 74.272 92.4839 74.272ZM102.833 74H105.553V64.31H109.463V62.1H98.923V64.31H102.833V74ZM110.928 74H113.648V62.1H110.928V74ZM121.604 74.272C125.225 74.272 127.758 71.739 127.758 68.05C127.758 64.361 125.225 61.828 121.604 61.828C117.983 61.828 115.45 64.361 115.45 68.05C115.45 71.739 117.983 74.272 121.604 74.272ZM118.323 68.05C118.323 65.738 119.445 64.276 121.604 64.276C123.763 64.276 124.868 65.738 124.868 68.05C124.868 70.362 123.763 71.824 121.604 71.824C119.445 71.824 118.323 70.362 118.323 68.05ZM129.555 74H132.224L132.156 66.231L137.29 74H140.044V62.1H137.375L137.443 70.022L132.309 62.1H129.555V74Z"
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
          d="M0.122 130H2.825V125.274H8.248V123.081H2.825V120.31H9.013V118.1H0.122V130ZM16.0772 130.272C19.6982 130.272 22.2312 127.739 22.2312 124.05C22.2312 120.361 19.6982 117.828 16.0772 117.828C12.4562 117.828 9.92316 120.361 9.92316 124.05C9.92316 127.739 12.4562 130.272 16.0772 130.272ZM12.7962 124.05C12.7962 121.738 13.9182 120.276 16.0772 120.276C18.2362 120.276 19.3412 121.738 19.3412 124.05C19.3412 126.362 18.2362 127.824 16.0772 127.824C13.9182 127.824 12.7962 126.362 12.7962 124.05ZM24.0282 130H26.7313V125.937H28.9923C30.1653 125.937 30.6243 126.294 30.7263 127.484C30.8623 129.014 31.0323 129.677 31.1683 130H33.9563C33.7693 129.524 33.6673 128.725 33.4973 127.093C33.3443 125.563 32.6303 124.662 30.9643 124.509V124.407C32.3923 124.407 33.8203 123.319 33.8203 121.585C33.8203 119.511 32.3073 118.1 29.6553 118.1H24.0282V130ZM26.7313 123.88V120.242H28.9753C30.0633 120.242 31.0833 120.735 31.0833 121.959C31.0833 123.302 30.0633 123.88 28.9753 123.88H26.7313ZM35.9316 130H38.5326L38.4646 121.534H38.5496L41.2186 130H44.0916L46.7606 121.534H46.8456L46.7776 130H49.3786V118.1H45.5026L42.6976 127.45H42.5956L39.7906 118.1H35.9316V130ZM56.601 130.272C59.406 130.272 61.684 128.98 61.684 125.648V118.1H58.981V125.342C58.981 126.94 58.284 127.994 56.601 127.994C54.918 127.994 54.238 126.94 54.238 125.342V118.1H51.518V125.648C51.518 128.98 53.813 130.272 56.601 130.272ZM63.8222 130H72.4242V127.79H66.5252V118.1H63.8222V130ZM72.9291 130H75.8191L76.8221 127.297H81.6331L82.6361 130H85.5431L80.8681 118.1H77.6041L72.9291 130ZM77.5361 125.223L79.1851 120.599H79.2871L80.9361 125.223H77.5361ZM88.8809 130H91.6009V120.31H95.5109V118.1H84.9709V120.31H88.8809V130ZM96.9755 130H99.6955V118.1H96.9755V130ZM107.651 130.272C111.272 130.272 113.805 127.739 113.805 124.05C113.805 120.361 111.272 117.828 107.651 117.828C104.03 117.828 101.497 120.361 101.497 124.05C101.497 127.739 104.03 130.272 107.651 130.272ZM104.37 124.05C104.37 121.738 105.492 120.276 107.651 120.276C109.81 120.276 110.915 121.738 110.915 124.05C110.915 126.362 109.81 127.824 107.651 127.824C105.492 127.824 104.37 126.362 104.37 124.05ZM115.602 130H118.271L118.203 122.231L123.337 130H126.091V118.1H123.422L123.49 126.022L118.356 118.1H115.602V130ZM134.969 130.238C136.499 130.238 137.655 129.728 138.59 128.793C139.508 129.813 140.001 130 141.157 130H141.463V129.048H141.225C140.494 129.048 140.103 128.895 139.287 128.011C139.967 126.991 140.409 125.648 140.511 123.88H139.44C139.355 125.24 139.049 126.413 138.539 127.28L135.36 123.999C136.958 123.166 138.318 122.265 138.318 120.497C138.318 119.12 137.179 117.862 135.241 117.862C133.422 117.862 132.062 119.069 132.062 120.718C132.062 121.925 132.912 122.877 133.847 123.863C132.47 124.628 131.263 125.512 131.263 127.161C131.263 129.133 132.708 130.238 134.969 130.238ZM132.402 127.076C132.402 125.835 133.354 125.121 134.425 124.475L137.91 128.096C137.196 128.844 136.363 129.303 135.105 129.303C133.49 129.303 132.402 128.368 132.402 127.076ZM133.15 120.684C133.15 119.596 133.983 118.746 135.224 118.746C136.482 118.746 137.264 119.46 137.264 120.667C137.264 121.942 136.142 122.673 134.782 123.37C133.813 122.35 133.15 121.585 133.15 120.684ZM0.122 156H2.825V151.937H5.086C6.259 151.937 6.718 152.294 6.82 153.484C6.956 155.014 7.126 155.677 7.262 156H10.05C9.863 155.524 9.761 154.725 9.591 153.093C9.438 151.563 8.724 150.662 7.058 150.509V150.407C8.486 150.407 9.914 149.319 9.914 147.585C9.914 145.511 8.401 144.1 5.749 144.1H0.122V156ZM2.825 149.88V146.242H5.069C6.157 146.242 7.177 146.735 7.177 147.959C7.177 149.302 6.157 149.88 5.069 149.88H2.825ZM12.0253 156H21.1033V153.79H14.7283V151.019H20.1513V148.877H14.7283V146.31H20.9163V144.1H12.0253V156ZM31.3333 155.439L32.2343 156.391H35.1583L33.0333 154.045C33.9003 153.144 34.5293 151.716 34.5293 150.05C34.5293 146.361 32.0813 143.828 28.4603 143.828C24.8393 143.828 22.3913 146.361 22.3913 150.05C22.3913 153.739 24.8393 156.272 28.4603 156.272C29.5993 156.272 30.8233 155.881 31.3333 155.439ZM25.2643 150.05C25.2643 147.738 26.3013 146.276 28.4603 146.276C30.6193 146.276 31.6393 147.738 31.6393 150.05C31.6393 150.9 31.5203 151.665 31.2483 152.243L30.1263 151.104H27.2703L29.6503 153.671C29.3103 153.773 28.8853 153.824 28.4603 153.824C26.3013 153.824 25.2643 152.362 25.2643 150.05ZM41.9419 156.272C44.7469 156.272 47.0249 154.98 47.0249 151.648V144.1H44.3219V151.342C44.3219 152.94 43.6249 153.994 41.9419 153.994C40.2589 153.994 39.5789 152.94 39.5789 151.342V144.1H36.8589V151.648C36.8589 154.98 39.1539 156.272 41.9419 156.272ZM49.163 156H51.883V144.1H49.163V156ZM54.1269 156H63.2049V153.79H56.8299V151.019H62.2529V148.877H56.8299V146.31H63.0179V144.1H54.1269V156ZM65.1669 156H67.8699V151.937H70.1309C71.3039 151.937 71.7629 152.294 71.8649 153.484C72.0009 155.014 72.1709 155.677 72.3069 156H75.0949C74.9079 155.524 74.8059 154.725 74.6359 153.093C74.4829 151.563 73.7689 150.662 72.1029 150.509V150.407C73.5309 150.407 74.9589 149.319 74.9589 147.585C74.9589 145.511 73.4459 144.1 70.7939 144.1H65.1669V156ZM67.8699 149.88V146.242H70.1139C71.2019 146.242 72.2219 146.735 72.2219 147.959C72.2219 149.302 71.2019 149.88 70.1139 149.88H67.8699ZM77.0702 156H79.6712L79.6032 147.534H79.6882L82.3572 156H85.2302L87.8992 147.534H87.9842L87.9162 156H90.5172V144.1H86.6412L83.8362 153.45H83.7342L80.9292 144.1H77.0702V156ZM92.7587 156H101.837V153.79H95.4617V151.019H100.885V148.877H95.4617V146.31H101.65V144.1H92.7587V156ZM103.799 156H106.468L106.4 148.231L111.534 156H114.288V144.1H111.619L111.687 152.022L106.553 144.1H103.799V156ZM119.66 156H122.38V146.31H126.29V144.1H115.75V146.31H119.66V156ZM131.822 156.272C134.831 156.272 136.701 154.946 136.701 152.668C136.701 147.959 130.394 149.608 130.394 147.279C130.394 146.429 131.176 145.936 132.23 145.936C133.403 145.936 134.015 146.786 134.049 147.806H136.905C136.905 145.222 135.222 143.828 132.332 143.828C129.408 143.828 127.538 145.137 127.538 147.398C127.538 152.09 133.743 150.475 133.743 152.787C133.743 153.688 132.978 154.147 131.89 154.147C130.683 154.147 130.054 153.28 130.02 152.26H127.079C127.079 154.861 128.847 156.272 131.822 156.272Z"
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
          d="M58.122 206H60.825V201.274H66.248V199.081H60.825V196.31H67.013V194.1H58.122V206ZM68.6142 206H71.3172V201.937H73.5782C74.7512 201.937 75.2102 202.294 75.3122 203.484C75.4482 205.014 75.6182 205.677 75.7542 206H78.5422C78.3552 205.524 78.2532 204.725 78.0832 203.093C77.9302 201.563 77.2162 200.662 75.5502 200.509V200.407C76.9782 200.407 78.4062 199.319 78.4062 197.585C78.4062 195.511 76.8932 194.1 74.2412 194.1H68.6142V206ZM71.3172 199.88V196.242H73.5612C74.6492 196.242 75.6692 196.735 75.6692 197.959C75.6692 199.302 74.6492 199.88 73.5612 199.88H71.3172ZM85.2661 206.272C88.0711 206.272 90.3491 204.98 90.3491 201.648V194.1H87.6461V201.342C87.6461 202.94 86.9491 203.994 85.2661 203.994C83.5831 203.994 82.9031 202.94 82.9031 201.342V194.1H80.1831V201.648C80.1831 204.98 82.4781 206.272 85.2661 206.272ZM92.4872 206H95.2072V194.1H92.4872V206ZM100.579 206H103.299V196.31H107.209V194.1H96.6691V196.31H100.579V206ZM108.674 206H111.394V194.1H108.674V206ZM119.35 206.272C122.971 206.272 125.504 203.739 125.504 200.05C125.504 196.361 122.971 193.828 119.35 193.828C115.729 193.828 113.196 196.361 113.196 200.05C113.196 203.739 115.729 206.272 119.35 206.272ZM116.069 200.05C116.069 197.738 117.191 196.276 119.35 196.276C121.509 196.276 122.614 197.738 122.614 200.05C122.614 202.362 121.509 203.824 119.35 203.824C117.191 203.824 116.069 202.362 116.069 200.05ZM127.301 206H129.97L129.902 198.231L135.036 206H137.79V194.1H135.121L135.189 202.022L130.055 194.1H127.301V206Z"
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
          d="M50.122 264H52.825V260.26H55.392C58.129 260.26 59.863 258.696 59.863 256.18C59.863 253.681 58.129 252.1 55.392 252.1H50.122V264ZM52.825 258.118V254.242H55.069C56.225 254.242 57.075 254.871 57.075 256.18C57.075 257.506 56.225 258.118 55.069 258.118H52.825ZM61.4941 264H70.0961V261.79H64.1971V252.1H61.4941V264ZM70.601 264H73.491L74.494 261.297H79.305L80.308 264H83.215L78.54 252.1H75.276L70.601 264ZM75.208 259.223L76.857 254.599H76.959L78.608 259.223H75.208ZM84.4706 264H87.1396L87.0716 256.231L92.2056 264H94.9596V252.1H92.2906L92.3586 260.022L87.2246 252.1H84.4706V264ZM97.204 264H99.873L99.805 256.231L104.939 264H107.693V252.1H105.024L105.092 260.022L99.958 252.1H97.204V264ZM109.937 264H112.657V252.1H109.937V264ZM114.901 264H117.57L117.502 256.231L122.636 264H125.39V252.1H122.721L122.789 260.022L117.655 252.1H114.901V264ZM133.194 264.272C137.104 264.272 139.263 261.739 138.906 257.71H132.701V259.818H136.033C135.999 260.94 134.928 261.824 133.33 261.824C131.188 261.824 130.032 260.362 130.032 258.05C130.032 255.738 131.086 254.276 133.228 254.276C134.877 254.276 135.761 255.16 136.016 256.282H138.889C138.651 253.596 136.356 251.828 133.228 251.828C129.658 251.828 127.193 254.361 127.193 258.05C127.193 261.739 129.437 264.272 133.194 264.272Z"
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
          d="M158.5,64.5L198.5,64.5"
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
          d="M153.5,133.5L193.5,133.5"
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
          d="M153.5,200.5L193.5,200.5"
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
          d="M167.5,259.5L207.5,259.5"
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M507.569 96.8725L234.19 69.1038C262.086 27.4344 309.589 0 363.5 0C428.639 0 484.423 40.052 507.569 96.8725Z"
          fill="var(--logo)"
          variants={firstCircleElem}
          initial="initial"
          animate="animate"
        />
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M508.094 98.1791L208.738 140.251C211.363 113.28 220.879 88.3267 235.502 67.1751L507.094 95.7205C507.435 96.5366 507.768 97.3561 508.094 98.1791Z"
          fill="var(--logo)"
          variants={secondCircleElem}
          initial="initial"
          animate="animate"
        />
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M507.336 96.3036L216.998 207.754C211.172 191.423 208 173.832 208 155.5C208 149.631 208.325 143.837 208.958 138.137L507.297 96.2083C507.31 96.24 507.323 96.2718 507.336 96.3036Z"
          fill="var(--logo)"
          variants={thirdCircleElem}
          initial="initial"
          animate="animate"
        />
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M507.618 96.9943L247.772 259.364C234.077 244.116 223.353 226.145 216.509 206.364L506.768 94.9439C507.056 95.6249 507.34 96.3084 507.618 96.9943Z"
          fill="var(--logo)"
          variants={fourCircleElem}
          initial="initial"
          animate="animate"
        />
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M507.207 96.975L322.393 304.389C292.726 296.195 266.641 279.455 246.992 257.005L506.732 95.8513C506.892 96.2251 507.05 96.5997 507.207 96.975Z"
          fill="var(--logo)"
          variants={lastCircleElem}
          initial="initial"
          animate="animate"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M321.153 304.36C334.47 308.036 348.504 310 363 310C449.156 310 519 240.604 519 155C519 133.779 514.708 113.555 506.939 95.1363L321.153 304.36Z"
          fill="transparent"
        />
        <path
          d="M284 347L553 44"
          stroke="var(--logo)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="363.5"
          cy="155.5"
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
