import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  render() {
    const name, email, message = this.state;
    const inputValues = {name, email, message};
  }
}

export default ContactForm;