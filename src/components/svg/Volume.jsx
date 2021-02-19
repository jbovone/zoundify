import { css } from "@emotion/css";
import React from "react";

const style = css({
  ":hover": {
    path: {
      stroke: "white",
    },
  },
});
const Volume = () => {
  return (
    <svg
      className={style}
      width="20"
      height="20"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.74847 0.56872L5.72742 8.41153C5.2579 7.97066 4.90573 7.60317 4.61044 7.29503C4.59829 7.28235 4.58624 7.26977 4.57428 7.25729C4.196 6.86266 3.89315 6.54867 3.54731 6.31861C2.86811 5.86678 2.05519 5.75901 0.25 5.75056V3.24944C2.06051 3.24097 2.87275 3.13259 3.55316 2.67749C3.89926 2.44599 4.20316 2.12993 4.58393 1.73263L4.61042 1.70499C4.91006 1.39231 5.26837 1.0184 5.74847 0.56872Z"
        stroke="#888888"
        stroke-width="0.5"
      />
      <path
        d="M7 1C7 1 8 2.16667 8 4.5C8 6.83333 7 8 7 8"
        stroke="#888888"
        stroke-width="0.5"
      />
    </svg>
  );
};

export default Volume;
