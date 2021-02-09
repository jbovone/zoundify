import styled from "@emotion/styled";

const Aside = styled.aside(({ width }) => ({
  minWidth: width,
  width: width,
  resize: "vertical",
}));

export default Aside;
