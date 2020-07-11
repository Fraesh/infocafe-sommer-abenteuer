import React from "react";
import { config } from "../../config";
import { StoreContext } from "../../helper/store";
import { TableOfContents } from "../molecules/TableOfContents";

export const ConfiguredTableOfContents = ({ unlocked = Infinity }) => {
  const { getChapterState } = React.useContext(StoreContext);
  const chapters = config.chapters;
  let content = [];
  chapters.forEach((c, i) => {
    const hidden = i >= unlocked;
    const state = hidden ? "DISABLED" : getChapterState(i + 1);
    content.push({
      label: !hidden ? `Kapitel ${i + 1}` : "????",
      disabled: state === "DISABLED",
      solved: state === "SOLVED",
      to: `kapitel${i + 1}`,
    });
  });

  return <TableOfContents content={content} />;
};
