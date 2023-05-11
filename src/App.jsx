import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  // About,
  // Certificate,
  // Experience,
  // Now,
  // Feedbacks,
  // Tech,
  // Works,
  Hero,
  Navbar,
  Background,
} from "./components";

const LazyAbout = lazy(() => import("./components/About"));
const LazyCertificate = lazy(() => import("./components/Certificate"));
const LazyExperience = lazy(() => import("./components/Experience"));
const LazyNow = lazy(() => import("./components/Now"));
//const LazyFeedbacks = lazy(() => import("./components/Feedbacks"));
const LazyTech = lazy(() => import("./components/Tech"));
const LazyWorks = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));



const App = () => {
  return (
    <BrowserRouter> 
      <Navbar />
      <Hero />
      <Background />
      <Suspense >
        <LazyAbout />
        <LazyCertificate />
        <LazyExperience />
        <LazyNow />

        <LazyTech />
        <LazyWorks />
      </Suspense>
      <Contact />
    </BrowserRouter>
  );
};

export default App;
