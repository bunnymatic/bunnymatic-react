import React, { Component } from 'react'

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

  iconOrName(item) {
    if (item.icon) {
      return (
        <i title={item.title} className={item.icon} />
      );
    }
    return item.name;
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
      <nav className="navigation">
        {this.navItems()}
      </nav>
    )
  }
}

export { NavItem };
export default Navigation;
