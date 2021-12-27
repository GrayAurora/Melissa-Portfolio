import React from "react";
import { Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

export default function Navigation() {
  return (
    <Navbar>
        <Navbar.Brand href='#'>Melissa Rodriguez</Navbar.Brand>
        <NavbarCollapse>
          <Nav >
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#skills'>Skills</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#contact'>Contact Me</Nav.Link>
          </Nav>
        </NavbarCollapse>
    </Navbar>
  );
}