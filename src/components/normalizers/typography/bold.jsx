import styled from "@emotion/styled";
import { palette } from "../../../theme/colors";
import { sizes } from "../../../theme/sizing";

const Bold = styled.span(({ size = sizes.p }) => ({
  color: palette.fontSecondary,
  fontSize: size,
  fontWeight: "bold",
  textAlign: "center",
  letterSpacing: 1,
}));

export default Bold;
