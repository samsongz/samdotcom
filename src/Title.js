import React, { Component } from 'react';

import styles from './nav.css'
/**
 * A title section w/ ma name
 */
export default class Title extends Component {
  render() {
    return (
      <div className={styles.title}>
        SAM MEYER
      </div>
    );
  }
}