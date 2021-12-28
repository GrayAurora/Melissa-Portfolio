import React from "react";
import { Nav, Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import '../App.css';

export default function Navigation() {
  return (
    <Navbar expand="md" sticky="top">
      <Container>
      <Navbar.Brand href="#">Melissa Rodriguez</Navbar.Brand>
      <Navbar.Toggle  />
      <Navbar.Collapse >
        <Nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}