import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import StatDetail from "./components/statDetails"; // Import the detailed stats page
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="App bg-gray-950 text-white min-h-screen">

          <Routes>
            {/* Add routing only for Stats */}
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/stats/:id" element={<StatDetail />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
