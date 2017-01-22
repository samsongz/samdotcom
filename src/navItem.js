import React, { Component } from 'react';
/**
 * A nav item
 */
export default class NavItem extends Component {
  setSelected() {
    document.querySelector(this.props.link).scrollIntoView({block: "end", behavior: "smooth"});
    this.props.setSelected(this.props.text)
  }
  render() {
    const className = [
      'navItem',
      this.props.selected === this.props.text ? 'active' : ""
    ].join(' ')
    return (
      <div onClick={this.setSelected.bind(this)} className={className}>
        <p href={this.props.link}>{this.props.text}</p>
      </div>
    );
  }
}