import React, { Component } from 'react';
import NavItem from './navItem'

import styles from './nav.css'

/**
 * A nav for getting around my site
 */
export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: ""
    }
  }
  clearSelected() {
    this.setState({selected: ""})
  }
  setSelectedSection(section) {
    this.setState({selected: section})
  }
  render() {
    const { selected } = this.state
    return (
      <div className={styles.nav}>
        <NavItem setSelected={this.setSelectedSection.bind(this)} selected={selected} link="#about" text="ABOUT" />
        <NavItem setSelected={this.setSelectedSection.bind(this)} selected={selected} link="#work" text="WORK" />
        <NavItem setSelected={this.setSelectedSection.bind(this)} selected={selected} link="#contact" text="CONTACT" />
      </div>
    );
  }
}