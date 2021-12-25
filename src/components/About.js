import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

library.add(faCode)

export default function About() {
  return (
    <section className="aboutBox">
      <div className="container">
        <div className="intro">
          <FontAwesomeIcon icon={faCode} color="#C2EB37"/>
          <h1>  Hi, I'm Melissa</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          Laborum, voluptas natus?</p>
        </div>
          <img 
          className="codingsvg"
          src="./Devices-bro.svg"
          alt="react logo" />
        </div>
    </section>
  )
}