import { css } from "@emotion/css";
import React, { useState } from "react";
import { flex } from "../helpers";
import { palette } from "../theme/colors";

const Slider = ({ width }) => {
  const [value, setValue] = useState(0);
  function handleChange(e) {
    setValue(() => e.target.value);
    console.log(e.screenX);
  }
  const style = css({
    width: width,
    ...flex(),
    position: "relative",
    "input[type=range]": {
      background: "rgb(160,160,160)",
      WebkitAppearance: "none",
      width: width,
      height: 4,
      borderRadius: 30,
      outline: "none",
    },

    ":hover": {
      'input[type="range"]::-moz-range-thumb': {
        opacity: 1,
      },
      'input[type="range"]::-webkit-slider-thumb': {
        opacity: 1,
      },
      ".i-decorator": {
        background: palette.decorator,
      },
    },
    'input[type="range"]::-moz-range-thumb': {
      height: "12px",
      width: "12px",
      borderRadius: "50%",
      background: "#ffffff",
      cursor: "pointer",
      opacity: 0,
    },
    'input[type="range"]::-webkit-slider-thumb': {
      WebkitAppearance: "none",
      height: "12px",
      width: "12px",
      borderRadius: "50%",
      background: "#ffffff",
      cursor: "pointer",
      opacity: 0,
    },
    ".i-decorator": {
      position: "absolute",
      borderRadius: 30,
      width: `${value}%`,
      pointerEvents: "none",
      left: 0,
      height: 4,
      background: "white",
      ":before": {
        content: "''",
        position: "absolute",
        right: 0,
        height: 4,
        width: 12,
        transform: `translate(${100 - value}%)`,
        display: "flex",
        borderRadius: 30,
        background: "white",
        zIndex: 100,
      },
    },
  });

  return (
    <div className={style}>
      <input type="range" value={value} onChange={handleChange} />
      <div className="i-decorator" />
    </div>
  );
};

export default Slider;
