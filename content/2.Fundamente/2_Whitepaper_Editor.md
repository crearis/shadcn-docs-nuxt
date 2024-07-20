---
cssclasses:
  - paper
title: 2. Editing-Workflow
---
# 🔶 Theaterpedia braucht einen Editor


> [!info] Disclaimer
> Längere Zeit war Theaterpedia von der Idee eines Website-Builders fasziniert: Dass eine App das Publishing und Updating von Websites für Theaterpädagog*innen* dramatisch vereinfachen soll. Wir bevorzugen mittlerweile den Ansatz eines Markdown-Editors als Content-Tool der meisten Theaterpedia-Sites, die bei Bedarf Schritt-für-Schritt in ein ausgereiften CMS ausgebaut werden können.


## Fragen und Antworten rund um Obsidian und Markdown-Editing
### Obsidian als Referenz-Editor
Eine Anforderung an die Implementierung ist, dass Standard-Text-Content von Theaterpedia effektiv in Obsidian erstellt und aktualisert werden kann. Dies betrifft auf längere Sicht sowohl Events als auch Blog-Posts.
Dies stellt gegenüber bisherigen Konzepten eine gründliche Änderung dar, weil Obsidian kein WYSIWYG-Editor
- zwar versucht Obsidian (auch z.B. mit Obsidian Publish) einem WYSIWYG-Editing nahe zu kommen. Die exakte Darstellung von Theaterpedia-Content im Edit-Bereich von Obsidian wird jedoch nicht so einfach gelingen.
- andere Editing-Umgebungen wie z.B. Nuxt Studio ermöglichen ein pixel-perfektes Arbeiten, mit dem so oft geworben wird > mit dem Nachteil, dass sie sich oft nicht so direkt in den sonstigen Workflow von Content-Arbeitern einbetten. In Obsidian
- Obsidian dagegen hat immer nur die 'Ähnlichkeit' der Darstellung zum Ziel und nicht eine 'präzise Identität', stellt aber selber eine vollständige Arbeitsumgebung für das komplette Selbstmanagement und Knowledge-Management zu Verfügung und hat einen breiten Kontext an Plugins und weiteren Integrationen
- Diese gewisse Ungenauigkeit in der Darstellung wird im Zusammenhang mit Theaterpedia zur Stärke: Wenn der Editor die Anwender spüren lässt, dass der Content nicht immer exakt so aussehen wird, wie sie ihn gerade auf dem Bildschirm haben, werden sie eben von vornherein ihren Content etwas offener und flexibler gestalten, werden nicht verführt, pixelgenaue Anpassungen oder Formatierungen zu machen. Tatsächlich würden solche 'präzisen Bedürfnisse' der Anwender in Theaterpedia ein Problem darstellen.

### Wie soll Obsidian im Theaterpedia-Kontext eingesetzt werden?
Es gibt verschiedenste Meinungen und Haltungen zur Frage, wie Obsidian (und Markdown im Allgemeinen) richtig eingesetzt wird. Theaterpedia vertritt eher die Meinung, dass Obsidian als Editor erkennbar bleiben soll
- Obsidian soll **dargestellt** werden als:
	- ein "Schweizer Messer"
	- gut organisiertes Notebook
- Obsidian soll **nicht** propagiert werden als:
	- die perfekte Lösung für alle Träume
	- als Ersatz für alle Tools
- sicherlich trifft zu
	- es gäbe für fast jeden Einzelfall immer eine bessere Lösung als einen Editor
	- es gäbe auch in Obsidian selber immer noch eine bessere Lösung als die aktuell eingesetzte ... 
- auch wenn es möglich ist soll er nicht ausgebaut werden
	- zu einer Programmierumgebung
	- zu einem Dashboard

- Das Tool soll bleiben was es ist: Ein Markdown-Editor - es sollen sich sowohl Theaterpädagog*innen* als auch Entwickler*innen* wohl darin fühlen
	- dadurch dass Theaterpedia für Obsidian ein standardisiertes Interface anbietet, in dem vieles übersichtlich vernetzt ist 
	- dadurch dass der Schritt von Obsidian in eines der besseren Tools z.B. am Ende eines Publishing-Workflows jederzeit einfach zu bewerkstelligen ist, können die Anwen

### Welche Konsequenzen bedeutet Markdown für die Theaterpedia-Implementierung!
- Theaterpedia soll wie Obsidian selber einfach bleiben, ein einfaches Tool, das ganz praktisch nebenbei im täglichen Getting-Things-Done den Betrieb einer Website erlaubt, die Vorbereitung einer Email-Kampagne
- Vor allem Blogging und Episoden sollen einfach gehalten werden > aber noch offen genug, damit Content von selber zu  halben Buchprojekt wachsen kann, ohne dass Obsidian verlassen werden muss. Erst für die seriöse Endredaktion, Endpublikation ist dann aber ggf. ein Export in ein anderes Tool wie z.B. VSCode Quarto empfehlenswert
- Event-Management und Adressverwaltung sollen basale Zugänge geschaffen werden, z.B. Suchen, Finden und Einbetten von Standard-Infos zu Kontakten und Veranstaltungen
- die doppelte Templating-Architektur von Obsidian (Block-Templates + Dataview-Templates) soll einfach und gut verstehbar eingesetzt werden können und an dem Theaterpedia-Interface schlüssig andocken können
- die simple und effektive GTD-Implementierung soll simpel bleiben und möglichst mit dem Tasking und Reporting von Odoo zusammenarbeiten

### Welchen Markdown-Standard verfolgt Theaterpedia?
- Theaterpedia sieht Obsidian -trotz einiger Extensions- als guten Einstiegspunkt in ein Pandoc-basiertes Markdown-Konzept, mit Hilfe von Obsidian soll die Philosophie eines möglichst einfachen 'human readible Markdown' zentral gestellt werden, das erst in der Vorstufe zum Publishing mit technischen Erweiterungen (classes, mdc etc.) gekennzeichnet wird.
- 
### Ist es problematisch, dass Obsidian selber proprietär ist?
Obsidian ist selber proprietär mit Commitment in Richtung freie Software für Einzelakteure (wie die meisten TPs). Theaterpedia konzentriert sich auf die Funktionalität von Obsidian, die zur Generierung von offen zugänglichen Daten genutzt wird. Wichtiger ist, dass es ein weitgehend pandoc-kompatibles Markdown erzeugt mit ein paar eigenen Extensions, die sauber definiert und dokumentiert werden. (Obsidian unterstützt dabei sogar Systeme wie Quartz aktiv, die ganz offensichtlich das eigene Geschäftsmodell angreifen => Obsidian Publish). 

### welche Qualitäten hat Obsidian als Desktop-Datenbank?
Obsidian zeigt wie ein paar Ordner voller sauber standardisierter Markdown-Dateien zu einer leistungsfähigen Desktop-Datenbank werden. Für Theaterpedia wichtige Merkmale dieser Datenbank sind:
- ein simples und gleichzeitig leistungsfähiges Task-Management
- Umsetzung des Prinzips Single-Source-of-Truth ist möglich
- eine Person oder mehrere Personen können mit Hilfe von Obsidian ein komplettes Universum von Berichten, Quellen, Aufgaben und Projekten erschaffen mit übersichtlicher Gliederung, Verlinkung und Verschlagwortung mit einer dynamischen Taxonomie
- ein Obsidian-Vault ist komplett unabhängig vom Internet, braucht keine Cloud o.ä. und hat trotzdem gleichzeitig starke Tools für's Website-Publishing an Bord
- unendliche Möglichkeiten der individuellen Anpassung sowohl durch Erweiterung um Funktionen als auch in der Art und Weise wie die Informationen organisiert werden, z.B. sind völlig verschiedene Getting-Things-Done Implementierungen rund um Obsidian gründlich dokumentiert

### kann Obsidian mehr als nur 'digital gardening' und 'Zettelkasten'?
im Internet wird Obsidian vor allem eingesetzt für 'digital gardening' sowie (oft nur als Vorstufe) für's Blog-Posting > mit Hilfe von Obsidian werden bei Theaterpedia wunderbare Workflows entstehen z.B. rund um Übungsdatenbank, Projektdokumentation, Blog-Posting bis hin zum Episoden-Workflow. Oft genug wird Obsidian dabei das einzige Tool sein, das gebraucht wird
- Obsidian ist nicht direkt prädestiniert für Event-Management und Buchhaltung. Eine Organisation mit vielen Events, vielen Mitarbeiter*Innen* tut sich mit einer ordentlichen Datenbank und einem klaren Webshop leichter. Dies aber erst dann, wenn auch Personen existieren, die diese 'Systeme' kennen und richtig bedienen. 
- Jedoch gilt auch hier: Einsteiger*innen* auch in diesen Organisationen haben es leichter, wenn sie zunächst erstmal die einzelnen Themen Schritt für Schritt selber machen. Vor allem mit zentralen Neuentwicklungen der letzten Jahre (z.B. Canvas) baut Obsidian eine erstaunlich übersichtliche und anwenderfreundliche Brücke, um den Übergang zu schaffen von persönlichem Knowledge-Management und individuellem Selbstmanagement hin zu einer nachhaltigen Mitwirkung in einem größeren System mit Standards und Abläufen



<br />
<br />