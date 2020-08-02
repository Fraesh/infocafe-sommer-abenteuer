import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const InputEl = styled.input`
  border: none;
  background: none;
  color: inherit;
  font-family: Indie Flower;
  font-weight: bold;
  border-bottom: 2px dotted ${theme.secondary};
  font-size: 1.1rem;
  margin: 0 1ch;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;

  font-family: Indie Flower;
  font-weight: bold;
  font-size: 1.1rem;
`;
export const AnswerField = ({
  answer = "",
  template = "_",
  onChange,
  disabled,
  answered,
  style,
}) => {
  const a = Array.isArray(answer) ? answer : [answer];
  const [state, setState] = React.useState(a.map(() => ""));
  React.useEffect(() => {
    if (answered) {
      setState(a);
    }
  }, [answered, answer]);
  const templateArray = template.split("_");

  const setInputs = (i, v) => {
    if (v.length > a[i].length) return;
    let newState = JSON.parse(JSON.stringify(state));
    newState[i] = v;
    setState(newState);
    onChange(newState);
  };

  return (
    <Container style={style}>
      {templateArray.map((t, i) => {
        if (i < a.length) {
          return (
            <>
              {t}
              <InputEl
                style={{ width: `${a[i].length + 2}ch` }}
                disabled={disabled}
                value={state[i]}
                onChange={(e) => setInputs(i, e.target.value)}
                type="text"
              />
            </>
          );
        } else {
          return t;
        }
      })}
    </Container>
  );
};
