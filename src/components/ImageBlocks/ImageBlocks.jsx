/*eslint no-console:0 */
import React, { Component, Fragment } from "react";
import anime from "animejs";
import Transition from "react-transition-group/Transition";
import TransitionGroup from "react-transition-group/TransitionGroup";

import PropTypes from "prop-types";
import { idType, imageType } from "../../shared/types";
import ImageBlock from "./ImageBlock";
import ImageDetailModal from "../ImageDetail/ImageDetailModal";

const ANIMATION_DONE_EVENT = "animation::done";
const triggerAnimationDoneEvent = node => node.dispatchEvent(new Event(ANIMATION_DONE_EVENT));

// cache current animation so that it can be interrupted if necessary
let currentAnimation = null;
const clearCurrentAnimation = () => currentAnimation && currentAnimation.pause();

const animationTimings = {
  gridEnter: 1200,
  gridLeave: 1200,
  blockEnter: 1400,
  blockLeave: 1400,
  blockStagger: 2500,
};

const getOpacity = animatingIn => ({
  value: animatingIn ? [0, 1] : [1, 0],
  easing: "linear",
  duration: 100,
});

const animateGridIn = gridContainer => {
  clearCurrentAnimation();
  const blocks = gridContainer.querySelectorAll(".image-block__container");
  currentAnimation = anime
    .timeline()
    .add({
      targets: blocks,
      opacity: 0,
      duration: 1,
    })
    .add({
      targets: gridContainer,
      translateX: [-1000, 0],
      opacity: getOpacity(true),
      duration: animationTimings.gridEnter,
    })
    .add({
      targets: blocks,
      duration: 1400,
      opacity: getOpacity(true),
      translateY: [-20, 0],
      complete: () => triggerAnimationDoneEvent(gridContainer),
      delay: (el, i) => i * 100,
    });
};

const animateGridOut = gridContainer => {
  clearCurrentAnimation();
  const blocks = gridContainer.querySelectorAll(".image-block__container");
  gridContainer.style.height = gridContainer.offsetHeight + "px";
  currentAnimation = anime
    .timeline()
    .add({
      targets: blocks,
      duration: 1700,
      opacity: getOpacity(false),
      translateY: -130,
      delay: (el, i) => i * 100,
    })
    .add({
      targets: gridContainer,
      translateX: 1000,
      opacity: getOpacity(false),
      duration: animationTimings.gridLeave,
      complete: () => triggerAnimationDoneEvent(gridContainer),
      offset: "-=300",
    });
};

// const animateBlockIn = block =>
//   anime({
//     dtargets: block,
//     opacity: getOpacity(true),
//     translateY: [250, 0],
//     translateX: [250, 0],
//     complete: () => triggerAnimationDoneEvent(block),
//     duration: animationTimings.blockEnter
//   })

// const animateBlockOut = block =>
//   anime({
//     targets: block,
//     translateY: -10,
//     opacity: getOpacity(false),
//     complete: () => triggerAnimationDoneEvent(block),
//     duration: animationTimings.blockLeave
//   })

const animateBlockOut = () => {};
const animateBlockIn = () => {
  console.log("animat grid in");
};

class ImageBlocks extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(imageType).isRequired,
  };

  static defaultProps = {
    images: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      detailToShow: idType,
    };
  }

  handleClick = id => {
    return ev => {
      ev.preventDefault();
      let newDetail = id;
      if (this.state.detailToShow === id) {
        newDetail = null;
      }
      this.setState({ detailToShow: newDetail });
    };
  };

  getImage = id => this.props.images.find(image => image.id === id);

  renderImages = () => {
    const images = this.props.images;
    return images.map(image => (
      <Transition
        key={image.id}
        onEnter={animateBlockIn}
        onExit={animateBlockOut}
        addEndListener={(node, done) => node.addEventListener(ANIMATION_DONE_EVENT, done)}
      >
        <div key={image.id} className="image-block__container" onClick={this.handleClick(image.id)}>
          <ImageBlock image={image} />
        </div>
      </Transition>
    ));
  };

  render() {
    const { detailToShow } = this.state;
    const showDetail = Boolean(detailToShow) && Boolean(this.getImage(detailToShow));

    return (
      <Fragment>
        <div className="image-detail__click-handler" onClick={this.handleClick(detailToShow)}>
          <ImageDetailModal isOpen={showDetail} image={this.getImage(detailToShow)} />
        </div>
        <Transition
          unmountOnExit
          appear
          addEndListener={(node, done) => node.addEventListener(ANIMATION_DONE_EVENT, done)}
          onEnter={animateGridIn}
          onExit={animateGridOut}
          in={true}
        >
          <div className="image-blocks">
            <TransitionGroup component={null}>{this.renderImages()}</TransitionGroup>
          </div>
        </Transition>
      </Fragment>
    );
  }
}

export default ImageBlocks;
