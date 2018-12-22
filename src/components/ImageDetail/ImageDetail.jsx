import React, { Component } from "react";
import { imageType } from "../../shared/types";

require ("./ImageDetail.scss");
require ("./ImageDetailLabel.scss");

class ImageLabel extends Component {
  render() {
    const {image} = this.props;
    return (
      <div className="image-detail-label__container">
        <div className="image-detail-label">
          <div className="image-detail-label__name">{image.name}</div>
          <div className="image-detail-label__name">{image.year}</div>
        </div>
      </div>
    );
  }
}

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
          <ImageLabel image={image} />
        </div>
      </div>
    );
  };
}

export default ImageDetail;
