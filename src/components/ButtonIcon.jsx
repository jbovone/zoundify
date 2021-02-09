import React, { useState } from "react";
import Highlighted from "./normalizers/typography/highlighted";
import Bold from "./normalizers/typography/bold";
import Button from "./normalizers/button";
import { css } from "@emotion/css";
import { palette } from "../theme/colors";
import { sizes } from "../theme/sizing";

const ButtonIcon = ({
  title,
  Icon,
  active,
  decorator,
  setActive = () =>
    console.log("hire me and i can complete the views in no time!"),
  size = sizes.p,
}) => {
  const style = css({
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "img, svg": {
      marginRight: "10px",
    },
    span: {
      fontWeight: "bold",
    },
    ":hover": {
      color: palette.fontHighlight,
    },
    ".aside-decorator": {
      height: "26px",
      width: "4px",
      position: "absolute",
      left: 0,
      background: palette.decorator,
    },
  });
  const [hover, setHover] = useState(false);

  return (
    <Button
      className={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setActive(title)}
    >
      {decorator && active && <span className="aside-decorator" />}
      {Boolean(Icon) && <Icon hover={hover} active={active} />}
      {active || hover ? (
        <Highlighted size={size}>{title}</Highlighted>
      ) : (
        <Bold size={size}>{title}</Bold>
      )}
    </Button>
  );
};

export default ButtonIcon;
