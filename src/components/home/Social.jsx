import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/noan-randon-b84222252/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://gitlab.com/Noan07"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-gitlab"></i>
      </a>

      <a
        href="https://www.goodreads.com/user/show/179487982-noan"
        className="home__social-icon"
        target="_blank"
      >
        <i className="fab fa-goodreads-g"></i>
      </a>
    </div>
  );
};

export default Social;
