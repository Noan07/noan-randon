// SkillItem.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const SkillItem = ({ skill }) => {
  const [t] = useTranslation('common');
  
  return (
    <div className="skills__item">
      <i className={skill.icon}></i>
      <h3 className="skills__name">{skill.name}</h3>
      {skill.level && <span className="skills__level">{t(`skills.data.${skill.level}`)}</span>}
      {skill.type && <span className="skills__type">{t(`skills.data.${skill.type}`)}</span>}
    </div>
  );
};

export default SkillItem;
