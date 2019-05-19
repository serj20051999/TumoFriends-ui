import React, { Component } from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import './network.css';

class NetworkPage extends Component {
  render() {
    return (
      <Container fluid={true} className="p-0">
        <Row noGutters={true}>
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
