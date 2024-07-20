---
cssclasses:
  - paper
---
# Obsidian-Nuxt-Export

## Task-Folge
### 0. Variablen-Namen zusammenstellen
- semantische CSS-Variablen definieren und vereinheitlichen:
	- shadCN / radixUI
		- Breakpoints
	- minimal style-settings
- hier die Entsprechungen und Bezüge zu diesen Variablen finden:
	- vsf-ui
		- Breakpoints
	- ?obsidian mcl?

### 1. Variablen und Assets festlegen
- Farbwerte
- Spacing
- Breakpoints
- Schriftgrößen
- ein paar Referenz-Bilder und Texte (wie bei Lehrer Lämpel) in einer MD versammeln

### 2. Fragen pragmatisch beantworten
- wo ist Monaspace im Design DASEi?
- welche Components aus Nuxt-UI-Pro (Content-Toc) übernehme ich vorläufig, lerne die Implementierung und ersetze dies dann durch ShadCN?
- Fragen, die später noch via Implementierung Nathan zu klären sind:
	- Interactive Graph
	- Footnotes, backlinks, and wikilinks
	- Canvas Support
	- Table of Contents

### 3. Figma lernen: Components

### 4. Site-Design DAS Ei Standard-Desktop

### 5. mit Responsive Design tablet + mobile erweitern

### 6. ShadCN-Template in Theaterpedia-Core
- gibt es schon einen Branch mit Nuxt.Content, unabhängig von crearisUI? 
	- falls nicht, neu anlegen, mein bisheriges Nuxt.studio-Projekt importieren, im DataLayer NuxtContent aktivieren
	- auch die Crearis-Tailwind-Config ummodeln und alles zum Laufen bringen. Wäre super, wenn ich grundsätzliche Settings zum Theming sowohl in crearisUI wie auch in NuxtUi benutzen kann (mit Projektvariablen oder aus Nuxt-Config heraus müsste das gehen)
- DASEI-Theme skizzieren
- basale Markdown-Dateien aus Obsidian in Nuxt-Content öffnen, konvertieren und Ergebnisse anschauen, wichtigste Eingriffspunkte festlegen, Fragen etc.

### 7. dasei.eu-Template in Theaterpedia-Core
1. basales Design DASEi via Minimal + Theme in Obsidian erzeugen
	- geordnete Variablen: ein paar kommentierte Style-Settings bearbeiten, 4-5 Modellseiten anlegen, zunächst mit reinen MD-Dateien herumprobieren
	- lediglich die äußeren Elemente: Nav, Header, Main-Pages, Cards nur skizziert
2. Obsidian-MD-Repo direkt mit Nuxt-Content-Repo integrieren (submodule, symlink?)
3. Konfigurationen in Nuxt-Content durchführen, 

### X. Obsidian-Export-Features in Theaterpedia-Core übernehmen?
1-2 Nathans-Obsidian-Export-Assets testweise einbinden, lediglich proof-of-concept
- toc-json als Grundlage für Nuxt-Content-Config-Dateien?
- wie können Assets wie z.B. Graph und die Daten, auf denen das WASM basiert, aus Nuxt heraus gefüttert werden?

## von Obsidian Designs zur Nuxt Content-Implementierung
Mehrere Obsidian-Themes, Canvas+Canvas-Candy bieten einen hervorragenden Ausgangspunkt, um für Theaterpedia insgesamt hochwertige Designs anzufertigen. Kepano, der CEO von Obsidian setzt seit vielen Jahren basierend auf Standard-CSS-Programmierung eine Design-Philosophie um, die viel näher an der Theaterpädagogik dran ist als dies im Vue oder Nuxt-Umfeld zu finden ist. Es ist deshalb wichtig, immer wieder von Obsidian her zu denken. Es sind zwei Übersetzungen zu leisten:
- einmal die Übersetzung der Design-Sprache von Kepano und Konsorten in das Nuxt-Universum
- dabei die Übersetzung von klassischem CSS in tailwindCSS-Logik

Ein treffendes Beispiel ist die einfache Idee, _kursiv_ gesetzten Text unter bestimmten Bedingungen farblich anders hervorzuheben. Dies bietet erstaunliche Design-Möglichkeiten vor allem in Verbindung mit Kepanos Mehrfarben-Konzepte, Paletten sind relevant im Vergleich zur simplen Primary-Logik.

Arbeitsfolge bis Mittwoch
Fr + Sa früh: Figma-Prozess
Mo-Di: dasei.eu als Nuxt-Template anlegen, Schwerpunkt Navigation, Header, Landing-Page, Events- und Blog-Card
Mi: Start 'Obsidian Episodes' > Theming und Workflow-Optimierung aus Obsidian heraus / in Obsidian, Schwerpunkt Inner-Content

### die Spezifikation: Nuxt Content-Markdown in Obsidian
#### Quellen: Ben Hong und weitere haben bereits daran gearbeitet

#### Überblick
Ein Linter (Obsidian-Linter oder anderer MD-Linter), ein Obsidian-Skript oder ein Nuxt-Skript transformiert Obsidian-Markdown in Nuxt-Content-Markdown. 
- ziemlich sicher mit [Obsidian-Markdown-Linter](https://platers.github.io/obsidian-linter/) > hier wird via YAML konfiguriert, welche Dateien berücksichtigt werden und welche nicht
- ggf. der File-Walker von Nathan für Ermittlung von Vault-Content pre- oder postlint (z.B. Links etc.)
- oder über einen anderen Converter zu Obsidian, den es sicherlich gibt (z.B. im Admonitions-Community-Plugin ...

Hier werden ggf. Links und Assets verändert, vor allem aber werden Dataview und Callouts in MDC-Components verwandelt.

#### Standards
Die YAML-Konfiguration ist in Obsidian relativ offen und flexibel gestaltbar.
In Nuxt-Content werden via YAML wichtige Settings zu Navigation und ggf. auch sonstigen Optionen gemacht.
Die Obsidian-Konfiguration von Theaterpedia richtet sich zunehmend nach diesen Standards.

#### plain MDC-in-Obsidian
Die MDC-Syntax ist für Obsidian weitgehend ungefährlich, lediglich slots werden als Tags missverstanden, dadurch aber deutlich erkennbar, die nested-Logik von Components wird korrekt dargestellt, die Erweiterung mit Classes kann über das Classes-Plugin von Javalent.
Eine sinnvolle Benennung der Components wäre sehr hilfreich.
Vermutlich kommt es nicht zu Problemen mit den Obsidian-Inline-Props.

:hello{}-world

::hero
Default slot text

#description
This will be rendered inside the `description` slot.
::


::admonition{type=info}
> This is an information block
::


::hero
Default slot text

#description
This will be rendered inside the `description` slot.
::

::hero
  :::card
    A nested **card**
    ::card
      A super nested card
    ::
  :::
::

::alert{type="warning" icon="exclamation-circle"}
Oops! An error occurred
::

Hello [World]{style="color: green;" .custom-class #custom-id}!

#### The Title is {{ $doc.title }} and customVariable is {{ $doc.customVariable || 'defaultValue' }}

- [link](#attributes){style="background-color: pink;"}, `code`{style="color: cyan;"},
- _italic_{style="background-color: yellow; color:black;"} and **bold**{style="background-color: lightgreen;"} texts.

#### Optimierung in Obsidian

#### Fehlerquellen und Workarounds
ggf. bringen die Obsidian-Tags ein Risiko mit sich, vor allem wenn sie am Zeilenanfang stehen

#### Nuxt-Content-Markup
ähnlich wie z.B. das GH-Links-Plugin könnten die `::hero` mdc-tags hervorgehoben werden
#### Theaterpedia-Components
ausgewählte Components wie z.B. `::event` werden smart angezeigt, verweisen auf echte Daten
#### Odoo Sync
Wenn vor vornherein und immer mit nuxt-content gearbeitet wird, dann wäre es gar nicht erforderlich, dass Obsidian irgendwas mit odoo synchronisiert. Es würde dann ausreichen, wenn ein Nuxt-Server erreichbar ist. Dieser würde sich mit derselben Sync-Logik von Pruvious selbständig via Api um die Aktualisierung von Daten kümmern. Die Konfiguration kann vermutlich via YAML aus Obsidian heraus vorgenommen werden oder mit einer extra Settings-App.
Z.B. könnten Events-Daten als JSON oder YAML abgespeichert werden, wären dann in der Standard-Nuxt-Content-Verarbeitung berücksichtigt und würden auch in Obsidian über ein Plugin ähnlich wie Tasks oder Dataview zu Verfügung stehen, behelfsweise zunächst über Dataview direkt.
#### Github-Sync
Für einen richtig komfortablen Betrieb braucht es lediglich Github-Sync, alles andere macht der Nuxt-Server.

#### Step-by-Step
Zur Ermöglichung dieses Setups ist es nicht erforderlich, irgendwas großes erst noch zu schaffen. Ich kann einfach und direkt anfangen und schrittweise Funktionalität dort freischalten, wo sie zuerst gebraucht wird; weil in Obsidian gar kein WYSIWYG erforderlich ist, kann vieles mit Dataview o.ä. gestartet werden.


### Obsidian Episodes: Der Theaterpedia-Design-Prozess geht von Obsidian aus
#### Blogging, Episoden & Dokumentation
Leistungsfähige Umgebung für Blogging, Episoden und Zettlkasten für Theaterpädagogik möglich, alles in Richtung 'digitaler Garten', wenn der Schwerpunkt nicht auf bestechender Navigation, hoher Interaktion und toller Startseite etc. liegen soll, sondern der Content für sich spricht, hat in Verbindung mit einigen Themes einen klaren Charme des Minimalismus.
In Zusammenhang mit Excalidraw und Canvas ergeben sich viele Möglichkeiten, die die anderen Solutions so schnell nicht haben werden.
##### Overline-Headline mit Hilfe von CSS in Obsidian hinbekommen
- nur wichtig für H1 und H2 + Dataview-Results
- _kursiv_ oberhalb von H1 und H2 wird als Overline
- _kursiv_ unterhalb von H1 und H2 wird als Subline dargestellt
##### Callouts in Obsidian als Post-Its rendern
- Ich müsste es hinbekommen, dass die verkleinerten Callouts gedreht und positioniert werden können via MCL und dass dies exportiert werden kann via Nathan
##### CSS-Lösungen für Darstellung von Events und Blog-Posts in Obsidian erschaffen, sowohl für Page-Header, Cards-Grid, evtl. auch für Tiles-Listing

#### Obsidian-HTML-Export verbessern
##### (später zu implementieren > beauftragen): Navigation + basales Render-Plugin + Html-Qualität
die Implementierung dieser 3 Features belasse ich im wesentlichen bei Nathan, beauftrage ihn vermutlich mit 2-3 allgemeinen Enhancements
##### Navigation
- Root-Folder soll ausgewählt werden können
- Reihenfolge der Beiträge (wie in Obsidian Publish)
##### Render-Plugin
(pro Page + pro Component > ähnlich wie Skript-Header)
##### Html-Qualität

#### von Obsidian-Designs zu Nuxt-Content-Designs => den Design-Zyklus von Theaterpedia in's Rollen bringen
##### Schritt 1: Standard Obsidian
Wenn Content aus Obsidian heraus via Publish z.B. als Static-HTML und parallel via Studio angezeigt werden kann, dann bildet sich ein optimaler Workflow, um basierend auf einer einmal gut aufgebauten SPEC mit CSS-Variablen zunächst in Obsidian relativ schnell Content zu sammeln, zu organisieren und kreativ zu gestalten
##### Schritt 2: relativ normale Obsidian-Erweiterungen
Obsidian-Canvas, Canvas-Tweaking, spezielle Themes etc. von Obsidian werden Schritt für Schritt in Nuxt-Designs übersetzt und mit spezifischer Interaktion ausgestattet
##### Schritt 3: krasse Obsidian-Erweiterungen und Integrationen
Ink-Editing on Obsidian und viele Dinge rund um Excalidraw öffnen mit Obsidian noch einmal ganz andere Möglichkeiten. Ähnlich könnte es für die Theaterpädagogik mit einer useMemos-Integration sein.

#### nur eventuell, später: Odoo Sync
erst wenn die Nuxt-Odoo-Sync steht, dann ggf. auch Obsidian direkt anbinden
Odoo Sync nur via Vault mit DataView-Logik
- imperatives Push-Or-Pull von Events, Blog-Posts und Episoden
	- Push or Pull wird im YAML festgelegt
	- ein Plugin ermöglicht die Auswahl von befreundetem Odoo-Content, wird zunehmend leistungsfähiger (zunächst müssen die einzelnen Events noch ausgewählt werden, bald können Channels verlinkt werden)
- CSS-Programmierung einer basalen Event-Card
	- bei Gelegenheit
- iFrames etc. von Odoo stehen zu Verfügung, um pro Page in Obsidian die Anmeldung zu simulieren


### Nuxt Content > Pruvious-Konvertierung
Wenn Nuxt auch ohne Pruvious den Odoo-Content lesen kann, dann wird es bald auch klappen, dort Updates auf Meta- und Main-Data zu machen. Für einige zentrale Blocks kann ein Konvertierungs-Skript geschrieben werden, dass die Pruvious-JSON erzeugt, für fehlende Blocks wird ein spezieller Block 'Konvertierungsfehler' erzeugt, der Hinweise darauf gibt, was noch manuell nachgearbeitet werden muss.

## verworfen: die Schritte direkt zum NuxtUI-DASEi-Projekt
Grundidee:
- wesentliche Variablen etc. zur Konfiguration von Minimal werden in Nuxt-Content-Projekt übersetzt
- Nuxt.Studio-kompatibles Projekt kann aus Obsidian exportiert und dort weiter-edititiert werden
- Filewalker und Filewalking-Config, Settings etc. in Obsidian werden unterstützt und als Plattform für JSON-Export Richtung Pruvious vorbereitet

0. Design-Vorlage zurechtlegen
	- Docs für Farbwerte, Spacing etc. übersichtlich anlegen
	- ein paar Referenz-Bilder und Texte (wie bei Lehrer Lämpel)

1. Site-Template in Theaterpedia-Core
	- Nuxt UI grob verstehen, Figma kaufen, im Figma-File arbeiten, dort Einstellung für DAS Ei festlegen
	- von [diesem Repo](https://github.com/ejfox/nuxt-module-obsidian) ausgehen (Obsidian-2-NuxtContent), ggf. von [diesem](https://github.com/bencodezen/obsidian-nuxt-content/) (weitere müssten zu finden sein)
	- gibt es schon einen Branch mit Nuxt.Content + NuxtUI? falls nicht, neu anlegen, im Theme-Layer NuxtUi hinzufügen, mein bisheriges Nuxt.studio-Projekt importieren, auch die Crearis-Tailwind-Config ummodeln und alles zum Laufen bringen. Wäre super, wenn ich grundsätzliche Settings zum Theming sowohl in crearisUI wie auch in NuxtUi benutzen kann (mit Projektvariablen oder aus Nuxt-Config heraus müsste das gehen)
	- DASEI-Theme skizzieren
	- im DataLayer NuxtContent aktivieren
	- basale Markdown-Dateien aus Obsidian konvertieren und Ergebnisse anschauen, wichtigste Eingriffspunkte festlegen, Fragen etc.
2. basales Design via Minimal + Theme in Obsidian erzeugen und mit ein paar kommentierten Style-Settings bearbeiten, 4-5 Modellseiten anlegen, Webexport testen, soll relativ nah drankommen, alle Optionen freischalten
3. Export-Verzeichnis von Obsidian in Nuxt integrieren
	- prüfen, wie mit Hilfe von Symlinks und Nuxt-Config möglichst viele Einstellungen übernommen werden können
	- wie können Assets wie z.B. Graph und die Daten, auf denen das WASM basiert, aus Nuxt heraus gefüttert werden?
	- festlegen, welche weiteren Exporte, Umkonfigurationen in webexport zwingend erforderlich sind
		- entscheiden: wo Markdown-Dateien verändert werden (in Nuxt-Content mit Pre-Walker)
		- 
4. Umbaumaßnahmen in Webexport durchführen
5. Konfigurationen in Nuxt-Content durchführen

## Verworfen: die Schritte direkt zum PrimeNuxt-DASEi-Projekt
0. Design-Vorlage zurechtlegen
	- Docs für Farbwerte, Spacing etc. übersichtlich anlegen
	- ein paar Referenz-Bilder und Texte (wie bei Lehrer Lämpel)

1. Site-Template in Theaterpedia-Core
	- prüfen, was [das hier](https://github.com/primefaces/primeuix/tree/main) wird und ob es UPdates [hier](https://github.com/primefaces/primeflex) gibt
	- von [diesem Repo](https://github.com/ejfox/nuxt-module-obsidian) ausgehen (Obsidian-2-NuxtContent), ggf. von [diesem](https://github.com/bencodezen/obsidian-nuxt-content/) (weitere müssten zu finden sein)
	- neuen Branch anlegen, im Theme-Layer crearisUI durch PrimeVue ersetzen und auch die Crearis-Tailwind-Config rausschmeißen. Ausgehend [PrimeVue-Nuxt](https://primevue.org/nuxt), soll das richtige ScrollBehavior haben + [PrimeThemingv4](https://primevue.org/theming/styled/) unterstützen (Achtung: bei Tailwind: alles soll auf [PrimeVue4](https://github.com/primefaces/tailwindcss-primeui) basieren oder [hier](https://primevue.org/tailwind/#plugin)), zur [PrimeVue](https://github.com/AntoinePollet/primevue-template)-Konfiguration hier mal gucken
	- [hier (veraltet?)](https://tailwind.primevue.org/builder/) oder [hier](https://blocks.primevue.org/application/sidebarlayout) DASEI-Theme bauen (kann ich nicht direkt verwenden aber vermutlich viel)
		![[../X_Assets/Pasted image 20240619155751.png]]
	- im DataLayer NuxtContent aktivieren
	- basale Markdown-Dateien aus Obsidian konvertieren und Ergebnisse anschauen, wichtigste Eingriffspunkte festlegen, Fragen etc.
2. basales Design via Minimal + Theme in Obsidian erzeugen und mit ein paar kommentierten Style-Settings bearbeiten, 4-5 Modellseiten anlegen, Webexport testen, soll relativ nah drankommen, alle Optionen freischalten
3. Export-Verzeichnis von Obsidian in Nuxt integrieren
	- prüfen, wie mit Hilfe von Symlinks und Nuxt-Config möglichst viele Einstellungen übernommen werden können
	- wie können Assets wie z.B. Graph und die Daten, auf denen das WASM basiert, aus Nuxt heraus gefüttert werden?
	- festlegen, welche weiteren Exporte, Umkonfigurationen in webexport zwingend erforderlich sind
		- entscheiden: wo Markdown-Dateien verändert werden (in Nuxt-Content mit Pre-Walker)
		- 
4. Umbaumaßnahmen in Webexport durchführen
5. Konfigurationen in Nuxt-Content durchführen

## verworfen: finales Vorgehen Websites rund um Obsidian
0. Design-Vorlage zurechtlegen
	- Docs für Farbwerte, Spacing etc. übersichtlich anlegen
	- ein paar Referenz-Bilder und Texte (wie bei Lehrer Lämpel)
1. basales Design via Minimal + Theme in Obsidian erzeugen und mit ein paar kommentierten Style-Settings bearbeiten, 4-5 Modellseiten anlegen, Webexport testen, soll relativ nah drankommen
2. das Design in Shuffle mit Tailwind-Template nachbauen, es soll dark und light unterstützen
3. 

## verworfen: die Schritte direkt zum Daisy-Vue-DASEi-Projekt
0. Design-Vorlage zurechtlegen
	- Docs für Farbwerte, Spacing etc. übersichtlich anlegen
	- ein paar Referenz-Bilder und Texte (wie bei Lehrer Lämpel)
	
1. ein DaisyUI-Site-Template finden, das das richtige Scrollbehavior hat, DaisyUI-Theme mit diesem Site-Template anlegen, basierend auf den Themes von theaterpedia2022

2. in Obsidian nachziehen basierend auf Minimal, anfangen, Variablen zu dokumentieren

## verworfen: andere Strategien
entweder Prime-Strategie
Bootstrap-Strategie
Plain- + ShadCN-Strategie verfolgen

Theme-Entwicklung mit Shuffle-Dev: Tailwind

Prime-Strategie
ich verwende die PrimeVue-Components mit ImportMaps entweder mit den direkten Werten oder in Kombination mit PrimeFlex oder UnoCSS im staticHTML
Vorteil:
- Zugriff auf Theming-Strategie von PrimeOne mit Figma etc., sehr viele Theming-Beispiele
- die Components wird es noch lange geben, PrimeTek ist sehr stabil und unabhängig von Vue o.ä.
- die Components sind unstyled > das wäre auch für Muris interessant > ihn das mal evaluieren lassen

Bootstrap-Strategie
Obsidian-CSS ist mit klassischem CSS-Ansatz ähnlich wie Bootstrap aufgebaut, über cssclasses wird eine Definition festgelegt
Bootstrap wird in Odoo verwendet. Es wäre nun sinnvoll, die Odoo-Konventionen auch in den Static-Exports anwenden zu können, um sie mit den Obsidian-Werten zu kombinieren.
Vorteile:
- Odoo-Implementierungen sind relativ leicht wiederverwendbar
- Bootstap ist für CDN optimiert, keine Probleme mit der Dateigröße etc.
- vermutlich hervorragende Integration mit der Quarto-Chain möglich
- evtl. Umstellung des gesamten Stack auf Bootstrap auch in Pruvious

### Vue und vieles weiteres mit ES-Import auch in static-html nutzen!!


### CSS-Theming rund um App-Builder, Figma und Co
Als Alternative zu CrearisUI, ShadCN etc. könnte ich die Primetek-Components verwenden.
Das [Sakai-Nuxt-Theme](https://sakai.primevue.org) könnte für die Nuxt-Entwicklung einen guten Einstieg bieten, einfach mal testen, ob ich es layern kann!!

### Tailwind-basiertes Theming auf Static-Sites mit DaisyUI
Das DaisyUI-CDN war bei mir gzipped nur 160kb. Da ist dann tailwind mit drin. Das wäre mal einen Versuch wert in Kombination mit alpinejs oder auch vue-on-static-pages.

### UnoCss + DaisyUI
ist evtl. eine Spielerei, Einstiegspunkt siehe [hier](https://github.com/unscatty/unocss-preset-daisy), unklar, ob das via CDN funktioniert, im Playground/index.html wird aber wirklich wenig importiert ... könnte via CDN laufen
hier ist [Support für DaisyUI v4](https://github.com/kidonng/unocss-preset-daisy/pull/39)


