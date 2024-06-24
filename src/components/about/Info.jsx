import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Info = () => {
  const [refProjects, inViewProjects] = useInView({ threshold: 0.5 });
  const [refCups, inViewCups] = useInView({ threshold: 0.5 });

  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bxs-graduation about__icon"></i>

        <h3 className="about__title">Degree</h3>
        <span className="about__subtitle">BUT Informatique</span>
      </div>

      <div className="about__box" ref={refProjects}>
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">
          {inViewProjects && <CountUp key={inViewProjects ? 'projects' : ''} end={48} duration={2} />} + Projects
        </span>
      </div>

      <div className="about__box" ref={refCups}>
        <i className="bx bxs-coffee about__icon"></i>

        <h3 className="about__title">Coffee</h3>
        <span className="about__subtitle">
          {inViewCups && <CountUp key={inViewCups ? 'cups' : ''} end={504} duration={2} />} + Cups
        </span>
      </div>
    </div>
  );
};

export default Info;
