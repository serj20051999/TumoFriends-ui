import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Socket from '../../socket';
import { ListGroup, Tab, Form, Button, Container, Col, Row} from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      selectedUsers: [],
      showProfileFor: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    Socket.connect('list', () => {})
  }
  componentDidMount() {
    this.onStudentLoggedIn();
    this.onStudentLoggedOut();
    this.query();
  }
  handleSubmit(event) {
    event.preventDefault();
    const searchText = ReactDOM.findDOMNode(this.refs.searchTextRef).value; // different put in slides
    this.query(searchText);
  }
  onStudentLoggedIn() {
    Socket.list.on('logged in', user => {
      console.log('user logged in', user);
      this.query();
    });
  }
  onStudentLoggedOut() {
    Socket.list.on('logged out', user => {
      console.log('user logged out', user);
      this.query();
    });
  }
  onStartSession(user) {
    console.log('user', user);
    // this.props.onStartSession(this.state.selectedUsers);
  }
  query(textSearch) {
    console.log('query', textSearch);
    const currentUser = this.props.currentUser;
    Socket.list.emit('query', { search: textSearch}, (results) => {
      this.setState({
        list: results.filter(r => currentUser.email !== r.email),
      });
    });
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Row className="justify-content-md-center mt-4 mb-4">
            <Col xs lg={6}>
              <Form.Group>
                <Form.Control ref={"searchTextRef"} as="input" type="text"></Form.Control>
              </Form.Group>
            </Col>
            <Col md="auto">
              <Button variant="primary" type="submit">Search</Button>
            </Col>
          </Row>
          <Row>
            <Tab.Container id="search-results" defaultActiveKey="#user0">
            <Col>
              <ListGroup>
                {this.state.list.map((user, index) => (
                  <ListGroup.Item
                    eventKey={`#user${index}`}
                    as="button"
                    variant={user.loggedIn ? "success" : null}
                    // active={user.loggedIn ? true : false}
                    // action={user.loggedIn ? true : false}
                    // disabled={user.loggedIn ? false : true}
                  >
                    <span>{user.firstName} {user.lastName}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col>
              <Tab.Content>
                {this.state.list.map((user, index) => (
                  <Tab.Pane eventKey={`#user${index}`}>
                    <div>Name: {user.firstName} {user.lastName}</div>
                    <div>Email: {user.email}</div>
                    <div>Learning Targets: {user.learningTargets.join(', ')}</div>
                    <div>Location: {user.location}</div>
                    <Button className="mt-3" onClick={(e) => { e.preventDefault(); this.onStartSession(user)}}>Start Chat</Button>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
            </Tab.Container>
          </Row>
        </Form>
      </Container>
    )
  }
}

Search.propTypes = {
  onStartSession: PropTypes.func,
  currentUser: PropTypes.object,
};
export default Search;