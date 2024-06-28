import React from "react";
import "./work.css";
import Works from "./Works";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation('common');

  return (
    <section class="work section" id="portfolio">
      <h2 class="section__title">{t('projects.title')}</h2>
      <span class="section__subtitle">{t('projects.subtitle')}</span>
      <Works />
    </section>
  );
};

export default Work;
