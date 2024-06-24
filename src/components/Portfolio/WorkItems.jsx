import React from "react";
import "./work.css";

const WorkItems = ({ item }) => {
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
              <i className="fas fa-eye"></i>
            </a>
          )}
        </div>
      </div>
      <h3 className="work__title">{item.title}</h3>
    </div>
  );
};

export default WorkItems;
