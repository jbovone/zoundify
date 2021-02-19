import styled from "@emotion/styled";
import { palette } from "../../../theme/colors";
import { sizes } from "../../../theme/sizing";

const Text = styled.p(({ caption }) => ({
  fontSize: caption ? sizes.cap : sizes.p,
  color: palette.fontSecondary,
}));

export default Text;
