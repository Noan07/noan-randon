import React, { useState } from "react";
import "./qualification.css";
import England from "../../assets/flags/england.png";
import France from "../../assets/flags/france.png";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const [visibleSubmenus, setVisibleSubmenus] = useState({});

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
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

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
            Education
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
            Experience
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
                <h3 className="qualification__title">Sandwich Course</h3>
                <div className="qualification__submenu">
                  <span className="qualification__subtitle">
                    Harvest - Aubière
                  </span>
                  <i className={`uil ${visibleSubmenus[1] ? "uil-minus" : "uil-plus"}`} onClick={() => toggleSubmenu(1)}></i>
                </div>
                {visibleSubmenus[1] && (
                  <div className="qualification__details">
                    <span className="qualification__details__description">
                      Développement d’une application web permettant de conseiller nos clients sur la gestion du patrimoine. Les technologies utilisées sont les suivantes: Angular (Front), Symfony (API), MariaDB (BDD), docker.
                    </span>
                  </div>
                )}
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2023 - Present
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
                <h3 className="qualification__title">Intership</h3>
                <div className="qualification__submenu">
                  <span className="qualification__subtitle">
                    INRAE - Theix
                  </span>
                  <i className={`uil ${visibleSubmenus[1] ? "uil-minus" : "uil-plus"}`} onClick={() => toggleSubmenu(1)}></i>
                </div>
                {visibleSubmenus[1] && (
                  <div className="qualification__details">
                    <span className="qualification__details__description">
                      Développement et implémentation de modèles de Plan de Gestion de Données dans un Système d’Information (Apache-PHP-Mysql).
                    </span>
                  </div>
                )}
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> April - June 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IT assistant</h3>
                <div className="qualification__submenu">
                  <span className="qualification__subtitle">
                    ADLIR Conseils - Lyon
                  </span>
                  <i className={`uil ${visibleSubmenus[1] ? "uil-minus" : "uil-plus"}`} onClick={() => toggleSubmenu(1)}></i>
                </div>
                {visibleSubmenus[1] && (
                  <div className="qualification__details">
                    <span className="qualification__details__description">
                      Vérification effectuée sur les dossiers des clients, par l'intermédiaire de différents tableaux Excel, un peu de programmation pour automatiser des taches (Python). <br/>
                      Création d’une application web pour regrouper les informations sur les clients, fait en Nextjs.
                    </span>
                  </div>
                )}
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> July - August 2023
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

                <h3 className="qualification__card-title">Languages</h3>
                <div className="qualification__card-language">
                  <img src={France} alt='England' width={40}></img>
                  <span>French</span>
                  <i>Fluent</i>
                </div>

                <div className="qualification__card-language">
                  <img src={England} alt='England' width={40}></img>
                  <span>English</span>
                  <i>Fluent</i>
                </div>
              </div>
            </div>
            </div>
        </div>
    </section>
  );
};

export default Qualification;
