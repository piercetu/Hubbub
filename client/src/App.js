import React, { Component } from 'react';
import { Upload } from './components/Upload';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bgColor">
          <div className="image-picture"><img src={require('./resources/mozartApproves.jpg')} /></div>
          <div className="image-gif"><img src={require('./resources/hubbub.gif')} /></div>
          <div className="image-picture1"><img src={require('./resources/squidward.jpg')} width="500" height="300" /></div>
          <div className="image-gif1"><img src={require('./resources/davis.gif')} /></div>
          <div className="image-picture2"><img src={require('./resources/doge.jpg')} width="350" height="300" /></div>
          <div className="image-gif2"><img src={require('./resources/approve.gif')} /></div>
          <div className="button-container">
            <Upload />
          </div>    
        </div>
      </React.Fragment>
    )
  }
}

export default App;
