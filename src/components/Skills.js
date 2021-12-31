import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { skills } from '../data/SkillsData';

export default function Skills() {
  return (
    <section id="skills">
      <Container className="techContainer">
          <h1>Technologies</h1>
          <Row className="techIcons">
              {skills.map((skill) => ( 
              <Col>
                <img  className="singleIcons" src={skill.image} alt={skill.alternate} /> 
                <h4>{skill.title}</h4>
              </Col>
              ))}
          </Row>
        </Container>
    </section>
  )
}