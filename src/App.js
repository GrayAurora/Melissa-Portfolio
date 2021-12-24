import React from "react";
/* import About from "./components/About";
import Contact from "./components/Contact"; */
import Navigation from "./components/Navbar";
/* import Projects from "./components/Projects"; */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

library.add(faCode)

export default function App() {
  return (
    <main style={{backgroundColor: '#343a40', color: '#ced4da'}}>
      <Navigation />

    </main>
  );
}