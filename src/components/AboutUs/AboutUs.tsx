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

  const maskVariants: Variants = {
    initial: {},
    animate: {
      y: isSvgInView ? ['0%', '18%', '37%', '57%', '74%', '100%'] : '0%',
      transition: {
        duration: 10,
        times: [0, 0.2, 0.4, 0.6, 0.75, 1],
        ease: 'easeOut',
      },
    },
  };

  const svgAnimateFrom = { opacity: 0, x: -40 };
  const linesAnimateTo = {
    opacity: isSvgInView ? 1 : 0,
    x: isSvgInView ? 0 : -40,
    transition: {
      duration: 0.3,
      fill: 'freeze',
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
        width="551"
        height="348"
        className={cn(s.animation, 'T--7-12', 'D--2-7')}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 551 348"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        ref={svgRef}
        variants={svgVariants}
        initial="initial"
        animate="animate"
      >
        <motion.path
          id="outline-logo-u-execution"
          d="M40.122,70h9.078v-2.21h-6.375v-2.771h5.423v-2.142h-5.423v-2.567h6.188v-2.21h-8.891v11.9Zm9.986,0h3.366l2.805-3.774L59.084,70h3.383L57.86,64.05l4.607-5.95h-3.383l-2.805,3.774L53.474,58.1h-3.366l4.607,5.95L50.108,70Zm13.555,0h9.078v-2.21h-6.375v-2.771h5.423v-2.142h-5.423v-2.567h6.188v-2.21h-8.891v11.9Zm16.384.272c3.128,0,5.406-1.87,5.661-4.862h-2.873c-.272,1.428-1.139,2.414-2.788,2.414-2.142,0-3.196-1.462-3.196-3.774s1.054-3.774,3.196-3.774c1.649,0,2.516.986,2.788,2.414h2.873c-.255-2.992-2.533-4.862-5.661-4.862-3.57,0-6.035,2.533-6.035,6.222s2.465,6.222,6.035,6.222Zm12.4369,0c2.805,0,5.083-1.292,5.083-4.624v-7.548h-2.703v7.242c0,1.598-.697,2.652-2.38,2.652s-2.363-1.054-2.363-2.652v-7.242h-2.72v7.548c0,3.332,2.295,4.624,5.083,4.624ZM102.833,70h2.72v-9.69h3.91v-2.21h-10.54v2.21h3.91v9.69Zm8.095,0h2.72v-11.9h-2.72v11.9Zm10.676.272c3.621,0,6.154-2.533,6.154-6.222s-2.533-6.222-6.154-6.222-6.154,2.533-6.154,6.222s2.533,6.222,6.154,6.222Zm-3.281-6.222c0-2.312,1.122-3.774,3.281-3.774s3.264,1.462,3.264,3.774-1.105,3.774-3.264,3.774-3.281-1.462-3.281-3.774ZM129.555,70h2.669l-.068-7.769L137.29,70h2.754v-11.9h-2.669l.068,7.922-5.134-7.922h-2.754v11.9Z"
          fill="var(--main-text)"
          initial={svgWordsAnimateFrom}
          animate={Object.assign({}, linesAnimateTo, {
            transition: {
              ...linesAnimateTo.transition,
              delay: 1.7,
            },
          })}
        />
        <motion.path
          id="outline-logo-u-formulationrequirments"
          d="M0.122,125h2.703v-4.726h5.423v-2.193h-5.423v-2.771h6.188v-2.21h-8.891v11.9Zm15.9552.272c3.621,0,6.154-2.533,6.154-6.222s-2.533-6.222-6.154-6.222-6.15404,2.533-6.15404,6.222s2.53304,6.222,6.15404,6.222Zm-3.281-6.222c0-2.312,1.122-3.774,3.281-3.774s3.264,1.462,3.264,3.774-1.105,3.774-3.264,3.774-3.281-1.462-3.281-3.774ZM24.0282,125h2.7031v-4.063h2.261c1.173,0,1.632.357,1.734,1.547.136,1.53.306,2.193.442,2.516h2.788c-.187-.476-.289-1.275-.459-2.907-.153-1.53-.867-2.431-2.533-2.584v-.102c1.428,0,2.856-1.088,2.856-2.822c0-2.074-1.513-3.485-4.165-3.485h-5.6271v11.9Zm2.7031-6.12v-3.638h2.244c1.088,0,2.108.493,2.108,1.717c0,1.343-1.02,1.921-2.108,1.921h-2.244ZM35.9316,125h2.601l-.068-8.466h.085L41.2186,125h2.873l2.669-8.466h.085L46.7776,125h2.601v-11.9h-3.876l-2.805,9.35h-.102l-2.805-9.35h-3.859v11.9Zm20.6694.272c2.805,0,5.083-1.292,5.083-4.624v-7.548h-2.703v7.242c0,1.598-.697,2.652-2.38,2.652s-2.363-1.054-2.363-2.652v-7.242h-2.72v7.548c0,3.332,2.295,4.624,5.083,4.624ZM63.8222,125h8.602v-2.21h-5.899v-9.69h-2.703v11.9Zm9.1069,0h2.89l1.003-2.703h4.811L82.6361,125h2.907l-4.675-11.9h-3.264L72.9291,125Zm4.607-4.777l1.649-4.624h.102l1.649,4.624h-3.4ZM88.8809,125h2.72v-9.69h3.91v-2.21h-10.54v2.21h3.91v9.69Zm8.0946,0h2.72v-11.9h-2.72v11.9Zm10.6755.272c3.621,0,6.154-2.533,6.154-6.222s-2.533-6.222-6.154-6.222-6.154,2.533-6.154,6.222s2.533,6.222,6.154,6.222Zm-3.281-6.222c0-2.312,1.122-3.774,3.281-3.774s3.264,1.462,3.264,3.774-1.105,3.774-3.264,3.774-3.281-1.462-3.281-3.774ZM115.602,125h2.669l-.068-7.769L123.337,125h2.754v-11.9h-2.669l.068,7.922-5.134-7.922h-2.754v11.9Zm19.367.238c1.53,0,2.686-.51,3.621-1.445.918,1.02,1.411,1.207,2.567,1.207h.306v-.952h-.238c-.731,0-1.122-.153-1.938-1.037.68-1.02,1.122-2.363,1.224-4.131h-1.071c-.085,1.36-.391,2.533-.901,3.4l-3.179-3.281c1.598-.833,2.958-1.734,2.958-3.502c0-1.377-1.139-2.635-3.077-2.635-1.819,0-3.179,1.207-3.179,2.856c0,1.207.85,2.159,1.785,3.145-1.377.765-2.584,1.649-2.584,3.298c0,1.972,1.445,3.077,3.706,3.077Zm-2.567-3.162c0-1.241.952-1.955,2.023-2.601l3.485,3.621c-.714.748-1.547,1.207-2.805,1.207-1.615,0-2.703-.935-2.703-2.227Zm.748-6.392c0-1.088.833-1.938,2.074-1.938c1.258,0,2.04.714,2.04,1.921c0,1.275-1.122,2.006-2.482,2.703-.969-1.02-1.632-1.785-1.632-2.686ZM0.122,151h2.703v-4.063h2.261c1.173,0,1.632.357,1.734,1.547.136,1.53.306,2.193.442,2.516h2.788c-.187-.476-.289-1.275-.459-2.907-.153-1.53-.867-2.431-2.533-2.584v-.102c1.428,0,2.856-1.088,2.856-2.822c0-2.074-1.513-3.485-4.165-3.485h-5.627v11.9Zm2.703-6.12v-3.638h2.244c1.088,0,2.108.493,2.108,1.717c0,1.343-1.02,1.921-2.108,1.921h-2.244ZM12.0253,151h9.078v-2.21h-6.375v-2.771h5.423v-2.142h-5.423v-2.567h6.188v-2.21h-8.891v11.9Zm19.308-.561l.901.952h2.924l-2.125-2.346c.867-.901,1.496-2.329,1.496-3.995c0-3.689-2.448-6.222-6.069-6.222s-6.069,2.533-6.069,6.222s2.448,6.222,6.069,6.222c1.139,0,2.363-.391,2.873-.833Zm-6.069-5.389c0-2.312,1.037-3.774,3.196-3.774s3.179,1.462,3.179,3.774c0,.85-.119,1.615-.391,2.193l-1.122-1.139h-2.856l2.38,2.567c-.34.102-.765.153-1.19.153-2.159,0-3.196-1.462-3.196-3.774Zm16.6776,6.222c2.805,0,5.083-1.292,5.083-4.624v-7.548h-2.703v7.242c0,1.598-.697,2.652-2.38,2.652s-2.363-1.054-2.363-2.652v-7.242h-2.72v7.548c0,3.332,2.295,4.624,5.083,4.624ZM49.163,151h2.72v-11.9h-2.72v11.9Zm4.9639,0h9.078v-2.21h-6.375v-2.771h5.423v-2.142h-5.423v-2.567h6.188v-2.21h-8.891v11.9Zm11.04,0h2.703v-4.063h2.261c1.173,0,1.632.357,1.734,1.547.136,1.53.306,2.193.442,2.516h2.788c-.187-.476-.289-1.275-.459-2.907-.153-1.53-.867-2.431-2.533-2.584v-.102c1.428,0,2.856-1.088,2.856-2.822c0-2.074-1.513-3.485-4.165-3.485h-5.627v11.9Zm2.703-6.12v-3.638h2.244c1.088,0,2.108.493,2.108,1.717c0,1.343-1.02,1.921-2.108,1.921h-2.244ZM77.0702,151h2.601l-.068-8.466h.085L82.3572,151h2.873l2.669-8.466h.085L87.9162,151h2.601v-11.9h-3.876l-2.805,9.35h-.102l-2.805-9.35h-3.859v11.9Zm15.6885,0h9.0783v-2.21h-6.3753v-2.771h5.4233v-2.142h-5.4233v-2.567h6.1883v-2.21h-8.8913v11.9Zm11.0403,0h2.669l-.068-7.769L111.534,151h2.754v-11.9h-2.669l.068,7.922-5.134-7.922h-2.754v11.9Zm15.861,0h2.72v-9.69h3.91v-2.21h-10.54v2.21h3.91v9.69Zm12.162.272c3.009,0,4.879-1.326,4.879-3.604c0-4.709-6.307-3.06-6.307-5.389c0-.85.782-1.343,1.836-1.343c1.173,0,1.785.85,1.819,1.87h2.856c0-2.584-1.683-3.978-4.573-3.978-2.924,0-4.794,1.309-4.794,3.57c0,4.692,6.205,3.077,6.205,5.389c0,.901-.765,1.36-1.853,1.36-1.207,0-1.836-.867-1.87-1.887h-2.941c0,2.601,1.768,4.012,4.743,4.012Z"
          fill="var(--main-text)"
          initial={svgWordsAnimateFrom}
          animate={Object.assign({}, linesAnimateTo, {
            transition: {
              ...linesAnimateTo.transition,
              delay: 3.6,
            },
          })}
        />
        <motion.path
          id="outline-logo-u-frution"
          d="M58.122,206h2.703v-4.726h5.423v-2.193h-5.423v-2.771h6.188v-2.21h-8.891v11.9Zm10.4922,0h2.703v-4.063h2.261c1.173,0,1.632.357,1.734,1.547.136,1.53.306,2.193.442,2.516h2.788c-.187-.476-.289-1.275-.459-2.907-.153-1.53-.867-2.431-2.533-2.584v-.102c1.428,0,2.856-1.088,2.856-2.822c0-2.074-1.513-3.485-4.165-3.485h-5.627v11.9Zm2.703-6.12v-3.638h2.244c1.088,0,2.108.493,2.108,1.717c0,1.343-1.02,1.921-2.108,1.921h-2.244Zm13.9489,6.392c2.805,0,5.083-1.292,5.083-4.624v-7.548h-2.703v7.242c0,1.598-.697,2.652-2.38,2.652s-2.363-1.054-2.363-2.652v-7.242h-2.72v7.548c0,3.332,2.295,4.624,5.083,4.624ZM92.4872,206h2.72v-11.9h-2.72v11.9Zm8.0918,0h2.72v-9.69h3.91v-2.21h-10.5399v2.21h3.9099v9.69Zm8.095,0h2.72v-11.9h-2.72v11.9Zm10.676.272c3.621,0,6.154-2.533,6.154-6.222s-2.533-6.222-6.154-6.222-6.154,2.533-6.154,6.222s2.533,6.222,6.154,6.222Zm-3.281-6.222c0-2.312,1.122-3.774,3.281-3.774s3.264,1.462,3.264,3.774-1.105,3.774-3.264,3.774-3.281-1.462-3.281-3.774ZM127.301,206h2.669l-.068-7.769L135.036,206h2.754v-11.9h-2.669l.068,7.922-5.134-7.922h-2.754v11.9Z"
          fill="var(--main-text)"
          initial={svgWordsAnimateFrom}
          animate={Object.assign({}, linesAnimateTo, {
            transition: {
              ...linesAnimateTo.transition,
              delay: 5.7,
            },
          })}
        />
        <motion.path
          id="outline-logo-u-planning"
          d="M58.122,266h2.703v-3.74h2.567c2.737,0,4.471-1.564,4.471-4.08c0-2.499-1.734-4.08-4.471-4.08h-5.27v11.9Zm2.703-5.882v-3.876h2.244c1.156,0,2.006.629,2.006,1.938c0,1.326-.85,1.938-2.006,1.938h-2.244ZM69.4941,266h8.602v-2.21h-5.899v-9.69h-2.703v11.9Zm9.1069,0h2.89l1.003-2.703h4.811L88.308,266h2.907L86.54,254.1h-3.264L78.601,266Zm4.607-4.777l1.649-4.624h.102l1.649,4.624h-3.4ZM92.4706,266h2.669l-.068-7.769L100.206,266h2.754v-11.9h-2.669l.068,7.922-5.1344-7.922h-2.754v11.9Zm12.7334,0h2.669l-.068-7.769L112.939,266h2.754v-11.9h-2.669l.068,7.922-5.134-7.922h-2.754v11.9Zm12.733,0h2.72v-11.9h-2.72v11.9Zm4.964,0h2.669l-.068-7.769L130.636,266h2.754v-11.9h-2.669l.068,7.922-5.134-7.922h-2.754v11.9Zm18.293.272c3.91,0,6.069-2.533,5.712-6.562h-6.205v2.108h3.332c-.034,1.122-1.105,2.006-2.703,2.006-2.142,0-3.298-1.462-3.298-3.774s1.054-3.774,3.196-3.774c1.649,0,2.533.884,2.788,2.006h2.873c-.238-2.686-2.533-4.454-5.661-4.454-3.57,0-6.035,2.533-6.035,6.222s2.244,6.222,6.001,6.222Z"
          fill="var(--main-text)"
          initial={svgWordsAnimateFrom}
          animate={Object.assign({}, linesAnimateTo, {
            transition: {
              ...linesAnimateTo.transition,
              delay: 7.1,
            },
          })}
        />
        <g mask="url(#verticalMask)">
          <motion.path
            className={s.circleToFill}
            id="filledCirclePart"
            style={{ mixBlendMode: 'multiply' }}
            d="M495.89504,94.14496c0,0,0,.00001,0,0ZM296.24316,294.18389c-54.73474-23.15418-93.14812-77.43417-93.14812-140.70415c0-84.3138,68.21744-152.66361,152.36816-152.66361c63.14753,0,117.32248,38.48826,140.43184,93.32883L296.24316,294.18389Z"
            fill="var(--logo)"
            stroke="var(--logo)"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </g>
        <path
          id="outline-logo-u-transparentpart"
          d="M496,94c8,16.5,13,40.118,13,59.5C509,238.276,440.276,307,355.5,307c-20.906,0-41.336-5.431-59.5-13"
          fill="none"
          stroke="var(--logo)"
          strokeWidth="2"
        />
        <motion.path
          id="outline-logo-u-logoline"
          d="M549.085,41.211L278.035,346.915"
          fill="none"
          stroke="var(--logo)"
          strokeWidth="2"
          strokeLinecap="round"
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
              delay: 1.6,
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
              delay: 3.5,
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
              delay: 5.6,
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
              delay: 7,
            },
          })}
        />
        <defs>
          <mask id="verticalMask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="black"
              stroke="var(--logo)"
              strokeWidth="2"
              variants={maskVariants}
              animate="animate"
            />
          </mask>
        </defs>
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
