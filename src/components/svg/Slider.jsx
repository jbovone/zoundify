import React from "react";

const Slider = ({ fill }) => {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 1.34254L11 12L1 0.999999" stroke={fill} stroke-width="2" />
    </svg>
  );
};

export default Slider;
