import React from "react";
import "./Contact.scss";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Contact = () => {
  return (
    <div className="contact__container">
      <h1 className="contact__title">Let's get in touch !</h1>
      <div class="contact__description__container">
        <h4 class="contact__description">
          You can complete this form or use the mobile number/email from
          LinkedIn
        </h4>
      </div>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Enter your message</Label>
          <Input type="textarea" name="message" id="message" />
        </FormGroup>
        <Button className="submitBtn">Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;
