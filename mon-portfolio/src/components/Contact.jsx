import React from 'react';

import emailIcon from '../assets/mailcontact.png'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
     
      <p>N'hésitez pas à me contacter pour discuter de votre projet.</p>
      
      <a href="mailto:thomas.email@example.com">
        
        <img src={emailIcon} alt="Cliquez pour m'envoyer un email" className="email-icon"/>
      </a>
    </div>
  );
};


export default Contact;
