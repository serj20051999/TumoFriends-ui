import React from 'react';
import Socket from '../../socket';

class Search extends React.Component {
  constructor(props) {
    super(props);
    Socket.list.on('logged in', user => {
      console.log('following user logged in', user);
    });
    Socket.list.on('logged out', user => {
      console.log('following user logged out', user);
    });
    Socket.list.on('list error', error => console.log('error', error));
    Socket.list.emit('login', {
      email: 'mesrobk@gmail.com'
    });
    Socket.list.emit('query', { email: 'mesrobk@gmail.com'}, (results) => {
      console.log('results', results);
    });
  }
  render() {
    return <div></div>
  }
}

export default Search;