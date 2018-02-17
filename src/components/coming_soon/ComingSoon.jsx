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
        <p>coming soon</p>
        <p>the new bunnymatic.com</p>
      </h1>
    </div>
  );
}

export default ComingSoon;
