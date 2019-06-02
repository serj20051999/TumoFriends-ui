import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO: use --> import {Redirect} from 'react-router-dom';
import {Container} from 'react-bootstrap';

/**
 * Component for Login Page
 */
export default class Login extends Component {
  // constructor(props) {
    // TODO: set state and form handlers
  // }
  render() {
    // TODO: use to redirect if user not logged in
    // if (this.props.user) {
    //   return (
    //     <Redirect to={{
    //       pathname: '/profile',
    //     }} />
    //   )
    // }
    return (
      <Container className="mt-3">
        <div>TODO: create login form</div>
      </Container>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  user: PropTypes.object,
  userError: PropTypes.string,
}
