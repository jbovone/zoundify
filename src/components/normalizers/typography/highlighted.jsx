import styled from "@emotion/styled";
import { palette } from "../../../theme/colors";
import { sizes } from "../../../theme/sizing";

const HighLight = styled.span(({ size = sizes.p, cssProps }) => ({
  color: palette.fontHighlight,
  fontSize: size,
  fontWeight: "bold",
  textAlign: "center",
  letterSpacing: 1,
  ...cssProps,
}));

export default HighLight;
