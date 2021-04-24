import React from "react";
import { imageType } from "../../shared/types";

require("./ImageDetail.scss");
require("./ImageDetailLabel.scss");

const ImageLabel = ({ image }) => {
  return (
    <div className="image-detail-label__container">
      <div className="image-detail-label">
        <div className="image-detail-label__name">{image.name}</div>
        <div className="image-detail-label__name">{image.year}</div>
      </div>
    </div>
  );
};
ImageLabel.propTypes = {
  image: imageType,
};

const ImageDetail = ({ image }) => {
  return (
    <div className="image-detail__container">
      <div className="image-detail">
        <img alt={image.name} className="image-detail__image" src={image.src} />
        <ImageLabel image={image} />
      </div>
    </div>
  );
};

ImageDetail.propTypes = {
  image: imageType.isRequired,
};

export default ImageDetail;
