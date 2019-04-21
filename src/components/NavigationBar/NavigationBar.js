import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';
import { withRouter } from "react-router";
import tumoLogoArm from './tumo-logo-arm.png';
import ProfileIcon from './ProfileIcon';
import NetworkIcon from './NetworkIcon';

import './navigationbar.css';

export default withRouter(({user, location}) => (
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
                <span className="ml-4 nav-icon">
                  <LinkContainer to="/profile">
                    <span><ProfileIcon fillColor={location.pathname === '/profile' ? "#ffa400": "#ffffff"} /></span>
                  </LinkContainer>
                </span>
                <span className="ml-4 nav-icon">
                  <LinkContainer to="/network">
                    <span><NetworkIcon fillColor={location.pathname === '/network' ? "#ffa400": "#ffffff"} /></span>
                  </LinkContainer>
                </span>
              </span>
            ) : null
          }
        </Nav>
      </Navbar.Collapse>
      { user ? <span className="user-name">Hello!</span> : null }
    </Navbar>
  </div>
));