import React from "react";
import { css, cx } from "@emotion/css";
import Search from "./Search";

const style = css({
  padding: "3px 2px",
  borderRadius: "30px",
  background: "white",
  display: "flex",
  alignItems: "center",
  svg: {
    marginLeft: "12px",
  },
  input: {
    border: "none",
    height: 20,
    padding: "13px 0",
    outline: "none",
    margin: "0 8px",
    width: 130,
  },
});

const StyledInput = ({ className }) => {
  return (
    <div className={cx(style, className)}>
      <Search />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default StyledInput;
