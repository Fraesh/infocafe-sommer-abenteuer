import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ParchmentComponent = styled(motion.div)`
  box-model: border-box;
  background: url("img/texture.jpg");
  width: 100%;
  max-width: 860px;
  padding: 3rem 2rem;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  align-items: center;
  font-family: Indie Flower;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.3),
    0px 0px 5px 3px rgba(255, 100, 100, 0.4),
    0px 0px 36px 10px rgba(0, 0, 0, 0.7),
    inset 0px 0px 7vw 2vw rgba(50, 10, 10, 0.6);
`;

const transition = { duration: 0.4, ease: "easeInOut" };
export const Parchment = ({ children }) => {
  return (
    <ParchmentComponent
    // initial={{
    //   height: 10,
    // }}
    // animate={{
    //   height: "auto",
    //   transition,
    // }}
    // exit={{ height: 10, transition }}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
        initial={{
          opacity: 0,
          filter: "blur(12px)",
        }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(12px)" }}
      >
        {children}
      </motion.div>
    </ParchmentComponent>
  );
};
