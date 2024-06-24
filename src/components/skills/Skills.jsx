import React from "react";
import { Data } from "./Data";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {Data.map((skill, index) => (
          <div key={index} className="skills__item">
            <i className={skill.icon}></i>
            <h3 className="skills__name">{skill.name}</h3>
            <span className="skills__level">{skill.level}</span>
            <span className="skills__type">{skill.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;



// const Skills = () => {
//   return (
//     <section className="skills section" id="skills">
//       <h2 className="section__title">Skills</h2>
//       <span className="section__subtitle">My technical level</span>

//       <div className="skills__container container grid">
//         <Frontend />
//         <Backend />
//         <Others />
//       </div>
//     </section>
//   );
// };

// export default Skills;
