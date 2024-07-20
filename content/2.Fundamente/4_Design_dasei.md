---
cssclasses:
  - paper
title: 4. Design DASEi
---

## 🔶 DESIGN DAS Ei
## Überblick
DASEi.eu ist eines von 4 Themes von Theaterpedia.

Dieses Theme (z.B. auch verwendet für docs.theaterpedia.org) hat dokumentarisch-episodischen Charakter. 
Der Seitenaufbau ist ursprünglich eng mit Design-Experimenten von DASEi.eu verbunden > vor allem als Informationsdesign (weniger als Color-Theme). Bei der Implementierung von DASEi.eu finden wir heraus, wie es sich in Richtung Event-Management erweitert.

Wir implementieren drei Varianten:
- Portal-Website & Suchmaschine
- Organisations-Website
- Dokumentation

Dieses Theme zeigt rein visuell-optische Möglichkeiten eines Design-Systems der Theaterpädagogik, das einen klar strukturierten und logischen Aufbau vor einem eher expressiv-emotionalen Design und Farbsystem prioriert.

Dies betrifft vor allem:
1. die Ermöglichung eines Website-Aufbaus basierend auf Overline-Headline-Systematik (nicht zwingend), wie er z.B. im Journalismus oft anzutreffen ist, jedoch oft untypisch ist für Ecommerce-Systeme und auch viele einfache Blogs
2. die Bevorzugung einer vertikalen Logik vor einer horizontalen Logik > wir beschäftigen uns intensiv, was passiert, wenn z.B. auf dem Smartphone Seiten mit dem Finger hoch- und runtergewischt werden
3. die Verwendung von Monospace-Schriften nicht nur in Überschriften sondern auch im Fließtext

## Design und Theming von dasei.eu werden in 2024 abgeschlossen
Diese Bereiche und Aspekte sind in ausreichen definiert und ausexperimentiert und müssen lediglich final entschieden und dokumentiert werden


### Tabellen, Auflistungen, Module


### Navigation und Breadcrumbs
Sidenav bleibt einfach und übersichtlich: Hauptebene und wenige Unterkapitel, immer ein gelber Balken
falls Sidenav nicht sichtbar ist, werden ab der dritten Gliederungs-Ebene über der Overline Breadcrumbs angezeigt

### PageHeader und PageBanner
Fullpage/Slides, 2/3-Height, 1/3-Height, minimal
Variants: Full, 
- Darstellung der Referent:innen (People-Cards)

## Arbeitsfolge, Tasksammlung Figma
- [ ] Config + Demo Typographie + Breakpoints
	- Fonts und Schriftgrößen festlegen > dafür die CSS-Tools verwenden, die ich gestern hatte
		- was hat Karel verwendet?
			- Logo-Schrift: Bely (kommerziell)
			- 
		- Sans: Roboto
		- Serif?:
		- Mono:
	- aus Powerapps Schriftgröße + Werte rausziehen, vor allem die Dense-Bereiche
	- dense-Logik als Ausnahme für kleine Geräte: Base-Font von 16 auf 14 herunterstellen, in Einzelfällen margins und paddings verkleinern
		- Ergebnis: 
			- Dense-Breakpoints
				< 379 / 660 < viewport < 800 / 
			- Standardgröße iPhone: 390 x 844, Phone David: 360 x 780, aktuelle Samsung Plus fast ident. iPhone, Samsung Ultra: 412 x 915, iPhone Max bis zu 430 x 932, fast keine Geräte unter 360 x 660, gar keine vernünftigen Geräte unter 320 x 640, iPhone SE 375 x 667
			- 
			- alle 360er-Laufweiten passen auch auf 320
			- alle 850er-Laufweiten passen auch auf 740 o.ä.
	- margins und paddings grundsätzlich ab viewport < 850 o.ä. heruntersetzen
	- Figma weiter auf minimal-tablet undensed designen, dense in Figma NICHT umsetzen
	- 
- [ ] Subcomponent: Text-mit-steuerbar-präziser Balkenhöhe (Line-Hight), die mit primary, grey oder secondary hinterlegt werden kann
	- als Nav-Item
	- als Teil von Overline-Headline
- [ ] gelbe Leisten auflisten und standardisieren (von Curriculum her)
	- [ ] schmal und normal (Achtung Dense)
- [ ] typische Seiten anlegen
	- [ ] Einstiege
- [ ] Logo größer, Margin links in Navigation
- [ ] PageHeader, ContentBody, PageFooter in Figma grob skizzieren mit Minimalverhalten, dann Implementierung einplanen
	- fixed (Sticky?): Over or under (Später: BannerCard hat eigenes Verhalten, z.B. fade)
	- ContentBody: Scrollover, optional: sticky (noch später: optionales vertical Stacking)
	- Footer: uncover
- [ ] 3 Sekundärfarben-Konzepte spezifizieren und in Figma tauschbar machen über Modus
	- blau-Theatrales Lernen > eher kaltes grau und schwarz als Background, mein jetziges Obsidian-Grau für Dark-Schattierungen verwenden
	- Obsidian-Design > richtig warmes Grauschwarz und schönes Lila (Link-Farbe?)
	- codesandbox > richtig schwarz und farbig werden, ggf. tertiär-Farbe ausgehend vom Link-Orange (z.B. in Overline > mehrfarbige Ansätze von Rosalin)
- [ ] spätere Tasks, wenn ich Zeit habe
	- Textkontrolle so einrichten, dass von 760 bis 1350 und 360 bis 450 relativ durchgängig ein ähnlicher Textsatz entsteht und die Proportionen von Sections etc. beibehalten werden
	- weitere Page-Layouts einführen: Canvas + Dokumentation/Dokument (3-spaltig)
	- image-rescaling weiter minimieren, so 
	- Scroll-away mobile-topbar

## hier geht's weiter Design-Prozess DASEi / noch fehlende Reste
- Logo DASEi dark
- Sidebar-Footer: Social-Icons + Theaterpedia-Button symbolisieren
- mobile-first und tablet-first Design > Auflösungen und Aspect-Ratios für image-handling standardisieren (Rosalin mit der Milchkanne im Quadrat oder leichtes Querformat = Desktop + Tablet passen schon, in mobil ist ggf. gelbes Banner + gelbe Linie zu viel (siehe Agenda > on mobile)
- ![[../X_Assets/Pasted image 20240703111736.png]]

## Arbeitsfolge, Tasksammlung Implementierung
- [ ] ab 1200 bilden sich Ränder
- [ ] bei 1280 ggf. noch einmal die Typographie hochsetzen, ab 1400 bilden sich endgültig Ränder, rechts und links mittelgrauer Seitenhintergrund mit minimalem Schatten
- [ ] Overline-Headline-Subline als H1, H2, H3 mit Textumbruch o.ä. CSS
- [ ] Scroll-away: mobile-topbar, (optional) mit Logo + Burger
- [ ] Basiselement für Pagesection
	- [ ] darauf aufbauend: PageHeader, ContentBody, PageFooter

### Tabellarische Aufstellungen

### Verwendung von Blocks, Sections

### Laufweite der Designs
alle Hauptseiten fungieren als Hub-Seiten, die Informationen zusammenführen und als Text-Bild-Content präsentieren, sie sind offen angelegt und füllen  die volle Seitenbreite


### Verwendung von Post-ITs
- Post-ITs haben typischerweise eine dialogische Funktion, ähnlich wie Callouts, ergänzen den Standard-Fluss des Textes um eine eher kommunikative Dimension mit Tips, Verweisen und Links, direkter Ansprache
- sie grenzen sich deutlich von Blocks/PageSections ab
- Farben
	- Primärfarbe
	- grau
	- Sekundärfarbe

### Sekundärfarbe blau
- in Aufbaustufe als Teil der Atmosphäre
- evtl. zur Unterscheidung in Formales (Sekundärfarbe) und Inhaltliches (Primärfarbe) und dann auch für Cards
- in wissenschaftlichen

### grau


### dark & light
- fast schwarzes Braun verwenden
- bei dark: Hintergrund-Fotos deutlich abblenden und weißen Text drüberlegen
- Profile Aufbaustufe werden semi-dark angezeigt (Sekundärfarbe taucht auf)

### Kurse und Leitseiten
- Leitseiten sind als 2/3-Height PageHeader gemacht
- Kurse als Full-Height PageBanner
- in Modulen und Kursen, Profilen wird das Programm in einem oder mehreren inverted-Blocks als Caroussel angezeigt, der Block wird jedoch dominiert von der H2 des  Moduls, der Phase
- auf Leitseiten

### Typographie
standardmäßig am Minimal-Theme orientiert
- H1 nur für Hauptkapitel und Übersichtsseiten Einstiege, Grundlagen, Aufbaustufe, Profile, Workshop, Institut, Blog:Demokratie & Theaterpädagogik' richtig groß
- H1 bei Modulen, Kursen und Blog-Beiträgen halbgroß, dieselbe Größe wie H2 zu Übersichtsseiten


- Großschreibung Headlines bei: Modulen, Kapiteln > darüber Overline
- Großschreibung Headlines bei: Kursen > darunter Subline mit gelbem Balken


In 2024 sind noch Aspekte der Typographie noch zu entscheiden

## die Themes im Überblick

### dasei
Dieses Theme hat einen eher journalistisch-dokumentarischen Charakter. 



<br />
<br />
