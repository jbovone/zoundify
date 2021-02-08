import { css } from "@emotion/css";
import React from "react";
import { sizes } from "../theme/sizing";
import HighLight from "./normalizers/typography/highlighted";

const style = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflowY: "hiddh",
  width: "100%",
  height: "500px",
});
const Error404 = () => {
  return (
    <section className={style}>
      <HighLight size={sizes.h1}>Ups! Something went wrong...</HighLight>
    </section>
  );
};

export default Error404;
