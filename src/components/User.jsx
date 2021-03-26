import React, { useState } from "react";
import { css } from "@emotion/css";
import ButtonIcon from "./ButtonIcon";
import Button from "./normalizers/button";
import Slider from "./svg/Slider";
import Dropdown from "./Dropdown";
import UserPortrait from "./svg/User-Portrait";
import { flex } from "../helpers";

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

const User = ({ cssProps }) => {
  const [show, setShow] = useState(false);
  function menu(item) {
    console.log(item);
    /* do something */
  }
  const container = css({
    ...flex(),
    marginRight: "1em",
    ...cssProps,
  });
  return (
    <div className={container}>
      <ButtonIcon
        className={style}
        title="Julian Bovone"
        Icon={UserPortrait}
        active={true}
      >
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
      <Button className="dropdown" onClick={() => setShow(true)}>
        <Slider height="10" />
      </Button>
    </div>
  );
};

export default User;
