import styled from "@emotion/styled";
import { palette } from "../../theme/colors";

const Section = styled.section({
  background: palette.backgroundMain,
  maxWidth: "1440px",
  minWidth: "640px",
  color: palette.fontSecondary,
  overflowY: "scroll",
  overflowX: "hidden",

  "::-webkit-scrollbar": {
    width: "17px",
    height: "11px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#373737",
    height: "20px",
  },
  "::-webkit-scrollbar-track": {
    background: palette.backgroundBody,
  },
  "::-webkit-scrollbar-button": {
    width: 30,
    height: 30,
    color: "white",
  },
});

export default Section;
