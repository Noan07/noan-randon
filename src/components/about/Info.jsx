import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bxs-graduation about__icon"></i>

        <h3 className="about__title">Degree</h3>
        <span className="about__subtitle">BUT Informatique</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48 + Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-coffee about__icon"></i>

        <h3 className="about__title">Coffee</h3>
        <span className="about__subtitle">504 + Cups</span>
      </div>
    </div>
  );
};

export default Info;
