import React from "react";
import { Parchment } from "../atoms/Parchment";
import { H1 } from "../atoms/H1";
import { Map } from "../molecules/Map";
import { Riddle } from "../organisms/Riddle";
import { Divider } from "../atoms/Divider";
import { H4 } from "../atoms/H4";
import { Smaragd } from "../atoms/Smaragd";
import { SepiaImg } from "../atoms/SepiaImg";

export const Kapitel2 = () => {
  return (
    <Parchment>
      <H1>Kapitel 2</H1>

      <Map src="img/karte_2-1.jpg" />
      <Riddle
        index={1}
        chapter={2}
        heading="Smaragd"
        question="Was ist Smaragd?"
        answer="Drache"
      >
        <Smaragd style={{ alignSelf: "center", marginBottom: "3rem" }} />
        Ein uraltes Übel wurde wieder erweckt.
        <br />
        Das letzte Mal wurde sie im 14 Jahrhundert irrtümlicherweise als
        schwarzer Tod gefürchtet und vergiftete ganze Dörfer mit ihrer
        verpesteten Luft. Das versehentliche Debakel in den Katakomben des
        Infocafes beendete ihren 300 hundert jährigen Schlummer tief unter der
        Erde. Giftige Schwaden wabern durch die Straße und halten die Menschen
        zu Hause gefangen. <br />
        Auf leisen Schwingen durchschneidet sie den nächtlichen Himmel und zieht
        unheilvolle Wolken hinter sich her. Ihr Odem verbreitet sich in
        Windeseile und befällt diejenigen, die ungeschützt ihre Heimstadt
        verlassen. Sie macht krank und diese Eigenschaft spiegelt sich in ihrem
        schrecklichen Antlitz wieder. Grüne, smaragdgrüne Schuppen bedecken den
        echsenähnlichen, gigantischen Körper, der Bauch bedeckt von magischem
        Flimmern. Ihre Krallen triefen vor Gift, ihre Nüstern beben vor
        unterdrücktem Zorn, ihre tiefgrünen, fast schwarzen Augen funkeln vor
        Hass und können einen vor Angst erstarren lassen. Sie ist das Land, sie
        ist der Tod!
      </Riddle>
      <Riddle
        index={2}
        chapter={2}
        heading="Die Heiler"
        question="Wie heißt der Laden?"
        answer="Goethe"
        template="_ Apotheke"
      >
        Ihr tapferen Heldinnen und Helden,
        <br />
        <br />
        hier kommt ihr wieder ins Spiel! Die Stadt benötigt eure Hilfe. Der
        giftige Nebel macht ein normales Leben, so wie wir es kennen, beinahe
        unmöglich. Es gibt eine Sage über ein geheimnisvolles Heilmittel, gegen
        die Krankheit, die der Odem verbreitet.
        <br />
        <br />
        Suche die ortsansässigen Heiler auf! Sie verkaufen allerlei Wundermittel
        und hüten altes Wissen, dass der Allgemeinheit nicht zugängig ist.
        <br />
        <br />
        Den kundigen Heiler findet ihr nicht in einer städtischen Heilerstube.
        <br />
        Weder mit König noch Adel hat er viel zu tun.
        <br />
        Die Quersumme der Hausnummer seiner Heilerstube ist größer als 10.
        <br />
        <br />
        Findet den richtigen Heiler heraus und nennt uns den Namen, seines
        Ladengeschäfts.
      </Riddle>
      <Riddle
        index={3}
        chapter={2}
        heading="Des Schlosses Code"
        question="Wie lautet der Code?"
        answer="338846"
      >
        „Leider gibt es noch kein Heilmittel gegen des Drachens Gift.“, sagt der
        Heiler, „Aber ihr könntet uns etwas Zeit verschaffen“ raunte er euch zu
        während er euch etwas zusteckt. „Damit solltet ihr Smaragd zumindest
        erstmal beruhigen können. Ich würde es ja selbst machen, aber ich bin
        wohl nicht clever genug für das Rätsel!“
        <Divider />
        Des Schlosses Zahlen müsst Ihr knacken,
        <br />
        indem Ihr löst die folgende Fragen.
        <br />
        Als Wegweiser dienen Euch die Bilder,
        <br />
        welche meist zeigen auf diverse Schilder.
        <br />
        <br />
        Ein Hinweis für Euch gleich jetzt vorab:
        <br />
        Gesucht wird an jedem Ort nur eine Zahl!
        <br />
        Ob vorgeschobene null oder vierstellige Uhrzeit,
        <br />
        mit etwas Knobeln habt Ihr die richtige Ziffer sehr schnell bereit.
        <br />
        <br />
        <br />
        <br />
        <Bilderratsel src="img/riddle2_3/1.jpg" i={1}>
          Am ersten Ort wird nicht geschlummert,
          <br />
          Lädt ein zum Platz wo niemand lungert. <br />
          Bewegung, Spiel und Fertigkeit,
          <br />
          lehrt der Verein zu jeder Zeit. <br />
        </Bilderratsel>
        <Bilderratsel src="img/riddle2_3/2.jpg" i={2}>
          Die zweite Zahl weist Euch den Weg, <br />
          nur bildlich dort, wo ein Baum steht. <br />
          Zwei Arten hier auf hölzernem Grund, <br />
          lediglich die letzte Nummer zählt als richtger Fund.
        </Bilderratsel>
        <Bilderratsel src="img/riddle2_3/3.jpg" i={3}>
          Der dritten Stelle Ihr Euch naht, <br />
          dreht Euch jetzt um 180 Grad. <br />
          Das grüne Schild zeigt Euch die Lösung an: <br />
          Wie viele Rollen sind an allen Schuhen dran?
        </Bilderratsel>
        <Bilderratsel src="img/riddle2_3/4.jpg" i={4}>
          Für eine ausgedehnte Rast, <br />
          habt Ihr am Ort der vierten Ziffer Platz. <br />
          Schaut in den Humpen tief hinein, <br />
          die Anzahl der Spiegel wird die Lösung sein.
        </Bilderratsel>
        <Bilderratsel src="img/riddle2_3/5.jpg" i={5}>
          Der fünfte Ort ist immergrün, <br />
          ob Herbstwind weht ob Bäume blühn. <br />
          Gesucht wird jetzt der Zeitpunkt gnau
          <br />
          an dem am Sonntagnachmittag
          <br />
          Die Kinder hier zur vollen Schau <br />
          dir Bälle springen, fliegen lassen
          <br />
          Habt ihr es raus, seid ihr so schlau?
        </Bilderratsel>
        <Bilderratsel src="img/riddle2_3/6.jpg" i={6}>
          Die letzte Zahl ist leicht zu finden <br />
          Ihr müsst euch dafür gar nicht schinden. <br />
          Ein silbernes Netz aus Knoten und Waben, <br />
          die Hälfte der Kugeln wird Euch die Lösung verraten.
        </Bilderratsel>
      </Riddle>
      <Riddle index={4} chapter={2} heading="How to tame a dragon">
        <img
          src="img/2_4_map.png"
          style={{ width: "100%", opacity: 0.8, marginBottom: "3rem" }}
        ></img>
        Die Box offenbart euch eine Art Karte, die euch zu Smaragd führt. In der
        unteren Ecke ist ein Hinweis <br />
        <br />
        „Schau hinter die Graue box am Schwarz-Weißen Ort.“
      </Riddle>
      <Riddle
        index={5}
        chapter={2}
        heading="Schachmatt"
        question="Wie viele Smaragde liegen auf dem letzten weißen Feld?"
        answer="0"
      >
        Am Ruheort des Drachen angekommen erspart ihr vor Schrecken im Angesicht
        der mächtigen Kreatur.
        <br />
        <br />
        „Warum sollte ich dich nicht direkt Fressen Winzling?“ fragt euch
        Smaragd bedrohlich?
        <br />
        <br />
        Ihr, die Ihr viele Geschichten von Drachen kennt, wisst direkt die
        Lösung! Ihr schlagt dem Drachen vor das er euch ein Rätsel stellen kann
        und wenn Ihr es löst sie mit euch Tee trinkt.
        <br />
        <br />
        „Wenn ich hier auf das Schachbrett auf das erste schwarze Feld einen
        Smaragd lege und auf das nächste schwarze Feld zwei Smaragde lege und
        auf das dritte Schwarze Feld drei Smaragde lege und so weiter.“, sagt
        sie während Sie einen Smaragde auf die Felder legt. „Wie viele Smaragde
        liegen auf den letzten weißen Feld?“
        <br />
        <br />
      </Riddle>
      <Riddle chapter={2} index={6} heading="Schachmatt" epilog>
        Smaragd hält sich an Ihr Wort und ihr trinkt zusammen eine Tasse vom
        wundervoll einschläfernden Tee während sie mit euch noch eine Partie
        ordinäres Schach spielt.
        <br />
        <br /> Das nächste Kapitel offenbart sich euch am
        <br />
        <br />
        <H4>27.07.2020</H4>
        Kehrt dann zum letzten Ort eures Abenteuers zurück um fortzufahren!
      </Riddle>
    </Parchment>
  );
};

const Bilderratsel = ({ children, src, i }) => (
  <>
    <H4>- {i} -</H4>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        alignItems: "center",
        width: "100%",
        gridGap: "2rem",
        justifyItems: "center",
        marginBottom: "3rem",
      }}
    >
      <div>{children}</div>
      <SepiaImg src={src} />
    </div>
  </>
);
