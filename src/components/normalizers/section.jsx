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
});

export default Section;

/*

::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb:hover {
  background: #f90000;
}
::-webkit-scrollbar-thumb:active {
  background: #ff2b2b;
}
::-webkit-scrollbar-track {
  background: #e80000;
  border: 0px none #ffffff;
  border-radius: 53px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
*/
