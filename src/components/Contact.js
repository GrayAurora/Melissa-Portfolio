import React from "react";
import { Form, FormControl, FormGroup, FormLabel, FormText, Button, Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contact">
      <div className="aboutcontainer formCont">
          <img 
            className="mssgsvg"
            src="./message-bro.svg"
            alt="react logo" />
        <div className="intro formElem">
          <Form>
            <Row>
              <Col>
                <h2>Send me a Message!</h2>
              </Col>
            </Row>

            <FormGroup className="formGroup">
              <FormLabel htmlFor="name"> Full Name:</FormLabel><br />
              <FormControl id='name'type="text" placeholder="First and Last Name"/>
            </FormGroup>


            <FormGroup className="formGroup">
              <FormLabel htmlFor="email"> Email Address:</FormLabel><br />
              <FormControl id='email' type="email" placeholder="Enter E-mail"/>
              <FormText>Snitches get stitches. Your email is safe with me.</FormText>
            </FormGroup>


            <FormGroup className="formGroup">
              <FormLabel htmlFor="mssg"> Message:</FormLabel><br />
              <FormControl id='mssg' as='textarea' rows={5} className='formMssg'placeholder="Enter inquiry details. Be as short or specific as you would like."/>
            </FormGroup>

            <Row>
              <Col>
                <Button type='submit' className="submitBtn">Send Inquiry</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </section>
  );
}