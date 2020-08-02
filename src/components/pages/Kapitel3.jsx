import React from "react";
import { Parchment } from "../atoms/Parchment";
import { H1 } from "../atoms/H1";
import { Map } from "../molecules/Map";
import { Riddle } from "../organisms/Riddle";
import { Divider } from "../atoms/Divider";
import { H4 } from "../atoms/H4";
import { Schild } from "../atoms/Schild";

export const Kapitel3 = () => {
  return (
    <Parchment>
      <H1>Kapitel 3</H1>

      <Map src="img/karte_3-1.jpg" />
      <Riddle index={1} chapter={3} prolog>
        <img
          src="img/schachmatt.png"
          style={{
            width: "calc(6rem + 100%)",
            marginLeft: "-3rem",
            maxWidth: "calc(6rem + 100%)",
            paddingBottom: "3rem",
          }}
        />
        Vielen Dank ihr tapferen Heldinnen und Helden! Ihr habt unserer Stadt
        nochmal eine kurze Pause zum verschnaufen verschafft! Doch das allein
        vermag Smaragd wohl nur kurzfristig zu besänftigen… Die gewonnene Zeit
        müsst ihr nun nutzen, um herausfinden was das letzte Mal geschehen ist,
        als Smaragd erwachte, die Bewohner unserer Stadt ins Verderben zu
        stürzten. Wie konnten die Leute vor 300 Jahren diesem Problem nur Herr
        werden ? Leider sind aus dieser Zeit keine menschlichen Zeugen mehr am
        Leben, doch einer Sage nach lebt ein uralter und weiser Geist an einem
        vergessenen Ort im Wald. Womöglich kann er euch helfen Lehren aus der
        Vergangenheit zu ziehen, um uns dabei zu helfen unser heutiges Problem
        zu bewältigen.
        <br />
        <br />
        Geht nun zum Waldrand um einen Hinweis auf den Aufenthaltsort des
        Waldgeists zu erhalten. Die Tiere des Tannenwaldes können euch
        sicherlich weiterhelfen.
      </Riddle>
      <Riddle
        index={1}
        chapter={3}
        heading="Die Waldgeister"
        question="Wie lauten die magischen Wörter?"
        choices={[
          ["Löwe", "Helles"],
          ["Eber", "Weg"],
          ["Fisch", "Baum"],
          ["Schlange", "Zauberer"],
          ["Hahn", "Wasser"],
          ["Pfau", "Blume"],
          ["Biene", "Flug"],
          ["Hund", "Zeiten"],
          ["Reh", "Wald"],
          ["Dachs", "Höhle"],
          ["Igel", "Erde"],
          ["Vogel", "Luft"],
        ]}
        answer={[7, 3, 0]}
      >
        <H4>Der erste Waldgeist</H4>
        „Ich war das Tier das nicht herein durfte…“, flüstert eine Stimme euch
        eine Stimme bereits auf dem Weg zu…
        <br />
        <br />
        <br />
        <br />
        <H4>Der zweite Waldgeist</H4>
        „Ich war das Tier welches die Blume trägt…“, flüstert eine Stimme in
        deinem Kopf. Dabei hast du auch eine Vision…
        <Schild style={{ alignSelf: "center" }} />
        <br />
        <br />
        <br />
        <br />
        <H4>Der dritte Waldgeist</H4>
        „Und ich war das Tier das die Wellenstrecke erbaute!“ hörst du einen
        weiteren Waldgeist verkünden!
        <Divider />
        <br />
        <br />
        Während ihr nach den Antworten auf die Hinweise der drei Waldgeister
        sucht nehmt ihr eine unheimliche Präsenz war. Bei genauerem Umsehen seht
        ihr eine geisterhafte Gestalt, welche euch an einen Fisch erinnert. Sie
        scheint unerlässlich im Gebiet des Tannenwaldes durch die Luft umher
        zuschwimmen.
        <br />
        <br />
        Als ihre Runde sie an euch vorbeiführt hört ihr sie unheilschwanger vor
        sich hinmurmelt. Es ist ein unablässlicher Schwall an Wörtern, welche
        sich immer wiederholen, und zwischendurch ertönt der Satz "Nichts ist
        wie es scheint". Nach mehrmaligem Hören fällt euch jedoch etwas
        Seltsames auf. Es scheinen immer Begriffe dabei zu sein, welche euch
        bekannt vorkommen.
        <br />
        <br />
        Unter ein paar Blättern vergraben findet ihr einen Satz alte
        Steintafeln, in die hastig Wörter geritzt wurden. Eine magische Aura
        umgibt sie. Was wohl passiert, wenn man die richtigen Steine berührt?
      </Riddle>
      <Riddle
        index={2}
        chapter={3}
        heading="Der 300 Jahre alte Waldgeist"
        question="Was ist das Elexir des Lebens?"
        answer="Wasser"
      >
        <H4>///zeiten.zauberer.helles</H4>
        <br />
        <br />
        Mit diesen drei Wörtern solltet ihr den 300 Jahre alten Waldgeist finden
        können! Vielleicht kann euch diese verwunschene Seite den Weg zeigen:
        <br />
        <br />
        <a href="https://what3words.com/gelbes.beinen.freudige" target="_blank">
          Zum Magischen Ort
        </a>
        <br />
        <br />
        Dort angekommen grüßt euch der älteste der Waldgeister:
        <br />
        <br />
        Seid gegrüßt ihr so jungen Abenteurerinnen und Abenteurer! Ich weiß
        weshalb ihr zu mir gekommen seid. Schon vor gut einem halben Jahr haben
        meine Brüder und Schwestern hier im Wald gemunkelt. Unsere Wurzeln
        reichen tief und so bekommen wir allerlei mit, was im Wald und bei den
        Menschen in der Stadt geschieht. Von Grabungen und Schürfen unterhalb
        der alten Schule im Ort war die Rede. So fürchteten wir Waldgeister
        schon bald der mächtige Zauber welcher die alte Smaragd an ihrer
        Ruhestätte band könnte zerstört werden. Wir versuchten die Menschen zu
        warnen, doch es scheint, ihr hört heute weniger denn je auf die Zeichen
        der Natur. So kam es wir es befürchtet: der Drache erwachte von neuem
        und verbreitete seine krankmachenden Dämpfe. Doch diesmal wird es nicht
        so leicht sein das Bannritual zu erneuern… wenn es überhaupt noch einmal
        funktioniert… In jedem Fall werdet ihr dieses Elixier des Lebens
        benötigen, welches ich euch gerne gebe.
      </Riddle>

      <Riddle chapter={3} index={3} epilog>
        Um den mächtigen Zauber zu erneuern werdet ihr bald mehrere
        Ritualstätten benötigen an denen ihr, mit Hilfe des Elexirs, Magie
        wirken müsst
        <br />
        <br />
        Doch jetzt bin ich müde… lasst mir einen Moment um zu überlegen was
        genau ihr tun müsst… Was sind schon Tage wenn man 300 Jahre alt ist?
        <br />
        <br /> Das nächste Kapitel offenbart sich euch am
        <br />
        <br />
        <H4>03.08.2020</H4>
        Kehrt dann zum letzten Ort eures Abenteuers zurück um fortzufahren!
      </Riddle>
    </Parchment>
  );
};
