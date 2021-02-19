import { css } from "@emotion/css";
import React from "react";

const style = css({
  ":hover": {
    path: {
      fill: "white",
    },
    line: {
      stroke: "white",
    },
  },
});
const Queque = () => {
  return (
    <svg
      className={style}
      width="20"
      height="19"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L4 1.92L0 4V0Z" fill="#888888" />
      <line
        x1="5"
        y1="1.75"
        x2="10"
        y2="1.75"
        stroke="#888888"
        stroke-width="0.5"
      />
      <line y1="4.75" x2="10" y2="4.75" stroke="#888888" stroke-width="0.5" />
      <line y1="7.75" x2="10" y2="7.75" stroke="#888888" stroke-width="0.5" />
    </svg>
  );
};

export default Queque;
