import React, { useState } from "react";
import { css, cx } from "@emotion/css";
import MainButton from "./MainButton";
import SliderPanel from "./SliderPanel";
import SearchInput from "./SearchInput";
import User from "./User";
import { flex } from "../helpers";
import SearchBtn from "./SearchBtn";

const Navigation = ({ onClick, showMenu, setShowMenu }) => {
  const [swap, setSwap] = useState(true);
  const [fade, setFade] = useState(1);
  const timmer = 320;

  const nav = css({
    gridArea: "nav",
    position: "relative",
    background: "transparent",
    minHeight: 80,
    "&>*": {
      margin: "0 .4rem",
    },
    ...flex(),
    "@media(max-width:1140px)": {
      gridColumn: "1 / span 3",
      paddingLeft: "50px",
    },
  });

  const desktopStyle = css({
    display: "none",
    justifyContent: "space-evenly",
    ".c-structural": {
      flex: 1,
    },
    "@media(min-width:740px)": {
      display: "flex",
    },
  });

  const withFaddingEffectCSS = {
    opacity: fade,
    transform: `scale(${fade})`,
  };
  const mobileStyle = css({
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    zIndex: 1001,
    "&>*": {
      transition: `ease-in-out, ${timmer}ms`,
      margin: "0 5px",
    },
    ".search-input, .c-slider": {
      ...withFaddingEffectCSS,
    },
    ".search-input": {
      flex: 1,
      margin: "0px 1.5rem",
      maxWidth: "70%",
    },
    "@media(min-width:740px)": {
      display: "none",
    },
    "@media(max-width:430px)": {
      ".upgrade-btn": {
        display: "none",
      },
      ".search-input": {
        maxWidth: "60%",
      },
    },
  });
  const mobileUpgradeButtonExtraCSS = {
    ...withFaddingEffectCSS,
    "@media(max-width:430px)": {
      display: "none",
    },
  };
  const searchButtonExtraCSS = {
    ...withFaddingEffectCSS,
  };

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
      <nav className={cx(nav, mobileStyle)}>
        <SearchBtn
          variant="header"
          onClick={swapContentWithFading}
          cssProps={searchButtonExtraCSS}
          isOpen={!swap}
        />
        {swap ? (
          <SearchInput className="search-input" />
        ) : (
          <>
            <User cssProps={withFaddingEffectCSS} />
            <MainButton
              title="upgrade"
              cssProps={mobileUpgradeButtonExtraCSS}
            />
            <SliderPanel hide className="c-slider" />
          </>
        )}
      </nav>
      <nav className={cx(nav, desktopStyle)}>
        <SliderPanel hide />
        <SearchInput className="search-input" />
        <div className="c-structural" />
        <MainButton title="upgrade" />
        <User />
      </nav>
    </>
  );
};
export default Navigation;
