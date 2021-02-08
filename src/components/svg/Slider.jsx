import { css } from "@emotion/css";
import React from "react";

const Slider = ({ heading }) => {
  let rotation = 0;
  if (heading === "left") rotation = "90deg";
  if (heading === "right") rotation = "-90deg";
  const style = css({
    transform: `rotate(${rotation})`,
  });
  return (
    <svg
      className={style}
      width="21"
      height="13"
      viewBox="0 0 21 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4569 0.759825L10.5456 11.4998L0.454788 0.583074"
        stroke="#C8C8C8"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Slider;
