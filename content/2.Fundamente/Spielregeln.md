---
cssclasses:
  - paper
title: 6. Spielregeln
---
## 🔶 Work-In-Progress
### in allen Phasen des [2_Release_Plan-2024](../Roadmap/2_Release_Plan-2024.md) geltend 4 Regeln

1. Es werden keine neuen Features eingeplant
2. Verbesserungsvorschläge sind herzlich willkommen: Bitte aufschreiben und viel Geduld mitbringen!
3. Anstelle von 'schnellen Lösungen', die nur 1-2 Tage dauern und halbfertig liegen bleiben, sind solche zu bevorzugen, die 1-2 Wochen dauern und dokumentiert werden
4. Auf dieser Grundlage wird ein zeitgesteuertes Controlling umgesetzt, es gibt zahlreiche Möglichkeiten zur Vereinfachung der Vorgehensweise

## eine detaillierte Erklärung zu diesen Regeln
### 🔶 Feature-Freeze
Wir befinden uns einer Early-Beta-Phase: Recherchen sind abgeschlossen, Proof-of-Concepts sind bestätigt, die Roadmap ist geschrieben. Neue Träume und weitere Features sind typischerweise erst Post-Release möglich.

### 🔶 Vorschläge zur 'Vereinfachung' oder 'Verbesserung'
eine weitere Vereinfachung, Verbesserung oder Standardisierung ist sicherlich möglich, sollte aber trotzdem nicht versucht werden: 
	1. die größte Unsicherheit stellt die Realisierung von Bezahlfunktionen via Molly dar. Hier müssen wir erst Real-World-Erfahrungen sammeln, bevor weiter recherchiert und optimiert werden kann. Die Recherchen und Erkenntnisse rund um das Alpha-Release müssen reichen + die jetzige Roadmap ist weitgehend entkoppelt von der Checkout/Payments-Frage
	2. die zweitgrößte Unsicherheit ist das Nuxt4-Update. Hier sind die verschiedensten Szenarien durchgespielt. Es gibt keine optimale Lösung. DIe Platzierung in der Roadmap direkt nach der Konferenz, rechtzeitig vor 1.0-RElease ist vermutlich der beste Kompromiss. Die Bearbeitung des Themas sollte frühestens 3 Monate nach dem Nuxt4-Release erst beginnen. Bis dahin sollten wir davon ausgehen, dass wir alles wichtige jetzt eh schon wissen/ahnen.
	3. Mit der Klärung der App-Builder/Editor-Features, Einführung von Pandoc-Standardisierung und der Festlegung von Regio und Suchmaschine als Read-Only-Implementierungen via Nuxt-Content und Redis sind die letzten Features verschwunden, die hätten frei programmiert werden müssen, die Fragen wurden jeweils einmal gründlich recherchiert und sollten erst ausgehend von "running code" oder "running problems" weiter diskutiert werden
**> Deshalb gilt**: Weitere Verkürzungen, Veränderungen der Roadmap müssen beantragt werden. Zentrale Entwickler des Projekts sollen ihre Zeit nicht weiter mit Recherchen verbringen; sollten sie eine wichtige Idee, Frage, ein Problem finden, dann soll dies so schnell wie möglich knapp aufgeschrieben, von einer zweiten Person bewertet werden, ob es wirklich jetzt wichtig wäre, sich damit zu befassen

### 🔶 Umsetzen und Dokumentieren
Viel besser als Vorschläge zur Vereinfachung oder Verbesserung: Mithelfen bei der **Umsetzung der Planung** mit einer strukturierten Dokumentation **ohne viel Gewicht auf Änderungsvorschlägen oder -wünschen**
1. mit der Bereitstellung von docs.theaterpedia.org als voll-integrierte Toolchain im Programmier- und Management-Prozess von Theaterpedia ist der vermutlich wichtigste Schritt geschafft, der für ein sicheres 1.0-Release noch zu schaffen war
2. Es müssen nun im wesentlichen die bereits in Mindmaps aufwändig recherchierten und konzipierten Zusammenhänge entlang der real vorgenommenen Implementierung noch einmal gefiltert und durchformuliert werden
3. Es entstehen dann fast automatisch parallel zum Running-code mit mehrere Level an Dokumentation:
	1. in diesem Whitepaper, indem es durch Fußnoten, Kommentare angereichert wird
	2. über Diskussionen und Besprechungsprotokolle zur Roadmap (diese könnten z.B. teilweise per Video aufgezeichnet und per Teams transkribiert werden, um einzelne Passagen dann zu publizieren wahlweise als Video und/oder Text)
	3. über Feature-Beschreibungen und Sprint-Protokolle
	4. über explizite User-Dokumentation
	5. über Schulungsunterlagen, die in den nächsten Monaten beim Onboarding entstehen
4. es entsteht dann im Verlauf von 9 Monaten ein Apparat an Verweisen, Terminologie in einem relativ geschlossenen System. Dies kann dann nach Release in Ruhe evaluiert und entschieden werden
5. Sicherlich **wird am Ende einiges doch anders kommen** als hier beschrieben. Solche Änderungen sollen `als Änderungen` doppelt kommuniziert werden: 
	1. in den dev-docs/Roadmap sollen gestrichene Passagen als ~~gestrichen~~ markiert werden
	2. außerdem soll bei wichtigen Zusammenhängen das Board des Projekts kurz informiert werden

### 🔶 Zeitsteuerung
Die Planungen der Roadmap 1.0 sollen **bis zum 1.0-Release zeitgesteuert umgesetz**t werden: Es existieren an mehrere Optionen für Zeitgewinn auf Kosten einer Entstrukturierung, die zwar eine wichtige Eigenschaft oder Regel des Gesamtsystems brechen aber ohne Gefahr für eine Weile (6-12 Monate) eingesetzt werden können, ohne zu irreversiblen Fehlern/Fehlentscheidungen zu wachsen. Die Zeitsteuerung betrifft sowohl projektinterne als auch projektexterne Faktoren. D.h. wenn jemand krank ist oder sonstwie verhindert, sollte ein gewisser Spielraum für Nachholung von Arbeiten gewährt werden aber nicht einfach eine Verzögerung der Roadmap eingeplant werden

### 🔶 Agile + nachhaltig!!
Auch wenn es vermutlich irgendwo zu Entstrukturierungen kommt sollten alle sollen davon ausgehen, dass die jetzt beschriebene Komplexität des Systems angemessen ist, dass es nicht **eh besser** wäre, weiter zu "vereinfachen". Sondern es sollte gelten: Falls Entstrukturierungen nötig werden, um die Roadmap zu halten, dann muss auf der langfristigen Roadmap des Projekts das Nacharbeiten dieser Strukturen eine hohe Priorität erhalten (vor weiteren Features etc.). Wichtig ist auch hier ein strenges Controlling, dass sich nicht permanent 'pragmatische Interessen' durchsetzen mit Verweis auf Agile Programming und sich vorläufige Entstrukturierungen verfestigen zu dauerhaften Strukturen. 

### 🔶 Möglichkeiten zur Entstrukturierung
Einige **Möglichkeiten zur Entstrukturierung** auf der Roadmap bis Anfang Oktober sind:
- Vereinfachung Double-Bind-Betrieb von Odoo und Pruvious: Es ist ohne weiteres möglich, die WIKI- und die KANBAN-Toolchain parallel zu entwickeln, ohne sie direkt in einer Domain gekoppelt zu betreiben. Ich würde in diesem Fall sollte die grundsätzliche Pruvious-Entwicklung (Events) Fokus behalten, während die Implementierung von Obsidian-basiertem Blogging eher als Proof-of-Concept mit einigen Websites demonstriert wird > es müssten 2-3 Domains mit einem anderen Github-Branch von theaterpedia-core betrieben werden und dort ohne die Pruvious-Rendering-Engine die vollständige Websites mit Nuxt-Content ausliefern und mit einem gehackten Export-Import-Skript würde Obsidian-Markdown zu Nuxt-Markdown konvertiert. Ein direkter Zugriff auf Events wäre vorläufig nicht möglich, die Anzeige von Event-Cards sogar mit Verweis auf einen Odoo-Checkout o.ä. ließe sich händisch über Obsidian-YAML-Props angeben. Für Editing komplexer Landing-Pages o.ä. könnte auf Nuxt-Studio zurückgegriffen werden.
- Vereinfachung oder Stornierung Intranet DASEi.eu
- Vereinfachung der Obsidian-Anbindung:
	- Vorläufig vollständiger Verzicht auf die Obsidian>Pandoc-Markdown-Konvertierung
	- jedoch Bearbeitung von Events, Blog-Overline-Headline-Teasertext via Obsidian zur Demonstration der Obsidian-Odoo-Anbindung
- Implementierung Suchmaschine und/oder Regio-Frontpage, hier könnte vermutlich eines dieser Tools eingesetzt werden (jeweils ohne Verwendung von Nuxt-Components), der Fokus läge eher bei Darstellung von Blog-Content als auf der präzisen Darstellung von Events:
	- Obsidian-Publish (mit einem Obsidian-Skript für einen Obsidian-Zentral-Vault, der Daten aus ca. 5-30 Accounts versammelt)
	- oder Quartz (React-basiert)
	- oder ObsidianHTML (z.B. als eigener Server)
	- oder Quarto 

<br />
<br />
