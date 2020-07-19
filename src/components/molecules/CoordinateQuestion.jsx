import React from "react";
import { H3 } from "../atoms/H3";
import styled from "styled-components";
import { theme } from "../../theme";
import { CoordinateField } from "../atoms/CoordinateField";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
`;
export const CoordinateQuestion = ({ question, answer, solved, onSolve }) => {
  const [answered, setAnswered] = React.useState(false);

  React.useState(() => {
    if (solved) {
      setAnswered(true);
    }
  }, [solved]);

  const checkValue = (v) => {
    if (
      !v.some((v, i) => {
        return v !== answer[i];
      })
    ) {
      setAnswered(true);
      onSolve();
    }
  };

  return (
    <Container>
      <H3 style={{ marginBottom: "2rem" }}>{question}</H3>
      <CoordinateField
        style={{ color: !answered ? theme.primary : theme.green }}
        disabled={answered}
        coordinate={answer}
        answered={answered}
        onChange={(e) => {
          checkValue(e);
        }}
      />
    </Container>
  );
};
