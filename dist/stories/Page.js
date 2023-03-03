"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Header = require("./Header");
require("./page.css");
var __jsx = _react["default"].createElement;
var Page = function Page() {
  var _React$useState = _react["default"].useState(),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    user = _React$useState2[0],
    setUser = _React$useState2[1];
  return __jsx("article", null, __jsx(_Header.Header, {
    user: user,
    onLogin: function onLogin() {
      return setUser({
        name: "Jane Doe"
      });
    },
    onLogout: function onLogout() {
      return setUser(undefined);
    },
    onCreateAccount: function onCreateAccount() {
      return setUser({
        name: "Jane Doe"
      });
    }
  }), __jsx("section", null, __jsx("h2", null, "Pages in Storybook"), __jsx("p", null, "We recommend building UIs with a", " ", __jsx("a", {
    href: "https://componentdriven.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, __jsx("strong", null, "component-driven")), " ", "process starting with atomic components and ending with pages."), __jsx("p", null, "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"), __jsx("ul", null, __jsx("li", null, "Assemble data in the page component from your services. You can mock these services out using Storybook.")), __jsx("p", null, "Get a guided tutorial on component-driven development at", " ", __jsx("a", {
    href: "https://storybook.js.org/tutorials/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Storybook tutorials"), ". Read more in the", " ", __jsx("a", {
    href: "https://storybook.js.org/docs",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "docs"), "."), __jsx("div", {
    className: "tip-wrapper"
  }, __jsx("span", {
    className: "tip"
  }, "Tip"), " Adjust the width of the canvas with the", " ", __jsx("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("g", {
    fill: "none",
    fillRule: "evenodd"
  }, __jsx("path", {
    d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",
    id: "a",
    fill: "#999"
  }))), "Viewports addon in the toolbar")));
};
exports.Page = Page;