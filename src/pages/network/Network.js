import React, { Component } from 'react';
import { Container, Col, Row,Tab,Tabs } from 'react-bootstrap';

import './network.css';
import Socket from '../../socket';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import debounce from 'debounce';

import { Widget, addResponseMessage} from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import VideoChat from './VideoChat';
import Drawing from './Drawing';

//import logo from './../logo.svg';

/**
 * Main React Component for the networking page (WYSIWIG, Chat, Video, Canvas)
 */
class Network extends Component {
  constructor(props) {
    //TODO: set state and handlers for chat message and WYSIWIG
    super(props);
    this.state = {
      chatMessages:[],
      editorText: '',
    };

    this.handleNewUserMessage = this.handleNewUserMessage.bind(this); 
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    Socket.connect(user => {
      user.emit('message', newMessage, this.props.withUser);
    });
  }
  handleEditorChange(source, editor) {
    console.log('source', source);
    if (source === 'user') {
      this.emitEditorMessage(editor.getContents());
    }
  }

  emitEditorMessage(message) {
    Socket.users.emit('editor-message', this.props.withUser, this.props.user, message);
  }
  componentDidMount() {
    addResponseMessage("Connected Successfully!");
    Socket.connect(user => {
      user.on('new message', message => {
        addResponseMessage(message);
      });
      user.on('editor-message', (fromUser, message) => {
        this.setState({
          editorText: message
        });
      });
    
    });
  }
      
  
  componentWillUnmount() {
   Socket.connect(user => {
     user.removeListener('new message');
   }) 
    
  }
  render() {
    return (
      <Container fluid={true} className="p-0">
        { 
          // TODO: Add chat widget 
          <Widget
          title='TUMO Chat'
          subtitle={`Chat with ${this.props.withUser ? this.props.withUser.firstName: ''}!`}
          handleNewUserMessage={this.handleNewUserMessage}
        />
        }

         <Row noGutters={true}>
          <Col>
            <Tabs defaultActiveKey="editor" id="uncontrolled-tab-example">
              <Tab eventKey="editor" title="Editor">
              <ReactQuill
                  id="chat"
                  value={this.state.editorText}
                  onChange={(content, delta, source, editor) => { debounce(this.handleEditorChange(source, editor)) } }
                />
              </Tab>
              <Tab eventKey="canvas" title="Canvas">
                <Drawing withUser={this.props.withUser} user={this.props.user} />
              </Tab>
            </Tabs>            
          </Col>
          <Col>
            <div>
              {this.props.withUser ?
                <VideoChat
                  user={this.props.user}
                  caller={this.props.receiver ? this.props.withUser : this.props.user}
                  receiver={this.props.receiver ? this.props.user : this.props.withUser}
                /> : null
              }
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Network;