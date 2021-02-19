import React from "react";
import { css } from "@emotion/css";
import HighLight from "./normalizers/typography/highlighted";
import Button from "./normalizers/button";

const style = css({
  position: "absolute",
  top: 15,
  left: 15,
  zIndex: 10000000,
});

const ShowMenu = ({ setShowMenu }) => {
  return (
    <Button
      className={style}
      onClick={() =>
        setShowMenu((show) =>
          document.querySelector(":root").clientWidth > 1024 ? true : !show
        )
      }
    >
      <HighLight className="menu-button" size={25}>
        ...
      </HighLight>
    </Button>
  );
};

export default ShowMenu;
