import React, { Component } from 'react';
import { Upload } from './components/Upload';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src={require("./resources/icon.png")} />Hubbub
            </a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">
                Home
              </a>

              <a class="navbar-item">
                Details
              </a>

              <a class="navbar-item">
                About Us
              </a>
            </div>

            {/* <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a class="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </nav>
        <div id="home">
          <div className="bgColor">
            <div className="image-picture"><img src={require('./resources/mozart.jpg')} width="325" height="450" style={{ borderRadius: '50%' }} /></div>
            <div className="image-gif"><img src={require('./resources/hubbub.gif')} /></div>
            {/* <div className="image-picture1"><img src={require('./resources/squidward.jpg')} width="500" height="300" /></div> */}
            <div className="image-png"><img src={require('./resources/davis1.png')} /></div>
            {/* <div className="image-picture2"><img src={require('./resources/doge.jpg')} width="350" height="300" /></div>
            <div className="image-gif2"><img src={require('./resources/approve.gif')} /></div> */}
            <div className="button-container">
              <Upload />
            </div>    
          </div>
        </div>

        

        <div id="about">
          <div class="container">
            <h1><b><u>About Us</u></b></h1>
            <h3>
              Nhat and Pierce are both Engineering students at San Jose State University. Nhat studies Software Engineering and Pierce studies Computer Engineering. They both found an interest in data mining from the class they took together in 2018. Nhat will be graduating in Spring 2019 and Pierce will be graduating in Fall 2019.
            </h3>
          </div>
        </div>

        <div id="details">
          <div class="bgc"> 
            <div class="container">
              <h1><b><u>Details</u></b></h1>
              
              <h2>Inspiration</h2>
              <h3>The inspiration for this application is to break down music into information easier for users to understand and possibly for their own use.</h3>
              
              <h2>What it does</h2>
              <h3>Hubbub is an instrument detecting web application. When given an audio file, it can break down the instruments used and return it back to the user.</h3>
              
              <h2>How we built it</h2>
              <h3>Hubbub was built using Django for the servers, firebase to store the audio files. We used python and machine learning to train the data so our application will be able to detect the instrument used in the audio file given. Html, css, javascript, and react were used for the frontend.</h3>

              <h2>Challenges we ran into</h2>
              <h3>We spent a large portion of our time trying to setup the Django server. Another problem that we faced was finding datasets for different instrument sounds. </h3>

              <h2>Accomplishments that we're proud of</h2>
              <h3>One of the accomplishments we are most proud of is being able to complete the project within 24 hours. In order to do so, we did code sprints for each feature before taking a proper break.</h3>

              <h2>What we learned</h2>
              <h3>We learned how to manage time more efficiently with a smaller group size from this hackathon. We also gained a stronger understanding of machine learning and react.</h3>

              <h2>What's next for Hubbub</h2>
              <h3>Hubbub's next step will be being able to detect the notes used in addition to the instrument in the future. We will also implement useful features such as beats per minute and possibly detect scales or chords to further help music students or students interested in dissecting the fine details of music that the natural human ear could not decipher.</h3>
            </div>
          </div>
        </div>  

      </React.Fragment>
    )
  }
}

export default App;
