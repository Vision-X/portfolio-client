import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/about"><button type="button" className="btn btn-outline-danger">About</button></Link>
        <Link to="/contact"><button type="button" className="btn btn-outline-secondary">Contact</button></Link>
        <Link to="/music"><button type="button" className="btn btn-outline-success">Music</button></Link>
        <Link to="/projects"><button type="button" className="btn btn-outline-info">Projects</button></Link>
        <Link to="/resume"><button type="button" className="btn btn-outline-warning">Resume</button></Link>
      </nav>
    )
  }
}

export default Nav;
