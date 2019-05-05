/*eslint no-console:0 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import ImageDetail from "./ImageDetail";
import { imageType } from "../../shared/types";

class ImageDetailModal extends Component {
  static propTypes = {
    image: imageType,
    isOpen: PropTypes.bool,
  };

  static defaultProps = {
    isOpen: false,
  };

  render() {
    const { image, isOpen } = this.props;
    if (!isOpen) {
      return (
        <CSSTransition timeout={2500} classNames="image-detail" in={isOpen}>
          <div className="empty-component-for-animation" />
        </CSSTransition>
      );
    } else {
      return (
        <CSSTransition timeout={2500} classNames="image-detail" in={isOpen}>
          {state => {
            console.log(state);
            return <ImageDetail image={image} />;
          }}
        </CSSTransition>
      );
    }
  }
}

export default ImageDetailModal;
