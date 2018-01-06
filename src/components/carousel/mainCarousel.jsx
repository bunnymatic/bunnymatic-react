import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { fetchImage } from '../../actions/index.js';
const mapStateToProps = state => {
  return state
};

class MainCarousel extends Component {

  constructor(props) {
    super(props);
  }

  addImage() {
    this.props.dispatch(fetchImage);
  }

  renderItem(item, idx) {
    idx = idx || 0
    return <div key={idx}><img src={item.image}/><p className="legend">{item.name}</p></div>;
  }

  render() {
    const imgs = this.props.images.images;
    console.log("IMAGES", imgs);
    if (imgs) {
      return(
        <div className="main-carousel" >
          <Carousel>
            {imgs.map((item, idx) => this.renderItem(item, idx))}
          </Carousel>
          <button onClick={this.addImage.bind(this)}>add image</button>
        </div>
      )
    }
    else {
      return <div className="main-carousel" ></div>
    }
  }
}

export { MainCarousel };

//export default connect(({ someReducer }) => ({}))(MainCarousel)

export default connect(mapStateToProps)(MainCarousel)
