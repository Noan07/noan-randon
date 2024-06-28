import React, { useState } from "react";
import "./qualification.css";
import England from "../../assets/flags/england.png";
import France from "../../assets/flags/france.png";
import { useTranslation } from "react-i18next";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const [visibleSubmenus, setVisibleSubmenus] = useState({});
  const [t] = useTranslation('common');

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggleSubmenu = (index) => {
    setVisibleSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">{t('qualification.title')}</h2>
      <span className="section__subtitle">{t('qualification.subtitle')}</span>

      <div className="qualification__container container grid">
      <div className="contact__content">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {t('qualification.education.title')}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {t('qualification.experience.title')}
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BUT Informatique</h3>
                <span className="qualification__subtitle">
                  IUT Clermont-Ferrand
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">BAC Spécialité NSI, Mathématiques, Physique-Chimie</h3>
                <span className="qualification__subtitle">
                  Lycée Boissy d'Anglas
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
            </div>

          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{t('qualification.experience.section-1.title')}</h3>
                <div className="qualification__submenu">
                  <span className="qualification__subtitle">
                    Harvest - Aubière
                  </span>
                  <i className={`uil ${visibleSubmenus[1] ? "uil-minus" : "uil-plus"}`} onClick={() => toggleSubmenu(1)}></i>
                </div>
                {visibleSubmenus[1] && (
                  <div className="qualification__details">
                    <span className="qualification__details__description">
                    {t('qualification.experience.section-1.description')}
                    </span>
                  </div>
                )}
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> {t('qualification.experience.section-1.calendar')}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">{t('qualification.experience.section-2.title')}</h3>
                <div className="qualification__submenu">
                  <span className="qualification__subtitle">
                    INRAE - Theix
                  </span>
                  <i className={`uil ${visibleSubmenus[2] ? "uil-minus" : "uil-plus"}`} onClick={() => toggleSubmenu(2)}></i>
                </div>
                {visibleSubmenus[2] && (
                  <div className="qualification__details">
                    <span className="qualification__details__description">
                      {t('qualification.experience.section-2.description')}
                    </span>
                  </div>
                )}
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> {t('qualification.experience.section-2.calendar')}
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{t('qualification.experience.section-3.title')}</h3>
                <div className="qualification__submenu">
                  <span className="qualification__subtitle">
                    ADLIR Conseils - Lyon
                  </span>
                  <i className={`uil ${visibleSubmenus[3] ? "uil-minus" : "uil-plus"}`} onClick={() => toggleSubmenu(3)}></i>
                </div>
                {visibleSubmenus[3] && (
                  <div className="qualification__details">
                    <span className="qualification__details__description">
                      {t('qualification.experience.section-3.description-1')} <br/>
                      {t('qualification.experience.section-3.description-2')}
                    </span>
                  </div>
                )}
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>  {t('qualification.experience.section-3.calendar')}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="contact__content">
          <div className="contact__info">
              <div className="contact__card">
                <i className="uil uil-language contact__card-icon"></i>

                <h3 className="qualification__card-title">{t('qualification.languages.title')}</h3>
                <div className="qualification__card-language">
                  <img src={France} alt='England' width={40}></img>
                  <span>{t('qualification.languages.language-1.name')}</span>
                  <i>{t('qualification.languages.language-1.level')}</i>
                </div>

                <div className="qualification__card-language">
                  <img src={England} alt='England' width={40}></img>
                  <span>{t('qualification.languages.language-2.name')}</span>
                  <i>{t('qualification.languages.language-2.level')}</i>
                </div>
              </div>
            </div>
            </div>
        </div>
    </section>
  );
};

export default Qualification;
