import React from "react";
import { css } from "@emotion/css";
import { palette } from "../theme/colors";
import { sizes } from "../theme/sizing";

const MainButton = ({ onClick, title, cssProps }) => {
  const style = css({
    border: `1px solid ${palette.fontSecondary}`,
    color: palette.fontHighlight,
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: 20,
    letterSpacing: 2,
    background: "black",
    fontSize: sizes.p,
    padding: "0.7rem 2.2rem",
    margin: "auto",
    textTransform: "uppercase",
    ":hover": {
      transform: "scale(1.1)",
      border: `2px solid ${palette.fontHighlight}`,
    },
    ...cssProps,
  });
  const placeHolderStyle = css({
    minHeight: 43,
    minWidth: 156,
    bottom: 0,
  });

  return (
    <div className={placeHolderStyle}>
      <button className={style} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default MainButton;
