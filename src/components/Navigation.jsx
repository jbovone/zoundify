import React, { useState, forwardRef } from "react";
import { css } from "@emotion/css";
import { palette } from "../theme/colors";
import Highlighted from "./normalizers/typography/highlighted";
import { sizes } from "../theme/sizing";
import BrowserControls from "../assets/fakeNavControls.svg";
import NavigationCenter from "./Navigation-Center";

const style = css({
  height: "7vh",
  width: "100%",
  display: "flex",
  background: palette.backgroundBody,
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  zIndex: 1000,
  ".menu-button": {
    paddingBottom: 20,
    marginLeft: 20,
    cursor: "pointer",
  },
});
const Navigation = () => {
  return (
    <nav className={style}>
      <Highlighted className="menu-button" size={sizes.h1}>
        ...
      </Highlighted>
      <NavigationCenter />
      <img className="browser-controls" src={BrowserControls} alt="" />
    </nav>
  );
};

export default Navigation;
