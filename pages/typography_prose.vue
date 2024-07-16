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
      <pre class="docs w-[300]">h1 Parameter (Desktop small=prose-base)
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
      <pre class="docs w-[300]">A: h1 default (Overline)
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
      <pre class="docs w-[300]">B: h1 strong
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
      <pre class="docs w-[300]">C: h1 display
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
      <pre class="docs w-[300]">D: h1 Overline-Headline
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
      <pre class="docs w-[300]">E1: h1 Headline-Subline
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
      <pre class="docs w-[300]">E2: h1 Headline-Underline
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
      <pre class="docs w-[300]">F: h1 Shortcode-Overline-Headline
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
      <pre class="docs w-[300]">G: h1 Shortcode-Headline-Subline
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
      <pre class="docs w-[300]">H: h1 Tag-Headline
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
      <pre class="docs w-[300]">I: h1 Shortcode-Tag-Overline-Headline
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
      <pre class="docs w-[300]">J: h1 Shortcode-Headline-Tag-Subline
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
      <pre class="docs w-[300]">XX: h1 TEMPLATE
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
      <pre class="docs w-[300]">H2 Parameter (Desktop small=prose-base)
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
      <pre class="docs w-[300]">A: H2 default (Overline)
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
      <pre class="docs w-[300]">B: H2 strong
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
      <pre class="docs w-[300]">C: H2 display
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
      <pre class="docs w-[300]">D: H2 Overline-Headline
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
      <pre class="docs w-[300]">E: H2 Headline-Subline
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
      <pre class="docs w-[300]">F: H2 Shortcode-Overline-Headline
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
      <pre class="docs w-[300]">G: H2 Shortcode-Headline-Subline
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
      <pre class="docs w-[300]">H: H2 Tag-Headline
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
      <pre class="docs w-[300]">I: H2 Shortcode-Tag-Overline-Headline
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
      <pre class="docs w-[300]">J: H2 Shortcode-Headline-Tag-Subline
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
      <pre class="docs w-[300]">XX: H2 TEMPLATE
  -
      </pre>
    </div>

    <div class="prose prose-base mt-32">
      <H3 class="">
        <em class="">H3 Variants</em>
      </H3>
      <p>
        Formatierung erfolgt mit Variierung von Overline-Headline-Shortcode
      </p>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          Szenische Themenarbeit mit kreativen Bildern
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">H3 Parameter (Desktop small=prose-base)
  - SC: 48px / Line-Height: ?0.8215?
  - HL: 20px / Line-Height: ?0.9375?
  - OL: 16px / Line-Height: ?
  - TAG/Mark: 12px / Line-Height: ?
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          Szenische Themenarbeit mit kreativen Bildern
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">A: H3 default (Overline)
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          <strong>Klischees, Situationen & Skulpturen</strong>
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">B: H3 strong
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          <em>Klischees, Situationen & Skulpturen</em>
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">C: H3 display
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          Szenische Themenarbeit mit kreativen Bildern
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">D: H3 Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          <strong>Klischees, Situationen & Skulpturen</strong>
          Szenische Themenarbeit mit kreativen Bildern
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">E1: H3 Headline-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          <strong>Klischees, Situationen & Skulpturen</strong>
          <span>
            Szenische Themenarbeit mit kreativen Bildern
          </span>
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">E2: H3 Headline-Underline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          <em>B2</em>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">F: H3 Shortcode-Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          <em>B2</em>
          <strong>Klischees, Situationen & Skulpturen</strong>
          Szenische Themenarbeit mit kreativen Bildern
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">G: H3 Shortcode-Headline-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          <strong>Klischees, Situationen & Skulpturen</strong>
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">H: H3 Tag-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          <em>B2</em>
          <mark class="font-mona">17.-19.1 Nbg</mark>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">I: H3 Shortcode-Tag-Overline-Headline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          <em>B2</em>
          <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          Szenische Themenarbeit mit kreativen Bildern
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">J: H3 Shortcode-Headline-Tag-Subline
  -
      </pre>
    </div>

    <div class="mt-8 flex">
      <div class="prose prose-base">
        <H3 class="">
          <em>B2</em>
          <mark class="font-mona">17.-19.1 (Nbg)</mark>
          Szenische Themenarbeit mit kreativen Bildern
          <strong>Klischees, Situationen & Skulpturen</strong>
        </H3>
        <p>
          Wir lernen, Einstiege und Ausstiege mit spielerischen Standbildern zu gestalten, innere Haltungen, Veränderungen und Ergebnisse sichtbar zu machen.
        </p>
      </div>
      <pre class="docs w-[300]">XX: H3 TEMPLATE
  -
      </pre>
    </div>

    <div class="mt-96">
      <pre class="docs">Fill-Content
      </pre>

      <h1>
        <span style="float: left; font-size: 60px; line-height: 0.85em; font-weight: bold; margin-right: 7px;">
          A1
        </span>
        <span class="text-base">
          Einführung in die Kreisanimation
        </span>
        <br>
        <span style="padding-bottom: 10px;" class="text-2xl">
          Am Anfang war der Kreis
        </span>
      </h1>

      <div>
        <p>
          ein in 2022-2023 umgesetzter Design-Prozess hat die verschiedensten Anforderungen und Use-Cases ermittelt und dazu mehrere Design-Vorlagen entwickelt
        </p>
        <p>
          ausgehend von Javascript-Component-Frameworks und Obsidian-Themes werden diese Design-Vorlagen weiterentwickelt und angepasst mit dem Ziel einer hohen technischen wie inhaltlichen Qualität
        </p>
      </div>
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
