import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./header.css";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);

  /*=============== Change Background Header ===============*/
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = headerRef.current;

  //     if (header) {
  //       if (window.scrollY >= 80) {
  //         header.classList.add("scroll-header");
  //       } else {
  //         header.classList.remove("scroll-header");
  //       }
  //     }
  //   };

  //   // Adding the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); // Empty dependency array ensures this runs once

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [t] = useTranslation('common');

  const handleNavClick = (section) => {
    setActiveNav(section);
    navigate('/containers/noanrandon-portfolio'); // Ensure we navigate to the home page
    setTimeout(() => {
      window.location.hash = section; // Then set the hash for the section
    }, 100); // Delay to allow navigation to home
  };

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Randon
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <button
                onClick={() => handleNavClick("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> {t('header.home')} 
              </button>
            </li>

            <li className="nav__item">
              <button
                onClick={() => handleNavClick("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> {t('header.about')} 
              </button>
            </li>

            <li className="nav__item">
              <button
                onClick={() => handleNavClick("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> {t('header.skills')} 
              </button>
            </li>

            <li className="nav__item">
              <button
                onClick={() => handleNavClick("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> {t('header.projects')} 
              </button>
            </li>

            <li className="nav__item">
              <button
                onClick={() => handleNavClick("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> {t('header.qualification')} 
              </button>
            </li>
            <li>
              <LanguageSelector />
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
