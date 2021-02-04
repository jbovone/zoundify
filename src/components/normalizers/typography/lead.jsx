import styled from "@emotion/styled";
import { palette } from "../../../theme/colors";
import { sizes } from "../../../theme/sizing";

const Lead = styled.span(({ size = sizes.p }) => ({
  color: palette.fontSecondary,
  fontSize: size || 13,
  fontWeight: "lighter",
  textAlign: "center",
  letterSpacing: 3,
  textTransform: "uppercase",
}));

export default Lead;
