import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Container } from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faEnvelope)


export default function Footer() {
  return (
    <section>
        <Container className="footerContainer">
        <span>
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