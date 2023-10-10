import React from 'react';

import projects from '../app/project.json';

import project1Image from '../assets/Projet1.png';
import project2Image from '../assets/Projet2.png';


const imageMap = {
  project1: project1Image,
  project2: project2Image,
};

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projets</h2>
      <div className="project-blocks-wrapper">
         
          {projects.map(project => (
              <a key={project.id} href={project.link} className="project-block">
                
                  <img src={imageMap[project.image]} alt={project.name} />
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div>
                    <strong>Compétences:</strong>
                    
                    <ul>
                      {project.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
              </a>
          ))}
      </div>
    </div>
  );
}


export default Projects;
