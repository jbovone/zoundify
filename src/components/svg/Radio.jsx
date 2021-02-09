import React from "react";
import { palette } from "../../theme/colors";

const Radio = ({ active, hover }) => {
  const { fontSecondary, fontHighlight, backgroundBody } = palette;
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 3">
        <rect width="32" height="32" fill={backgroundBody} />
        <g id="Radio">
          <circle
            id="Ellipse 3"
            cx="16"
            cy="16"
            r="13"
            stroke={
              active ? fontHighlight : hover ? fontHighlight : fontSecondary
            }
            stroke-width={active ? 3 : 2}
          />
          <circle
            id="Ellipse 4"
            cx="16"
            cy="16"
            r="8"
            stroke={
              active ? fontHighlight : hover ? fontHighlight : fontSecondary
            }
            stroke-width={active ? 3 : 2}
          />
          <circle
            id="Ellipse 5"
            cx="16"
            cy="16"
            r="3"
            fill={active ? fontHighlight : hover && fontHighlight}
            stroke-width={active ? 3 : 2}
            stroke={active ? fontHighlight : fontSecondary}
          />
        </g>
        <path
          id="Polygon 3"
          d="M15.6896 11.2372L15.7696 11.2243L15.8495 11.2373L20.2248 11.9487L25.7112 1.5H15.7692H5.82483L11.2765 11.9489L15.6896 11.2372Z"
          fill={backgroundBody}
          stroke={backgroundBody}
        />
        <path
          id="Polygon 5"
          d="M15.6896 21.2628L15.7696 21.2757L15.8495 21.2627L20.2248 20.5513L25.7112 31H15.7692H5.82483L11.2765 20.5511L15.6896 21.2628Z"
          fill={backgroundBody}
          stroke={backgroundBody}
        />
      </g>
    </svg>
  );
};

export default Radio;
