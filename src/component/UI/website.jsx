/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import Services from "./Pages/Services";
import PowerBIProjects from "./Pages/PowerBIReports";

import "../../index.css";
import Services2 from "./Pages/Services2";

const WebSite = () => {
  return (
    <div>
      <Home />
      <About />
      {/* <Projects /> */}

      {/* <SingleProduct /> */}

      {/* <Services /> */}
      
      <Services2 />
      <Contacts />
    </div>
  );
};

export default WebSite;