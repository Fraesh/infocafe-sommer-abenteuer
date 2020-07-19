import React from "react";
import { StoreContext } from "../../helper/store";

export const UnlockRiddleTemplate = ({ chapter, riddle, children }) => {
  const { solveRiddle } = React.useContext(StoreContext);

  React.useEffect(() => {
    solveRiddle(chapter, riddle);
  }, []);
  return children;
};
