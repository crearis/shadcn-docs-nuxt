import type { Config } from 'tailwindcss';
// Start tailwind-typography plugin
import plugin from 'tailwindcss/plugin';
import animate from 'tailwindcss-animate';
import {castArray,merge} from 'lodash';
import styles from './lib/twprose/styles';
import { commonTrailingPseudos } from './lib/twprose/utils';

const computed = {
  // Reserved for future "magic properties", for example:
  // bulletColor: (color) => ({ 'ul > li::before': { backgroundColor: color } }),
}

function inWhere(selector, { className, modifier, prefix }) {
  let prefixedNot = prefix(`.not-${className}`).slice(1)
  let selectorPrefix = selector.startsWith('>')
    ? `${modifier === 'DEFAULT' ? `.${className}` : `.${className}-${modifier}`} `
    : ''

  // Parse the selector, if every component ends in the same pseudo element(s) then move it to the end
  let [trailingPseudo, rebuiltSelector] = commonTrailingPseudos(selector)

  if (trailingPseudo) {
    return `:where(${selectorPrefix}${rebuiltSelector}):not(:where([class~="${prefixedNot}"],[class~="${prefixedNot}"] *))${trailingPseudo}`
  }

  return `:where(${selectorPrefix}${selector}):not(:where([class~="${prefixedNot}"],[class~="${prefixedNot}"] *))`
}

function isObject(value) {
  return typeof value === 'object' && value !== null
}

function configToCss(config = {}, { target, className, modifier, prefix }) {
  function updateSelector(k, v) {
    if (target === 'legacy') {
      return [k, v]
    }

    if (Array.isArray(v)) {
      return [k, v]
    }

    if (isObject(v)) {
      let nested = Object.values(v).some(isObject)
      if (nested) {
        return [
          inWhere(k, { className, modifier, prefix }),
          v,
          Object.fromEntries(Object.entries(v).map(([k, v]) => updateSelector(k, v))),
        ]
      }

      return [inWhere(k, { className, modifier, prefix }), v]
    }

    return [k, v]
  }

  return Object.fromEntries(
    Object.entries(
      merge(
        {},
        ...Object.keys(config)
          .filter((key) => computed[key])
          .map((key) => computed[key](config[key])),
        ...castArray(config.css || {})
      )
    ).map(([k, v]) => updateSelector(k, v))
  )
}

// End of tailwind-typography plugin


const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  darkMode: 'class',
  safelist: ['dark'],
  prefix: '',
  content: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'xl': '1320px',
        '2xl': '1536px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mona: ['Monaspace', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
    },
  },

  plugins: [
    animate,
    plugin.withOptions(
      ({ className = 'prose', target = 'modern' } = {}) => {
        return function ({ addVariant, addComponents, theme, prefix }) {
          let modifiers = theme('typography')
    
          let options = { className, prefix }
    
          for (let [name, ...selectors] of [
            ['headings', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'th'],
            ['h1'],
            ['h2'],
            ['h3'],
            ['h4'],
            ['h5'],
            ['h6'],
            ['p'],
            ['a'],
            ['blockquote'],
            ['figure'],
            ['figcaption'],
            ['strong'],
            ['em'],
            ['kbd'],
            ['code'],
            ['pre'],
            ['ol'],
            ['ul'],
            ['li'],
            ['table'],
            ['thead'],
            ['tr'],
            ['th'],
            ['td'],
            ['img'],
            ['video'],
            ['hr'],
            ['lead', '[class~="lead"]'],
          ]) {
            selectors = selectors.length === 0 ? [name] : selectors
    
            let selector =
              target === 'legacy' ? selectors.map((selector) => `& ${selector}`) : selectors.join(', ')
    
            addVariant(
              `${className}-${name}`,
              target === 'legacy' ? selector : `& :is(${inWhere(selector, options)})`
            )
          }
    
          addComponents(
            Object.keys(modifiers).map((modifier) => ({
              [modifier === 'DEFAULT' ? `.${className}` : `.${className}-${modifier}`]: configToCss(
                modifiers[modifier],
                {
                  target,
                  className,
                  modifier,
                  prefix,
                }
              ),
            }))
          )
        }
      },
      () => {
        return {
          theme: { typography: styles },
        }
      }
    )
  ],
} satisfies Config;
