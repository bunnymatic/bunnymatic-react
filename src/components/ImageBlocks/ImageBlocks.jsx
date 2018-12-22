import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import {idType, imageType} from "../../shared/types";
import ImageBlock from "./ImageBlock";
import ImageDetail from "../ImageDetail/ImageDetail";

class ImageBlocks extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(imageType).isRequired,
  };

  static defaultProps = {
    images: []
  }

  constructor(props) {
    super(props);
    this.state = {
      detailToShow: idType
    };
  }

  handleClick = (id) => {
    console.log('handleclick', id);
    return (ev) => {
      ev.preventDefault();
      let newDetail = id;
      if (this.state.detailToShow === id) {
        newDetail = null;
      }
      this.setState({detailToShow: newDetail});
    };
  }

  getImage = (id) => this.props.images.find((image) => image.id === id)

  render() {
    const { images } = this.props;
    const { detailToShow } = this.state;
    return (
      <Fragment>
        {
          Boolean(detailToShow) && Boolean(this.getImage(detailToShow)) &&
            (
              <div className="image-detail__click-handler" onClick={ this.handleClick(detailToShow) }>
                <ImageDetail image={this.getImage(detailToShow)} />
              </div>
            )
        }
        <div className="image-blocks">
        {
          images.map((image) => {
            return (
              <div key={image.id} className="image-block__click-handler" onClick={ this.handleClick(image.id) }>
                <ImageBlock image={image}/>
              </div>);
          })
        }
        </div>
      </Fragment>
    );
  }
}

export default ImageBlocks;
