import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from './Data';
import './workDetails.css';
import SkillItem from '../skills/SkillItem';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const WorkDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id));
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="project-details section">
        <div className="project-details__container container grid">
            <div className="project-details__header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <i className="fas fa-arrow-left"></i>   Back
                </button>
                <h2 className="section__title">{project.title}</h2>
                <div className="icons-container">
                    {project.github && (
                    <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer" className="details__icon">
                        <i className="fab fa-github"></i>
                    </a>
                    )}
                    {project.gitlab && (
                    <a href={`https://${project.gitlab}`} target="_blank" rel="noopener noreferrer" className="details__icon">
                        <i className="fab fa-gitlab"></i>
                    </a>
                    )}
                    {project.url && (
                    <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="details__icon">
                        <i className="fas fa-link"></i>
                    </a>
                    )}
                </div>
            </div>
            
            <div className="project-details__content-container">
                <div className="project-details__content project-details__content__dark">
                    <div className="project-details__presentation">
                        <img src={project.detail}/>
                    </div>
                </div>
                <div className="project-details__content">
                    <div className="   v">
                        <h3 className="project-details__content-title">Presentation</h3>
                        <div className="project-details__info-container">
                            <div className="project-details__info">
                                <i className="fas fa-clock project-details__info-icon"></i> 
                                <p>{project.duration}</p>
                            </div>
                            <div className="project-details__info">
                                <i className="fas fa-users project-details__info-icon"></i>
                                <p>{project.teamSize}</p>
                            </div>
                        </div>
                            {project.description.split('\n').map((line, index) => (
                                <p className="justified-text" key={index}>{line}</p>
                            ))}                            
                    </div>
                </div>
            </div>

            <div className="project-details__content project-details__content__dark">
                <div className="project-details__technologies">
                    <h3 className="project-details__title__dark">Technologies Used</h3>
                    <div className="skills__container container grid">
                        {project.technologies.map((tech, index) => (
                            <SkillItem key={index} skill={tech} />
                        ))}
                    </div>
                </div>
            </div>
            {project.images && project.images.length > 0 && (
                <div className="project-details__content-images">
                    <div className="project-details__images">
                    <h3>Project Images</h3>
                    {project.images.map((image, index) => (
                        <img
                        key={index}
                        src={image}
                        alt={`${project.name} screenshot ${index + 1}`}
                        />
                    ))}
                    </div>
                </div>
            )}
        </div>
    </section>
  );
};

export default WorkDetails;
