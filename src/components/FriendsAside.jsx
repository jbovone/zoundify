import React from "react";
import Aside from "./normalizers/aside";
import background01 from "../assets/aside-friends-background-01.svg";
import background02 from "../assets/aside-friends-background-02.svg";
import HighLight from "./normalizers/typography/highlighted";
import MainButton from "./MainButton";
import { css } from "@emotion/css";
import { sizes } from "../theme/sizing";

const style = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: `url("${background01}") bottom no-repeat, url("${background02}") top no-repeat`,
  backgroundSize: "contain",
  "& > *": {
    margin: "20px 10px",
  },
});

const FriendsAside = () => {
  return (
    <Aside className={style}>
      <HighLight size={sizes.h2}>See what your friends are playing</HighLight>
      <MainButton title="FIND FRIENDS" />
    </Aside>
  );
};

export default FriendsAside;
