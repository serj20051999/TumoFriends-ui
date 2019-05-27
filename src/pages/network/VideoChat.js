import React from 'react';
import LioWebRTC from 'liowebrtc';

import { Badge } from 'react-bootstrap';

class VideoChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: props.currentUser.firstName,
      roomID: `tumochat${props.caller.email}${props.receiver.email}`,
      muted: false,
      camPaused: false,
      peers: []
    };
    this.videoRef = React.createRef();
    this.remoteVideos = {};
  }
  componentDidMount() {
    this.webrtc = new LioWebRTC({
      // The url for your signaling server. Use your own in production!
      url: 'https://sm1.lio.app:443/',
      // The local video ref set within your render function
      localVideoEl: this.localVid,
      // Immediately request camera access
      autoRequestMedia: true,
      // Optional: nickname
      nick: this.props.currentUser.firstName,
      debug: true
    });
    this.webrtc.on('peerStreamAdded', this.addVideo);
    this.webrtc.on('removedPeer', this.removeVideo);
    this.webrtc.on('ready', this.readyToJoin);
    this.webrtc.on('iceFailed', this.handleConnectionError);
    this.webrtc.on('connectivityError', this.handleConnectionError);
  }
  disconnect = () => {
    this.webrtc.quit();
  }
  componentWillUnmount() {
    this.disconnect();
  }
  addVideo = (stream, peer) => {
    this.setState({ peers: [...this.state.peers, peer] }, () => {
      this.webrtc.attachStream(stream, this.remoteVideos[peer.id]);
    });
  }
  removeVideo = (peer) => {
    this.setState({
      peers: this.state.peers.filter(p => !p.closed)
    });
  }
  handleConnectionError = (peer) => {
    const pc = peer.pc;
    console.log('had local relay candidate', pc.hadLocalRelayCandidate);
    console.log('had remote relay candidate', pc.hadRemoteRelayCandidate);
  }
  readyToJoin = () => {
    // Starts the process of joining a room.
    this.webrtc.joinRoom(this.state.roomID, (err, desc) => {
    });
  }
  generateRemotes = () => this.state.peers.map((p) => (
    <div key={p.id}>
      <div
        // className="float-right" 
        id={/* The video container needs a special id */ `${this.webrtc.getContainerId(p)}`}>
        <video
          controls
          autoPlay
          // Important: The video element needs both an id and ref
          id={this.webrtc.getDomId(p)}
          ref={(v) => this.remoteVideos[p.id] = v}
          />
      </div>
      <div>
        <Badge variant="info">{p.nick}</Badge>
      </div>
    </div>
    ));
  render() {
    return (
      <div>
        {this.generateRemotes()}
        <div className="w-2 float-right">
          <video controls width="25%" height="auto" autoPlay ref={(vid) => { this.localVid = vid; }}></video>
        </div>
        <div><Badge variant="info">{this.props.currentUser.firstName}</Badge></div>
      </div>
    )   
  }
}

export default VideoChat;
