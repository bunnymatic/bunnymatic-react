/*eslint no-console:0 */
import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import ImageDetail from "./ImageDetail";
import { imageType } from "../../shared/types";

const ImageDetailModal = ({ image, isOpen }) => {
  return (
    <CSSTransition timeout={2500} classNames="image-detail" in={isOpen}>
      {(state) => {
        return Boolean(image) && <ImageDetail image={image} />;
      }}
    </CSSTransition>
  );
};

ImageDetailModal.propTypes = {
  image: imageType,
  isOpen: PropTypes.bool,
};

ImageDetailModal.defaultProps = {
  isOpen: false,
};

export default ImageDetailModal;
