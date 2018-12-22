import PropTypes from "prop-types";

export const idType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const imageType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  year: PropTypes.string,
  src: PropTypes.string.isRequired,
  id: PropTypes.idType
});
