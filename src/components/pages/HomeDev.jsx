import React from "react";
import { Parchment } from "../atoms/Parchment";
import { Logo } from "../atoms/Logo";
import { H3 } from "../atoms/H3";
import { H4 } from "../atoms/H4";
import { Divider } from "../atoms/Divider";
import { Story } from "../molecules/Story";
import { theme } from "../../theme";
import { DasBrauchtIhrIcons } from "../molecules/DasBrauchtIhrIcons";
import { ConfiguredTableOfContents } from "../organisms/ConfiguredTableOfContents";
import { unlocked } from "../../config";
import { Smaragd } from "../atoms/Smaragd";
import { Schild } from "../atoms/Schild";

export const HomeDev = () => {
  return (
    <Parchment>
      <Logo />
      <Story>
        Wenn du diese Nachricht liest hast du bewiesen das du uns helfen kannst.
        Irgendetwas stimmt nicht im Land und nur du kannst uns helfen! Wir
        werden am 13.7. den ersten Hinweis geben können damit du herausfinden
        kannst was passiert ist. Das hier ist übrigens ein magischer Brief der
        seinen Inhalt ändern kann…
      </Story>

      <Divider />
      <ConfiguredTableOfContents unlocked={5} />
      <Divider />
      <H3>Allgemeine Infos</H3>
      <p style={{ marginBottom: "3rem" }}>
        Bei Rückfragen könnt ihr eine Email an{" "}
        <a
          style={{ textDecoration: "none", color: theme.primary, opactiy: 0.5 }}
          href="mailto:smaragd@infocafe.org"
        >
          smaragd@infocafe.org
        </a>{" "}
        schreiben
      </p>

      <H4>Was ihr braucht</H4>
      <DasBrauchtIhrIcons />
      <p>
        Solltet ihr keine mobile Internetverbindung haben, könnt ihr das
        öffentliche WLAN der Stadt Neu-Isenburg nutzen, zB am Marktplatz, dem
        Sportpark oder der Bibliothek.
      </p>
      <p>
        Bitte denkt daran, dass die allgemeinen Corona-Hygieneregeln auch hier
        gelten: tragt in geschlossenen Räumen einen Mund-Nasen-Schutz, haltet
        Abstand, vermeidet Körperkontakt, wascht eure Hände und niest oder
        hustet in die Armbeuge!
      </p>
    </Parchment>
  );
};
