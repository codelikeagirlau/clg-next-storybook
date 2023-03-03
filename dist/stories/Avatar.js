"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var __jsx = _react["default"].createElement;
/**
 * An avatar component that displays a custom image with a fallback
 */

var Avatar = function Avatar(_ref) {
  var src = _ref.src;
  return __jsx("img", {
    className: "avatar",
    src: src,
    alt: "user avatar"
  });
};
var _default = Avatar;
exports["default"] = _default;
Avatar.defaultProps = {
  src: "https://via.placeholder.com/50x50"
};