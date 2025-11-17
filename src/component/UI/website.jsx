import React from "react";
import Home from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import Services from "./Pages/Services";

const WebSite = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Projects />
      <Contacts />
    </div>
  );
};

export default WebSite;
