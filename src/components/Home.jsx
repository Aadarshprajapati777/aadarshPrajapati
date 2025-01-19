import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Stats from "./Stats";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import EducationExperience from "./Education";

const Home = () => {
  return (
    <div className="App bg-gray-950 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Portfolio />
        <EducationExperience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
