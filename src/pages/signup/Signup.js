import React, {Component} from 'react';

import { Container, Form, Button } from 'react-bootstrap';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.learningTargets = ["Animation", "Game Development", "Filmmaking", "Web Development"]
    this.locations = ["Yerevan",  "Gyumri", "Stepnakert", "Dilijan"]
  }
  handleSubmit() {

  }
  handleChange() {

  }
  render() {
    return (
      <Container>
        <Form className="mt-5">
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Passowrd</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Form.Group controlId="formLearningTarget">
            <Form.Label>Learning Targets</Form.Label>
            <Form.Control as="select" multiple>
              {
                this.learningTargets.map(target => 
                  <option>{target}</option>
                )
              }
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control as="select">
              {
                this.locations.map(location => 
                  <option>{location}</option>
                )
              }
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Form>
      </Container>      
    )
  }
}

export default Signup;
