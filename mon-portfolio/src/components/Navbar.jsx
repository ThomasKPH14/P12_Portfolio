import React from 'react';

import { Link as ScrollLink } from 'react-scroll';

import logo from '../assets/LOGOTK.png';

const Navbar = () => {
  return (
    <nav>
     
      <img src={logo} alt="Logo nom" className="logo" />

      <div className="social-icons">
     
      <a href="https://github.com/ThomasKPH14" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://twitter.com/_TKPH" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
      </div>

   
      <ul>
      
        <li><ScrollLink to="projets" smooth={true} duration={500}>Projets</ScrollLink></li>
       
        <li><ScrollLink to="competences" smooth={true} duration={500}>Compétences</ScrollLink></li>
       
        <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
      </ul>
    </nav>
  );
};


export default Navbar;
