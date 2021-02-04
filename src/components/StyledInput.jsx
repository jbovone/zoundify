import React from "react";
import { css } from "@emotion/css";
import search from "../assets/Search.svg";

const style = css({
  padding: "1px 0",
  borderRadius: "30px",
  background: "white",
  display: "flex",
  alignItems: "center",

  img: {
    width: 20,
    height: 20,
    marginLeft: "5px",
  },
  input: {
    border: "none",
    height: 20,
    padding: "4px 0",
    outline: "none",
    marginLeft: "5px",
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
