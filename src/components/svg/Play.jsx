import { css } from "@emotion/css";
import React from "react";

const style = css({
  cursor: "pointer",
  ":hover": {
    circle: {
      stroke: "white",
      strokeWidth: "2",
    },
  },
});

const Play = ({ height = 37, width = 37 }) => {
  return (
    <svg
      className={style}
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 7">
        <circle cx="17" cy="17" r="16" stroke="#888888" strokeWidth="1.4" />
        <path d="M12 10L25 16.72L12 24V10Z" fill="white" />
      </g>
    </svg>
  );
};

export default Play;
