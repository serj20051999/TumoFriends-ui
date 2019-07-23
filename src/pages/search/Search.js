import React from 'react';
import PropTypes from 'prop-types';
import Socket from '../../socket';
import {Badge, ListGroup, Tab, Form, Button, Container,Row, Col} from 'react-bootstrap';


/**
 * React component to render search page
 */
class Search extends React.Component {
  constructor(props) {
    //TODO: set default state of list of users, and text search, event handler and socket connect 
    super(props)
    this.state = {
      textSearch: '',
      studentsList: []
    };
    this.query = this.query.bind(this);
  }
  componentDidMount() {
    this.query();
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
    this.props.startChat(withUser);
    Socket.users.emit('start-chat', withUser, this.props.currentUser);
    console.log('start-chat with user', withUser);
    this.props.history.push('/network');
  }

    query(textSearch) {
      Socket.connect(users => {
        users.emit('search', textSearch, result => {
          console.log(result);
          this.setState({studentsList: result});
        });
      });
    }
  
  render() {
    return (
      <Container className="mt-5">
        <Tab.Container>
       <Form className="form-inline">
       <Form.Control onChange={e => this.setState({textSearch: e.target.value})} value={this.state.textSearch}  type="text" placeholder="Search" className="w-75 p-3 mr-sm-2"  size="lg"/>
     <Button variant="outline-primary  " type="submit" size="lg">Search</Button>
  </Form>
  <Row>
<Col className="w-50 p-3 " >
              <ListGroup className="mt-sm-5 ">
                {this.state.studentsList.map((user, index) => (
                  <ListGroup.Item
                    eventKey={`#user${index}`}
                    
                    >
                      <center>
                    <span>{user.firstName} {user.lastName}</span> 
                    {user.loggedIn ? <Badge className="ml-2" variant="primary">Logged In</Badge> : null}
                    </center>
                  </ListGroup.Item>
                ))}
              </ListGroup>
           
              </Col>
<Col className="w-50 p-3 mt-sm-5" >
              <Tab.Content>
                {this.state.studentsList.map((user, index) => (
                  <Tab.Pane eventKey={`#user${index}`}>
                    <div>Name: {user.firstName} {user.lastName}</div>
                    <div>Email: {user.email}</div>
                    <div>Learning Targets: {user.learningTargets.join(', ')}</div>
                    <div>Location: {user.location}</div>
                    <Button className="mt-3" onClick={(e) => { e.preventDefault(); this.onstartChat(user)}}>Start Chat</Button>
                  </Tab.Pane>
                ))}
              </Tab.Content>
     </Col>
    </Row>
</Tab.Container>
      </Container>
    )
  }
}

Search.propTypes = {
  startChat: PropTypes.func,
  currentUser: PropTypes.object,
};
export default Search;