"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LoggedOut = exports.LoggedIn = void 0;
var _Header = require("./Header");
var _default = {
  title: 'Example/Header',
  component: _Header.Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen'
  }
};
exports["default"] = _default;
var LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
};
exports.LoggedIn = LoggedIn;
var LoggedOut = {
  args: {}
};
exports.LoggedOut = LoggedOut;