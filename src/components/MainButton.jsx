import React from "react";
import Button from "./normalizers/button";
import { css, cx } from "@emotion/css";
import { palette } from "../theme/colors";
import { sizes } from "../theme/sizing";

const style = css({
  border: `1px solid ${palette.fontSecondary}`,
  color: palette.fontHighlight,
  fontWeight: "bold",
  borderRadius: 20,
  letterSpacing: 2,
  fontSize: sizes.p,
  padding: "0.75rem 2.5rem",
  textTransform: "uppercase",
  ":hover": {
    transform: "scale(1.1)",
    border: `2px solid ${palette.fontHighlight}`,
  },
  "@media(max-width: 640px)": {
    padding: "0.7rem 2.2rem",
    fontSize: "0.9rem",
  },
});
const MainButton = ({ onClick, title, className }) => {
  return (
    <Button className={cx(style, className)} onClick={onClick}>
      {title}
    </Button>
  );
};

export default MainButton;
