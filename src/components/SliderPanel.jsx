import React from "react";
import Slider from "./SliderControl";

const SliderPanel = () => {
  return (
    <span>
      <Slider heading="left" />
      <Slider heading="right" />
    </span>
  );
};

export default SliderPanel;
