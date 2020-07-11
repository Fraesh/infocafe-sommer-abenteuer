import React from "react";
import styled from "styled-components";
import { isMobile } from "../../helper/isMobile";
import { motion } from "framer-motion";
const Heading = styled(motion.div)`
  margin-top: 2rem;
  position: relative;
  font-family: Aclonica;
  opacity: 0.9;
  white-space: nowrap;
  margin-bottom: 4rem;
  color: #292314;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const R = styled.div`
  position: absolute;
  top: ${(p) => p.f * 1}rem;
  right: ${(p) => p.f * -4.5}rem;
  font-size: ${(p) => p.f * 8}rem;
`;
const Sommer = styled.div`
  color: #460202;
  margin-bottom: ${(p) => p.f * -1}rem;
  font-size: ${(p) => p.f * 4}rem;
`;
const A = styled.div`
  position: absolute;
  top: ${(p) => p.f * 1}rem;
  left: ${(p) => p.f * -6.3}rem;
  font-size: ${(p) => p.f * 8}rem;
`;
const Benteue = styled.div`
  font-size: ${(p) => p.f * 5}rem;
`;

export const Logo = ({ size = 1, responsive = true }) => {
  let f;
  if (responsive) {
    if (isMobile()) {
      f = 0.5;
    } else {
      f = 1;
    }
  } else {
    f = size;
  }
  return (
    <Heading
      f={f}
      transition={{
        duration: 8,
        ease: "easeInOut",
        loop: Infinity,
      }}
      animate={{
        textShadow: [
          "0px 0px 15px rgba(150, 0, 0, 0.6)",
          "0px 0px 20px rgba(200, 50, 50, 1)",
          "0px 0px 15px rgba(150, 0, 0, 0.6)",
        ],
      }}
    >
      <Sommer f={f}>Sommer</Sommer>
      <A f={f}>A</A>
      <Benteue f={f}>benteue</Benteue>
      <R f={f}>r</R>
    </Heading>
  );
};
