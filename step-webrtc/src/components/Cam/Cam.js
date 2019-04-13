import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export default class Cam extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.canvasRef = React.createRef();
    this.screenshotImgRef = React.createRef();
    this.state = {
      selectedVideoDeviceID: '',
      devices: []
    }
    this.selectDevice = this.selectDevice.bind(this);
    this.takeScreenshot = this.takeScreenshot.bind(this);
  }
  hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }
  getDevices() {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      console.log(devices);
      const filteredDevices = [];
      if (Array.isArray(devices)) {
        devices.forEach(device => {
          filteredDevices.push({
            id: device.deviceId,
            kind: device.kind,
            name: device.label || device.kind
          });
        });
      }
      this.setState({
        devices: filteredDevices,
      })
    }).catch(err => console.error(err))
  }
  selectDevice(event) {
    console.log(event.target);
    this.setState({
      selectedVideoDeviceID: event.target.value
    });
    this.initializeVideo(event.target.value);
  }
  initializeVideo(deviceId) {
    if (this.hasGetUserMedia()) {
      const constraints = {
        video: {
          deviceId: '', // TODO toggle between devices
          width: { min: 1280},
          height: { min: 720}
        }
      };
      if (deviceId) {
        constraints.video.deviceId = { exact: deviceId };
      }
      this.userMedia = navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
          console.log('STREAM', stream);
          this.videoRef.current.srcObject = stream;
        });
    }
  }
  takeScreenshot() {
    // const canvas = document.createElement('canvas');
    this.canvasRef.current.width = this.videoRef.current.videoWidth;
    this.canvasRef.current.height = this.videoRef.current.videoHeight;
    this.canvasRef.current.getContext('2d').drawImage(this.videoRef.current, 0, 0);
    this.screenshotImgRef.current.src = this.canvasRef.current.toDataURL('image/webp');
  }
  componentDidMount() {
    this.getDevices();
  }
  render() {
    return (
      <div>
        <Select
          onChange={this.selectDevice}
          value={
            this.state.selectedVideoDeviceID ? this.state.selectedVideoDeviceID : this.state.devices.length ? this.state.devices[0].id  : ''
          }>
            {this.state.devices.map(device => (
              <MenuItem key={device.id + device.name} value={device.id}>{device.name}</MenuItem>
            ))}
        </Select>
        <Button onClick={this.takeScreenshot}>Take Screenshot!</Button>
        <video style={{filter: 'grayscale(1)'}} ref={this.videoRef} autoPlay></video>
        <img ref={this.screenshotImgRef} alt="screenshot" src="" />
        <canvas ref={this.canvasRef} style={{display:"none"}}></canvas>
      </div>
    );
  }
}
