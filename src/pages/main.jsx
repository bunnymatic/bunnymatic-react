import React, { Component } from 'react'

import ImageBlocks from '../components/ImageBlocks/ImageBlocks';

require("./main.scss");

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: [
        { id: 1, name: 'image1', src: "http://placekitten.com/300/400" },
        { id: 2, name: 'image2', src: "http://placekitten.com/200/400" },
        { id: 3, name: 'image1', src: "http://placekitten.com/300/300" },
        { id: 4, name: 'image2', src: "http://placekitten.com/400/200" },
        { id: 5, name: 'image1', src: "http://placekitten.com/500/400" },
        { id: 6, name: 'image2', src: "http://placekitten.com/300/400" },
        { id: 7, name: 'image1', src: "http://placekitten.com/120/250" },
        { id: 8, name: 'image2', src: "http://placekitten.com/300/400" },
        { id: 9, name: 'image2', src: "http://placekitten.com/250/200" }
      ]
    };
  }

  render() {
    const { images } = this.state;
    return(
      <section className="main">
        <ImageBlocks images={images}/>
      </section>
    )
  }
}

export default Main;
