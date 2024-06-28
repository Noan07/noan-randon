import React from "react";
import { Data } from "./Data";
import "./skills.css";
import { useTranslation } from "react-i18next";
import SkillItem from "./SkillItem";

const Skills = () => {
  const [t] = useTranslation('common');
  
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t('skills.title')}</h2>
      <span className="section__subtitle">{t('skills.subtitle')}</span>

      <div className="skills__container container grid">
        {Data.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
