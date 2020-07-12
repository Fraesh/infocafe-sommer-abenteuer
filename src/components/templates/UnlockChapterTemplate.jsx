import React from "react";

import { Parchment } from "../atoms/Parchment";
import { H1 } from "../atoms/H1";
import { Story } from "../molecules/Story";
import { H4 } from "../atoms/H4";
import { StoreContext } from "../../helper/store";

export const UnlockChapterTemplate = ({ chapter, date }) => {
  const { solveChapter } = React.useContext(StoreContext);

  React.useEffect(() => {
    solveChapter(chapter);
  }, []);
  return (
    <Parchment>
      <H1>Glückwunsch!</H1>
      <Story>
        Ihr habt das {chapter}. Kapitel des Abenteuers abgeschlossen! Gönnt euch
        eine wohlverdiente Rast, bald geht es weiter.
        <br />
        <br />
        Das nächste Kapitel offenbart sich euch am
        <br />
        <br />
        <H4>{date}</H4>
        Kehrt dann zum letzten Ort eures Abenteuers zurück um fortzufahren!
      </Story>
    </Parchment>
  );
};
