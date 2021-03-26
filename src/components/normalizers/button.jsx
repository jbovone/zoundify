import styled from "@emotion/styled";
import { flex } from "../../helpers";
import { sizes } from "../../theme/sizing";

const Button = styled.button(({ cssProps }) => ({
  background: "unset",
  border: "none",
  cursor: "pointer",
  color: "inherit",
  outline: "none",
  fontSize: sizes.h2,
  minWidth: 30,
  ...flex("center", "center", "row"),
  ...cssProps,
}));

export default Button;
