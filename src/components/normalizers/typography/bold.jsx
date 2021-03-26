import styled from "@emotion/styled";
import { palette } from "../../../theme/colors";
import { sizes } from "../../../theme/sizing";

const Bold = styled.span(
  ({ size = sizes.p, mt, mb, mr, ml, align, color }) => ({
    color: color ? color : palette.fontSecondary,
    fontSize: size,
    fontWeight: "bold",
    textAlign: align ? align : "center",
    letterSpacing: 1,
    marginTop: mt ? mt : 0,
    marginBottom: mb ? mb : 0,
    marginLeft: mr ? mr : 0,
    marginRight: ml ? ml : 0,
  })
);

export default Bold;
