import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./navigation";
import React from 'react';
function App() {
  return (
    <div className="App">
      <Navigation />
      <section className="landingPage" id="home">
        <div className="headerBlock">
          <div className="headerDescription">
            <h1 className="introduction">
              Hi I'm <b>YVERT GLYNN SORIANO</b>
            </h1>
            <p className="subHeader">WELCOME TO MY PORTFOLIO</p>
            <button className="btn btn-primary w-25">Read More</button>
          </div>
          <div className="headerImage">
            <img src="./YVERT.png" alt="" />
          </div>
        </div>
      </section>
      <section className="aboutSection" id="about">
        <div className="imageDisplay">
          <h1>This is Image Display</h1>
        </div>
        <div className="contentDisplay">
          <h1 className="introductory">
            HI I'm <b>YVERT GLYNN SORIANO</b>
            <div className="content">
              <p>
                I am a aspirant Web DeveloperI am a aspirant Web DeveloperI am a
                aspirant Web DeveloperI am a aspirant Web DeveloperI am a
                aspirant Web DeveloperI am a aspirant Web DeveloperI am a
                aspirant Web DeveloperI am a aspirant Web DeveloperI am a
                aspirant Web DeveloperI am a aspirant Web DeveloperI am a
                aspirant Web DeveloperI am a aspirant Web DeveloperI am a
                aspirant Web Developer
              </p>
            </div>
          </h1>
        </div>
      </section>
      <section className="projectSection" id="project">
        <h1>Project Section</h1>
        <div className="technologies">
          <h1>Tech stacks</h1>
        </div>
        <div className="projectDisplay">
          <h1>Project Display</h1>
        </div>
      </section>
      <section className="footerSection" id="contact">
        <h1>Wants to Connect?</h1>
      </section>
    </div>
  );
}

export default App;
