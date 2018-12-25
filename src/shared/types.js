import PropTypes from "prop-types";

export const numberOrStringType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
export const idType = numberOrStringType;

export const imageType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  year: numberOrStringType,
  src: PropTypes.string.isRequired,
  id: idType,
});
