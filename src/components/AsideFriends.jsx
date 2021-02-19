import React from "react";
import Aside from "./normalizers/aside";
import ReziseBar from "./ReziseBar";
import background from "../assets/friends-background.svg";
import HighLight from "./normalizers/typography/highlighted";
import MainButton from "./MainButton";
import { css } from "@emotion/css";
import { sizes } from "../theme/sizing";
import { flex } from "../helpers";

const style = css({
  display: "flex",
  position: "relative",
  ...flex(),
  gridArea: "as2",
  flexDirection: "column",
  background: `url("${background}") bottom no-repeat`,
  backgroundSize: "cover",
  "& > *": {
    margin: "20px 10px",
  },
  "@media (max-width: 1100px)": {
    display: "none",
  },
});

const FriendsAside = ({ setWidth }) => {
  return (
    <Aside className={style}>
      <HighLight size={sizes.h2}>See what your friends are playing</HighLight>
      <MainButton title="FIND FRIENDS" />
      <ReziseBar setWidth={setWidth} left />
    </Aside>
  );
};

export default FriendsAside;
