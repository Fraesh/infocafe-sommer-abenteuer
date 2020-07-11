import React from "react";
import { TextQuestion } from "../molecules/TextQuestion";
import { RiddleHeading } from "../atoms/RiddleHeading";
import { Divider } from "../atoms/Divider";
import { Story } from "../molecules/Story";
import { motion } from "framer-motion";
const open = {
  height: "auto",
  opacity: 1,
};

const closed = {
  height: 0,
  opacity: 0,
};

export const Riddle = ({
  index,
  heading,
  children,
  question,
  answer,
  type,
  open,
}) => {
  return open ? (
    <>
      <RiddleHeading index={index}>Wer hat das Käsebrot geklaut?</RiddleHeading>
      <Story>{children}</Story>
      <Divider />
      <TextQuestion question={question} answer={answer} />
    </>
  ) : (
    <div
      style={{
        display: "flex",
        margin: ".2rem 0",
        alignItems: "flex-end",
        width: "100%",
      }}
    >
      <div
        style={{
          fontSize: "1rem",
          display: "flex",
          marginRight: "1rem",
        }}
      >
        {heading}
      </div>
      <div style={{ fontSize: ".8rem", opacity: 0.4 }}>Rätsel {index}</div>
    </div>
  );
};
