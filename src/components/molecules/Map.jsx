import React from "react";
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import styled from "styled-components";
import { theme } from "../../theme";

const Container = styled.div`
  flex: auto;
  overflow: hidden;
  position: relative;
  height: 600px;
  height: min(70vw, 600px);
  min-height: min(70vw, 600px);
  width: calc(100% + 6rem);
  border: 0.5rem solid ${theme.secondary};
  margin: 0rem -3rem 2rem -3rem;
  background-color: ${theme.secondary};
  box-shadow: 0px 5px 0.5rem 0px rgba(50, 0, 0, 0.6),
    inset 0px 0px 0.5rem 0px rgba(0, 0, 0, 0.6);
`;
export const Map = ({ src }) => {
  return (
    <Container>
      <div style={{ position: "absolute", height: "100%", width: "100%" }}>
        <PinchZoomPan position="center" zoomButtons={false}>
          <img alt="Karte" src={src} />
        </PinchZoomPan>
      </div>
    </Container>
  );
};
