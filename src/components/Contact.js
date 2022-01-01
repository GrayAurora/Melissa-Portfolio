import React from 'react';
import { Form, FormControl, FormGroup, FormLabel, FormText, Button, Row, Col } from "react-bootstrap";

const initialFormData = Object.freeze({
  usser_name: "",
  user_email: "",
  message: "",
});

export const Contact = (props) => {
  const [formData, updateFormData] = React.useState(initialFormData);

  const sendFeedback = (serviceId, templateId, variables) => {
    window.emailjs.send(
        serviceId, templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an Error.', err))
  }

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for your message.`);
    const serviceId = 'portfolio_form';
    const templateId = 'template_q473ydx';

    sendFeedback(serviceId, templateId, { user_name: formData.user_name, message: formData.message, user_email: formData.user_email })

    console.log(formData);
    };


  return (
    <section id="contact">
      <div className="aboutcontainer formCont">
          <img 
            className="mssgsvg"
            src="./message-bro.svg"
            alt="react logo" />
        <div className="intro formElem">
          <Form id='form' >
            <Row>
              <Col>
                <h2>Send me a Message!</h2>
              </Col>
            </Row>

            <FormGroup className="formGroup">
              <FormLabel htmlFor="name"> Full Name:</FormLabel><br />
              <FormControl required onChange={handleChange} id='name'type="text" name='user_name' placeholder="First and Last Name"/>
            </FormGroup>


            <FormGroup className="formGroup">
              <FormLabel htmlFor="email"> Email Address:</FormLabel><br />
              <FormControl required onChange={handleChange}  id='email' type="email" name='user_email' placeholder="Enter E-mail"/>
              <FormText>Snitches get stitches. Your email is safe with me.</FormText>
            </FormGroup>


            <FormGroup className="formGroup">
              <FormLabel htmlFor="mssg"> Message:</FormLabel><br />
              <FormControl required onChange={handleChange} id='mssg' as='textarea' name='message' rows={5} className='formMssg'placeholder="Enter inquiry details. Be as short or specific as you would like."/>
            </FormGroup>

            <Row>
              <Col>
                <Button onClick={handleSubmit} type='submit' id='button' className="submitBtn" value='Send'>Send Inquiry</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;