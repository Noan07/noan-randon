import React from "react";
import Social from "./Social";
import { TypeAnimation } from "react-type-animation";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Noan Randon
      </h1>
      <h3 className="home__subtitle">
        <TypeAnimation
                sequence={[
                  "Computer Student",
                  2000,
                  "Web Developer",
                  2000,
                  "Mobile Developer",
                  2000,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              /></h3>
      <p className="home__description">
        I'm developer based in Clermont-Ferrand, and I'm very passionate and
        dedicated to my work.
      </p>

      <a href="#portfolio" className="button button--flex">
        Projects
        <svg 
          class="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
              <path d="M2.99902 3V16.2C2.99902 17.8802 2.99902 18.7202 3.326 19.362C3.61362 19.9265 4.07257 20.3854 4.63705 20.673C5.27879 21 6.11887 21 7.79902 21H20.999M19.9998 15H15.9998M12.9998 7.00002H6.99978M17.9998 11H8.99978" stroke="var(--container-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
            </g>
        </svg>
      </a>
    </div>
  );
};

export default Data;
