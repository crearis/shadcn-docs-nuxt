---
cssclasses:
  - paper
title: "3. Whitepaper: Offenes Datenformat"
---
# 🔶 Double-Bound Pruvious + Triple-Stored Odoo
##       Markdown als Standard für Transformation und Verteilung


> [!warning] dies ist nur eine Sammlung und muss noch geordnet werden

- Editor und CMS zugleich > die Datenbank-Struktur hinter dem 'Parallelspiel'
	- Ein Datensatz (z.B. Event A1 'Am Anfang war der Kreis', 18.-20.10.2024 Nürnberg) hat:
		- Meta-Felder (Datum, Ort, Typ 'Event', Kategorie A1, Headline, Overline, Teasertext)
		1. MD-Body (im Pandoc-Format > Obsidian Editing)
		2. CMS-Body (im JSON-Format > Pruvious Editing)
		3. ODOO-Body (HTML-Format oder QWeb-Format > Odoo Editing wird im Moment nicht verwendet)
		- Input-Typ (Auswahl): CMS - MD - ODOO
	- wenn im Event 'CMS' als Input-Typ angegeben ist, dann kann nur über das CMS der 'Body' des Events verändert werden (also Detailtext)
	- Meta-Felder können technisch immer über Pruvious, Obsidian oder Odoo bearbeitet werden, d.h. die Verwaltung von DAS Ei kann z.B. eine Veranstaltung stornieren, muss dabei nicht den BODY der Veranstaltung verändern

- Pruvious CMS lernt Nuxt Content > die Publishing-Logik hinter dem Doppelspiel
	- grundsätzlich gilt: Nuxt Content und Pruvious CMS nutzen dieselben Components und dasselbe CSS-System, ein Blog-Post kann wahlweise von Nuxt-Content gerendert werden (von Markdown-Datei) oder von Pruvious CMS gerendert werden (von CMS-Eintrag her) und sieht bei identischem Content auch identisch aus.
	- in der Early-Beta-Phase liegt der Schwerpunkt der Programmierung auf 2 mehr oder weniger parallel laufenden Systemen
		1. Navigation, Theming und Page-Layout mit Hilfe von Pruvious CMS
		2. schrittweiser Aufbau von Event-Components inkl. Checkout-Flow mit Hilfe von Pruvious CMS
		3. schrittweiser Aufbau der Blogging-Pipeline: Publikation einfacher Blog-Posts und uniformer Episoden mit Hilfe von Nuxt-Content basierend auf Content, der mit Obsidian erstellt wird > Nuxt-Content wird dabei von vornherein via Pruvious aufgerufen, d.h. Pruvious hat das volle Management des Internet-Auftritts, rendert in jedem Fall die Meta-Felder, lediglich das Rendern des MD-Bodies wird an Nuxt-Content abgegeben
	- bei der Implementierung der Blogging-Pipeline wird von vornherein jedoch das Crossing-the-Line zwischen den parallel laufenden Systemen mit programmiert: in den Blog-Posts (3) können Events (2) als Cards oder Stacks eingebunden werden 
		- dies soll direkt in Obsidian funktionieren, d.h. Obsidian erhält Zugriff auf Events-Meta-Daten und kann im Blog-Editor eine Events-Card platzieren/sichtbar machen
		- dies ist wichtig auch deshalb, um in der Eigendynamik des Agile-Programming zu verhindern, dass sich eine dauerhaftes Trennung von Blog-Posting via Obsidian und Event-Management via Pruvious etabliert
	- in der Late-Beta-Phase verschiebt sich der Schwerpunkt auf Umsetzung des Pandoc-Standards: Nachdem in Early-Beta der Input-Konverter "Obsidian->MD-Body" sowie der Output-Konverter "MD-Body->Nuxt-Content" entstanden sind, kommen jetzt ein Input-Konverter "CMS-Body > MD-Body" und ein Output-Konverter "MD-Body > CMS-Body" hinzu
	- Wichtig ist (gilt für alle Konverter): Es ist nicht erforderlich, dass immer alle Daten konvertiert werden. Wichtiger ist, dass klar standardisiert und dokumentiert ist, welche Daten warum konvertiert werden und welche nicht. Es ist also nicht erforderlich, von vornherein umfangreiche Konverter zu programmieren, wichtiger ist, dass die Konverter verlässlich das tun, was sie versprechen zu tun
	- anstatt von Schwächen oder Fehlern der Konverter zu schreiben, sollen die 'Konvertierungsverluste' von vornherein als 'Kompression' konzipiert werden. Es gibt verschieden hohe Grade an Kompression. 
		- Der maximale Kompressions-Grad ist, dass von einem Datentyp nur die Metadaten (immerhin noch Headline-Overline-Teasertext + Image) auf der anderen Seite des Editor-CMS-Grabens sichtbar werden.
		- Typischer werden zunächst solche Verhaltensweisen sein: Fußnoten aus dem MD-Format werden nicht in's CMS-Format übertragen
		- relativ bald wird es möglich sein, zusätzlich zur Eigenschaft 'source' auch noch eine Kompressions-Stufe anzugeben > weil es oft gar nicht gewollt ist, z.B. die allerletzten Details einer Veranstaltung an die Suchmaschine oder die Regio weiterzugeben; so kann es z.B. sein, dass sich Fußnoten auf AGBs der Organisation beziehen oder in Fußnoten spezielle Buchungshinweise gegeben werden, die außerhalb der konkreten Website nur wenig Sinn machen

	- Theaterpedia-Portal und Theaterpedia-Regio basieren von vornherein vollständig auf Nuxt-Content
	- Bis zum Theaterpedia-Release soll das System so weit entwickelt werden, dass ein geordnetes Vorgehen entsteht, wie z.B. 
- Agile Projektentwicklung: das Rapid-Programming-Prinzip hinter dem Parallelspiel
	- Aufwertung der dev-docs > als bereits vollständig absolvierter Einstiegspunkt, als Ausgangspunkt für Standardisierung, Weiterentwicklung und Programmierung
	- einfaches Blog-Posting ist der nächste logische Schritt von Karel, Adam und Dan her betrachtet
	- reines Event-Management ist der nächste technische Meilenstein von Odoo her betrachtet
- die Pandoc-Konverter: Entfesselung des Doppelspiels
	- in der Beta-Phase von Theaterpedia werden MD und CMS einfach parallel betrieben, Pruvious rendert den Body wahlweise aus dem CMS-Feld oder aus dem MD-Feld
	- 
	- zunächst werden die Input- und Output-Konverter
	- 
- CMS eher in Richtung **Commerce** und Shop-Systeme, Notebooks (z.B. Markdown + Python > Jupyter > R / RMarkdown > Quarto / aber auch Medium und ähnliche) eher in Richtung **Research** + **Docs** > Theaterpedia steht auf der Grenze zwischen beiden Welten
- Datenbank-Logik aufgebohrt > die Idee hinter dem Doppelspiel 'Editor + CMS'
	- 
	- bislang wurden meistens proprietäre oder vereinfachte 'Single-Use-Konverter' verwendet nach dem Motto 'Markdown-Dialekt X > fertiges PDF' oder 'Markdown-Dialekt Y > fertige Website' 
	- der Pandoc-Standard setzt sich durch, Kompatibilität mit LaTeX, Ähnlichkeiten mit PS => der lange Weg zum sauber standardisierten Markdown, zweischrittige Konvertierung: 
		- Schritt 1: Input
			- Markdown-Dialekt X > Pandoc-Markdown + Extension X
			- Markdown-Dialekt Y > Pandoc-Markdown + Extension Y
		- Schritt 2: Output
			- Pandoc-Markdown + optionale Extensions X, Z > Website
			- Pandoc-Markdown + optionale Extensions Y, Z > PDF
	- Obsidian arbeitet klar auf der Pandoc-Seite, verfolgt die Philosophie eines möglichst einfachen human readible Markdown, das trotzdem leistungsfähig und klar standardisiert ist. Obsidian ist zwar selber proprietär mit Commitment in Richtung freie Software für Einzelakteure (wie die meisten TPs). Theaterpedia konzentriert sich auf die Funktionalität von Obsidian, die zur Generierung von offen zugänglichen Daten genutzt wird. Wichtiger ist, dass es ein weitgehend pandoc-kompatibles Markdown erzeugt mit ein paar eigenen Extensions, die sauber definiert und dokumentiert werden. (Obsidian unterstützt dabei sogar Systeme wie Quartz aktiv, die ganz offensichtlich das eigene Geschäftsmodell angreifen => Obsidian Publish). Obsidian zeigt wie ein paar Ordner voller sauber standardisierter Markdown-Dateien zu einer leistungsfähigen Desktop-Datenbank werden
	- für Theaterpedia wichtige Merkmale dieser Datenbank sind:
		- ein simples und gleichzeitig leistungsfähiges Task-Management
		- Umsetzung des Prinzips Single-Source-of-Truth ist möglich
		- eine Person oder mehrere Personen können mit Hilfe von Obsidian ein komplettes Universum von Berichten, Quellen, Aufgaben und Projekten erschaffen mit übersichtlicher Gliederung, Verlinkung und Verschlagwortung mit einer dynamischen Taxonomie
		- ein Obsidian-Vault ist komplett unabhängig vom Internet, braucht keine Cloud o.ä. und hat trotzdem gleichzeitig starke Tools für's Website-Publishing an Bord
		- unendliche Möglichkeiten der individuellen Anpassung sowohl durch Erweiterung um Funktionen als auch in der Art und Weise wie die Informationen organisiert werden, z.B. sind völlig verschiedene 



<br />
<br />