import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './network.css';
import Socket from '../../socket';

import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class NetworkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessages:[]
    };
    this.handleNewChatMessage = this.handleNewChatMessage.bind(this);
  }
  handleNewChatMessage(message) {
    this.emitChatMessage(message);
  }
  emitChatMessage(message) {
    Socket.list.emit('chat-message', this.props.withUser, this.props.currentUser, message);
  }
  componentDidMount() {
    addResponseMessage(`Message ${this.props.withUser ? this.props.withUser.firstName: ''}!`)
    Socket.connect('list', (list) => {
      list.on('chat-message', (fromUser, message) => {
        addResponseMessage(message);
        this.setState((prevState) => ({
          chatMessages: [...prevState.chatMessages, message]
        }));
        console.log('message received', fromUser.email, message)
      });
    });
  }
  componentWillUnmount() {
    Socket.list.removeListener('chat-message');
  }
  render() {
    return (
      <Container fluid={true} className="p-0">
        <Widget
          title='TUMO Chat'
          subtitle={`Chat with ${this.props.withUser ? this.props.withUser.firstName: ''}!`}
          handleNewUserMessage={this.handleNewChatMessage}
        />
        <Row noGutters={true}>
          <Col>
            <div>Collaboration Page Placeholder</div>
          </Col>
          <Col>
            <div>Video Collaboration</div>
          </Col>
        </Row>

      </Container>
    )
  }
}

export default NetworkPage;
