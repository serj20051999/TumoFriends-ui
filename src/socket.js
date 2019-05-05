import io from 'socket.io-client';

const apiHost = process.env.REACT_APP_API_HOST  || 'http://localhost:3001';

class Socket {
  constructor() {
    this.list = io(`${apiHost}/list`);
  }
}

const instance = new Socket();
Object.freeze(instance);

export default instance;