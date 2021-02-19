import styled from "@emotion/styled";
import { palette } from "../../theme/colors";

const Section = styled.section({
  width: "100%",
  gridArea: "viw",
  overflowY: "scroll",
  "@media(max-width:1100px)": {
    gridColumn: "1 / span 3",
  },
  "::-webkit-scrollbar": {
    width: "17px",
    height: "11px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#373737",
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
