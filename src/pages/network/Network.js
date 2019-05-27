import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './network.css';
import Socket from '../../socket';

// Chat
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

// WYSIWIG
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import debounce from 'debounce';

// VideoChat
import VideoChat from './VideoChat';

class NetworkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessages:[],
      editorText: null,
    };

    this.handleNewChatMessage = this.handleNewChatMessage.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }
  handleNewChatMessage(message) {
    this.emitChatMessage(message);
  }
  handleEditorChange(source, editor) {
    console.log('source', source);
    if (source === 'user') {
      this.emitEditorMessage(editor.getContents());
    }
  }
  emitChatMessage(message) {
    Socket.list.emit('chat-message', this.props.withUser, this.props.currentUser, message);
  }
  emitEditorMessage(message) {
    Socket.list.emit('editor-message', this.props.withUser, this.props.currentUser, message);
  }
  componentDidMount() {
    addResponseMessage(`Message ${this.props.withUser ? this.props.withUser.firstName: ''}!`)
    Socket.connect('list', (list) => {
      list.on('chat-message', (fromUser, message) => {
        addResponseMessage(message);
        this.setState((prevState) => ({
          chatMessages: [...prevState.chatMessages, message]
        }));
      });
      list.on('editor-message', (fromUser, message) => {
        this.setState({
          editorText: message
        })
      });
    });
  }
  componentWillUnmount() {
    Socket.list.removeListener('chat-message');
    Socket.list.removeListener('editor-message');
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
            <ReactQuill
              id="chat"
              value={this.state.editorText}
              onChange={(content, delta, source, editor) => { debounce(this.handleEditorChange(source, editor)) } }
             />
          </Col>
          <Col>
            <div>
              <VideoChat
                currentUser={this.props.currentUser}
                caller={this.props.receiver ? this.props.withUser : this.props.currentUser}
                receiver={this.props.receiver ? this.props.currentUser : this.props.withUser}
              />
            </div>
          </Col>
        </Row>

      </Container>
    )
  }
}

export default NetworkPage;
