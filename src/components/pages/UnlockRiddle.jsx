import React from "react";
import { UnlockRiddleTemplate } from "../templates/UnlockRiddleTemplate";

export const UnlockRiddle = ({ chapter, riddle, children }) => {
  return (
    <UnlockRiddleTemplate chapter={chapter} riddle={riddle}>
      {children}
    </UnlockRiddleTemplate>
  );
};
