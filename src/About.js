import React, { Component } from 'react';
import { data } from './data'

/**
 * A title section w/ ma name
 */
export default class About extends Component {
  render() {
    return (
      <div id="about" className='pageSlide'>
        <div className='profileImage' />
        <p>
          {data.profile}
        </p>
      </div>
    );
  }
}