import React, { Component } from 'react';
import { data } from './data'
import styles from './nav.css'

class Picture extends Component {
  render() {
    return(
      <img src="" />
    )
  }
}


/**
 * A title section w/ ma name
 */
export default class About extends Component {
  render() {
    return (
      <div id="about" className={styles.pageSlide}>
        <Picture />
        <p>
          {data.profile}
        </p>
      </div>
    );
  }
}