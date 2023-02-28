import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import Avatar from "@/stories/Avatar";
const inter = Inter({
  subsets: ["latin"]
});
export default function Home() {
  return /*#__PURE__*/React.createElement("main", {
    className: styles.main
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.description
  }, /*#__PURE__*/React.createElement("p", null, "Get started by editing\xA0", /*#__PURE__*/React.createElement("code", {
    className: styles.code
  }, "src/app/page.js")), /*#__PURE__*/React.createElement(Avatar, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "By", " ", /*#__PURE__*/React.createElement(Image, {
    src: "/vercel.svg",
    alt: "Vercel Logo",
    className: styles.vercelLogo,
    width: 100,
    height: 24,
    priority: true
  })))), /*#__PURE__*/React.createElement("div", {
    className: styles.center
  }, /*#__PURE__*/React.createElement(Image, {
    className: styles.logo,
    src: "/next.svg",
    alt: "Next.js Logo",
    width: 180,
    height: 37,
    priority: true
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.thirteen
  }, /*#__PURE__*/React.createElement(Image, {
    src: "/thirteen.svg",
    alt: "13",
    width: 40,
    height: 31,
    priority: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: styles.grid
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    className: styles.card,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("h2", {
    className: inter.className
  }, "Docs ", /*#__PURE__*/React.createElement("span", null, "->")), /*#__PURE__*/React.createElement("p", {
    className: inter.className
  }, "Find in-depth information about Next.js features and API.")), /*#__PURE__*/React.createElement("a", {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    className: styles.card,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("h2", {
    className: inter.className
  }, "Templates ", /*#__PURE__*/React.createElement("span", null, "->")), /*#__PURE__*/React.createElement("p", {
    className: inter.className
  }, "Explore the Next.js 13 playground.")), /*#__PURE__*/React.createElement("a", {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    className: styles.card,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("h2", {
    className: inter.className
  }, "Deploy ", /*#__PURE__*/React.createElement("span", null, "->")), /*#__PURE__*/React.createElement("p", {
    className: inter.className
  }, "Instantly deploy your Next.js site to a shareable URL with Vercel."))));
}