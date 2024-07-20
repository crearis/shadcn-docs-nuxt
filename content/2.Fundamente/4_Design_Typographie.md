---
cssclasses:
  - paper
title: 4. Design Typographie
---

# 🔶 Die Typographie von Theaterpedia
## Typographie Eckdaten
Bis zum Breakpoint Screen-Width 1200 basiert die Typographie auf Schriftgröße 14, darüber auf Schriftgröße 16, auf besonders kleinen Geräten/Ansichten (Smartphone & Tablets) wird sie auf 12 gesetzt.

## Headlines
Overlines werden deutlich kleiner gesetzt als Headlines, haben geringe Line-Height und werden informations-technisch als Teil der Headline verarbeitet (z.B. für SEO > Overline-Text ist innerhalb des H1-Tags der Headline). Dadurch ist es möglich, Overlines optional zu machen und trotzdem die Headlines von nebeneinander liegenden Cards vertikal identisch auszurichten. Headlines ohne Overline haben einfach mehr Headroom, dieser kann (muss aber nicht) aufgefüllt werden durch Tags und/oder Meta-Infos.

Subline und Teasertext sind identisch und werden als `Subline` bezeichnet. Subline größer als StandarSublinermatiert, hat keine Zeichenbegrenzung (oder zumindest keine enge Zeichenbegrenzung), darf mehrzeilig sein und kann auch ohne eine Headline eingesetzt werden. Die Implementierung in Components ist in zwei Varianten möglich:
- entweder mit einer fixed-height-Logik, in der ab einer bestimmten Zeilenlänge der Text mit Ellipsis abgeschnitten/verlinkt wird
- oder als flexibel erweiterbarer Absatz
Subline wird in Markdown per Callout `Subline` generiert und sollte keinerlei Textformatierung beinhalten (Markdown-Linting).

Headlines können in den Größen `default`, `display` und `small` gesetzt werden, hierbei wird je Theme festgelegt, ob display 1 oder 2 Tailwind-Stufen größer, small wird 1 oder 2 Tailwind-Stufen kleiner gesetzt wird, Display ist 200 dünner als default.
![](../../../X_Assets/textbeispiel_inter16.jpg)
![](../../../X_Assets/textbeispiel_monaspace_neon14.jpg)

## Schrift-Typen
Schrift und Textsatz spielt für Theaterpedia eine enorme Rolle.
Grundsätzlich basieren die Theaterpedia-Themes weitgehend auf neuartigen Schriften, die mehr oder weniger programmierbar sind, d.h. dass Parameter wie Schrift-Fette, Laufweite und Grad der 'Kursivität' über Variablen verändert werden können. Einzelne Themes könnten ausgehend von ausgefeilten 'Variable Fonts' wie [Amstelvar](https://www.axis-praxis.org/specimens/amstelvar), [Noboto Flex](https://www.axis-praxis.org/specimens/nobotoflex) oder [Roboto Flex](https://v-fonts.com/fonts/roboto-flex), [Recursive](https://v-fonts.com/fonts/recursive) und [Fraunces](https://fonts.google.com/specimen/Fraunces) einen kreativen, codebasierten Umgang mit Typographie, darunter sind z.B. Fonts, die einen fließenden Übergang zwischen Sans- und Monotype-Schnitten ermöglichen.

### Sans- und Monospace-basiertes Design
Ausgangspunkt für die Programmierung des Designs ist die Sans-Schrift Inter, direkte Alternativen sind Roboto und Geist.
Inter läuft breiter als Segoe, Roboto und Geist und schafft daher Designs, die mit relativ vielen Schrift-Typen umgesetzt werden können.
-> siehe [hier](https://medium.com/frontendweb/how-to-use-vercel-geist-fonts-in-next-js-04ee42077541) zur Installation von Geist > zunächst via Nuxt-Font probieren.

Monospace-Schriften spielen eine große Rolle für die Designs und Themes. Sie werden mit der Monaspace-Familie umgesetzt. Monospace wirkt bei gleicher Schriftgröße größer als Sans-Schriften. Die Monaspace-Schriften 14 haben (in Obsidian und Obsidian-PDF) eine ähnliche Anmutung wie Inter 16 und zudem keine dramatisch größere Laufweite im Vergleich zu Inter 16, d.h. wenn mit Inter oder Geist 16 implementiert wird, dann sollten die meisten Monaspace 14 Headlines funktionieren, also einfach eine Tailwind-Größe kleiner. Eine

### Absatzformatierung und Reading-Width
Die Absatzformatierung ist für Lesbarkeit optimiert:
- wo möglich werden die Typographie-Vorgaben von Tailwind übernommen
- linksbündige Ausrichtung
- Zeilenhöhe wird bestimmt durch die Reading-Width nach den Prinzipien des goldenen Schnitts
- ausgehend von der Zeilenhöhe entscheiden sich Margins und Paddings

Die Zusammenhänge für Line-Height und Reading-Width werden mit [diesem Tool](https://grtcalculator.com/) festgelegt, via CSS-Props lassen sich dann auch direkt die Texthöhen für Drop-Caps, Overline etc. ermitteln.

![[../X_Assets/Pasted image 20240630113322.png]]
![[../X_Assets/Pasted image 20240630113347.png]]
![[../X_Assets/Pasted image 20240630113304.png]]


Umsetzung mit diesen Tailwind-Standard-Parametern
Ausgangspunkt: Reading-Width-Richtwerte nach dem goldenen Schnitt
Die Werte wur

- 16px / reading-width: 680px > Line-Height
- 16px / reading-width: 600px > Line-Height
- 14px / reading-width: 350px > Line-Height 22
- 12px / reading-width: 300px > Line-Height 19

#### Font-Size
- Absätze: mobile 14px = 0.875rem / standard: 16px = 1rem / dense-mobile: 12px = xs = 0.75rem
#### Line-Height:
- Absätze in Standard-Reading-View für Absätze eher 'leading-relaxed', auf mobile jedoch 'leading-tight'
- Überschriften haben weniger Line-Height!!

Quellen: 
- Tailwind: [tw-font-size](https://tailwindcss.com/docs/font-size), [tw-line-height](https://tailwindcss.com/docs/line-height)
- Variable Fonts: [kritische Betrachtung](https://www.typolexikon.de/variable-fonts/) - [auf Google Fonts](https://fonts.google.com/variablefonts) - älterer Playground - [aktueller Playground](https://v-fonts.com/)
- [golden-ratio calculated](https://pearsonified.com/golden-ratio-typography-intro/)
- [goldener Schritt / Typography](https://www.typolexikon.de/goldener-schnitt/)
- [5 typography-rules](https://winterpm.com/)
- [bootstrap-typography](https://getbootstrap.com/docs/5.3/content/typography/)
- [material-themes: Basil](https://m2.material.io/design/material-studies/basil.html) > monospace-based

Ermittelt nach dem goldenen Schnitt: 


mobile-First-Typographie

dense-Umrechnungsfaktor: `0.1428` > base-sm - 0,125x base-sm = base-xs

Base: 14 (12)
H1: 24 (21)
H1: 22,5 (21)


H1-Display: 36 (34)
Display-Größen von H1 entsprechen der Bootstrap-3-Folge, die auf base:14 basierte, siehe [hier](https://www.w3schools.com/Bootstrap/bootstrap_typography.asp)

in dense: 


Die Kalkulationen kommen von [hier](https://pearsonified.com/golden-ratio-typography-intro/)

![](https://pearsonified.com/wp-content/uploads/2011/12/line-height-vs-line-width.png)



<br />
<br />
