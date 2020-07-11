import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  width: 100%;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  img {
    width: 100%;
    height: 3rem;
    object-fit: contain;
    margin-bottom: 1rem;
  }
`;

export const IconList = ({ icons }) => {
  return (
    <Container>
      {icons.map((i) => {
        return (
          <Icon>
            {typeof i.src === "string" ? (
              <img alt={i.label} src={i.src} />
            ) : (
              i.src
            )}
            <span>{i.label}</span>
          </Icon>
        );
      })}
    </Container>
  );
};
