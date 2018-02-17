import React, { Component } from 'react'
import classnames from 'classnames';

require ('./navigation.scss');

class NavigationItem extends Component {
  constructor(thing) {
    console.log(thing);
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

  render() {
    return (
      <div
        className="navigation__item" >
        <a href={this.props.path} title={this.props.title}>
          {this.iconOrName(this.props)}
        </a>
      </div>
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

  startHovering(ev) {
    this.setState({hovering: true})
  }

  stopHovering(ev) {
    this.setState({hovering: false})
  }

  navItems() {
    const items = navItems.map( (item) => {
      console.log("sending", item);
      return (
        <NavigationItem { ...item } key={item.name} />
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
