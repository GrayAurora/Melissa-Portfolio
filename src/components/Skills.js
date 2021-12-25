import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { skills } from '../SkillsData';

export default function Skills() {
  return (
    <section>
      <Container className="techContainer">
          <h1>Technologies</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          Laborum, voluptas natus?</p>
          <Row className="techIcons">
              {skills.map((skill) => ( 
              <Col sm>
                <img  className="singleIcons" src={skill.image} alt={skill.alternate} /> 
                <h3>{skill.title}</h3>
              </Col>
              ))}
          </Row>
        </Container>
    </section>
  )
}