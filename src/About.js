import React, { Component } from 'react';
import { data } from './data'

/**
 * A title section w/ ma name
 */
export default class About extends Component {
  htmlProfile(prof) {
    return {__html: prof};
  }
  render() {
    var text = this.htmlProfile(data.profile)
    return (
      <div id="about" className='pageSlide'>
        <div className='profileImage' />
        <p dangerouslySetInnerHTML={text}></p>
      </div>
    );
  }
}