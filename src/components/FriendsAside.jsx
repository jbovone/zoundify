import React from "react";
import Aside from "./normalizers/aside";
import ReziseBar from "./ReziseBar";
import background from "../assets/friends-background.svg";
import HighLight from "./normalizers/typography/highlighted";
import MainButton from "./MainButton";
import { css } from "@emotion/css";
import { sizes } from "../theme/sizing";
import useResize from "../hooks/useResize";

const style = css({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: `url("${background}") bottom no-repeat`,
  backgroundSize: "cover",
  "& > *": {
    margin: "20px 10px",
  },
  "@media (max-width: 1100px)": {
    display: "none",
  },
});

const FriendsAside = () => {
  const [width, setWidth] = useResize(240);
  return (
    <Aside width={width} className={style}>
      <HighLight size={sizes.h2}>See what your friends are playing</HighLight>
      <MainButton title="FIND FRIENDS" />
      <ReziseBar setWidth={setWidth} left />
    </Aside>
  );
};

export default FriendsAside;
