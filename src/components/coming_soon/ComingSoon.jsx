import React from 'react';
import BunnymaticSvg from "./bunnymatic.svg";

require('./coming_soon.scss');

const ComingSoon = (props) => {
  return(
    <div className="coming-soon">
      <div className="spinner" id="bunnymatic">
        <div className="scaler">
          <div className="zoomer">
            <img alt="Bunnymatic" src={BunnymaticSvg} />
          </div>
        </div>
      </div>
      <h1>
        <p>c o m i n g s o o n -  t h e n e w - b u n n y m a t i c . c o m</p>
      </h1>
    </div>
  );
}

export default ComingSoon;
