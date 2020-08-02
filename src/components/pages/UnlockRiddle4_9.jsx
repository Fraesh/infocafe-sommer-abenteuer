import React from "react";
import { Smaragd } from "../atoms/Smaragd";
import { useParams, useHistory } from "react-router";
import { Parchment } from "../atoms/Parchment";
import { H4 } from "../atoms/H4";
import { Story } from "../molecules/Story";
import { StoreContext } from "../../helper/store";
import { Kapitel4 } from "./Kapitel4";

export const UnlockRiddle4_9 = ({}) => {
  const { id } = useParams();
  let history = useHistory();
  const {
    getSubRiddleState,
    setSubRiddleState,
    getRiddleState,
    solveRiddle,
  } = React.useContext(StoreContext);
  const state = getSubRiddleState(4, 9);
  const active = getRiddleState(4, 9);

  React.useEffect(() => {
    if (!id) return;
    const idParsed = parseInt(id);
    if (
      active !== "DISABLED" &&
      idParsed < 7 &&
      (idParsed === 0 || state[idParsed - 1])
    ) {
      setSubRiddleState(4, 9, { ...state, [idParsed]: true });
      if (idParsed === 6) {
        solveRiddle(4, 9);
      }
      // history.push("/kapitel4");
    }
  }, [id]);

  if (active === "DISABLED") {
    return (
      <Parchment>
        <Story style={{ alignItems: "center" }}>
          Oh nein, da ist wohl etwas schiefgelaufen. Um Smaragd zu bannen und
          Neu-Isenburg zu retten, musst du wohl an der Schnitzeljagd des
          Infocafes teilnehmen.
          <Smaragd />
          <a href="http://smaragd.infocafe.org">
            {" "}
            <H4>http://smaragd.infocafe.org</H4>
          </a>
        </Story>
      </Parchment>
    );
  } else {
    return <Kapitel4 />;
  }
};
