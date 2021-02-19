import React, { useState } from "react";
import { css, cx } from "@emotion/css";
import ButtonIcon from "./ButtonIcon";
import Button from "./normalizers/button";
import Slider from "./svg/Slider";
import Dropdown from "./Dropdown";
import UserPortrait from "./svg/User-Portrait";

const style = css({
  whiteSpace: "nowrap",
});

const dropdown = [
  "Private Session",
  "Account",
  "Upgrade Your Account",
  "Settings",
  "Logout",
];

const User = ({ className }) => {
  const [show, setShow] = useState(false);
  function menu(item) {
    console.log(item);
    /* do something */
  }
  return (
    <ButtonIcon
      className={cx(style, className)}
      title="Julian Bovone"
      Icon={UserPortrait}
      active={true}
    >
      <Button className="dropdown" onClick={() => setShow(true)}>
        <Slider height="10" />
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
    </ButtonIcon>
  );
};

export default User;
