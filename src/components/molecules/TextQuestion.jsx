import React from "react";
import { H3 } from "../atoms/H3";
import { TextField } from "../atoms/TextField";
import styled from "styled-components";
import { theme } from "../../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
`;
export const TextQuestion = ({ question, answer, onSolve }) => {
  const [answered, setAnswered] = React.useState(false);

  const checkValue = (v) => {
    if (v === answer) {
      setAnswered(true);
      onSolve();
    }
  };
  return (
    <Container>
      <H3 style={{ marginBottom: "2rem" }}>{question}</H3>
      <TextField
        style={{ color: !answered ? theme.primary : theme.green }}
        disabled={answered}
        onChange={(e) => checkValue(e.target.value)}
      />
    </Container>
  );
};
