import React, { useState, useEffect } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const { t } = useTranslation('common');

  useEffect(() => {
    // get projects based on item
    if (item.name === "all" || item.name === "tous") {
      setProjects(projectsData);
    }
    else if (item.name === "sae") {
      const newProjects = projectsData.filter((project) => {
        return project.category === "SAE";
      });
      setProjects(newProjects); 
    }
    else if (item.name === "web app" || item.name === "application web") {
      const newProjectsWeb = projectsData.filter((project) => {
        return project.category === "Web App";
      });
      setProjects(newProjectsWeb); 
    }
    else if (item.name === "mobile app" || item.name === "application mobile") {
      const newProjectsMobile = projectsData.filter((project) => {
        return project.category === "Mobile App";
      });
      setProjects(newProjectsMobile); 
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {t(`projects.filters.${item.name}`)}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

