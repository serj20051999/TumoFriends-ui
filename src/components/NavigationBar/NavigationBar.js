import React from 'react';

import {Nav, Navbar,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import tumoLogoArm from './tumo-logo-arm.png';
import ProfileIcon from './ProfileIcon';
import NetworkIcon from './NetworkIcon';
import SearchIcon from './SearchIcon';

import './navigationbar.css';


export default ({user, location,logoutUser,withUser}) => (
  <div className="global-nav">
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <LinkContainer to="/">
        <Navbar.Brand><img alt="tumo" className="tumo-logo" src={tumoLogoArm} /></Navbar.Brand>
      </LinkContainer>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {
             user.data ? (
              <span>
                <span className="ml-4 nav-icon">
                  <LinkContainer to="/profile">
                    <span><ProfileIcon fillColor={location.pathname === '/profile' ? "#ffa400": "#ffffff"} /></span>
                  </LinkContainer>
                </span>
                <span className="ml-4 nav-icon">
                  <LinkContainer to="/search">
                    <span><SearchIcon fillColor={location.pathname === '/search' ? "#ffa400": "#ffffff"} /></span>
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
      
         
        { user.data ? <span className="user-name">Hello {user.data.firstName}!</span> : null }
      { user.data ? <LinkContainer to="/"><Button onClick={() => {logoutUser(user.data);}} className="ml-2" variant="outline-warning">Logout</Button></LinkContainer> : null }
      { withUser ? <LinkContainer to="/network"><Button className="ml-2" variant="outline-success">CHAT!</Button></LinkContainer> : null}
        

      
      
    </Navbar>
  </div>
);
