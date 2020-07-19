import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const InputEl = styled.input`
  border: none;
  background: none;
  color: inherit;
  font-family: Indie Flower;
  font-weight: bold;
  font-size: 1.1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px dotted ${theme.secondary};
  font-family: Indie Flower;
  font-weight: bold;
  font-size: 1.1rem;
`;
export const CoordinateField = ({
  coordinate,
  onChange,
  disabled,
  answered,
  style,
}) => {
  const [state, setState] = React.useState(["", "", "", ""]);

  React.useEffect(() => {
    if (answered) {
      setState(coordinate);
    }
  }, [answered, coordinate]);

  const setInputs = (i, v) => {
    if (v.length > coordinate[i].length) return;
    let newState = JSON.parse(JSON.stringify(state));
    newState[i] = v;
    setState(newState);
    onChange(newState);
  };

  return (
    <Container style={style}>
      N°{" "}
      <InputEl
        style={{ width: "1.5rem" }}
        disabled={disabled}
        placeholder={coordinate[0].replace(/[0-9]/g, "*")}
        value={state[0]}
        onChange={(e) => setInputs(0, e.target.value)}
        type="text"
      />
      .
      <InputEl
        style={{ width: "3.5rem", marginRight: "1rem" }}
        disabled={disabled}
        placeholder={coordinate[1].replace(/[0-9]/g, "*")}
        value={state[1]}
        onChange={(e) => setInputs(1, e.target.value)}
        type="text"
      />{" "}
      E°{" "}
      <InputEl
        style={{ width: "1.5rem" }}
        disabled={disabled}
        placeholder={coordinate[2].replace(/[0-9]/g, "*")}
        value={state[2]}
        onChange={(e) => setInputs(2, e.target.value)}
        type="text"
      />
      .
      <InputEl
        style={{ width: "3.5rem" }}
        disabled={disabled}
        value={state[3]}
        placeholder={coordinate[3].replace(/[0-9]/g, "*")}
        onChange={(e) => setInputs(3, e.target.value)}
        type="text"
      />
    </Container>
  );
};
