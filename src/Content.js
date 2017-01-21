import React, { Component } from 'react';

/**
 * A border for the whole page
 */
export default class Content extends Component {
  render() {
    return (
      <div className="sdc-border">
        {this.children}
      </div>
    );
  }
}
