import React from "react";
import { palette } from "../../theme/colors";

const Home = ({ hover, active }) => {
  const { fontSecondary, fontHighlight } = palette;
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 5">
        <rect width="35" height="32" fill="#121212" />
        <path
          id="Icon PLus"
          d="M17 8.57143V16M17 16V24.5714M17 16L25.5714 16M17 16L8.42857 16M29 16C29 22.6274 23.6274 28 17 28C10.3726 28 5 22.6274 5 16C5 9.37258 10.3726 4 17 4C23.6274 4 29 9.37258 29 16Z"
          stroke={hover ? fontHighlight : fontSecondary}
          stroke-width="1.4"
        />
      </g>
    </svg>
  );
};

export default Home;
