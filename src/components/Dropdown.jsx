import { css } from "@emotion/css";
import React, { useEffect, useRef, useCallback } from "react";
import { palette } from "../theme/colors";
import Text from "./normalizers/typography/text";

const Dropdown = ({
  top,
  bottom,
  left,
  right,
  data,
  onClick = () => console.log("clicked"),
  show,
  setShow,
}) => {
  const style = css({
    position: "absolute",
    display: show ? "block" : "none",
    padding: "22px 10px",
    maxWidth: "fit-content",
    zIndex: 100000,
    top: top && 57,
    bottom: bottom && 50,
    left: left && 0,
    right: right && 15,
    background: palette.backgroundFooter,
    ".decorator": {
      width: "22px",
      height: "22px",
      transform: "rotate(45deg)",
      background: palette.backgroundFooter,
      position: "absolute",
      top: top && -5,
      bottom: bottom && -5,
      left: left && 7,
      right: right && 7,
      zIndex: 0,
    },
    ".option": {
      padding: 10,
      cursor: "pointer",
      zIndex: 100,
      color: palette.fontHighlight,
      ":hover": {
        background: palette.fontSecondary,
      },
    },
  });
  const ref = useRef();
  const checkOrigin = useCallback(
    (e) => {
      if (!ref.current.contains(e.target)) {
        setShow(false);
      }
    },
    [setShow]
  );

  useEffect(() => {
    window.addEventListener("click", checkOrigin);
    return () => {
      window.removeEventListener("click", checkOrigin);
    };
  }, [ref, checkOrigin]);

  function handleClick(option) {
    window.removeEventListener("click", checkOrigin);
    setShow(false);
    onClick(option);
  }
  return (
    <article className={style} ref={ref}>
      {data.map((option) => (
        <Text
          className="option"
          key={option}
          onClick={() => handleClick(option)}
        >
          {option}
        </Text>
      ))}
      <div className="decorator" />
    </article>
  );
};

export default Dropdown;
