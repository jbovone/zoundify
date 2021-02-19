import React, { useState, useRef, useEffect } from "react";
import { css, cx } from "@emotion/css";
import { palette } from "../theme/colors";
import MainButton from "./MainButton";
import SliderPanel from "./SliderPanel";
import StyledInput from "./StyledInput";
import User from "./User";
import { flex } from "../helpers";
import Search from "./Search";

const Navigation = ({ onClick }) => {
  const [swap, setSwap] = useState(true);
  const [fade, setFade] = useState(1);
  const timmer = 320;

  const nav = css({
    gridArea: "nav",
    position: "relative",
    background: palette.backgroundBody,
    paddingLeft: "30px",
    "&>*": {
      margin: "0 .4rem",
    },
    ...flex(),
    "@media(max-width:1100px)": {
      gridColumn: "1 / span 3",
    },
  });

  const pc = css({
    display: "none",
    justifyContent: "space-evenly",
    ".c-structural": {
      flex: 1,
    },
    "@media(min-width:740px)": {
      display: "flex",
    },
  });

  const movile = css({
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    "&>*": {
      transition: `ease-in-out, ${timmer}ms`,
      margin: "0 5px",
    },
    ".upgrade-btn, .search-input, .c-slider, .c-user": {
      opacity: fade,
      transform: `scale(${fade})`,
    },
    ".search-input": {
      flex: 1,
      margin: "0px 1.5rem",
    },
    "@media(min-width:740px)": {
      display: "none",
    },
    "@media(max-width:430px)": {
      ".upgrade-btn": {
        display: "none",
      },
    },
  });

  function swapContentWithFading() {
    setFade(0);
    setTimeout(() => {
      setSwap((s) => !s);
      setTimeout(() => {
        setFade(1);
      }, timmer);
    }, timmer);
  }
  return (
    <>
      <nav className={cx(nav, movile)}>
        <Search variant="header" onClick={swapContentWithFading} />
        {swap ? (
          <StyledInput className="search-input" />
        ) : (
          <>
            <User className="c-user" />
            <MainButton title="upgrade" className="upgrade-btn" />
            <SliderPanel hide className="c-slider" />
          </>
        )}
      </nav>
      <nav className={cx(nav, pc)}>
        <SliderPanel hide />
        <StyledInput className="search-input" />
        <div className="c-structural" />
        <MainButton title="upgrade" />
        <User />
      </nav>
    </>
  );
};
export default Navigation;
