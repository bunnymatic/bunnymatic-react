import React, { Component } from 'react'

import ImageBlocks from '../components/ImageBlocks/ImageBlocks';

require("./main.scss");

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: [
        { id: 1, name: 'image1', src: "http://placekitten.com/300/400", year: 2011 },
        { id: 2, name: 'image2', src: "http://placekitten.com/200/400", year: 2010 },
        { id: 3, name: 'image1', src: "http://placekitten.com/300/300", year: 2011 },
        { id: 4, name: 'image2', src: "http://placekitten.com/400/200", year: 2012 },
        { id: 5, name: 'image1', src: "http://placekitten.com/500/400", year: 2013 },
        { id: 6, name: 'image2', src: "http://placekitten.com/300/400", year: 2014 },
        { id: 7, name: 'image1', src: "http://placekitten.com/120/250", year: 2015 },
        { id: 8, name: 'image2', src: "http://placekitten.com/300/400", year: 2018 },
        { id: 9, name: 'image2', src: "http://placekitten.com/250/200", year: 2010 },
        { id: 12, name: 'image2', src: "http://placekitten.com/200/400", year: 2010 },
        { id: 13, name: 'image1', src: "http://placekitten.com/300/300", year: 2011 },
        { id: 14, name: 'image2', src: "http://placekitten.com/400/200", year: 2012 },
        { id: 15, name: 'image1', src: "http://placekitten.com/500/400", year: 2013 },
        { id: 16, name: 'image2', src: "http://placekitten.com/300/400", year: 2014 },
        { id: 17, name: 'image1', src: "http://placekitten.com/120/250", year: 2015 },
        { id: 18, name: 'image2', src: "http://placekitten.com/300/400", year: 2018 },
        { id: 19, name: 'image2', src: "http://placekitten.com/250/200", year: 2010 },
        { id: 212, name: 'image2', src: "http://placekitten.com/200/400", year: 2010 },
        { id: 213, name: 'image1', src: "http://placekitten.com/300/300", year: 2011 },
        { id: 214, name: 'image2', src: "http://placekitten.com/400/200", year: 2012 },
        { id: 215, name: 'image1', src: "http://placekitten.com/500/400", year: 2013 },
        { id: 216, name: 'image2', src: "http://placekitten.com/300/400", year: 2014 },
        { id: 217, name: 'image1', src: "http://placekitten.com/120/250", year: 2015 },
        { id: 218, name: 'image2', src: "http://placekitten.com/300/400", year: 2018 },
        { id: 219, name: 'image2', src: "http://placekitten.com/250/200", year: 2010 },
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
