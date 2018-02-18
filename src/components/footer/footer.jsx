import React from 'react';

require('./footer.scss');

const Footer = (props) => {
  return(
    <footer >
      <a href="https://www.missionartists.org/artists/mrrogers">
        <div className="footer__content">
          meanwhile check out mr rogers on mission artists
        </div>
      </a>
    </footer>
  );
}

export default Footer;
