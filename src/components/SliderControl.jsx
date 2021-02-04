import React, { useState } from "react";
import Slider from "./svg/Slider";
import { css } from "@emotion/css";
import { palette } from "../theme/colors";

const SliderControl = ({ heading }) => {
  const { fontSecondary, fontHighlight } = palette;
  const [hover, setHover] = useState(false);
  const direction = {
    left: "rotate(90deg)",
    right: "rotate(-90deg)",
  };

  return (
    <span
      className={css({
        cursor: "pointer",
        transform: heading && direction[heading],
      })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Slider fill={hover ? fontHighlight : fontSecondary} />
    </span>
  );
};

export default SliderControl;
