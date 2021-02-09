import React from "react";
import { css } from "@emotion/css";
import { palette } from "../theme/colors";
import Play from "./svg/Play";
import Next from "./svg/Next";
import Skip15 from "./svg/Skip15";
import Slider from "./SliderControl";
import Volume from "./svg/Volume";
import Queque from "./svg/Queque";
import Devices from "./svg/Devices";

const flex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const style = css({
  background: palette.backgroundFooter,
  width: "100%",
  height: "10vh",
  position: "fixed",
  bottom: 0,
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 10000,

  ".panel": {
    "&>*": {
      cursor: "pointer",
    },
    img: {
      height: "60px",
      margin: 10,
    },
  },
  ".center-panel": {
    span: {
      ...flex,
      marginBottom: 10,
      ">*": {
        margin: "0 10px",
      },
    },
  },
  ".right-panel": {
    ...flex,
    marginRight: 20,
    ">*": {
      margin: "0 5px",
    },
  },
});
const Footer = () => {
  return (
    <footer className={style}>
      <section className="panel">
        <img
          src="https://i.scdn.co/image/ab67706f00000003a8f6984bc0b9ffe3272bb614"
          alt=""
        />
      </section>
      <section className="panel center-panel">
        <span>
          <Skip15 invertHeading />
          <Next invertHeading />
          <Play />
          <Next />
          <Skip15 />
        </span>
        <Slider width="40vw" />
      </section>
      <section className="panel right-panel">
        <Devices />
        <Queque />
        <Volume />
        <Slider width="80px" />
      </section>
    </footer>
  );
};

export default Footer;
