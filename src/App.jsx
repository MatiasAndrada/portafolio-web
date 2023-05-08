import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Certificate,
  Contact,
  Experience,
  Now,
  //  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Background,
} from "./components";

const App = () => {
  return (
    <BrowserRouter> 
      <Navbar />
      <Hero />
      <Background />
      <About />
      <Certificate />
      <Experience />
      <Now />
      <Tech />
      <Works />

      <Contact />
    </BrowserRouter>
  );
};

export default App;
