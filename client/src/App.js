import React, { Component } from 'react';
import { Upload } from './components/Upload';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="bgColor">
        <div className="image-container">
          <div className="image-picture"><img src={require('./resources/mozartApproves.jpg')} /></div>
          <div className="image-gif"><img src={require('./resources/hubbub.gif')} /></div>
        </div>
          <div className="button-container">
            <Upload />
          </div>    
      </div>
    )
  }
}

export default App;
