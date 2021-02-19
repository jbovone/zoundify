import styled from "@emotion/styled";
import { palette } from "../../../theme/colors";
import { sizes } from "../../../theme/sizing";

const Lead = styled.span(({ size = sizes.cap }) => ({
  color: palette.fontSecondary,
  fontSize: size,
  fontWeight: "lighter",
  textAlign: "center",
  letterSpacing: 3,
  textTransform: "uppercase",
}));

export default Lead;
