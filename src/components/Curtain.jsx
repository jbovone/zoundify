import { css } from "@emotion/css";
import React from "react";

const Curtain = ({ scrollValue }) => {
  const curtainStyle = css({
    gridArea: "nav",
    transition: "all 0.3s",
    backgroundImage:
      "linear-gradient(180deg, rgb(55, 55, 55) 0%, rgb(5, 5, 5)100%)",
    opacity: 1 - scrollValue,
    width: "100%",
    height: "calc(100% + 110px)",
    top: 0,
    bottom: -110,
  });
  return <div className={curtainStyle} />;
};

export default Curtain;
