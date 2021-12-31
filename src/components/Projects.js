import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { projects } from '../data/ProjectsData';

export default function Projects() {
  return (
    <section id="projects">
      <Container className="projectContainer">
          <h1>Projects</h1>
          <Row className="techIcons">
              {projects.map((project) => ( 
              <a href={project.link}>
                <Col className="projectIcon" >
                  <img className="project" src={project.image} alt={project.alternate} /> 
                  <h5>{project.title}</h5>
                </Col>
              </a>
              ))}
          </Row>
        </Container>
    </section>
  )
}