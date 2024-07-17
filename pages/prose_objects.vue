<template>
  <NuxtLayout name="blank">
    <LayoutHeader />
    <div class="container ml-10 px-4 md:px-8 py-6">
      <div class="prose prose-base">
        <h1 class="">
          <strong class="">Prose Objects</strong>
          <span>MD-Heading-basierte Components</span>
        </h1>
        <p>
          Beschreibung
        </p>
      </div>

      <div class="prose prose-base mt-32">
        <div class="prose-obj">
          <em class="">PROSE-OBJ: BUTTONS</em>
        </div>
        <p>
          Formatierung erfolgt mit Variierung von Overline-Headline-Shortcode
        </p>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-base">
          <UiButton class="prose-obj">
            Szenische Themenarbeit mit kreativen Bildern
          </UiButton>
          <p>
            -
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
        <div class="w-[660px] prose prose-base">
          <UiButton class="prose-obj">
            Szenische Themenarbeit mit kreativen Bildern
          </UiButton>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">A: div .prose-obj default (Overline)
    -
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-base">
          <UiButton class="prose-obj">
            <strong>Klischees, Situationen & Skulpturen</strong>
          </UiButton>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">B: div .prose-obj strong
    -
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-base">
          <UiButton class="prose-obj">
            <em>Klischees, Situationen & Skulpturen</em>
          </UiButton>
          <p />
        </div>
        <pre class="docs w-[300px]">C: div .prose-obj display
    -
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-base">
          <UiButton class="prose-obj text-left inline h-min">
            <strong>Klischees, Situationen & Skulpturen</strong>
            Szenische Themenarbeit mit kreativen Bildern
          </UiButton>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">E1: div .prose-obj Headline-Subline
    -
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-base">
          <UiButton class="prose-obj text-left inline h-min bg-slate-100">
            <strong>Klischees, Situationen & Skulpturen</strong>
            <span>
              Szenische Themenarbeit mit kreativen Bildern
            </span>
          </UiButton>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">E2: div .prose-obj Headline-Underline
    -
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-base">
          <UiButton class="prose-obj text-left inline h-min bg-slate-100">
            <em>B2</em>
            <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
            <mark class="font-mona">17.-19.1 (Nbg)</mark>
            Szenische Themenarbeit mit kreativen Bildern
          </UiButton>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">E2: div .prose-obj Headline-Underline
    -
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-base">
          <UiButton class="prose-obj text-left inline h-min bg-slate-100">
            <em>B2</em>
            <mark class="font-mona">17.-19.1 (Nbg)</mark>
            Szenische Themenarbeit mit kreativen Bildern
            <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
          </UiButton>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">E2: div .prose-obj Headline-Underline
    -
        </pre>
      </div>

      <div class="prose prose-base mt-32">
        <div class="prose-obj">
          <em class="">PROSE-OBJ: ul/LI</em>
        </div>
        <p>
          Formatierung erfolgt mit Variierung von Overline-Headline-Shortcode
        </p>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-base">
          <ul class="prose-obj list-none">
            <Li>
              Szenische Themenarbeit mit kreativen Bildern
            </Li>
            <Li>
              Szenische Themenarbeit mit kreativen Bildern
            </Li>
            <Li>
              Szenische Themenarbeit mit kreativen Bildern
            </Li>
          </ul>
          <p>
            -
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
        <div class="w-[660px] prose prose-base">
          <ul class="prose-obj list-none">
            <Li>
              <strong>Szenische Themenarbeit mit kreativen Bildern</strong>
            </Li>
            <Li>
              Szenische Themenarbeit mit kreativen Bildern
            </Li>
            <Li>
              <em>Szenische Themenarbeit mit kreativen Bildern</em>
            </Li>
          </ul>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">B: LI .prose-obj strong - base - em
    -
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-lg">
          <ul class="prose-obj">
            <Li>
              <strong>Klischees, Situationen & Skulpturen</strong>
              Szenische Themenarbeit mit kreativen Bildern
            </Li>
            <Li>
              <strong>Klischees, Situationen & Skulpturen</strong>
              Szenische Themenarbeit mit kreativen Bildern
            </Li>
            <Li>
              <strong>Klischees, Situationen & Skulpturen</strong>
              Szenische Themenarbeit mit kreativen Bildern
            </Li>
          </ul>

          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">E1: Li .prose-obj Headline-Subline
    - Size: prose-lg
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-xl">
          <ul class="prose-obj">
            <li>
              <strong>Klischees, Situationen & Skulpturen</strong>
              <span>
                Szenische Themenarbeit mit kreativen Bildern
              </span>
            </li>
            <li>
              <strong>Klischees, Situationen & Skulpturen</strong>
              <span>
                Szenische Themenarbeit mit kreativen Bildern
              </span>
            </li>
            <li>
              <strong>Klischees, Situationen & Skulpturen</strong>
              <span>
                Szenische Themenarbeit mit kreativen Bildern
              </span>
            </li>
          </ul>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">E2: Li .prose-obj Headline-Underline
    - Size: prose-xl
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-2xl">
          <ul class="prose-obj text-left inline h-min bg-slate-100">
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
          </ul>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">
    - Size: prose-2xl
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-xl">
          <ul class="prose-obj text-left inline h-min bg-slate-100">
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
          </ul>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">
    - Size: prose-xl
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-lg">
          <ul class="prose-obj text-left inline h-min bg-slate-100">
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
          </ul>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">
    - Size: prose-lg
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-base">
          <ul class="prose-obj text-left inline h-min bg-slate-100">
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
          </ul>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">
    - Size: prose-base
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-sm">
          <ul class="prose-obj text-left inline h-min bg-slate-100">
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
            <li>
              <em>B2</em>
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
            </li>
          </ul>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">
    - Size: prose-sm
        </pre>
      </div>

      <div class="mt-8 flex">
        <div class="w-[660px] prose prose-base">
          <ul class="prose-obj text-left inline h-min bg-slate-100">
            <li>
              <em>B2</em>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
            </li>
            <li>
              <em>B2</em>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
            </li>
            <li>
              <em>B2</em>
              <mark class="font-mona">17.-19.1 (Nbg)</mark>
              Szenische Themenarbeit mit kreativen Bildern
              <strong class="mb-0.5">Klischees, Situationen & Skulpturen</strong>
            </li>
          </ul>
          <p>
            -
          </p>
        </div>
        <pre class="docs w-[300px]">-
    -
        </pre>
      </div>
    </div>
    <LayoutFooter />
  </NuxtLayout>
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
