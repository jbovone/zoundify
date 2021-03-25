import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";

const postitioningCSS = {
  position: "absolute !important",
  zIndex: 100000,
};

const menuBtnExtraCSS = {
  ...postitioningCSS,
  top: 25,
  "@media (min-width: 1100px)": {
    display: "none",
    visibility: "none",
    height: "0",
    width: "0px !important",
  },
};
const h2Style = css({
  ...postitioningCSS,
  color: "white",
  top: 0,
  fontSize: 42,
  marginLeft: 10,
  "@media (max-width: 1100px)": {
    display: "none",
  },
});

const WithMenu = ({ MenuBtn, setShowMenu, open }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleRezise() {
      if (width > 1100 && open === false) {
        setShowMenu(() => true);
      }
      setWidth(
        window
          .getComputedStyle(document.querySelector(":root"))
          .width.replace("px", "")
      );
    }

    window.addEventListener("resize", handleRezise);
    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  }, [width, setWidth, setShowMenu, open]);

  return (
    <>
      <MenuBtn cssProps={menuBtnExtraCSS} {...{ open, setShowMenu }} />
      <h2 className={h2Style}>...</h2>
    </>
  );
};

export default WithMenu;
