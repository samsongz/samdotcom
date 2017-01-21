import React, { Component } from 'react';

import styles from './nav.css'
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
      styles.navItem,
      this.props.selected === this.props.text ? styles.active : ""
    ].join(' ')
    return (
      <div onClick={this.setSelected.bind(this)} className={className}>
        <p href={this.props.link}>{this.props.text}</p>
      </div>
    );
  }
}