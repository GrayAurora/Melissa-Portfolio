import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { projects } from '../data/ProjectsData';

export default function Projects() {
  return (
    <section id="projects">
      <Container className="projectContainer">
          <h1>Projects</h1>
          <p>As I progress to find my spot in the developer world, I will post my completed projects here. Hover over to see the stats on each project!</p>
          <Row className="techIcons">
              {projects.map((project) => ( 
              <a href={project.link}>
                <Col className="projectIcon" >
                  <img className="project" src={project.image} alt={project.alternate} /> 
                  <h3>{project.title}</h3>
                </Col>
              </a>
              ))}
          </Row>
        </Container>
    </section>
  )
}