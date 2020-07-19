import React from "react";
import styled from "styled-components";
import { isMobile } from "../../helper/isMobile";
import { theme } from "../../theme";

const Container = styled.div`
  position: relative;
  padding: ${isMobile() ? 1.5 : 3}rem;
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  &:first-letter {
    font-size: 3rem;
    line-height: 1;
    font-family: Aclonica;
    float: left;
    font-weight: bold;
    color: ${theme.primary};
    text-shadow: ${theme.textShadow};
    padding-right: 0.125em;
  }

  ul {
    padding-left: 1rem;
  }
`;

const Corner = styled.div`
  position: absolute;
  height: 6rem;
  width: 6rem;
  background-image: url("/img/border.svg");
`;
const CornerTL = styled(Corner)`
  transform: rotate(90deg);
  top: -0.5rem;
  left: -0.5rem;
`;

const CornerTR = styled(Corner)`
  transform: rotate(180deg);
  top: -0.5rem;
  left: calc(100% - 5.5rem);
`;
const CornerBL = styled(Corner)`
  transform: rotate(0deg);
  top: calc(100% - 5.5rem);
  left: -0.5rem;
`;
const CornerBR = styled(Corner)`
  transform: rotate(-90deg);
  top: calc(100% - 5.5rem);
  left: calc(100% - 5.5rem);
`;
export const Story = ({ children, style }) => {
  return (
    <Container style={style}>
      <CornerBL />
      <CornerBR />
      <CornerTL />
      <CornerTR />
      {children}
    </Container>
  );
};
