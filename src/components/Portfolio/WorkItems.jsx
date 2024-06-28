import React from "react";
import "./work.css";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const WorkItems = ({ item }) => {
  const { t } = useTranslation('common');

  return (
    <div className="work__card">
      <div className="work__img-container">
        <img src={item.image} alt={item.title} className="work__img" />
        <div className="work__overlay">
          {item.github && (
            <a href={`https://${item.github}`} target="_blank" rel="noopener noreferrer" className="work__icon">
              <i className="fab fa-github"></i>
            </a>
          )}
          {item.gitlab && (
            <a href={`https://${item.gitlab}`} target="_blank" rel="noopener noreferrer" className="work__icon">
              <i className="fab fa-gitlab"></i>
            </a>
          )}
          {item.url && (
            <a href={`https://${item.url}`} target="_blank" rel="noopener noreferrer" className="work__icon">
              <i className="fas fa-link"></i>
            </a>
          )}
        </div>
      </div>
      <div className="work__card__footer">
        <h3 className="work__title">{item.title}</h3>
        <Link to={`/containers/noanrandon-portfolio/project/${item.id}`} className="active-work work__item">
          {t(`projects.details`)}
        </Link>
      </div>
    </div>
  );
};

export default WorkItems;
