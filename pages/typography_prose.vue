<template>
  <LayoutHeader />
  <div class="container ml-10 px-4 md:px-8 py-6">
    <div class="prose prose-base">
      <h1 class="">
        <strong class="">Dokumentation Typographie</strong>
        <span>Markdown-basierte Headings direkt im Schreibfluss erzeugen</span>
      </h1>
      <p>
        Beschreibung
      </p>
    </div>

    <div class="prose prose-base mt-16">
      <h1 class="">
        <em class="">H1 Variants</em>
      </h1>
      <p>
        Formatierung erfolgt mit Variierung von Overline-Headline-Shortcode
      </p>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          Szenische Themenarbeit mit kreativen Bildern
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">h1 Parameter (Desktop small=prose-base)
  - SC: 72px / Line-Height: 0.8215
  - HL: 40px / Line-Height: 0.9375
  - OL: 18px / Line-Height: 1.25
  - TAG/Mark: 12px / Line-Height: 1.25
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          Szenische Themenarbeit mit kreativen Bildern
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">A: h1 default (Overline)
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">B: h1 strong
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          <em>Klischees, Situationen & Skulpturen</em>
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">C: h1 display
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          Szenische Themenarbeit mit kreativen Bildern
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">D: h1 Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          <strong>Klischees, Situationen & Skulpturen</strong>
          Szenische Themenarbeit mit kreativen Bildern
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">E1: h1 Headline-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          <strong>Klischees, Situationen & Skulpturen</strong>
          <span>Szenische Themenarbeit mit kreativen Bildern</span>
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">E2: h1 Headline-Underline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          <em>B2</em>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">F: h1 Shortcode-Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          <em>B2</em>
          <strong>Klischees, Situationen & Skulpturen</strong>
          Szenische Themenarbeit mit kreativen Bildern
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">G: h1 Shortcode-Headline-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">H: h1 Tag-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          <em>B2</em>
          <mark class="font-mona">17.-19.1 Nbg</mark>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">I: h1 Shortcode-Tag-Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          <em>B2</em>
          <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          Szenische Themenarbeit mit kreativen Bildern
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">J: h1 Shortcode-Headline-Tag-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h1 class="">
          <em>B2</em>
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h1>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">XX: h1 TEMPLATE
  -
      </pre>
    </div>

    <div class="prose prose-base mt-32">
      <h2 class="">
        <em class="">H2 Variants</em>
      </h2>
      <p>
        Formatierung erfolgt mit Variierung von Overline-Headline-Shortcode
      </p>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h2 class="">
          Szenische Themenarbeit mit kreativen Bildern
        </h2>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">H2 Parameter (Desktop small=prose-base)
  - SC: 56px / Line-Height: 0.8215
  - HL: 24px / Line-Height: 0.9375
  - OL: 18px / Line-Height: 1.25
  - TAG/Mark: 12px / Line-Height: 1.25
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h2 class="">
          Szenische Themenarbeit mit kreativen Bildern
        </h2>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">A: H2 default (Overline)
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h2 class="">
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h2>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">B: H2 strong
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h2 class="">
          <em>Klischees, Situationen & Skulpturen</em>
        </h2>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">C: H2 display
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h2 class="">
          Szenische Themenarbeit mit kreativen Bildern
        </h2>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">D: H2 Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h2 class="">
          <strong>Klischees, Situationen & Skulpturen</strong>
          Szenische Themenarbeit mit kreativen Bildern
        </h2>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">E: H2 Headline-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h2 class="">
          <em>B2</em>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h2>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">F: H2 Shortcode-Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h2 class="">
          <em>B2</em>
          <strong>Klischees, Situationen & Skulpturen</strong>
          Szenische Themenarbeit mit kreativen Bildern
        </h2>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">G: H2 Shortcode-Headline-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h2 class="">
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h2>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">H: H2 Tag-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h2 class="">
          <em>B2</em>
          <mark class="font-mona">17.-19.1 Nbg</mark>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h2>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">I: H2 Shortcode-Tag-Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h2 class="">
          <em>B2</em>
          <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          Szenische Themenarbeit mit kreativen Bildern
        </h2>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">J: H2 Shortcode-Headline-Tag-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h2 class="">
          <em>B2</em>
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h2>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">XX: H2 TEMPLATE
  -
      </pre>
    </div>

    <div class="prose prose-base mt-32">
      <h3 class="">
        <em class="">H3 Variants</em>
      </h3>
      <p>
        Formatierung erfolgt mit Variierung von Overline-Headline-Shortcode
      </p>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          Szenische Themenarbeit mit kreativen Bildern
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">H3 Parameter (Desktop small=prose-base)
  - SC: 48px / Line-Height: ?0.8215?
  - HL: 20px / Line-Height: ?0.9375?
  - OL: 16px / Line-Height: ?
  - TAG/Mark: 12px / Line-Height: ?
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          Szenische Themenarbeit mit kreativen Bildern
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">A: H3 default (Overline)
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">B: H3 strong
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          <em>Klischees, Situationen & Skulpturen</em>
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">C: H3 display
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          Szenische Themenarbeit mit kreativen Bildern
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">D: H3 Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          <strong>Klischees, Situationen & Skulpturen</strong>
          Szenische Themenarbeit mit kreativen Bildern
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">E1: H3 Headline-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          <strong>Klischees, Situationen & Skulpturen</strong>
          <span>
            Szenische Themenarbeit mit kreativen Bildern
          </span>
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">E2: H3 Headline-Underline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          <em>B2</em>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">F: H3 Shortcode-Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          <em>B2</em>
          <strong>Klischees, Situationen & Skulpturen</strong>
          Szenische Themenarbeit mit kreativen Bildern
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">G: H3 Shortcode-Headline-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">H: H3 Tag-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          <em>B2</em>
          <mark class="font-mona">17.-19.1 Nbg</mark>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">I: H3 Shortcode-Tag-Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          <em>B2</em>
          <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          Szenische Themenarbeit mit kreativen Bildern
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">J: H3 Shortcode-Headline-Tag-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <h3 class="">
          <em>B2</em>
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </h3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">XX: H3 TEMPLATE
  -
      </pre>
    </div>

    <div class="prose prose-base mt-32">
      <div class="prose-obj">
        <em class="">PROSE-OBJ Variants</em>
      </div>
      <p>
        Formatierung erfolgt mit Variierung von Overline-Headline-Shortcode
      </p>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          Szenische Themenarbeit mit kreativen Bildern
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">div .prose-obj Parameter (Desktop small=prose-base)
  - SC: 40px / Line-Height: ?0.8215?
  - HL: 16px / Line-Height: ?0.9375?
  - OL: 14px / Line-Height: ?
  - TAG/Mark: 11px / Line-Height: ?
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          Szenische Themenarbeit mit kreativen Bildern
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">A: div .prose-obj default (Overline)
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          <strong>Klischees, Situationen & Skulpturen</strong>
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">B: div .prose-obj strong
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          <em>Klischees, Situationen & Skulpturen</em>
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">C: div .prose-obj display
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          Szenische Themenarbeit mit kreativen Bildern
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">D: div .prose-obj Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          <strong>Klischees, Situationen & Skulpturen</strong>
          Szenische Themenarbeit mit kreativen Bildern
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">E1: div .prose-obj Headline-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          <strong>Klischees, Situationen & Skulpturen</strong>
          <span>
            Szenische Themenarbeit mit kreativen Bildern
          </span>
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">E2: div .prose-obj Headline-Underline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          <em>B2</em>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">F: div .prose-obj Shortcode-Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          <em>B2</em>
          <strong>Klischees, Situationen & Skulpturen</strong>
          Szenische Themenarbeit mit kreativen Bildern
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">G: div .prose-obj Shortcode-Headline-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          <strong>Klischees, Situationen & Skulpturen</strong>
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">H: div .prose-obj Tag-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          <em>B2</em>
          <mark class="font-mona">17.-19.1 Nbg</mark>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">I: div .prose-obj Shortcode-Tag-Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          <em>B2</em>
          <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          Szenische Themenarbeit mit kreativen Bildern
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">J: div .prose-obj Shortcode-Headline-Tag-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <div class="prose-obj">
          <em>B2</em>
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </div>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300px]">XX: div .prose-obj TEMPLATE
  -
      </pre>
    </div>
  </div>
  <LayoutFooter />
</template>

<script setup lang="ts">

</script>

<style scoped>
/* -----------------------------
-----   H1-Formatting ---------*/

pre {
  background-color: #f5f5f5;
  font-size: 12px;
  padding: 8px;
}

h1 > strong {
  font-size: 30px;
}
h1:has(em) > strong {
  font-size: 40px !important;
}
h1 > strong {
  display: block;
  font-style: normal;
  line-height: 1em;
  text-transform: uppercase;
  font-weight: 700;
}

h1 > mark {
  font-size: 14px;
  margin-right: 4px;
  float: block-start;
  line-height: 14px;
  padding-left: 4px;
  padding-right: 4px;
  background-color: grey;
  font-weight: 900;
}

/* -----------------------------
-----   H2-Formatting ---------*/

/* Card-Display-Style: gelbes Band hinter Subline */
/* entsteht via Card-H2 */

/* Card-default: gelbes Band */
/* entsteht via Card-H3 */

/* H3-Headline-Formatting / Card: gelbes Band
.card-display :is(.HyperMD-header-2, h2):has(strong, .cm-strong) > :is(strong, .cm-strong) {
  font-size: 18px !important;
  margin-left: 50px;
  padding-left: 4px;
  background-color: gold;
  line-height: 16px;
} */
</style>
