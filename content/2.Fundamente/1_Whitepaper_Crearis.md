---
cssclasses:
  - paper
---

_Github als dezentrales Markdown-Datenbank-System_
# CREARIS - "Creative Commons via Github" / Odoo-over-Github

> [!info] Disclaimer
> Das hier Beschriebe Konzept für Crearis dient nur für Orientierung und langfristige Roadmap bei der konkreten Umsetzung von Theaterpedia 2024. Dabei werden viele der Zusammenhänge nur in vereinfachter Form realisiert. Vor allem werden viele Blogging-Websites und Episoden **NICHT** durch einen Pandoc-basierten Rendering-Prozess serverbasiert generiert und publiziert. Stattdessen wird Content direkt mit einem Obsidian-Plugin erstellt. Wir achten jedoch möglichst auf Kompatibiltät mit den hier beschriebenen Konzepten.

- Crearis ist eine Markdown-Spezifikation basierend auf Pandoc
- Crearis erweitert Pandoc um Eigenschaften, die spezialisiert sind auf das Publishing von regional-dezentralen Themen-Netzwerken und Aktions-Gruppen mit Schwerpunkt CreativeCommons/Offenes Wissen, als Referenz-Implementierung sollen Soziokultur-Initiativen der 'Theaterpädagogik' im deutschsprachigen Raum vernetzt werden
- Crearis möchte die allgemein vorherrschende siloartige Struktur von Internetpräsenzen mit oft nur oberflächlicher oder/und kurzfristiger Verlinkung überwinden
- Crearis möchte die Kommerzialierung, die Durchsetzung von Soziokulturellem Content mit Werbung und Tracking überwinden
- prägend für Crearis sind:
	- Wikipedia als Plattform des offenen Wissens
	- Linux und Git (Github)
	- zahlreiche Organisationen und Systeme für offene Standards im Internet
- Vorbilder für Crearis sind (teilweise mit deutlichen Einschränkungen)
	- Social Media, insbesondere Twitter in seiner ursprünglichen  Form
	- Medium.com und ähnliche Blog-Content-Plattformen
	- Obsidian Publish und ähnliche 'digitale Gärten'
	- ...
- als Datenspeicher zur Versionierung des veröffentlichten Contents dient Github (ergänzt um Media-Services)
- Crearis stellt Plugins für bestehende Editoren bereit. Referenz-Implementierung Obsidian, bald VS Code + 1-2 weitere
- Crearis modelliert die lose dezentrale Wissens-Struktur zu regionalen Gruppen, die über Tools für Veranstaltungsmanagement, Content-Management und Buchhaltung ihren kompletten Ablauf rund um Crearis organisieren können; die Modellierung wird umgesetzt mit Hilfe von Odoo (Backoffice) und Nuxt-Pruvious (Frontend)
- Theaterpedia 1.0 = Crearis Alpha
	- Verwendung von Obsidian-Export umgeht Markdown zur passgenauen Umsetzung von Designs direkt aus dem Editor heraus
	- basiert auf Obsidian-Markdown
	- dies Ablauf sollte in Crearis 1.0 mind. so erweitert werden, dass das exakte Markdown-Format definiert wird + dass standardmäßig die Episoden vom Markdown her gerendert werden (und lediglich Blog-Posts weiterhin lokal)
- die Autoren von Theaterpedia haben typischerweise ein GH-Login, verwalten auf GH  ihre Daten, haben ihre Homepage, gründen und verwalten Organisationen
- GH hat große Stärken und starke Standards in diesen Bereichen:
	- Darstellung und Management von Lizenzen
	- Erstellung von Tags und Releases, Unterscheidung in Sources und Bundles z.B. für verschiedene Plattformen
	- Management von Issues
	- Darstellung der Zusammenhänge einer breit verteilten Kollaboration (ergänzt sich perfekt mit individualistischen Konzepten wie z.B. Obsidian oder oft auch Pruvious)
- GH ermöglicht Konfiguration von öffentlichen Teams und persönlich-öffentlichen Repos mit sehr genauen Workflows und Pipelines für's Content-Publishing, die anknüpfen, bietet eine überragende Synchronisation und mit GH-Desktop eine stabile Unterstützung, über die vermutlich auch komplexere Abläufe eingerichtet werden können, ohne komplizierte Programmierungen erforderlich zu machen
- GH es wird typischerweise als Backend und Backup des offen-publizierten Wissens verwendet und nicht direkt zur Anzeige der Inhalte, eine 'Rohansicht' ist aber jederzeit möglich ... ähnlich wie in der Blockchain können einmal publizierte Inhalte nicht so einfach mehr 'gelöscht' werden (dazu müsste ein ganzes Repo gelöscht werden), d.h. sie erhalten einen Permalink, unter dem die exakte Version jederzeit direkt abrufbar ist
- GH ist das werbe- und trackingfreie Social-Media, erlaubt Erstellung und Abfrage eines Profils
- GH wird die basale Persistenz- und Backup-Ebene der publizierten Crearis-Inhalte, Content liegt in Pandoc-Markdown vor mit Obsidian-Erweiterungen und kann durch diverse Services publiziert und angezeigt werden, braucht keine Server oder Api o.ä. + durch die jederzeit replizierbare Speicherung sowohl auf Github als auch in Odoo-Regios entsteht eine maximale Ausfallsicherheit, Redundanz
- GH-Pages sind zunächst Standard-Adresse für Static-Publishing
- Orgs können einen Org-Account anlegen und die GH-Sync für Mitwirkende erlauben
- Websites, die aufbauend auf GH publiziert werden, erhalten dann die 'auf GH editieren' und 'kommentieren/diskutieren'-Buttons
- wichtige Erweiterungen sind:
	- Regio-Datenbanken und Applikationen via Odoo-Api heben den Content und Kollaboration auf einen anderen Level mit Buchhaltung, Workflows, High-End-Publishing, interaktiven Websites
	- Blob-Storage und Streaming-Services zur Bereitstellung von Medien
	- mit Synology und ähnlichen Services werden lokale Server gebaut, die eigene Erweiterungen anbieten, sie verbinden sich gut und gezielt via Git mit Github, sowie mit Blog-Storage 
	- evtl. alternativ/ergänzend zu Synology absolut privater Speicherservice zur Realisierung echter pseudonymer Abläufe
- Zusammenhang Odoo-GH
	- Odoo kann als Middleware betrachtet werden, die auf GH sehr roh vorliegende Daten für die direkte Verwendung in Anwendungen zugänglich macht, Übersetzungen und Apis, Interfaces anbietet. Hauptaufgabe von Odoo ist das 'Modelling' mit Validierung, Workflows etc.
	- tatsächlich ist Odoo bis auf weiteres die Single-Source-of-Truth: Odoo trifft die Entscheidung, ob ein PR zu einem GH-Datensatz umgesetzt wird oder nicht
	- die Standard-GH-Implementierung ist einsprachig ohne Translation in irgendeiner Form und geht davon aus, dass typischerweise Inhalte in einer Sprache erdacht und weiterentwickelt werden und daraus dann Übersetzungen abgeleitet werden. Via Giscuss, PRs und ähnliche Strukturen können trotzdem mehrsprachige Commits realisiert werden
	- pygithub ermöglicht vermutlich eine sehr gute Unterstützung und Integration mit Odoo
	- User können sich in Odoo mit ihrem GH-Account einloggen und können eine GH-Sync für ihren public content, sowie den public Content von Orgs einrichten > die entsprechenden Repos werden dann von Odoo so konfiguriert, dass nicht mehr direkt auf Master committed werden kann
	- Content auf Odoo kann also ergänzend zur Odoo-Sync-Id auch eine Github-URL erhalten, Odoo steuert die Synchronisierung, Verarbeitung von PRs