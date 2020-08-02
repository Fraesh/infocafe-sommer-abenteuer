import React from "react";
import { H3 } from "../atoms/H3";
import { TextField } from "../atoms/TextField";
import styled from "styled-components";
import { theme } from "../../theme";

const Rock = styled.div`
  background-image: url("img/rock.jpg");
  background-size: 100%;
  box-shadow: 0px 0.1rem 0.5rem rgba(0, 0, 0, 0.5),
    inset 0px 0px 30px rgba(0, 0, 0, 1);
  border: 2px solid #111;
  padding: 1rem;
  display: flex;
  color: rgba(255, 255, 255, 0.4);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: Rune Slasher;
  max-width: 10rem;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 2rem;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
`;
export const ChoiceQuestion = ({
  choices,
  question,
  answer,
  solved,
  onSolve,
}) => {
  const [answered, setAnswered] = React.useState(false);
  const [state, setState] = React.useState([]);

  React.useState(() => {
    if (solved) {
      setState(answer);
      setAnswered(true);
    }
  }, [solved]);

  const checkValue = (v) => {
    let newState = [];
    if (state.includes(v)) {
      newState = state.filter((s) => s !== v);
    } else {
      newState = [...state, v];
    }
    setState(newState);
    checkSolution(newState);
  };

  const checkSolution = (newState) => {
    if (newState.length === answer.length) {
      if (!answer.some((a) => !newState.includes(a))) {
        onSolve();
      }
    }
  };

  return (
    <Container>
      <H3 style={{ marginBottom: "2rem" }}>{question}</H3>

      <Grid>
        {choices.map((c, i) => {
          return (
            <Board
              primary={c[0]}
              secondary={c[1]}
              active={state.includes(i)}
              onClick={() => checkValue(i)}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

const Board = ({ primary, secondary, active, onClick }) => {
  return (
    <Rock onClick={onClick}>
      <div
        style={{
          transition: "all 100ms",
          fontSize: "2rem",
          marginBottom: ".5rem",
          textShadow: active ? "0px 0px 10px rgba(50,255,50,.8)" : "",
        }}
      >
        {primary}
      </div>
      <div
        style={{
          transition: "all 100ms",
          fontSize: "1.5rem",
          textShadow: active ? "0px 0px 10px rgba(50,255,50,.8)" : "",
        }}
      >
        {secondary}
      </div>
    </Rock>
  );
};
