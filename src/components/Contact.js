import React from 'react';
import { Form, FormControl, FormGroup, FormLabel, FormText, Button, Row, Col } from "react-bootstrap";
import{ init } from '@emailjs/browser';



export default function Contact() {

  const btn = document.getElementById('button');
  document.getElementById('form')
   .addEventListener('submit', function(event) {
    init("user_TanZWr3COe2uwcj8cnb9k");
     event.preventDefault();
     
     const serviceID = 'default_service';
     const templateID = 'template_q473ydx';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send';
        alert(JSON.stringify(err));
      });
  });

  return (
    <section id="contact">
      <div className="aboutcontainer formCont">
          <img 
            className="mssgsvg"
            src="./message-bro.svg"
            alt="react logo" />
        <div className="intro formElem">
          <Form id='form'>
            <Row>
              <Col>
                <h2>Send me a Message!</h2>
              </Col>
            </Row>

            <FormGroup className="formGroup">
              <FormLabel htmlFor="name"> Full Name:</FormLabel><br />
              <FormControl id='name'type="text" name='user_name' placeholder="First and Last Name"/>
            </FormGroup>


            <FormGroup className="formGroup">
              <FormLabel htmlFor="email"> Email Address:</FormLabel><br />
              <FormControl id='email' type="email" name='user_email' placeholder="Enter E-mail"/>
              <FormText>Snitches get stitches. Your email is safe with me.</FormText>
            </FormGroup>


            <FormGroup className="formGroup">
              <FormLabel htmlFor="mssg"> Message:</FormLabel><br />
              <FormControl id='mssg' as='textarea' name='message' rows={5} className='formMssg'placeholder="Enter inquiry details. Be as short or specific as you would like."/>
            </FormGroup>

            <Row>
              <Col>
                <Button type='submit' id='button' className="submitBtn" value='Send'>Send Inquiry</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </section>
  );
}