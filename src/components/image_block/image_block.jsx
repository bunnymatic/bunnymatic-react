import React, { Component } from 'react'
import classnames from 'classnames';

require ('./image_block.scss');

class ImageBlock extends Component {
  constructor(props) {
    super()
    console.log(
      "IamgeBlock", props)
  }

  render() {
    return (
      <div className="image-block">
        <div className="name">NAME: {this.props.name}</div>
        <div className="url">URL: {this.props.url}</div>
      </div>
    );
  }
}

export default ImageBlock;
