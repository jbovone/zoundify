import React from "react";
import { css } from "@emotion/css";
import MainButton from "../MainButton";
import Dropdown from "../Dropdown";
import User from "../svg/User";
import Slider from "../svg/Slider";
import ButtonIcon from "../ButtonIcon";
import StyledInput from "../StyledInput";
import SliderPanel from "../SliderPanel";
import Button from "../normalizers/button";

const style = css({
  height: "7vh",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  span: {
    margin: 5,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    "&>*": {
      margin: 5,
    },
  },
  input: {
    margin: "0 10px",
  },
});

const Header = () => {
  return (
    <nav className={style}>
      <span>
        <SliderPanel />
        <StyledInput />
      </span>
      <span>
        <MainButton title="upgrade" />
        <ButtonIcon title="Julian Bovone" Icon={User} active={true} />
        <Button>
          <Slider />
        </Button>
      </span>
    </nav>
  );
};

export default Header;
