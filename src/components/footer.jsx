import React from "react";
import { css } from "@emotion/css";
import { palette } from "../theme/colors";

const style = css({
  background: palette.backgroundFooter,
  width: "100%",
  height: "9.5vh",
  position: "fixed",
  bottom: 0,
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
});
const Footer = () => {
  return <footer className={style}>sfggdfgdsdfsd</footer>;
};

export default Footer;
