import React from "react";
import { TextQuestion } from "../molecules/TextQuestion";
import { RiddleHeading } from "../atoms/RiddleHeading";
import { Divider } from "../atoms/Divider";
import { Story } from "../molecules/Story";
import { motion } from "framer-motion";
import { StoreContext } from "../../helper/store";
const openPose = {
  height: "auto",
  opacity: 1,
};

const closedPose = {
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
  const [openState, setOpen] = React.useState(false);
  const state = getRiddleState(chapter, index);
  const open = state === "ACTIVE" || openState;
  return (
    <>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        initial={closedPose}
        animate={open ? openPose : closedPose}
      >
        <RiddleHeading
          index={index}
          solved={state === "SOLVED"}
          onClick={() => {
            if (state === "SOLVED") {
              setOpen(false);
            }
          }}
        >
          {heading}
        </RiddleHeading>
        <Story>{children}</Story>
        <Divider />
        <TextQuestion
          solved={state === "SOLVED"}
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
        onClick={() => {
          if (state === "SOLVED") {
            setOpen(true);
          }
        }}
        animate={open ? closedPose : openPose}
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
