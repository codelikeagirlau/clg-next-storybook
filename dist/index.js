"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _TestComponent = require("./stories/TestComponent");
Object.keys(_TestComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TestComponent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TestComponent[key];
    }
  });
});