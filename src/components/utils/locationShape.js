import * as PropTypes from "prop-types";
const locationShape = PropTypes.shape({
  continent: PropTypes.string,
  country: PropTypes.string,
  place: PropTypes.shape({
    name: PropTypes.string,
    images: PropTypes.array,
    description: PropTypes.string
  }),
});

export default locationShape;
