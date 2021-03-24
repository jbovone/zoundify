import React, { useRef } from "react";
import { css, cx } from "@emotion/css";
import MagnifyingGlass from "./svg/MagnifyingGlass";

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
  const ref = useRef(null);

  return (
    <div className={cx(style, className)} onClick={() => ref.current.focus()}>
      <MagnifyingGlass />
      <input ref={ref} type="text" placeholder="Search" />
    </div>
  );
};

export default StyledInput;
