import React from "react";
import { Parchment } from "../atoms/Parchment";
import { H1 } from "../atoms/H1";
import { Map } from "../molecules/Map";
import { Riddle } from "../organisms/Riddle";
import { Story } from "../molecules/Story";
import { Divider } from "../atoms/Divider";
import { H4 } from "../atoms/H4";

export const Kapitel1 = () => {
  return (
    <Parchment>
      <H1>Kapitel 1</H1>

      <Map src="img/karte_1-1.jpg" />
      <Riddle index={1} chapter={1} prolog>
        Es ist noch nicht all zu lange her, da war das Infocafe erfüllt von
        buntem Gelächter und dem Geruch nach Tomaten-Mozzarella Toast. Nicht
        selten rollten die Zwanzigseiter über den Tresen, um den
        Höchstwürfelnden die Möglichkeit zu geben, in virtuelle Realitäten
        abzutauchen, sich in royalen Schlachten zu beweisen oder eigene,
        pixelige Welten zu erkunden. Mutige Helden und Heldinnen kehrten ein und
        aus, beglückten das kleine Fachwerkhaus mit Geschichten, hauchten ihm
        Leben ein. Doch das Infocafe, so wie es in unser aller Köpfen nach wie
        vor existiert, ist in Gefahr. Wir brauchen Euch, Ihr wackeren Heldinnen
        und Helden, denn wir können es nicht länger verheimlichen:
        <br />
        <br />
        Wir haben Mist gebaut…
        <br />
        <br />
        Seit Mitte März schwebt eine riesige Giftwolke über Neu-Isenburg. Die
        Quelle des Übels: das Infocafe. Es gibt so einiges, was wir Euch
        erzählen müssten, doch jetzt ist nicht der richtige Zeitpunkt für große
        Reden. Helft uns, die Giftwolke aufzulösen!
        <br />
        <br />
        Uns wurde von den Ältesten eine Geschichte zugespielt, welche uns dabei
        helfen könnte, dem Ursprung der Giftwolke auf die Schliche zu kommen.
        Vielleicht werdet ihr aus den folgenden Zeilen schlauer? Die obere Karte
        weist Euch den Weg für die kommende Woche.
      </Riddle>
      <Riddle
        index={1}
        chapter={1}
        heading="Die Reise beginnt"
        question="Wie lautet das Lösungswort?"
        answer="Friedhof"
      >
        Zum Gruße tapfere Heldinnen und Helden!
        <br />
        <br />
        Ihr seid dem Ruf des Steins mit den Händen bis zu dem Punkt gefolgt, an
        dem sich Pappel und Eiche über den Weg laufen. Hier soll eure Prüfung
        beginnen, nur eine von vielen. Das Ziel ist es, das verschollene
        Losungswort herauszufinden, dass euch verrät, wo euch die Alten
        hinschicken, um euch eurer nächsten Herausforderung zu stellen!
        <br />
        <br />
        Folgt dem Pfad in nördlicher Richtung (Richtung des Tempels des
        Konsums). Ignoriert die 2 weißen Bäume auf der linken und den Baum ohne
        Äste auf der rechten Seite. Ihr sucht die riesige Pappel, die
        majestätisch an einer Ecke steht, umzäunt von einer steinernen Mauer.
        Dort findet ihr den ersten verlorenen Buchstaben! Es ist der erste
        Buchstabe des Wegweisers für die Straße in östlicher Richtung. Gehe
        weiter, bis du ein gelbes Haus mit gelben Blumen findest. Vor ihm findet
        ihr den Wegweiser mit dem zweiten Hinweis. Nutzt hier den dritten
        Buchstaben der neuen Straße und folgt ihr in Richtung Süden. Biegt nach
        der vierten Laterne bei dem von Wildkatzen bewachten Haus in östlicher
        Richtung ab und benutzt hier den zweiten Buchstaben des neuen
        Wegweisers. Folgt dem Pfad, überquert die Wegkreuzung und lauft so lange
        weiter geradeaus, bis euch dichtes Blattwerk die weitere Reise unmöglich
        macht. Zwischen den Blättern ist ein weiteres, jedoch halb verdecktes
        Schild zu sehen. Nutzt hier den achten Buchstaben und haltet euch in
        südlicher Richtung. Am rechten Wegesrand findet ihr irgendwann eine
        große metallerne Box voller Gewänder, der mit einer roten Hand
        gekennzeichnet ist. Benutzt dort den ersten Buchstaben neben der roten
        Hand und lasst euch anschließend nicht in den kreisenden Rundweg ziehen!
        Folgt stattdessen auf der rechten Seite der neuen Straße, welche nach
        Westen führt und haltet auch hier Ausschau nach dem Namen des Weges.
        Nutzt dessen zweiten Teil in einfacher Form, um die letzten drei
        Buchstaben zu erlangen.
      </Riddle>
      <Riddle
        index={2}
        chapter={1}
        heading="Der Friedhof"
        question="Wie lauten die Koordinaten?"
        coordinate
        answer={["50", "0495494", "8", "6972210"]}
      >
        Nun wisst ihr, wo die Reise hingehen soll!
        <br />
        <br />
        Lauft die Straße entlang, bis die Lärche kreuzt und folgt dem Vogel in
        nördlicher Richtung, bis sie sich schließlich in einem Busch versteckt.
        Haltet euch nun Richtung Westen bis ihr bereits durch die metallenen
        Streben auf der rechten Seite den Eingang seht. Dieser liegt gegenüber
        des 49. Hauses der Straße. 2
        <br />
        <br />
        Die Zeilen der Geschichte führen euch durch die verwinkelten Gassen des
        Buchenbuschs. Wenngleich ihr den giftigen Dünsten hier erfreulicherweise
        aus dem Weg gehen konntet, so merkt ihr, dass die Giftwolke auch diesen
        Teil der Stadt nicht verschont hat. Die Menschen halten Abstand und
        schützen sich mit Masken. Auch ihr versichert euch mit einem schnellen
        Blick in die Tasche, dass ihr eure Maske und Ausrüstung dabeihabt. Ihr
        seid am richtigen Ort angelangt, um mehr über die mysteriöse Giftwolke
        zu erfahren.
        <br />
        <br />
        Die mächtigen Mauern hüten ein Geheimnis, ihr hört es wispern zwischen
        den roten Backsteinen. Flüsternd lockt es euch zu einem großen Denkmal
        im Süden der Anlage. Die Geister der Vergangenheit grüßen euch,
        ehrfürchtig bleibt ihr in der Nähe der Statue stehen.
        <br />
        <br />
        „Seid gegrüßt wackere Heldinnen und Helden. Ihr habt es geschafft
        unserem Rätsel zu folgen und Euch für würdig erwiesen. Nur jene, die zu
        Großem in der Lage sind können uns helfen Smaragd zu bändigen und die
        Tore der Stadt wieder zu öffnen! Findet den Schlüssel, um weiteres
        Wissen zu erlangen!“
        <br />
        <br />
        „Smaragd zu bändigen?“, wollt ihr erwidern, doch die Stimmen der
        Ältesten versiegt in der sommerlichen Hitze. Ihr bleibt allein zurück
        mit einer neuen Aufgabe und einem Rätsel, das mehr Fragen aufwirft, als
        Antworten liefert.
        <Divider />
        Nacheinander glühen verschiedene Namen in einem sanften Rot, so als ob
        man euch den Weg weisen will:
        <ul>
          <li>Linke Tafel linke Spalte; 4. Zeile von unten</li>
          <li>Linke Tafel linke Spalte; 1. Zeile von oben</li>
          <li>Linke Tafel linke Spalte; 21. Zeile von oben</li>
          <li>Linke Tafel linke Spalte; 9. Zeile von unten</li>
          <li>Linke Tafel mittlere Spalte; 4. Zeile von unten</li>
          <li>Linke Tafel mittlere Spalte; 9. Zeile von oben</li>
          <li>Linke Tafel linke Spalte; 5. Zeile von unten</li>
          <li>Linke Tafel rechte Spalte; 2. Zeile von oben</li>
          <li>Linke Tafel linke Spalte; 8. Zeile von unten</li>
        </ul>
        Eine kurze Pause, ihr denkt es ist vorbei? Doch erneut sehr ihr etwas
        aufleuchten… was will man euch sagen?
        <br />
        <ul>
          <li>Linke Tafel Überschrift 7. Buchstabe</li>
          <li>Linke Tafel rechte Spalte; 1. Zeile von oben</li>
          <li>Linke Tafel mittlere Spalte; 34. Zeile von unten</li>
          <li>Rechte Tafel rechte Spalte; 41. Zeile von oben</li>
          <li>Linke Tafel rechte Spalte; 3. Zeile von oben</li>
        </ul>
        <br />
        Tipp: A=0, B=1,...
      </Riddle>
      <Riddle
        index={3}
        chapter={1}
        heading="Tempel des Konsums"
        question="Wie lautet das Lösungswort?"
        answer="Buecherei"
      >
        Ihr wendet euch von den die Geistern der Vergangenheit ab und verlasst
        den Friedhof Richtung Norden. Schnell habt ihr heraus, dass es sich bei
        der Lösung um die Koordinaten eines Ortes in unmittelbarer Nähe handelt.
        Ihr wart schon öfter dort, am Tempel des Konsums. Ob dies der richtige
        Ort sein kann, um neues Wissen zu erlangen? Ihr wundert euch, doch
        hinterfragt vorerst nicht, was die Ältesten euch aufgetragen haben. Je
        näher ihr der Innenstadt kommt, desto belebter werden die Straßen.
        Magische Klapperkisten rollen über den Asphalt und weisen euch den Weg.
        Ihr merkt, dass die Giftwolke hier wieder dichter wird, umso näher die
        Häuser aneinander stehen und umso mehr die Menschen in Kontakt
        miteinander sind. Zur Sicherheit setzt auch ihr eure Masken auf und
        haltet etwas Abstand, ehe ihr den Tempel des Konsums betretet. Kaum
        haben sich die gläsernen Türen hinter euch geschlossen bildet sich in
        euren Köpfen ein neues Rätsel – der Schlüssel zu verborgenem Wissen?
        <Divider />
        Willkommen im Tempel des Konsums!
        <br />
        <br />
        <H4 style={{ fontSize: "1rem" }}>
          40 - 99 - 10 - 107 - 3 - 133 - 80 - 66 - 138
        </H4>
        Hinter diesen Ziffern verbergen sich Kaufleute und Ladengeschäfte. Die
        Initialen der Geschäftsnamen erscheinen euch auffällig…
      </Riddle>
      <Riddle index={4} chapter={1} heading="Das Reich der Bücher">
        Ihr seid euch sicher: Um das Reich der Bücher zu betreten, müsst ihr den
        Tempel des Konsums wieder verlassen. Der Ort, zu dem es euch zieht, sind
        die Hallen des Wissens in unmittelbarer Nähe. Wissen gibt es hier nicht
        zu kaufen, sondern wird nur an ausgewählte Mitglieder verliehen. Vor Ort
        müsst ihr den Schlüssel suchen, der euch den Zugang zur nächsten Woche
        ermöglicht. Dafür müsst ihr die Hallen des Wissens nicht betreten, denn
        ihr könnt es von außen finden. Jedoch kann ein Besuch in den Hallen des
        Wissen stets sehr lehrreich sein.
        <br />
        <br />
        Wenn ihr die Smaragd-Rune gefunden habt analysiert sie mit eurem
        Zaubergerät, um die Aufgabe zu lösen.
      </Riddle>
    </Parchment>
  );
};
