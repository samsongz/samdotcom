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
        <div className='contact-item'><i className="icon ion-email" />Email</div>
        <div className='contact-item'><i className="icon ion-iphone" />Phone</div>
        <div className='contact-item'><i className="icon ion-social-linkedin" />LinkedIn</div>
        <div className='contact-item'><i className="icon ion-social-github" />GitHub</div>
      </div>
    );
  }
}