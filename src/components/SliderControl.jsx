import { css } from "@emotion/css";
import React from "react";

const Slider = ({ width }) => {
  const style = css({
    height: 5,
    borderRadius: 30,
    width: width,
    backgroundColor: "white",
    color: "black",
    margin: "6px",
    cursor: "pointer",
  });

  return <input className={style} type="range" value={34} />;
};

export default Slider;
