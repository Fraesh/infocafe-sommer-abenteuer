import React from "react";
import styled from "styled-components";

export const Seal = ({ active }) => {
  return (
    <img
      src={active ? "img/rune_on.png" : "img/rune_off.png"}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        maxWidth: "200px",
        maxHeight: "200px",
      }}
    />
  );
};
