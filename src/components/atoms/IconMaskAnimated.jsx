import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Icon = styled.div`
  width: 3rem;
  height: 3rem;

  margin-bottom: 1rem;
`;

export const IconMaskAnimated = () => {
  return (
    <Icon>
      <motion.div
        style={{
          borderRadius: "50%",
          background: "#C9B18C",
          height: 5,
          width: 5,
        }}
        initial={{ y: 20, x: 28, height: 5 }}
        animate={{
          x: [28, 28, 25, 25, 28, 28, 28, 28, 28],
          height: [5, 5, 5, 5, 5, 5, 0, 5, 5],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          loop: Infinity,
          times: [0, 0.5, 0.51, 0.7, 0.71, 0.8, 0.82, 0.84, 1],
        }}
      />
      <img
        alt="Mundschutz"
        style={{
          objectFit: "contain",
          width: "100%",
          height: "100%",
        }}
        src="img/icons/head-side-mask-solid-noeye.svg"
      ></img>
    </Icon>
  );
};

// #C9B18C
