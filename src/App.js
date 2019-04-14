import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Login from './pages/login/Login';
import Home from './pages/home/Home';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';

import './App.css';
import tumoLogoArm from './tumo-logo-arm.png';

const NavigationHeader = () => (
  <div className="global-nav">
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <LinkContainer to="/">
        <Navbar.Brand><img alt="tumo" className="tumo-logo" src={tumoLogoArm} /></Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <NavigationHeader />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  // simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
