import React from "react";
import { palette } from "../../theme/colors";

const Home = ({ hover, active }) => {
  const { fontSecondary, fontHighlight, backgroundBody } = palette;
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 35 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 2">
        <rect width="35" height="32" fill="#121212" />
        <path
          id="Home"
          d="M30 28V9.59091L18 2.5L6 9.59091V28H15V18.7955H18H20.7772L21 28H30Z"
          fill={active ? fontHighlight : backgroundBody}
          stroke={
            hover ? fontHighlight : active ? fontHighlight : fontSecondary
          }
          stroke-width="2"
        />
      </g>
    </svg>
  );
};

export default Home;
