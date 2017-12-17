import React, { Component } from 'react'
import ReactHoverObserver from 'react-hover-observer';
import classnames from 'classnames';

class NavItem extends Component {
  render() {
    return (
      <div title={this.props.title}>{this.props.title}</div>
    );
  }
}

const navItems=[
  {
    name: "Main",
    title: "Main",
    path: "/",
    icon: "ion-planet"
  },
  {
    name: "Other",
    title: "Other",
    path: "/other",
    icon: "ion-ionic"
  },
]

class Navigation extends Component {

  constructor() {
    super()
    this.state = {hovering: false}
  }

  iconOrName(item) {
    if (item.icon) {
      return (
        <i title={item.title} className={item.icon} />
      );
    }
    return item.name;
  }

  startHovering(ev) {
    console.log('start',ev, this);
    if (this && this.setState) {
      this.setState({hovering: true})
    }
  }

  stopHovering(ev) {
    console.log('stop',ev, this);
    if (this && this.setState) {
      this.setState({hovering: false})
    }
  }

  navItems() {
    const items = navItems.map( (item) => {
      return (
        <div className="navigation__item" title={item.title} key={item.name}>
          <a href={item.path}>{this.iconOrName(item)}</a>
        </div>
      );
    });
    return items;
  }

  render() {
    return(
      <nav
        onMouseOver={ this.startHovering.bind(this) }
        onMouseOut={ this.stopHovering.bind(this) }
        className={ classnames( "navigation", {"hovering": this.state.hovering} ) }>
        {this.navItems()}
      </nav>
    )
  }
}

export default Navigation;
