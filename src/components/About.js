import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";

library.add(faCode)

export default function About() {
  return (
    <section id="about" className="aboutBox">
      <div className="aboutcontainer">
        <div className="intro">
          <FontAwesomeIcon icon={faCode}/>
          <h1>  Hi, I'm Melissa</h1>
          <p>I am a Front-End Developer for Web and Mobile Applications.</p>
          <div className="btnGrp">
            <Button inline-flex href="#contact">Contact Me!</Button>
            <Button inline-flex href="#projects">My Projects</Button>
          </div>
        </div>
          <img 
          className="codingsvg"
          src="./code-review-animate.svg"
          alt="react logo" />
        </div>
    </section>
  )
}