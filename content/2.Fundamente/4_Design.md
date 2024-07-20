---
cssclasses:
  - paper
title: 4. Design
---

## 🔶 Grundlagen und Themes von Theaterpedia
## Überblick
Theaterpedia entwickelt bis zum Release 1.0 insgesamt 4 Themes.
Diese Themes zeigen einerseits rein visuell-optische Möglichkeiten des Systems. Hier unterscheiden sich z.B. stark strukturierte und logische von eher expressiv-emotionalen Designs und Farbsystemen. Andererseits implementieren die Themes verschiedene Informations-Architekturen, die für Theaterpädagogik typisch sind. 

Alle Themes basieren auf grundlegenden Design-Entscheidungen. Theaterpedia hat sich hier bewusst für einen moderat 'geführten' Ansatz entschieden, der nicht unbedingt alle Geschmäcker befriedigen möchte. Dies betrifft vor allem:
1. die Ermöglichung eines Website-Aufbaus basierend auf Overline-Headline-Systematik (nicht zwingend), wie er z.B. im Journalismus oft anzutreffen ist, jedoch oft untypisch ist für Ecommerce-System und auch viele einfache Blogs
2. die Bevorzugung einer vertikalen Logik vor einer horizontalen Logik > wir beschäftigen uns intensiv, was passiert, wenn z.B. auf dem Smartphone Seiten mit dem Finger hoch- und runtergewischt werden
3. das Erproben der Verwendbarkeit von Monospace-Schriften nicht nur in Überschriften sondern auch im Fließtext

## Mobile > Tablet > Notebook > Desktop - Design
Das responsive Design denkt primär in Devices und wird nicht darauf optimiert, dass User am Desktop-Bildschirm die Fensterbreite dynamisch verschieben und dabei immer schöne Transitions sehen. Weil die Zielgruppe (zu 80% weiblich) in aller Regel nicht mit großen Desktop-Bildschirmen arbeitet reduziert sich das Design auf 3 Geräte Smartphone, Tablet, Notebook.

Primäres Ziel ist, dass mit Standard-Smartphones ein komfortables Hantieren von Websites, Dashboards, Dokumenten und Navigation möglich ist, das Flippen des Phones in horizontale Ansicht soll einen Überblick geben (und auf Detailseiten: Zoom für optimiertes Text-Lesen, Video).
Ähnlich präzise sollen Tablets (standardmäßig vertikal) und Notebooks unterstützt werden. XL-Viewports für Desktops und Max-Notebooks ab Viewport-Width 1400 werden vorläufig in einen Kasten gesetzt, hier wird dem User im 1.0-Design außerhalb des Kastens eine Size-Funktion angeboten, mit einem Cookie die Standard-Schriftgröße und Laufweite des Designs festzulegen, sie kann in 2 Stufen hochgesetzt werden können.

#### mobile
Das Design geht hier von einem Normalgerät aus mit Viewport 390 x 844 und legt einen engen Korridor an, in dem sich fast alle Smartphones bewegen, die ab 2025 im Bereich Theaterpädagogik umfangreich eingesetzt werden (Es ist zu beobachten, dass 1. die verschiedenen Gerätehersteller und Standardisierungsorganisationen sich zunehmend einigen und 2. sich die Untergrenze einer brauchbaren Viewport-Weite sich verschiebt von 320 zu 360). 
Dieser Korridor ist festgelegt auf:
- minimalen Viewport 360 x 667 und maximalen Viewport 415 x 915
- für Viewports mit Breite unterhalb 360 könnte wie folgt eine 'dense'-Eigenschaft festgelegt werden
	- BETA-IMPLEMENTIERUNG das meta-tag `viewport` von `initial-scale=1.0` wird auf `initial-scale=0.9` gesetzt, dies wird via [nuxtViewport](https://nuxt.com/modules/nuxt-viewport) und [useHead](https://nuxt.com/docs/api/composables/use-head#meta) so implementiert
		- standardmäßig steht meta:viewport auf initial-scale=1.0
		- die App erkennt ein Resizing des Viewports
		- sowohl beim Neu Laden der Website als auch nach Resizing wird überprüft
			- der bestehende Viewport wird analysiert ob er in den Dense-Grenzwerten liegt
			- falls ja, dann wird initial-scale auf 0.9 gesetzt (falls nicht bereits geschehen)
	- FINAL-IMPLEMENTIERUNG (komplizierter): Verkleinerung von Standardschriftgröße um 10%, ausgewählten Bögen, Paddings und Margins
	- beide Ansätze führen in den betroffenen Fällen zu einem geringfügigen Layout-Shift (einmalig)
- Geräte oberhalb des maximalen Viewports wie iPhone Max und Hybridgeräte zwischen Smartphone und Tablet müssen mit leichten Design-Einbußen leben, daran haben sich die Besitzer dieser Geräte aber gewöhnt

-> durch Drehen des Geräts kommt der Viewport in den Status 'tablet (mobile-flipped)', falls Breite > 768px

#### tablet (+ mobile-flipped)
Eine ähnliche Konvention regelt das Arbeiten mit Tablets: Der Tablet-Modus nimmt an, dass Tablets standardmäßig im Hochformat gelesen werden und über das Drehen des Geräts in den Portait-Mode eine signifikant andere Ansicht ermöglicht wird.
- als Standard-Design-Größe wird 810 x 1080 (iPad 10) gesetzt
- minimaler Viewport ist 768 x 1024, maximaler Viewport 991 x 1199
	- Standard-Viewport-Heights im Bereich 1025-1060 müssen nicht beachtet werden, zwischen 1024 und 1080 sind nur wenige Geräte zu finden
- zahlreiche kleinere oder ältere Tablets haben den Viewport 768 x 1024
- 
- Max-Geräte wie z.B. iPad 12.9 Zoll, Microsoft Surface werden als Notebooks behandelt, sie werden oft in der Praxis auch tatsächlich im Querformat eingesetzt


-> Status-Flag 'mobile-flipped':  Auch Smartphone in Portrait-Modus sind im Status 'tablet'. Viele für Tablet-vertikal optimierte Designs werden in dem radikalen 16:9-Querformat nicht sinnvoll angezeigt, bzw. erfordern eine gesonderte Navigation/Scroll-Logik.
Die kritische Frage für die Größe der Bildschirmdarstellung ist die Viewport-Height. Hier wird das 'dense'-Flag gesondert festgesetzt werden für Screen-Height < 410

-> durch Drehen des Geräts kommt der Viewport typischerweise in den Status 'notebook (dense)', die einzelnen Pages können dieses Verhalten variieren (z.B.), auch denkbar wäre, dass User per-device Einstellungen festlegen

##### 2-column-Layout
- bei 810: sidebar-left = 246 / main = 564 (bei 768: main=522 / bei 1024: sidebar-left=290 / main=734)
- später per Umschaltoption: Sidebar ausblenden oder zu Rail minimieren (nimmt teilweise Effekt von Breakpoint `lg` vorweg)

#### notebook

##### 2-column-Layout: Landing & Kurs, Portal

##### 3-column-Layout: Blogs & Episodes
- bei 1024 (**dense!!**): sidebar-left= 216 / main = 592 / sidebar-right= 216
- bei 1080 (Tablet): sidebar-left= 246 / main = 588 / sidebar-right= 246
- bei 1190 (Tablet max): sidebar-left= 246 / main = 698 / sidebar-right= 246
- bei 1200 (notebook): sidebar-left= 290 / main = 620 / sidebar-right= 290

-> 3-column-Layout: Theaterpedia-Regio > vermutlich nicht so viel anders
#### dense-Flag
##### absolut
Viewport-Width < 375
Viewport-Height < 410
Viewport-Width < 380
##### optional
nur bei 'isPortrait': Viewport-Width >= 1024 und Viewport-Width <= 1080

#### Breakpoints und Breakpoint-Extensions
##### Extensions, Helpers
- Helper 'isPortrait'

Differenzierung zwischen xl und lg wird via via [nuxtViewport](https://nuxt.com/modules/nuxt-viewport#example-configuration-for-tailwind-css) abgesichert, `lg` hat einen `zoomed-md`-Effekt, bei Tablets hingegen `shrinked-xl`
Die Tailwind-Breakpoints werden beibehalten mit diesen Änderungen:
- `md` 480px: reiner Typography-Breakpoint: ab hier default 16px Font-Size
- `sm` 768px bringt Geräte in den Tablet-Modus (Navigation hat 12px Font-Size)
- `xl` 1200px (nicht tw: 1280) bringt Geräte in Notebook-Modus
- `lg` 1024px (Navigation hat 14px Font-Size)
	- entweder (via echtes `lg`: Erweiterung Reading-View + Line-Height
	- oder nur falls `Tablet` > es wird `xl` gesetzt + dense, ansonsten:  > Tablets kommen in Notebook-Modus (typischerweise quer) >  kann in den Designs sicher verwendet werden

#### Design-Lücke 1: zufälliges Design bei Hybridgeräten und kleinen Smartphones im Portrait-Modus
Das Design-Konzept implementiert eine strategische Lücke im Bereich des Viewport-Width 450 bis 719 Pixel. Dies betrifft:
- einige Hybrid-Geräte zwischen Smartphone und Tablet. 
- einige **Smartphones im Portrait-Modus** (wenn sie älter sind oder sehr klein) mit typischen Viewports z.B. 360 x 660 etc. 

Beide Geräte-Typen zeigen die Websites sinnvoll an, es wäre aber mehr möglich und teilweise wird Content etwas fehlerhaft dimensioniert mit solchen Symptomen:
- extrem kleine Smartphones zeigen oft nicht die Zwei-Spalten-Portrait-Ansicht an, die normale Smartphones für die Website anbieten
- das Seitenverhältnis von Bildern und Embeds (Videos, Canvas-Objekte) verschiebt sich
- Bilder füllen nicht mehr den vollen Bildausschnitt und/oder Text

Indem die Designs für diese Ausnahme nicht betrachtet werden, vereinfacht sich die Implementierung des Designs erheblich und die zu meisternde Konfiguration und Terminologie wird übersichtlicher. Ein Optimierung der Sonderfragen kann innerhalb der einzelnen Themes dann durchaus noch vorgenommen werden, wird vom Theaterpedia-Core Design-Layer aber kaum unterstützt.

#### Design-Lücke 2: Layout-Shifting im Tablet-Portait-Modus, sowie Resizing von Desktop-Windows


## Design und Theming von Theaterpedia entsteht auf doppeltem Weg
a) ein in 2022-2023 umgesetzter Design-Prozess hat die verschiedensten Anforderungen und Use-Cases ermittelt und dazu mehrere Design-Vorlagen entwickelt
b) ausgehend von Javascript-Component-Frameworks und Obsidian-Themes werden diese Design-Vorlagen weiterentwickelt und angepasst mit dem Ziel einer hohen technischen wie inhaltlichen Qualität


<br />
<br />
