import React from "react";
import { css } from "@emotion/css";
import { palette } from "../theme/colors";
import Play from "./svg/Play";
import Next from "./svg/Next";
import Skip15 from "./svg/Skip15";

const style = css({
  background: palette.backgroundFooter,
  width: "100%",
  height: "9.5vh",
  position: "fixed",
  bottom: 0,
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ".center-panel": {
    span: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&>*": {
        margin: "0 10px",
        cursor: "pointer",
      },
      marginBottom: 10,
    },
    div: {
      width: "40vw",
      height: 4,
      borderRadius: 30,
      backgroundColor: "#444444",
      margin: "6px",
    },
  },
});
const Footer = () => {
  return (
    <footer className={style}>
      <section></section>
      <section className="center-panel">
        <span>
          <Skip15 invertHeading />
          <Next invertHeading />
          <Play />
          <Next />
          <Skip15 />
        </span>
        <div></div>
      </section>
      <section></section>
    </footer>
  );
};

export default Footer;
