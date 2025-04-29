import React, { useState } from 'react';
import projectsData from './ProjectData';  // Import the project data
import "./Project.css";

export const Project = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [visibleProjects, setVisibleProjects] = useState(projectsData);

    const filterProjects = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setVisibleProjects(projectsData);
        } else {
            setVisibleProjects(projectsData.filter(project => 
                project.category.includes(category)
            ));
        }
    };

    return (
        <section className="project section" id="project">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Knowledge, Growth, Innovation</span>

            <div className="project__filters">
                {['All', 'ML', 'Python', 'JS'].map((category) => (
                    <button
                        key={category}
                        onClick={() => filterProjects(category)}
                        className={`filter__item ${activeCategory === category ? 'active' : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="project__container">
                {visibleProjects.map((project) => (
                    <div className="project__card" key={project.id}>
                        <div className="project__image-wrapper">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="project__img"
                            />
                            <div className="project__overlay">
                                <div className="project__buttons">
                                    <a 
                                        href={project.git} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project__button"
                                    >
                                        <i className="uil uil-github"></i>
                                    </a>
                                    <a 
                                        href={project.web} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project__button"
                                    >
                                        <i className="uil uil-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="project__content">
                            <h3 className="project__title">{project.title}</h3>
                            <div className="project__keys">
                                {project.keys.map((key, index) => (
                                    <span key={index} className="project__key">
                                        {key}
                                    </span>
                                ))}
                            </div>
                            <p className="project__description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};