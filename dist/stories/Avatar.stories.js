"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Avatar = _interopRequireDefault(require("./Avatar"));
var __jsx = _react["default"].createElement;
var _default = {
  title: "Components/Avatar",
  component: _Avatar["default"]
};
exports["default"] = _default;
var Template = function Template(args) {
  return __jsx(_Avatar["default"], args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  src: "https://via.placeholder.com/50x50"
};