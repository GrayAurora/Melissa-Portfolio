import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCode)


export default function About() {
  return (
    <section id="about" className="aboutBox">
      <div className="aboutcontainer">
        <div className="intro">
          <FontAwesomeIcon icon={faCode}/>
          <h1>  Hi, I'm Melissa</h1>
          <p>
            One evening, many years ago, I was working as the costumed mouse for the pizza restaurant and entertainment center Chuck E. Cheese. As the night came to a close, I saw a mother and daughter in the play area, and for lack of any other duties, I ventured over to engage in small talk. As we chatted the young girl ran off to the playground, leaving the mother and I. At that moment, I felt something tightly grip my chest and then suddenly my feet were no longer touching the floor. The arcade machines become a blur as I flew through the air, only to immediately come back into focus as I'm thrown to the ground. <br/>
             <br/> This woman's husband had drunkenly suplex-slammed me to the late 90's blacklight carpet under the assumption I was flirting with his wife. The action had launched my mouse head off, and I, a confused teenage girl, stared back up at him in shock. "Oh I thought you were a guy" he muttered, and walked off. So that's the story of how I got out of the rodent-themed mascot game and into tech. <br/>
            <br/> My name is Melissa and I'm an aspiring software engineer searching for an opportunity to cultivate my skills in technology and programming. I've spent the past years teaching myself the foundations of different languages and frameworks, attending coding bootcamp, and working on mobile and web-based projects. I enjoy using Figma to plan out and design my screen interfaces to provide further information about app architecture and allow greater control over physical appeal while saving myself time and resources. 
          </p>
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