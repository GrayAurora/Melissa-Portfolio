import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { Col, Container } from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faEnvelope, faFile )


export default function Footer() {
  return (
    <section>
        <Container className="footerContainer">
          <Col className="footerIcons">
            <a href="https://www.linkedin.com/in/melissa-rodriguez-devs">
              <img 
                height={40}
                width={40}
                style={{marginLeft: '15px'}}
                src="./linkedin-brands.svg"
                alt="linkedin logo" 
              />
            </a>
            <a href="https://www.github.com/GrayAurora">
              <img 
                  height={40}
                  width={40}
                  style={{marginLeft: '10px'}}
                  src= "./github-svgrepo-com.svg"
                  alt="github logo" 
                />
            </a>
            <a href="mailto:melissarodriguez.dev@gmail.com">
              <FontAwesomeIcon
                style={{marginLeft: '10px', color: 'white', height: 42, width: 42}}
                icon={faEnvelope}
              />
            </a>
            <a href="./MelissaRodriguez-Resume.pdf" download="MelissaRodrguez-Resume.pdf">
              <FontAwesomeIcon
                style={{marginLeft: '10px', color: 'white', height: 40, width: 40}}
                icon={faFile}
                title="Download Resume"
              />
            </a>
          </Col>
        <span >
            <FontAwesomeIcon icon={faEnvelope} style={{marginRight: '5px'}}/>
             melissarodriguez.dev@gmail.com
        </span>
          <p>
          SVG Illustrations by <a href="https://storyset.com/">Storyset</a>
          </p>
        </Container>
    </section>
  )
}