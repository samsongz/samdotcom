import React, { Component } from 'react';
import Content from './Content';
import Nav     from './Nav';
import Title   from './Title';
import About   from './About';
import Work    from './Work';
import Contact from './Contact';

import styles from './styles/styles.css'
import icons from './styles/ionicons.min.css'
/**
 * A border for the whole page
 */
export default class SiteContainer extends Component {
  render() {
    return (
      <div>
        <div id="left"></div>
        <div id="right"></div>
        <div id="top"></div>
        <div id="bottom"></div>

        <div className="title-page">
          <Title />
          <Nav />
        </div>

        <div className='containerBody'>
            <About />
            <Work />
            <Contact />
        </div>

      </div>
    );
  }
}