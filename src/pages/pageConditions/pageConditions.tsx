import React from 'react';
import s from './pageConditions.module.scss';

import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import Animation from '../../animations/animationLogic';

export const PageConditions: React.FC = () => {
  const {
    wordMajorAnimateFrom,
    wordMinorAnimateFrom,
    animateTo,
    transitionSectionNamePart1,
    transitionSectionNamePart2,
  } = Animation();
  return (
    <>
      <article className={s.terms_head}>
        <h1 className={s.sectionTitle}>
          <motion.p
            className={s.sectionTitle__main}
            initial={wordMajorAnimateFrom}
            animate={animateTo}
            transition={transitionSectionNamePart1}
          >
            Terms <span>&</span>
          </motion.p>
          <motion.p
            className={s.sectionTitle__secoundary}
            initial={wordMinorAnimateFrom}
            animate={animateTo}
            transition={transitionSectionNamePart2}
          >
            Conditions
          </motion.p>
        </h1>
      </article>
      <section className={s.section}>
        <NavLink to="/" className={s.homeLink}>
          Go to main page
        </NavLink>
        <article className={s.block}>
          <p>
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern OUT-LINE GROUP’s relationship with you in
            relation to this website. The term ’OUT-LINE GROUP’ or ’us’ or ’we’
            refers to the owner of the website whose registered office is Dubai
            Digital Park, Building 2, Dubai, OAE. Our company registration
            number is DSO-FZCO-18707. The term ’you’ refers to the user or
            viewer of our website.
          </p>
        </article>
        <article className={s.block}>
          <p className={s.block__title}>USE OF THE WEBSITE</p>
          <p className={s.block__info}>
            The content of the pages of this website is for your general
            information and use only. OUT-LINE GROUP may update these Conditions
            from time to time, for legal or regulatory reasons, or to allow the
            proper operation of the Website. If you continue to use the Website
            after the date on which the change comes into effect, your use of
            the Website indicates your agreement to be bound by the new
            Conditions.
          </p>
        </article>

        <article className={s.block}>
          <p className={s.block__title}>INTELLECTUAL PROPERTY</p>
          <p className={s.block__info}>
            This website contains material which is owned by or licensed to us.
            This material includes, but is not limited to, the design, layout,
            look, appearance and graphics. Reproduction is prohibited other than
            in accordance with the copyright notice, which forms part of these
            terms and conditions. Your use of any information or materials on
            this website is entirely at your own risk, for which we shall not be
            liable. It shall be your own responsibility to ensure that any
            products, services or information available through this website
            meet your specific requirements.
          </p>
        </article>

        <article className={s.block}>
          <p className={s.block__title}>DISCLAIMER</p>
          <p className={s.block__info}>
            This website also include links to other websites. These links are
            provided for your convenience to provide further information. They
            do not signify that we endorse the website(s). We have no
            responsibility for the content of the linked website(s).
          </p>
        </article>

        <article className={s.block}>
          <p className={s.block__title}>GENERAL</p>
          <p className={s.block__info}>
            Your use of this website and any dispute arising out of such use of
            the website is subject to the laws of the Emirate of Dubai and the
            United Arab Emirates. The Website is owned and operated by OUT-LINE
            GROUP FZCO.
          </p>
        </article>
      </section>
    </>
  );
};
