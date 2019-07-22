import React from 'react';
import PropTypes from 'prop-types';
// TODO: use --> import Socket from '../../socket';
import {Form, Button, Container} from 'react-bootstrap';

/**
 * React component to render search page
 */
class Search extends React.Component {
  // constructor() {
    // TODO: set default state of list of users, and text search, event handler and socket connect 
  // }
  componentDidMount() {
    // TODO: event handlers if user logged in or out, run query
  }
  handleSubmit(event) {
    // TODO: form submit
  }
  onStudentLoggedIn() {
    // TODO: Socket event handler if user logged in - run query
  }
  onStudentLoggedOut() {
    // TODO: Socket event handler if user logged out - run query
  }
  onstartChat(withUser) {
    // TODO: event to invoke start-chat action via Socket, redirect to /network page
  }
  query(textSearch) {
    // TODO: emit query via Socket based on text
  }
  render() {
    return (
      <Container className="mt-5">
       <Form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
  </Form>
      </Container>
    )
  }
}

Search.propTypes = {
  startChat: PropTypes.func,
  currentUser: PropTypes.object,
};
export default Search;