import React, { Component } from 'react';

class ContactItem extends Component {
  render() {
    return(
      <div>

        {this.props.text}
      </div>
    )
  }
}

/**
 * A title section w/ ma name
 */
export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className='pageSlide'>
        <div className='contact-item'><a href="mailto:samuelemeyer@gmail.com"><i className="icon ion-email" /></a></div>
        <div className='contact-item'><a href="tel:646-854-9505"><i className="icon ion-iphone" /></a></div>
        <div className='contact-item'><a target="_blank" href="https://www.linkedin.com/in/meyersam"><i className="icon ion-social-linkedin" /></a></div>
        <div className='contact-item'><a target="_blank" href="https://www.github.com/samsongz" ><i className="icon ion-social-github" /></a></div>
      </div>
    );
  }
}