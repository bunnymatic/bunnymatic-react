import React, { Component } from "react";
import { imageType } from "../../shared/types";

require ("./ImageDetail.scss");

class ImageDetail extends Component {

  static propTypes = {
    image: imageType.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {image} = this.props;
    return (
      <div className="image-detail__container">
        <div className="image-detail">
          <img className="image-detail__image" src={image.src}/>
          <div>{image.name}</div>
        </div>
      </div>
    );
  };
}

export default ImageDetail;
