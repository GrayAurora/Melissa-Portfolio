import React from "react";
import { Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

export default function Navigation() {
  return (
    <Navbar sticky='top' expand='lg'>
      <NavbarCollapse>
        <Nav className="navbar">
          <Nav.Link href='#about'>Melissa Rodriguez</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <Nav.Link href='#contact'>Contact Me</Nav.Link>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}