import React from "react";
import PropTypes from "prop-types";

/**
 * An avatar component that displays a custom image with a fallback
 */

const Avatar = ({
  src
}) => {
  return /*#__PURE__*/React.createElement("img", {
    className: "avatar",
    src: src,
    alt: "user avatar"
  });
};
export default Avatar;
Avatar.propTypes = {
  avatar: PropTypes.shape({
    src: PropTypes.string
  })
};
Avatar.defaultProps = {
  src: "https://via.placeholder.com/50x50"
};