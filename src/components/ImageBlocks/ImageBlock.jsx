import React from "react";
import { imageType } from "../../shared/types";

require("./ImageBlock.scss");

const ImageBlock = ({ image }) => {
  return (
    <div
      className="image-block"
      style={{ backgroundImage: `url('${image.src}')` }}
    />
  );
};
ImageBlock.propTypes = {
  image: imageType.isRequired,
};

export default ImageBlock;
