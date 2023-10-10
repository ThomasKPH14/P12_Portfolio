
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';
import About from '../About';
import Contact from '../Contact';
import Project from '../Project';
import Skill from '../Skill';


const Home = () => {
  return (
    <>
      <About />               
      <div id="projets"><Project /></div>   
      <div id="competences"><Skill /></div>  
      <div id="contact"><Contact /></div>    
    </>
  );
};


const AppRouter = () => {
  return (
    <Router>                   
      <Navbar />               
      <Routes>                 
        <Route path="/" element={<Home />} />  
      </Routes>
      <Footer />               
    </Router>
  );
};

export default AppRouter;
