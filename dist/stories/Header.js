"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = require("./Button");
var _headerModule = _interopRequireDefault(require("./header.module.scss"));
var __jsx = _react["default"].createElement;
var Header = function Header(_ref) {
  var user = _ref.user,
    onLogin = _ref.onLogin,
    onLogout = _ref.onLogout,
    onCreateAccount = _ref.onCreateAccount;
  return __jsx("header", null, __jsx("div", {
    className: _headerModule["default"].wrapper
  }, __jsx("div", null, __jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("g", {
    fill: "none",
    fillRule: "evenodd"
  }, __jsx("path", {
    d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
    fill: "#FFF"
  }), __jsx("path", {
    d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
    fill: "#555AB9"
  }), __jsx("path", {
    d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
    fill: "#91BAF8"
  }))), __jsx("h1", {
    className: _headerModule["default"].title
  }, "Acme")), __jsx("div", null, user ? __jsx(_react["default"].Fragment, null, __jsx("span", {
    className: "welcome"
  }, "Welcome, ", __jsx("b", null, user.name), "!"), __jsx(_Button.Button, {
    size: "small",
    onClick: onLogout,
    label: "Log out"
  })) : __jsx(_react["default"].Fragment, null, __jsx(_Button.Button, {
    size: "small",
    onClick: onLogin,
    label: "Log in"
  }), __jsx(_Button.Button, {
    primary: true,
    size: "small",
    onClick: onCreateAccount,
    label: "Sign up"
  })))));
};
exports.Header = Header;
Header.defaultProps = {
  user: null
};