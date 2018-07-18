import React, { Component, Fragment } from 'react';
import './App.css';

// import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
};

const Header = () =>
  <header>
    <h1>Michael Marlow</h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

const About = () =>
  <Fragment>
    <a name="about"></a>
    <section id="about">
      <p>Hello my name is Michael Scott.... Marlow.
        <br />
        I like the Office, writing code, drinking coffee, and snowboarding
      </p>
    </section>
  </Fragment>

const Portfolio = () =>
  <Fragment>
    <a name="portfolio"></a>
    <section id="portfolio">
      <div className="card">
        <div className="card-img"></div>
        <h2>HypeRelease</h2>
        <p>project description</p>
        <div className="card-footer">
          <a href="">GitHub Repo</a>
          <a href="">Deployed site</a>
        </div>
      </div>

      <div className="card">
        <div className="card-img"></div>
        <h2>DrumLabVR</h2>
        <p>project description</p>
        <div className="card-footer">
          <a href="">GitHub Repo</a>
          <a href="">Deployed site</a>
        </div>
      </div>

      <div className="card">
        <div className="card-img"></div>
        <h2>Snow Status</h2>
        <p>project description</p>
        <div className="card-footer">
          <a href="">GitHub Repo</a>
          <a href="">Deployed site</a>
        </div>
      </div>
    </section>
  </Fragment>

const Hero = () =>
  <section id="hero">
    <h2 id="hero-title">Suh, Breh?</h2>
    <a href="about"></a>
  </section>

const Resume = () =>
  <Fragment>
    <a name="resume"></a>
    <section id="resume">
      <p>Yoooo resume here!</p>
    </section>

  </Fragment>

const Contact = () =>
  <Fragment>
    <a name="contact"></a>
    <section id="contact">
      <label for="title">Subject</label>
      <input type="text" name="title" value="" />
      <label for="body"></label>
      <textarea name="body" cols="" rows="5"></textarea>
    </section>
  </Fragment>

const Footer = () =>
  <footer>
    <small>created by Mike Marlow</small>
  </footer>


export default App;
