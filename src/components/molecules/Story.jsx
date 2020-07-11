import React from "react";
import styled from "styled-components";
import { isMobile } from "../../helper/isMobile";

const Container = styled.div`
  position: relative;
  padding: ${isMobile() ? 1.5 : 3}rem;
  &:first-letter {
    font-size: 3rem;
    line-height: 1;
    font-family: Aclonica;
    float: left;
    font-weight: bold;
    color: #460202;
    text-shadow: 0px 0px 15px rgba(150, 0, 0, 0.6);
    padding-right: 0.125em;
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
export const Story = ({ children }) => {
  return (
    <Container>
      <CornerBL />
      <CornerBR />
      <CornerTL />
      <CornerTR />
      {children}
    </Container>
  );
};
