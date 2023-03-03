"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
require("./button.scss");
var _excluded = ["primary", "backgroundColor", "size", "label"];
var __jsx = _react["default"].createElement;
/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var primary = _ref.primary,
    backgroundColor = _ref.backgroundColor,
    size = _ref.size,
    label = _ref.label,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return __jsx("button", (0, _extends2["default"])({
    type: "button"
  }, props, {
    className: _style["default"].dynamic([["2314204694", [backgroundColor]]]) + " " + (props && props.className != null && props.className || ["storybook-button", "storybook-button--".concat(size), mode].join(" ") || "")
  }), label, __jsx(_style["default"], {
    id: "2314204694",
    dynamic: [backgroundColor]
  }, "button.__jsx-style-dynamic-selector{background-color:".concat(backgroundColor, ";}")));
};
exports.Button = Button;
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined
};