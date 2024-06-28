import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {useTranslation} from "react-i18next";

const Info = () => {
  const [refProjects, inViewProjects] = useInView({ threshold: 0.5 });
  const [refCups, inViewCups] = useInView({ threshold: 0.5 });
  const [t] = useTranslation('common');

  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bxs-graduation about__icon"></i>

        <h3 className="about__title">{t('about.info.about-box-1.title')}</h3>
        <span className="about__subtitle">{t('about.info.about-box-1.subtitle')}</span>
      </div>

      <div className="about__box" ref={refProjects}>
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">{t('about.info.about-box-2.title')}</h3>
        <span className="about__subtitle">
          {inViewProjects && <CountUp key={inViewProjects ? 'projects' : ''} end={48} duration={2} />} + {t('about.info.about-box-2.subtitle')}
        </span>
      </div>

      <div className="about__box" ref={refCups}>
        <i className="bx bxs-coffee about__icon"></i>

        <h3 className="about__title">{t('about.info.about-box-3.title')}</h3>
        <span className="about__subtitle">
          {inViewCups && <CountUp key={inViewCups ? 'cups' : ''} end={504} duration={2} />} + {t('about.info.about-box-3.subtitle')}
        </span>
      </div>
    </div>
  );
};

export default Info;
