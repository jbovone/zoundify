import React from "react";
import { css } from "@emotion/css";
import search from "../assets/Search.svg";

const style = css({
  padding: "3px 2px",
  borderRadius: "30px",
  background: "white",
  display: "flex",
  alignItems: "center",
  minWidth: 140,

  img: {
    width: 20,
    height: 20,
    marginLeft: "12px",
  },
  input: {
    border: "none",
    height: 20,
    padding: "13px 0",
    outline: "none",
    marginLeft: "5px",
    width: "120px",
  },
});

const StyledInput = () => {
  return (
    <div className={style}>
      <img src={search} alt="" />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default StyledInput;
