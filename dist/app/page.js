"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _google = require("next/font/google");
var _pageModule = _interopRequireDefault(require("./page.module.scss"));
var _Avatar = _interopRequireDefault(require("@/stories/Avatar"));
var __jsx = _react["default"].createElement;
var inter = (0, _google.Inter)({
  subsets: ["latin"]
});
function Home() {
  return __jsx("main", {
    className: _pageModule["default"].main
  }, __jsx("div", {
    className: _pageModule["default"].description
  }, __jsx("p", null, "Get started by editing\xA0", __jsx("code", {
    className: _pageModule["default"].code
  }, "src/app/page.js")), __jsx(_Avatar["default"], null), __jsx("div", null, __jsx("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "By", " ", __jsx(_image["default"], {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    className: _pageModule["default"].vercelLogo,
    width: 100,
    height: 24,
    priority: true
  })))), __jsx("div", {
    className: _pageModule["default"].center
  }, __jsx(_image["default"], {
    className: _pageModule["default"].logo,
    src: "/next.svg",
    alt: "Next.js Logo",
    width: 180,
    height: 37,
    priority: true
  }), __jsx("div", {
    className: _pageModule["default"].thirteen
  }, __jsx(_image["default"], {
    src: "/thirteen.svg",
    alt: "13",
    width: 40,
    height: 31,
    priority: true
  }))), __jsx("div", {
    className: _pageModule["default"].grid
  }, __jsx("a", {
    href: "https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    className: _pageModule["default"].card,
    target: "_blank",
    rel: "noopener noreferrer"
  }, __jsx("h2", {
    className: inter.className
  }, "Docs ", __jsx("span", null, "->")), __jsx("p", {
    className: inter.className
  }, "Find in-depth information about Next.js features and API.")), __jsx("a", {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    className: _pageModule["default"].card,
    target: "_blank",
    rel: "noopener noreferrer"
  }, __jsx("h2", {
    className: inter.className
  }, "Templates ", __jsx("span", null, "->")), __jsx("p", {
    className: inter.className
  }, "Explore the Next.js 13 playground.")), __jsx("a", {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    className: _pageModule["default"].card,
    target: "_blank",
    rel: "noopener noreferrer"
  }, __jsx("h2", {
    className: inter.className
  }, "Deploy ", __jsx("span", null, "->")), __jsx("p", {
    className: inter.className
  }, "Instantly deploy your Next.js site to a shareable URL with Vercel."))));
}