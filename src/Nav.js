import React, { Component } from 'react';
import NavItem from './navItem'

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
  setSelectedSection(section) {
    this.setState({selected: section})
  }
  render() {
    const { selected } = this.state
    // ABOUT WORK CONTACT
    return (
      <div className='nav'>
        <NavItem setSelected={this.setSelectedSection.bind(this)} selected={selected} link="#about" text="ABOUT" />
        <NavItem setSelected={this.setSelectedSection.bind(this)} selected={selected} link="#work" text="WORK" />
        <NavItem setSelected={this.setSelectedSection.bind(this)} selected={selected} link="#contact" text="CONTACT" />
      </div>
    );
  }
}