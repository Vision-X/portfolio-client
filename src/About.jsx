import React, { Component, Fragment } from 'react';
import headshot from './mikemarlowheadshot.png';

class About extends Component {
  render() {
    return (
        <Fragment>
          <div class="jumbotron">
            <h1 class="display-3">Hello, world!</h1>
            {/*<img src={headshot} class="img-responsive" alt="" />*/}
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4" />
            <p>
                Lorem ipsum dolor amet listicle 90's austin disrupt meditation. Jean shorts master cleanse tumblr pok pok chia raw denim. Small batch tote bag taxidermy irony, wayfarers celiac before they sold out meh. Brooklyn everyday carry pour-over single-origin coffee wayfarers synth DIY knausgaard deep v church-key post-ironic tacos hoodie. Post-ironic whatever palo santo, everyday carry chia street art master cleanse brooklyn organic iceland small batch ethical. Glossier yuccie tumblr vexillologist hexagon paleo.

                Oh. You need a little dummy text for your mockup? How quaint.

                I bet you’re still using Bootstrap too…
            </p>
          </div>
        </Fragment>
    )
  }
}

export default About;
