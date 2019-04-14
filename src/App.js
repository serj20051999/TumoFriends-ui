import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tumo from './pages/tumo';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';

import './App.css';

const NavigationHeader = () => (
  <div>
    <Container>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>TUMO</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/tumo"><Nav.Link>Home</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </div>
);

const HomePage = () => (
  <h1>Tumo Enker</h1>
);

class App extends Component {
  render() {
    return (
      <Router>
        <NavigationHeader />
        <Route path="/" exact component={HomePage} />
        <Route path="/tumo" component={Tumo} />
      </Router>
    );
  }
}

export default App;
