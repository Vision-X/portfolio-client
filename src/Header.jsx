import React, { Component, Fragment } from 'react';

class Header extends Component {
  constructor() {
    super();

  }

  renderByScreenSize = () => {
    if (!window) {
      //if (window.userAgent !== mobile user agent)
      return this.renderSidebar();
    } else {
      return this.renderTopbar();
    }
  }

  renderSidebar = () => {
    return (
        <div>
          <p>POOP!</p>
        </div>
    )
  }

   renderTopbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Michael Marlow</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Music</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Resumé</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  render() {
    return this.renderByScreenSize();
  }
};

export default Header;
