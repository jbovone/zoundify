import React from "react";
import { palette } from "../../theme/colors";

const Browse = ({ active, hover }) => {
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
        id="Rectangle 1"
        d="M7.30769 27L4.16916 7H17.5H30.8308L27.6923 27H17.5H7.30769Z"
        fill={active ? fontHighlight : backgroundBody}
        stroke={active ? fontHighlight : hover ? fontHighlight : fontSecondary}
        strokeWidth="2"
      />
      <path
        id="Ellipse 1"
        d="M22 17.2821C22 19.6094 20.0238 21.5642 17.5 21.5642C14.9762 21.5642 13 19.6094 13 17.2821C13 14.9549 14.9762 13 17.5 13C20.0238 13 22 14.9549 22 17.2821Z"
        fill={backgroundBody}
        stroke={active ? backgroundBody : hover ? fontHighlight : fontSecondary}
        strokeWidth="2"
      />
      <line
        id="Line 1"
        x1="9.38098"
        y1="3"
        x2="25.6191"
        y2="3"
        stroke={active ? fontHighlight : hover ? fontHighlight : fontSecondary}
        strokeWidth="3"
      />
    </svg>
  );
};

export default Browse;
