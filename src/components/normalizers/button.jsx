import styled from "@emotion/styled";
import { sizes } from "../../theme/sizing";

const Button = styled.button(({ cssProps }) => ({
  background: "unset",
  border: "none",
  cursor: "pointer",
  color: "inherit",
  outline: "none",
  fontSize: sizes.h2,
  ...cssProps,
}));

export default Button;
