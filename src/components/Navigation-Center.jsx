import { css } from "@emotion/css";
import React, { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import MainButton from "./MainButton";
import Button from "./normalizers/button";
import SliderPanel from "./SliderPanel";
import StyledInput from "./StyledInput";
import Slider from "./svg/Slider";
import Dropdown from "./Dropdown";
import User from "./svg/User";

const NavigationCenter = () => {
  const style = css({
    maxWidth: "800px",
    minWidth: "550px",
    margin: 5,
    padding: 2,
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    "&>*": {
      display: "flex",
      "&>*": {
        margin: "0 7px",
      },
    },
  });
  const dropdown = [
    "Private Session",
    "Account",
    "Upgrade Your Account",
    "Settings",
    "Logout",
  ];
  const [show, setShow] = useState(false);
  function menu(item) {
    console.log(item);
    /* do something */
  }
  return (
    <div className={style}>
      <span>
        <SliderPanel />
        <StyledInput />
      </span>
      <span>
        <MainButton title="upgrade" />
        <ButtonIcon title="Julian Bovone" Icon={User} active={true} />
        <Button onClick={() => setShow(true)}>
          <Slider />
        </Button>
        {show && (
          <Dropdown
            top
            right
            data={dropdown}
            show={show}
            setShow={setShow}
            onClick={menu}
          />
        )}
      </span>
    </div>
  );
};

export default NavigationCenter;
