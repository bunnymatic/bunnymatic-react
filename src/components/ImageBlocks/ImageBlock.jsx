import React, { Component } from "react";
import { imageType } from "../../shared/types";

require("./ImageBlock.scss");

class ImageBlock extends Component {
  static propTypes = {
    image: imageType.isRequired,
  };

  render() {
    const { image } = this.props;

    return <div className="image-block" style={{ backgroundImage: `url('${image.src}')` }} />;
  }
}

export default ImageBlock;
