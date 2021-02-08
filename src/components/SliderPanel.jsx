import { css } from "@emotion/css";
import React from "react";
import Button from "./normalizers/button";
import Slider from "./svg/Slider";

const style = css({
  padding: 5,
  svg: {
    margin: "0 8px",
    width: "15px",
    height: "15px",
    "&:hover": {
      filter: "brightness(2)",
    },
    button: {
      zIndex: 1000,
    },
  },
});

const SliderPanel = ({ onClick }) => {
  return (
    <span className={style}>
      <Button aria-label="left" onClick={() => onClick("left")}>
        <Slider heading="left" />
      </Button>
      <Button aria-label="right" onClick={() => onClick("right")}>
        <Slider heading="right" />
      </Button>
    </span>
  );
};

export default SliderPanel;
