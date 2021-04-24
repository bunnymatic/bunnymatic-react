import React from "react";

require("./footer.scss");

const Footer = (props) => {
  return (
    <footer>
      <a href="https://www.missionartists.org/artists/mrrogers">
        <div className="footer__content">
          meanwhile check out mr rogers on mission artists
        </div>
      </a>
      <a href="https://bunnymatic.bigcartel.com">
        <div className="footer__content">or go buy some art here</div>
      </a>
    </footer>
  );
};

export default Footer;
