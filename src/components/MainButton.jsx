import React from "react";
import Button from "./normalizers/button";
import { css } from "@emotion/css";
import { palette } from "../theme/colors";

const style = css({
  border: `1px solid ${palette.fontSecondary}`,
  color: palette.fontHighlight,
  fontWeight: "bold",
  borderRadius: 20,
  letterSpacing: 2,
  fontSize: 10.5,
  padding: "9px 30px",
  textTransform: "uppercase",
  ":hover": {
    transform: "scale(1.1)",
    border: `2px solid ${palette.fontHighlight}`,
  },
});
const MainButton = ({ onClick, title }) => {
  return (
    <Button className={style} onClick={onClick}>
      {title}
    </Button>
  );
};

export default MainButton;
