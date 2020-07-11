import React from "react";
import styled from "styled-components";
import { isMobile } from "../../helper/isMobile";
import { H4 } from "../atoms/H4";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: inherit;
  text-decoration: none;
  ${(p) => (p.solved ? " text-decoration:line-through; opacity:.5;" : "")}
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  border-top: 1px dotted black;
  margin: 0.5rem;
`;
export const TableOfContents = ({ content }) => {
  return (
    <Container>
      <H4>Kapitel</H4>
      {content.map((c) => {
        return (
          <Row solved={c.solved} to={c.to}>
            {c.label}
            <Line />
            {c.solved ? "Gelöst" : "Offen"}
          </Row>
        );
      })}
    </Container>
  );
};
