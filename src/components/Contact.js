import React from 'react';
import { Form, FormControl, FormGroup, FormLabel, FormText, Button, Row, Col } from "react-bootstrap";
import{ init, sendForm } from '@emailjs/browser';



export default function Contact() {

  const toSend = useState({
    user_name: '',
    user_email: '',
    message: '',

  });

  const onSubmit = (e) => {
    init("user_TanZWr3COe2uwcj8cnb9k");     
    const serviceID = 'portfolio_form';
    const templateID = 'template_q473ydx';
    
    e.preventDefault();
    sendForm(
      serviceID,
      templateID,
      toSend,
    )
      .then(() => {
        console.log('SENT!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  

  return (
    <section id="contact">
      <div className="aboutcontainer formCont">
          <img 
            className="mssgsvg"
            src="./message-bro.svg"
            alt="react logo" />
        <div className="intro formElem">
          <Form id='form' onSubmit={onSubmit}>
            <Row>
              <Col>
                <h2>Send me a Message!</h2>
              </Col>
            </Row>

            <FormGroup className="formGroup">
              <FormLabel htmlFor="name"> Full Name:</FormLabel><br />
              <FormControl value={toSend.user_name} id='name'type="text" name='user_name' placeholder="First and Last Name"/>
            </FormGroup>


            <FormGroup className="formGroup">
              <FormLabel htmlFor="email"> Email Address:</FormLabel><br />
              <FormControl value={toSend.user_email} id='email' type="email" name='user_email' placeholder="Enter E-mail"/>
              <FormText>Snitches get stitches. Your email is safe with me.</FormText>
            </FormGroup>


            <FormGroup className="formGroup">
              <FormLabel htmlFor="mssg"> Message:</FormLabel><br />
              <FormControl value={toSend.message} id='mssg' as='textarea' name='message' rows={5} className='formMssg'placeholder="Enter inquiry details. Be as short or specific as you would like."/>
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