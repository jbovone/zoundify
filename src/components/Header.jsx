import React, { useState, useEffect } from "react";
import { css, cx } from "@emotion/css";
import Bold from "./normalizers/typography/bold";
import { sizes } from "../theme/sizing";
import { palette } from "../theme/colors";

const slideInStyle = css({
  transition: "all 0.3s",
  opacity: 1,
  transform: "translateY(0%)",
});

const slideOutStyle = (intitialPosition) =>
  css({
    transition: "all 0.3s",
    opacity: 0,
    transform: `translateY(${intitialPosition}%)`,
  });

const placeholderStyle = css({
  position: "absolute",
  height: 50,
  margin: 5,
  marginBottom: 20,
  bottom: 5,
  zIndex: 10000,
});
const Header = ({ scrollValue, title = "Home" }) => {
  const [fade, setFade] = useState(false);
  const headerStyle = css({
    height: fade ? 90 : 110,
    transition: "all 0.3s",
    display: "flex",
    position: "relative",
    top: 0,
    gridRow: 1,
    gridArea: "hea",
    flexFlow: "column-reverse",
    width: "100%",
    zIndex: 100,
    background: palette.backgroundBody,
    paddingBottom: 25,
  });

  useEffect(() => {
    if (scrollValue === 0) {
      setFade(false);
    }
    if (scrollValue >= 100) {
      setFade(true);
    }
  }, [scrollValue]);

  return (
    <header className={headerStyle}>
      <div
        className={cx({
          [slideOutStyle(-30)]: fade,
          [slideInStyle]: !fade,
        })}
      >
        <Bold
          color={palette.fontHighlight}
          size={sizes.h1}
          mr={45}
          mb={20}
          align="left"
        >
          {title}
        </Bold>
      </div>
      <div
        className={cx(placeholderStyle, {
          [slideOutStyle(30)]: !fade,
          [slideInStyle]: fade,
        })}
      >
        <Bold
          color={palette.fontHighlight}
          size={sizes.h2}
          mr={45}
          mb={40}
          align="left"
        >
          {title}
        </Bold>
      </div>
    </header>
  );
};

export default Header;
