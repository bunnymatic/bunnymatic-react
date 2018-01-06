import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import classnames from 'classnames';
import { connect } from 'react-redux';

class MainCarousel extends Component {

  constructor() {
    super();
    this.state = {
      items: [
        {
          image: '1.jpg',
          name: 'legend 1'
        },
        {
          image: '2.jpg',
          name: 'legend 2'
        },
        {
          image: '3.jpg',
          name: 'legend 3'
        },
      ]
    }
  }

  renderItem(item) {
    return <div><img src={item.image}/><p className="legend">{item.name}</p></div>;
  }

  render() {
    const { items } = this.state;

    return(
      <Carousel>
        {items.map(item => this.renderItem(item))}
      </Carousel>
    )
  }
}

export { MainCarousel };

//export default connect(({ someReducer }) => ({}))(MainCarousel)

export default connect(() => ({}))(MainCarousel)
