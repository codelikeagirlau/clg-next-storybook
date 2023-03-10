import React from "react";
import Avatar from "./Avatar";
export default {
  title: "Components/Avatar",
  component: Avatar
};
const Template = args => /*#__PURE__*/React.createElement(Avatar, args);
export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/50x50"
};