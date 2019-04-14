import React, { Component } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import {Container, Row, Col} from 'react-bootstrap';

import './network.css';

class NetworkPage extends Component {
  render() {
    return (
      <Container fluid={true} className="p-0">
        <Row noGutters={true}>
          <Col xs={2}>
            <div className="sidenav">
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </div>
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
