import styled from "@emotion/styled";
import { palette } from "../../theme/colors";

const Main = styled.main({
  background: palette.backgroundBody,
  color: palette.fontSecondary,
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "stretch",
});

export default Main;
