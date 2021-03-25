import React from "react";
import { css, cx } from "@emotion/css";

const styleAsClose = css({
  "&>*": {
    transition: "all linear .3s",
    width: "80%",
  },
  "div:nth-of-type(1)": {
    transform: "rotate(45deg) translate(50%)",
  },
  "div:nth-of-type(2)": {
    opacity: 0,
    transform: "translateX(100%)",
  },
  "div:nth-of-type(3)": {
    transform: "rotate(-45deg) translate(50%)",
  },
});
const styleAsOpen = css({
  "&>*": {
    transition: "all linear .3s",
    opacity: 1,
    transform: "none",
  },
});

const ShowMenu = ({ setShowMenu, open, cssProps }) => {
  const style = css({
    transition: "linear 3s",
    width: 25,
    height: 30,
    background: "black",
    margin: "auto 15px",
    top: 25,
    outline: "none",
    border: "none",
    cursor: "pointer",
    ...cssProps,

    "&>*": {
      width: "90%",
      height: "2px",
      margin: "5px 0px",
      background: "white",
    },
  });

  return (
    <button
      onClick={() => setShowMenu((show) => !show)}
      className={cx(style, {
        [styleAsClose]: open,
        [styleAsOpen]: !open,
      })}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

export default ShowMenu;
