import React, { Component } from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import Search from './Search';
import './network.css';

class NetworkPage extends Component {
  render() {
    return (
      <Container fluid={true} className="p-0">
        <Row noGutters={true}>
          <Col xs={2}>
            <div><Search /></div>
          </Col>  
          <Col>
            <div>Collaboration Page Placeholder</div>
          </Col>
          <Col>
            <div>Video and Messaging Placeholder</div>
          </Col>
        </Row>
        
      </Container>
    )
  }
}

export default NetworkPage;
