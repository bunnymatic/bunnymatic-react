import React, { Component } from 'react'
import MainCarousel from '../components/carousel/mainCarousel';

class Main extends Component {
  render() {
    return(
      <section className="bounceInDown animated main">
        <MainCarousel />
      </section>
    )
  }
}

export default Main;
