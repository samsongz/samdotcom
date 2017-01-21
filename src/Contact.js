import React, { Component } from 'react';

import styles from './nav.css'
/**
 * A title section w/ ma name
 */
export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className={styles.pageSlide}>
        <div>Email</div>
        <div>Phone</div>
        <div>LinkedIn</div>
        <div>GitHub</div>
      </div>
    );
  }
}