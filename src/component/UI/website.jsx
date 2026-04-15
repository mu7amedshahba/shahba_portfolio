// src/component/UI/Pages/Home.jsx
import React from 'react';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contacts />
    </>
  );
};

export default Home;