## Infocafe Sommer Abenteuer Framework

#### Einführung

Mit diesem React Framework lässt sich einfach eine Rätselabenteuer Website gestalten.
Clone das Projekt (am besten in VSCode) und führe

### `npm i`

aus um alle benütigten Pakete zu installieren.
Danach kannsst du mit

### `npm run start`

Die App auf dem lokalen DevServer starten.
Zum compilen und releasen der App, starte

### `npm run build`

Die fertige App landet gebundlet im `build` folder.<br />

#### Struktur

Im root haben wir 2 Ordner<br/>

- public
- src

Im `public` folder befinden sich Dateien, die ausserhalb unserer React App existieren wie zB Bilder, die index.html, etc. Diese werden beim build einfach in den build folder kopiert.<br/> <br/>
Im `src` folder spielt sich der JS Teil unserer App und somit alles. Dort findest du Ordner im `Atomic Design` Konzept strukturiert.
<br/>
https://bradfrost.com/blog/post/atomic-web-design/ <br/><br/>

`App.js` ist unsere Basis, von der alles ausgeht. Dort findest du den Router und kannst Unterseiten steuern.

`Pages` beinhaltet die designs der einzelnen Seiten.

`theme.js` enthält das Theme, sprich Farbschemen und widerverwertbare Elemente. Benutze so oft es geht das Theme! So kann man die App schnell anpassen.
