---
cssclasses:
  - paper
title: "1. Whitepaper: Überblick"
---
##  Zwischenstand 2024**Theaterpedia**

> [!info] Disclaimer
> Theaterpedia ist ein ambitioniertes Projekt. Es versucht die vorläufige und unvollständige Realisierung einer großen Idee. Diese noch größere Idee heißt **"Crearis"** und ist ähnlich z.B. zum Konzept des 'digital gardening'. Ziel ist es, eine offene, dezentrale und nachhaltige Vernetzung der Soziokultur im Internet zu erreichen abseits von Werbung, Tracking und sonstigen sekundären Kommerzialisierungen.
> **Ob Crearis tatsächlich realisiert wird, ist ungewiss**, eine technische Beschreibung findest du [hier](1_Whitepaper_Crearis).
> **Die Umsetzung von Theaterpedia ist beschlossen**: https://theaterpedia.org und https://dasei.eu sollen als erste Beispiele im August 2024 in Vorschau-Betrieb gehen. 


## 🔶 Überblick und Grundbegriffe
Theaterpedia implementiert ein spezifisches Zusammenspiel von verteilten Odoo-Servern (Python+PostgreSQL) mit Pruvious-Nuxt-Front-End-Applications.
Neben einem klassischen Ansatz mit CMS-Login können Beiträge zu Theaterpedia auch mit Markdown-Tools wie z.B. dem Obsidian.md-Editor verfasst werden.

### eine Odoo-Regio-Datenbank als Grundlage
Im Kern stehen die Regio-Datenbanken, sie bilden jeweils in sich geschlossene Cluster von Vernetzungen, die mit einer sekundären Logik wiederum untereinander vernetzt werden können
- Die wichtigste Einheit in der Regio-Datenbank ist eine 'Domain'. Eine Domain ist typischerweise tatsächlich mit einer konkreten Website-Domain verknüpft. Dies können dezidierte TLDs, Subdomains oder auch nur Routes einer Hauptdomain sein.
- eine Regio-Datenbank selber stellt zu einem identischen Datensatz einer Domain (z.B. eine Veranstaltung) drei Zugriffe zu Verfügung:
	- a: rein intern z.B. für die Buchhaltung
	- b: nur für die Home-Website (die Domain) des Datensatzes
	- c: für die öffentliche Verbreitung und Vernetzung
- die Regio-Datenbanken haben ein direktes Login (Odoo). Hier loggen sich vor allem die Akteure (nicht die Customer) der Regio ein, es bildet sich eine Community, Verwaltungstools, Buchhaltung stehen zu Verfügung, wechselseitiger Support & Administration sind möglich  

### die **doppelte Tool-Chain**: sowohl WIKI  als auch  KANBAN-Modus
- jede Domain der Regio-Datenbank ist für eine doppelte Verwendung optimiert, zu jeder Domain stehen zwei Toolchains zu Verfügung:
	- WIKI-Tools (Editor-basiert, dezentral): Einfaches Writing, Publishing und auch Live-Collaboration direkt aus dem Theaterpädagogischen Kontext heraus sind möglich, ohne den Arbeitsfluss im Praxiszusammenhang groß verlassen zu müssen, dies funktioniert auch bei schwacher oder gestörter Internet-Verbindung und hat ein hohes Maß an Datenschutz
	- KANBAN-Tools (Dashboard-basiert/CMS): Effektives und standardisiertes Event-Management basierend auf einer für mehrere Personen gleichzeitig zugänglichen Datenbank mit Schwerpunkt auf verteiltes Teamworking mit verteilten Rollen z.B. in in Referent*in* - Public Relations - Buchhaltung
- die Daten, die in einer der beiden Toolchains entstehen, können in der anderen Toolchain weiterverwendet werden

> [!info] 
> an dieser Stelle fehlt noch die Darstellung der Onboarding-Strategie (via Editor z.B. Obsidian) > Erstellung von einfachen Websites und Preview-Fassungen größerer Websites
> 
### Zwei Erweiterungen der Regio-Datenbank
an die Regio-Datenbank docken zwei Erweiterungen an:
- die **Domain-Application** (Pruvious): diese ermöglicht, dass a) und b) mit gezielter Logik ausdifferenziert werden und z.B. bei dasei.eu die Website als eigenständige App mit Login etc. entwickelt wird
- der **Global-Reader** (Pruvious): dieser integriert die Daten mehrerer Regio-Datenbanken zu einem global verfügbaren Netzwerk von übersichtlich dargestellten Informationen, optimiert für verschiedenste Geräte, Sprachen etc.
- zwei Variationen dieser Erweiterungen stellen weitere Funktionen zu Verfügung
	- **Local Reader**: in einer besonderen Darstellung wird der Inhalt des Global-Reader in ähnlicher Form als  = Regio-Website zu Verfügung gestellt (Nuxt Content)
	- **Local Application**: entweder via Pruvious oder via Odoo werden Business-Prozesse auch für solche Websites möglich, die selber gar keine Business-Prozesse anbieten. Z.B kann eine Freelancerin ihre Website als Static Website ausliefern > und dennoch einen Checkout/Payment-Prozess anbieten, der zB. an die Regio abgegeben/delegiert wird (**Achtung: ggf. nur B-Feature > erst nach 1.0-Release**) 

### kleine Brötchen backen
Rund um Theaterpedia sind viele großartige Ideen und teilweise auch Versprechen geäußert worden.
- das seit 1.5 Jahre lang gesetzte Ziel **"App-Builder"** oder **"Website-Builder"** wird ersetzt durch das ursprüngliche Ziel, mit dem es vor ca. 2.5 Jahren begonnen hatte: **Ein einfacher Editor steht im Zentrum von Theaterpedia.org** > mit diesem Editor können in der Anfangsphase vor allem Blog-Posts und Episoden im Wikipedia-Stil bearbeitet werden, angereichert um Verweise auf Events
- Regio-Sites und Suchmaschine sollen tatsächlich bis Anfang August 2024 live gehen, zu Anfang aber ganz klein und bescheiden auftreten und noch weit entfernt sein von den schon entwickelten Themes und Designs > der Launch von Suchmaschine und Regio sind der proof-of-concept für das Kernstück

### Theaterpedia ist ab sofort live
https://docs.theaterpedia.org ist der Ausgangspunkt für alle weiteren Entwicklungen von Theaterpedia > hier beginnt Theaterpedia.org in Juni/Juli 2024 seinen Weg in's Internet. Vor allem ab dem Moment, wo A, D, M, B, K etc. beginnen, sich mit den laufenden Entwicklungen zu beschäftigen.


<br />
<br />