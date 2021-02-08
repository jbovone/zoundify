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
      <path
        id="Home"
        d="M30 28V9.59091L18 2.5L6 9.59091V28H15.4737V18.7955H18H20.5263V28H30Z"
        fill={active ? fontHighlight : backgroundBody}
        stroke={hover ? fontHighlight : active ? fontHighlight : fontSecondary}
        stroke-width="2"
      />
    </svg>
  );
};

export default Home;
