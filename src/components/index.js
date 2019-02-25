import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  render() {
    return (
      <div><Button variant="contained" color="primary">Barev</Button></div>
    )
  }
}

export default connect()(App);
