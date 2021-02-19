import React from "react";
import { css } from "@emotion/css";
import { palette } from "../../theme/colors";

const Main = ({ children, rAsideWidth, lAsideWidth }) => {
  const style = css({
    width: "100vw",
    height: "100vh",
    maxHeight: "100vh",
    minHeight: "100vh",
    display: "grid",
    background: palette.backgroundBody,
    gridTemplateColumns: `${lAsideWidth}px 1fr ${rAsideWidth}px`,
    gridTemplateRows: "8.5vh 1fr 10vh",
    gridTemplateAreas: `
    'aaa nav zzz' 
    'as1 viw as2' 
    'foo foo foo'`,
    "@media (max-width: 1100px)": {
      gridTemplateAreas: `
      'aaa nav nav' 
      'as1 viw viw' 
      'foo foo foo'`,
    },
    "@media (max-width: 640px)": {
      gridTemplateRows: "8.5vh 8fr 2fr",
    },
    "@media (max-width: 500px)": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    "@media (orientation: portrait)": {
      gridTemplateRows: "auto 1fr auto",
    },
  });

  return <main className={style}>{children}</main>;
};

export default Main;
