import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {Container} from 'react-bootstrap';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Login with your TUMO username and password.
        </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
      </Container>
    )
  }
}
