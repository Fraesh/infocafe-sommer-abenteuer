import React from "react";
import { Parchment } from "../atoms/Parchment";
import { H1 } from "../atoms/H1";
import { Map } from "../molecules/Map";
import { Riddle } from "../organisms/Riddle";
import { Divider } from "../atoms/Divider";
import { H4 } from "../atoms/H4";
import { Schild } from "../atoms/Schild";
import { SepiaImg } from "../atoms/SepiaImg";
import { Seal } from "../atoms/Seal";
import styled from "styled-components";
import { theme } from "../../theme";
import { StoreContext } from "../../helper/store";

const Rock = styled.div`
  background-image: url("img/rock.jpg");
  background-size: 100%;
  box-shadow: 0px 0.1rem 0.5rem rgba(0, 0, 0, 0.5),
    inset 0px 0px 30px rgba(0, 0, 0, 1);
  border: 2px solid #111;
  display: flex;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.4);
  flex-direction: column;
`;

export const Kapitel4 = () => {
  const { getSubRiddleState } = React.useContext(StoreContext);
  const riddle4_9 = getSubRiddleState(4, 9);
  return (
    <Parchment>
      <H1>Kapitel 4</H1>

      <Map src="img/karte_4-1.jpg" />
      <Riddle index={1} chapter={4} prolog>
        Nachdem ihr tapferen Heldinnen und Helden nun endlich das Wasser des
        Lebens gefunden habt, steht ihr wartend vor dem alten Baum und hofft da
        er bald wieder wach wird. Seine knorrige Rinde ist von Furchen
        durchzogen. Moos und Ranken bedecken Teile des Stammes. Der Waldboden
        duftet und einzelne Lichtstrahlen fallen durch das raschelnde
        Blätterdach. Nach einigen Momenten hört ihr eine tiefe Stimme flüstern.
        Sie scheint mal lauter, mal leiser zu werden und getragen von einem
        lauen Lüftchen direkt vom Baum selbst zu kommen.
      </Riddle>
      <Riddle
        index={1}
        chapter={4}
        heading="Mörder am Brunnen"
        template="_, _, _, _, _"
        answer={["Quellen", "lebte", "in", "Brunnen", "zurück"]}
      >
        Der alte Baum des Lebens spricht zu euch: „Ihr seid der Lösung unseres
        Problems ein gutes Stück näher gekommen! Wir müssen uns beeilen, um
        Smaragd wieder zu versiegeln.“ Nach einer kurzen Zeit fährt der Baum
        fort: „Um das Ritual zu beenden, braucht ihr die Hilfe von einer
        mächtigen Verbündeten. Sie ist schon seit über 350 Jahren in einer
        Quelle eingesperrt. Dieser Ort liegt im nordöstlichen Wald über der
        Stadt in einem Nebenweg, einer Schneise. Es gab schon einige Versuche,
        den Waldgeist aus dem Brunnen zu befreien. Die berühmteste Geschichte
        ist die eines Jägers. Sie ist an dem Ort zum Gedenken niedergeschrieben.
        Findet die Quelle, findet die Tafel und helft ihr zu entfliehen!
        <br />
        <br />
        Das hier sollte euch dabei helfen, einen Weg zur Befreiung zu finden:
        <br />
        12 – 2 <br />
        1 – 4 <br />
        5 – 9 <br />
        1 – 3 <br />
        13 – 7 <br />
      </Riddle>
      <Riddle
        index={2}
        chapter={4}
        heading="Drei Herren Spielten"
        question="Was war der 'Schnack'?"
        answer="Stein"
      >
        Ah, das Wasser von der Quelle des Lebens muss in den Brunnen zurück!
        <br />
        Das zuvor gehörte Wimmern und Wehklagen aus dem Brunnen verwandelt sich
        in ein rauschendes Gurgeln und Wasser schießt durch das Gitter am Boden
        gen Himmel! Das Wasser glitzert im Licht und ihr blinzelt, um euer
        Gesicht vor dem spritzenden Wasser zu schützen. Als ihr die Augen wieder
        öffnet steht vor euch eine wunderschöne Frau mit noch etwas verweinten
        Augen. Sie verbeugt sich tief vor euch und ihre langen grünen Haare
        fallen ihr ins Gesicht. Ihr bemerkt erst jetzt ihre Flügel auf dem
        Rücken, die fast komplett durchschimmernd scheinen.
        <br />
        „Danke, dass ihr mich ENDLICH von dieser Quelle befreit habt! Ich konnte
        hier nicht weg, das Leben der Quelle und damit des Waldes hingen von
        meiner Lebenskraft ab. Durch das Wasser des Lebens kann ich nun endlich
        diesen Ort verlassen! Ich möchte euch zur Belohnung einen Wunsch
        erfüllen!“
        <br />
        Ihr erzählt der Fee von Smaragd und sie willigt ein, euch zu begleiten
        und euch auf eurer Reise zu unterstützten. Während ihr auf dem Rückweg
        in die Stadt seid, erzählt sie euch, dass sie eine Idee hat, wie man das
        Ritual erfolgreich umsetzen kann.
        <br />
        Euch fällt auf, dass sie alles um sie herum sehr neugierig beobachtet.
        Sie fliegt von einer Seite des Weges zur anderen und scheint euch nicht
        immer ganz zuzuhören. Autos lenken sie ab und sie stellt euch viele
        Fragen zu allem um euch herum. Sie wirkt etwas… verwirrt oder abgelenkt.
        Ihr hofft inständig, dass sie euch so eine große Hilfe ist, wie der alte
        Baum sagte.
        <br />
        <br />
        „In diesem kleinen Ort im Osten“, fängt die Fee plötzlich an zu
        erzählen, „da gab es einst drei Männer die an einem Platz etwas
        spielten?“
        <br />
        „Ich glaube man nannte das Spiel Schnick-Schnack-Schnuk oder so ähnlich
        und die drei alten Männer spielten immer wieder mit demselben Schnack?
        Ich glaube da ging es darum etwas zu verbannen! Wenn ich nur wüsste was
        dieser Schnack an diesem Platz war an dem die alten Männer immer
        spielten!
      </Riddle>

      <Riddle
        chapter={4}
        index={3}
        heading="Eine kurze Geschichte"
        question={
          "Aber sei es drum, wo war nun nochmal das Siegel laut Florentin und was finden wird dort?"
        }
        template="„ _ bis _ „"
        answer={["1702", "1876"]}
      >
        „Ja, es ging um den Stein! Aber jetzt wo ich mich erinnere ging es nicht
        um das verbannen von etwas sondern um das was die drei alten Herren mit
        einander verbunden hat! Der Spaß am Spiel, aber ich glaube das hilft uns
        nicht weiter …“
        <br />
        <br />
        <br />
        <Map src="img/4_3_map.jpg" />
        <br />
        „Das Siegel! Die Lösung ist das Siegel!
        <br />
        Das haben wir Waldgeister einst den Menschen anvertraut als sie sich
        damals in hier niedergelassen haben!
        <br />
        Florentin der Wal wusste wo das ist! Florentin erzählte immer das er
        immer Walter am Siegel getroffen hatte. Walter war der beste Freund von
        Carsten, das waren zwei richtige Scherzbolde. Für ein Krokodil war
        Karsten wirklich ziemlich in Ordnung, aber wenn er mit seinem besten
        Freund, dem Tiefseefisch unterwegs war. Dann gings rund. Die haben sich
        oft einen Spaß daraus gemacht Noé die Meerjungfrau zu ärgern. Das war
        nicht nett! Aber im Zweifel war Amadan das Einhorn immer für Noé da! Ich
        frag mich was Amadan und Noé heute so machen? Aber egal, das Siegel.
        Also Florentin sagte immer, dass er das Siegel sah wenn er auf dem Weg
        zu Noé war. Und dann war da noch Bernard, der war sehr alt und sehr
        langsam mit seinem großen Panzer. Aber Walter und Amadan haben ihn immer
        besucht! Weil eigentlich war Walter ja keine schlechte Person, aber
        Carsten war ein schlechter Einfluss. Sagte ich schon das Noé immer mal
        bei Carsten vorbei kam um ihm die Leviten zu lesen wenn Walter und er
        wieder was ausgefressen hatten?“
      </Riddle>

      <Riddle
        chapter={4}
        index={4}
        heading="Die vier Kapitäne"
        question={"Wer segelte allein weiter?"}
        template="Kapitän _"
        answer="Lehmann"
      >
        „Oh Nein, es gibt das alte Rathaus gar nicht mehr! Schlimm schlimm… was
        machen wir jetzt nur?“
        <br />
        <br />
        „Vielleicht weiß der eine der Kapitän was mit dem Siegel passiert ist!
        Das war Kapitän … Kapitän… ehm… das war einer der vier Kapitäne… ich
        weiß nicht mehr wie er heisst.“
        <br />
        <br />
        „In diesen kleinen Ort im Westen, nahe des großen Lufthafens, dort
        lebten die Vier. Aber irgendwann haben Sie sich zerstritten und drei von
        Ihnen ließen sich zusammen nieder und nur der eine erlebte allein weiter
        Abenteuer. Aber wie hieß der nochmal?“
      </Riddle>
      <Riddle
        chapter={4}
        index={5}
        heading="Bansapark"
        question={"Was kommt aus diesem metallenen Rohr inmitten des Sandes?"}
        answer="Wasser"
      >
        „Genau! Das War Kaptain Lehmann der Abscheuliche! Keine Angst, er war
        immer sehr nett und sehr gepflegt... ich nannte ihn nur immer den
        Abscheulichen weil er Leberwurst mochte…
        <br />
        <br />
        Ungenuss!“
        <br />
        <br />
        „Ich erinnere mich noch wie der Atem vom Kapitän nach Leberwurst roch
        als das Siegel im Bansapark versteckt wurde… Oh! Bansapark! BANSAPARK! “
        <Divider />
        Zusammen mit der Fee schreitet ihr an einer langen Vogelhecke vorbei und
        betretet eine wunderschöne Parkanlage. Die Fee seufzt zufrieden, Ihre
        Augen verlieren etwas von ihrem Glanz und sie wirkt abwesend, ihr Blick
        schweift in die Ferne, so als ob sich vor ihrem inneren Auge Szenen aus
        ihrer Vergangenheit abspielen. "Ich war vor vielen Jahrhunderten schon
        einmal in diesem Park, er sieht aber anders aus wie zu der Zeit als ich
        hier den Pflanzen und Menschen beim wachsen zuschaute. Ein paar Dinge
        sind aber gleich geblieben, vielleicht kann ich mich erinnern wo das
        Siegel versteckt ist, wenn wir gemeinsam durch den Park gehen. Gemeinsam
        schreitet ihr über einen sandigen Weg
        <br />
        <br />
        <SepiaImg src="img/riddle4_5/Bild 1.jpg" style={{ margin: "auto" }} />
        <br />
        <br />
        Richtung Nordosten, vorbei an einem seltsamem metallisch glänzendem
        Gerät welches sich die Fee voller Neugier genauer anschaut. <br />
        <br />
        <SepiaImg src="img/riddle4_5/Bild 2.jpg" style={{ margin: "auto" }} />
        <br />
        <br />
        Anschließend schlendert ihr weiter. Die Fee schwirrt umher, riecht an
        einzelnen Blumen und schaut sich alles ganz genau an. Plötzlich bleibt
        die Fee stehen und dreht sie sich nach rechts. Dabei zeigt sie
        verwundert auf etwas und fragt:
      </Riddle>
      <Riddle
        chapter={4}
        index={6}
        heading="Bansapark - Teil2"
        answer="Schaukel"
        question={"Was meint die Fee?"}
      >
        Eure Antwort hat die Fee zufrieden gestellt und ihr geht zusammen
        weiter. Ihr geht über eine Brücke und nach einer kurzen Zeit quietscht
        die Fee vergnügt: "Hier haben die Kinder im Park früher immer gerne
        gespielt, sie haben versucht genauso zu fliegen wie ich. <br />
        <br />
        <SepiaImg src="img/riddle4_5/Bild 3.jpg" style={{ margin: "auto" }} />
      </Riddle>
      <Riddle
        chapter={4}
        index={7}
        heading="Bansapark - Teil 3"
        answer="Besen"
        question={"Woraus bestehen die seltsamen Haare des linke Wesens?"}
      >
        Die Fee sieht aus der Ferne drei seltsame Wesen am Wasser stehen und
        möchte sie sich genauer aus der Nähe ansehen. <br />
        <br />
        <SepiaImg src="img/riddle4_5/Bild 4.jpg" style={{ margin: "auto" }} />
        <br />
        <br />
        Als ihr davor steht fragt sie verwundert:
      </Riddle>
      <Riddle chapter={4} index={8} heading="Bansapark - Teil 4">
        Je näher ihr dem Wasser kommt umso unruhiger wird die Fee. "Hier hat vor
        vielen Jahren ein Mann versucht, meine liebsten Enten zu vergiften. Zur
        Strafe habe ich ihn in eine Steinstatue verwandelt und so aufgestellt,
        das ich ihn von meinem Lieblingsort immerzu beobachten kann."
        <br />
        <br />
        <SepiaImg src="img/riddle4_5/Bild 5.jpg" style={{ margin: "auto" }} />
        <br />
        <br />
        Ruckartig hebt sich der Kopf der Fee und sie lacht vor Freude. "Ich
        erinnere mich wieder! Das Siegel befindet sich ebenfalls an diesem Ort!
        Lauft um den Teich herum <br />
        <br />{" "}
        <SepiaImg src="img/riddle4_5/Bild 6.jpg" style={{ margin: "auto" }} />
        <br />
        <br />, bis du die Vorderseite der Statue siehst, du kannst es nicht
        verfehlen." Ihr steht auf einer hölzernen Terrasse und schaut euch
        um....
        <br />
        <br />
        <SepiaImg src="img/riddle4_5/Bild 7.jpg" style={{ margin: "auto" }} />
      </Riddle>
      <Riddle chapter={4} index={9} heading="Infocafe">
        Ihr aktiviert das Siegel und eine glänzende Lichtsäule schießt aus dem
        Teich und verschwindet in den Wolken über euch... Ihr seit eurem Ziel
        einen Schritt näher. die Fee schaut euch mit ernsten Augen an: "Meine
        Arbeit ist fast getan, zuletzt müssen wir nur noch zu dem Ort des
        Ursprungs zurückkehren...."
        <Divider />
        Gemeinsam macht ihr euch auf den Weg Richtung Infocafe. Als ihr ankommt,
        blickt die Fee suchend um sich. Sie wendet sich euch mit entschlossenem
        Blick zu:"Es sieht zwar etwas anders aus und damals stand hier noch kein
        Gebäude, sondern ein Brunnen, aber ich erinnere mich an diesen Ort.
        Jetzt ist soweit, nur noch ein paar letzte Schritte, dann ist es getan."
        Sie wendet sich wieder dem Infocafe zu: "Es gibt viele kleine Siegel,
        welche hier aktiviert werden müssen. Wir sollten sie finden, so schnell
        wie möglich!" Ihr macht euch also daran, nach den Siegeln am Infocafe zu
        suchen und sie zu aktivieren.
        {riddle4_9["0"] && (
          <div style={{ margin: "3rem 0" }}>
            <H4>Siegel 1</H4>
            Die Fee stöhnt auf: "Oh nein, das ist gar kein Siegel, um Smaragd zu
            bannen. Es dient einfach dazu, dass Infocafe zu verschließen." Ihr
            seid enttäuscht, doch die Fee wird auf einmal ganz aufgeregt und
            flattert wild umher:" Da ist ein Hinweis im Siegel versteckt! Man
            soll sich beim Gegenteil von Rechts umschauen. Was das wohl
            bedeutet."
          </div>
        )}
        {riddle4_9["1"] && (
          <div style={{ margin: "3rem 0" }}>
            <H4>Siegel 2</H4>
            "Das ist eines der richtigen Siegel!", freut sich die Fee. Als es
            aufleuchtet, erkennt sie einen weiteren Hinweis:" Ich erinner mich,
            jedes Siegel gibt einen Tipp, wo das Nächste zu finden ist. Es
            sollte also nicht allzu schwer sein, die anderen zu finden. Wir
            sollten uns trotzdem beeilen. Ein Ort zum Ruhen, aber kein Bett.“
          </div>
        )}
        {riddle4_9["2"] && (
          <div style={{ margin: "3rem 0" }}>
            <H4>Siegel 3</H4>„In der Not führt euch dieser Weg hinaus.“
          </div>
        )}
        {riddle4_9["3"] && (
          <div style={{ margin: "3rem 0" }}>
            <H4>Siegel 4</H4>„10 Drahtesel können hier stehen, doch nur einer
            kennt die (richtige) Lösung.“
          </div>
        )}
        {riddle4_9["4"] && (
          <div style={{ margin: "3rem 0" }}>
            <H4>Siegel 5</H4>„In der Frühe wird dieses Rohr nicht von der Post
            beliefert.“
          </div>
        )}
        {riddle4_9["5"] && (
          <div style={{ margin: "3rem 0" }}>
            <H4>Siegel 6</H4>„Oh, aber nicht in die Post anderer Leute lunsen!
            Hier ist das Rätsel: Die Natur erblüht in kleinem, hölzernen
            Rahmen.“
          </div>
        )}
        <Divider />
        <Rock
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            justifyItems: "center",
            width: "100%",
            gridGap: "2rem",
            height: "100vw",
            maxHeight: "600px",
          }}
        >
          <Seal active={riddle4_9["1"]} />
          <Seal active={riddle4_9["2"]} />
          <Seal active={riddle4_9["3"]} />
          <Seal active={riddle4_9["4"]} />
          <Seal active={riddle4_9["5"]} />
          <Seal active={riddle4_9["6"]} />
        </Rock>
      </Riddle>
      <Riddle chapter={4} index={10} epilog>
        <img
          src="img/rune big.png"
          style={{ maxWidth: "400px", width: "100%", margin: "auto" }}
        />
        Nachdem das letzte magische Siegel aktiviert wurde hört ihr zunächst ein
        leises Knistern, welches langsam aber zunehmend anzusteigen scheint. Das
        Knistern wandelt sich zu einem eindringlichen, lauter werdenden Summen,
        bis schließlich die Luft wie elektrisiert scheint. Ein Schauder
        überkommt euch und eure Nackenhaare richten sich auf. Die Welt um euch
        herum hüllt sich in ein waberndes Glühen und grell leuchtende
        Nebelschwaden beginnen langsam aufzuziehen… Es wird heller und heller
        bis ihr schließlich in den Schwaden über dem Infocafe die Silhouette
        einer riesigen monströsen Gestalt wahrzunehmen meint. Ein Fauchen und
        Dröhnen, das Brüllen des Drachen! Jetzt seht ihr sie, Smaragd hoch
        aufgerichtet über den Dächern des alten Ortes drohend thronen. Ihr seht
        ihre riesigen Schwingen, die gebleckten meterlangen Zahnreihen und den
        Zorn in ihren grell gelben Augen… Sie brüllt und wütet! Gleich wird sie
        sich auf euch niederstürzen und die euch umgebende Altstadt dabei in
        Schutt und Asche legen!
        <br />
        <br />
        Dann ein donnernder Knall! Ein greller Blitz erstrahlt, so hell, dass er
        alles um euch herum überblendet! Euch wird schwindlig und während ihr
        euch noch fragt, ob das jetzt euer Ende ist, verliert ihr das
        Bewusstsein und gleitet hinein in einen rätselhaften, unsteten Schlaf.
        <br />
        <br />
        Als ihr schließlich wieder zur Besinnung kommt, vernehmt ihr in eurem
        Geist eine Stimme:
        <br />
        <br />
        „Unglaublich, Wahnsinn, Grandios! ES IST GESCHAFFT ! IHR habt es
        GESCHAFFT ! Vielen vielen Dank ihr Heldinnen und Helden! Bravourös habt
        ihr es, mit viel Geduld und einem messerscharfen Verstand fertiggebracht
        die uralten Rätsel zu lösen und unsere Stadt von der Peinigung des
        Biests Smaragd zu befreien !
        <br />
        <br />
        Dank euch konnten die katastrophalen Folgen unseres fatalen
        Missgeschicks, gierig immer tiefer und tiefer unter den Katakomben des
        Infocafes zu schürfen beseitigt und das Übel Smaragd gebannt werden.
        Ohne euch wäre die Rettung unserer Stadt nicht möglich gewesen! Für
        euren Einsatz und eure Hilfe sind wir euch sehr Dankbar !
        <br />
        <br />
        Smaragd ist nun gebannt und damit ist der Weg in eine freie und sichere
        Zukunft bereitet. Zwar wird es noch einige Wochen dauern, bis sich
        Smaragds todbringende Dämpfe vollends verzogen haben. Obacht und Schutz
        für euch selbst und für andere wird daher auch in der kommenden Zeit
        noch geboten sein. Allerdings ist es einzig eurem Mut und Scharfsinn zu
        verdanken, dass von nun an der Glanz eines Steifen Hoffnung am Horizont
        wieder erscheinen kann !
        <br />
        <br />
        Für eure großzügige Unterstützung wollen wir euch belohnen und damit
        unserer tiefen Dankbarkeit Ausdruck verleihen.“
        <a
          style={{ marginTop: "3rem" }}
          href="https://nuudel.digitalcourage.de/QsBhLYLdxATOBfCZ"
          target="_blank"
        >
          <H4>Zur Preisverleihung</H4>
        </a>
      </Riddle>
    </Parchment>
  );
};
