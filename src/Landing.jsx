import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Music from './Music';
import Projects from './Projects';
import Resume from './Resume';
import Nav from './Nav';



class Landing extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <Fragment>
        <Header />
        <section>
          <Nav />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/music" component={Music} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </section>
      </Fragment>
    )
  }
}

export default Landing;
