import React from "react";
import { TextQuestion } from "../molecules/TextQuestion";
import { RiddleHeading } from "../atoms/RiddleHeading";
import { Divider } from "../atoms/Divider";
import { Story } from "../molecules/Story";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "../../helper/store";
const open = {
  height: "auto",
  opacity: 1,
};

const closed = {
  height: 0,
  opacity: 0,
  overflow: "hidden",
};

export const Riddle = ({
  index = 0,
  chapter = 0,
  heading,
  children,
  question,
  answer,
  type,
}) => {
  const { getRiddleState, solveRiddle } = React.useContext(StoreContext);
  const state = getRiddleState(chapter, index);
  return (
    <>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        initial={closed}
        animate={state !== "ACTIVE" ? closed : open}
      >
        <RiddleHeading index={index}>{heading}</RiddleHeading>
        <Story>{children}</Story>
        <Divider />
        <TextQuestion
          question={question}
          answer={answer}
          onSolve={() => {
            solveRiddle(chapter, index);
          }}
        />
      </motion.div>

      <motion.div
        style={{
          display: "flex",
          margin: ".2rem 0",
          alignItems: "flex-end",
          width: "100%",
        }}
        animate={state === "ACTIVE" ? closed : open}
      >
        <div
          style={{
            fontSize: "1rem",
            display: "flex",
            marginRight: "1rem",
            opacity: state === "DISABLED" ? 0.4 : 1,
            textDecoration: state === "SOLVED" ? "line-through" : "none",
          }}
        >
          {state === "DISABLED" ? "????" : heading}
        </div>
        <div style={{ fontSize: ".8rem", opacity: 0.4 }}>Rätsel {index}</div>
      </motion.div>
    </>
  );
};
