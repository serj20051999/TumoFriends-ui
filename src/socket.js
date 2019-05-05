import io from 'socket.io-client';

const apiHost = process.env.REACT_APP_API_HOST  || 'http://localhost:3001';

class Socket {
  constructor() {
    this.list = null;
  }
  connect(namespace, fn) {
    if (this.list == null) {
      this.list = io(`${apiHost}/${namespace}`);
      this.list.on('connect', () => {
        fn(this.list);
      })
      this.list.on('error', () => {
        fn(null);
      })
    } else {
      fn(this.list);
    }
  }
  getList() {
    return this.list;
  }
}

const instance = new Socket();
// Object.freeze(instance);

export default instance;