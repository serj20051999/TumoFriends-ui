import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';

import tumoLogoArm from './tumo-logo-arm.png';
import profileLogo from './profile.svg';
import networkLogo from './network.svg';

import './navigationbar.css';

export default ({user}) => (
  <div className="global-nav">
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <LinkContainer to="/">
        <Navbar.Brand><img alt="tumo" className="tumo-logo" src={tumoLogoArm} /></Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {
            user ? (
              <span>
                <LinkContainer to="/profile"><img className="nav-icon" src={profileLogo} alt="user" /></LinkContainer>
                <LinkContainer to="/network"><img className="nav-icon" src={networkLogo} alt="network" /></LinkContainer>
              </span>
            ) : null
          }
        </Nav>
      </Navbar.Collapse>
      { user ? <span className="user-name">Hello Mesrob!</span> : null }
    </Navbar>
  </div>
);