import React from "react";
import { css } from "@emotion/css";
import add from "../assets/mock-add.png";

const style = css({
  img: {
    margin: "auto",
    width: "100%",
  },
  paddingBottom: 25,
});

const Header = () => {
  return (
    <header className={style}>
      <img src={add} alt="sponsored" />
    </header>
  );
};

export default Header;
