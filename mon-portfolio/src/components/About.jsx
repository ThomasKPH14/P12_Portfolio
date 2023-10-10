import React from 'react';

import portrait from '../assets/About.png';
import formationImg from '../assets/FormationImage.png'; 

function About() {
  return (
    <div>
     
      <div className="about-section">
        <h2>A propos de moi</h2>
       
        <img src={portrait} alt="Portrait" className="portrait"/>
        
        <p className="description">
          Je suis un passionné du codage et du design. Chaque jour, j'apprends et m'améliore pour mieux servir ceux qui cherchent mes services.
          J'aime transformer les idées en projets concrets, et je suis toujours prêt à relever de nouveaux défis.
        </p>
      </div>

     
      <div className="about-section"> 
        <h2>Formation</h2>
        
        <img src={formationImg} alt="formation" className="portrait"/>
       
        <p className="description">
          J'ai suivi une formation intégrateur web chez Openclassrooms en 2023
        </p>
      </div>
    </div>
  );
}


export default About;
