import React, { Component } from 'react'

import ImageBlock from '../components/image_block/image_block';

require("./main.scss");

class Main extends Component {

  images() {
    const images = [
      { name: 'image1', url: 'url1' },
      { name: 'image2', url: 'url21' },
      { name: 'image1', url: 'url1' },
      { name: 'image2', url: 'url21' },
      { name: 'image1', url: 'url1' },
      { name: 'image2', url: 'url21' },
      { name: 'image1', url: 'url1' },
      { name: 'image2', url: 'url21' }
    ]
    return images.map((img) => {
      return <ImageBlock {...img}/>
    });
  }

  render() {
    return(
      <section className="main">
        <div className="image_blocks">
          {this.images()}
        </div>
      </section>
    )
  }
}

export default Main;
