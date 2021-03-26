import { css, cx } from "@emotion/css";
import React from "react";
import { flex } from "../helpers";
import Button from "./normalizers/button";
import Slider from "./svg/Slider";

const SliderPanel = ({ onClick = () => {}, hide, className }) => {
  const style = css({
    padding: 5,
    margin: 0,
    ...flex(),
    svg: {
      margin: 0,
      width: "15px",
      height: "15px",
      "&:hover": {
        filter: "brightness(2)",
      },
      button: {
        zIndex: 1000,
      },
    },
    "@media(max-width: 570px)": {
      display: hide && "none",
    },
  });
  return (
    <div className={cx(style, className)}>
      <Button aria-label="left" onClick={() => onClick("left")}>
        <Slider heading="left" />
      </Button>
      <Button aria-label="right" onClick={() => onClick("right")}>
        <Slider heading="right" />
      </Button>
    </div>
  );
};

export default SliderPanel;
