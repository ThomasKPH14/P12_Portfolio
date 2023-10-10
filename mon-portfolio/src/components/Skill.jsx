import React from 'react';

import skills from '../app/skills.json';

function Skills() {
  return (
    <div className="skills-container">
      <h2>Compétences</h2> 
   
      {skills.map(skill => (
        <div key={skill.id} className="skill-block">
          
          <i className={skill.icon}></i> 
         
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
}


export default Skills;
