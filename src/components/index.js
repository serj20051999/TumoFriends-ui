import React from 'react';
import { connect } from 'react-redux';
import Cam from './Cam/Cam';

class App extends React.Component {
  render() {
    return (
      <div>
        <Cam />
      </div>
    )
  }
}

export default connect()(App);
