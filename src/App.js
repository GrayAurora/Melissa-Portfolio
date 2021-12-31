import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navbar";
import Skills from "./components/Skills"; 
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import './App.css';

/*reference storyset = <a href="https://storyset.com/web">Web illustrations by Storyset</a> */

export default function App() {
  return (
    <main className="main">
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

