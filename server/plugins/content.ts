// file-structure + hacks copied from: https://github.com/unjs/undocs/blob/main/app/server/plugins/content.ts
// adapted to beforeParse-hook according to content.nuxt.com/recipes/hooks

import consola from "consola"

// @ts-ignore
export default defineNitroPlugin((nitroApp) => {
  /* disabled for now
  nitroApp.hooks.hook('content:file:afterParse', (file: ContentFile) => {
    // Filter out non-markdown files
    if (!file._id?.endsWith('.md')) {
      return
    }

    transformFile(file)
    resolveFileIcon(file)

    for (const [idx, node] of (file.body?.children || []).entries()) {
      transformGithubAlert(node)
      transformStepsList(node)
      // transformCodeGroups(idx, file.body?.children)
      // transformJSDocs(idx, file.body?.children)
    }
  }) */
  nitroApp.hooks.hook('content:file:beforeParse', (file: ContentFile) => {
    // Filter out non-markdown files
    if (!file._id?.endsWith('.md')) {
      return
    }

    // Filter out files without body
    if (!file.body) {
      return
    }

    // don't index readme and other general tweaks
    /* if (file._id === 'README.md') {
      file.body = '---\nnavigation: false\n---'
    }  */  

    // TODO: detect origin of file and apply transformation accordingly
    file.body = transformObsidianFile(file)

  })  
})

// -------------------
// --- beforeParse ---

function transformObsidianFile(file: ContentFile) {
    // Generate the markdown from the schema
  const GENERATE_KEY = '<!-- CREARIS_PUBLISH -->'

  try {
    const start = Date.now()
    consola.log(`Transforming Obsidian-file ${file._id} ...`)

    // @ts-expect-error incompleted types
    if (!file.body.includes(GENERATE_KEY)) {
      return console.warn(`Could not find ${GENERATE_KEY} in ${file._id}`)
    }

    // parse and replace transformation-tokens
    const keys = ['frontmatter', 'wikilinks', 'callouts']
    let parsed = file.body;

    for (const key of keys) {

      // for other options, see: https://github.com/awwaiid/thelackthereof/blob/8cd04743a16a9cfad82af3c6dcdb014e6fe8f979/lib/tweakMarkdown.js
      switch (key) {
        case 'frontmatter':
          // parsed = parsed.replace(/---\n(.*)\n---/, '')
          break
        case 'wikilinks':
          // see: https://github.com/WiIIiam278/william278-site/blob/bdf6effedd2e6e7bb22ed60b703a41630b828309/server/plugins/wikilinks.js

          break
        case 'callouts':
          parsed = parseCallouts(parsed)
          break
      }
    }
    consola.log(`... parsed in ${(Date.now() - start)} milli-seconds!`)
    return parsed

  }
  catch (err) {
    console.error('Could not parse file', err)
  }
}

// transform Obsidian-style callouts into Nuxt-Content-Components
/* 
- we follow the followind callouts-specification: https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callouts/Callout+-+Columns
- but change the attributes to make them vue-attributes-compatible > [!agenda|color=primary-dark variant=summary]


TAKES IN:
> [!agenda|color=primary-dark variant=summary] **Text**
> Blah
>> [!blank] Column 1
>> - Use another callout for columns
>
>> [!blank] Column 2
>> Need that singular blockquote `>` as separation between columns


RETURNS:
::agenda
----
title: **Text**
color: primary-dark
variant: summary
----
Blah
  ::blank
  ----
  title: Column 1
  ----
  - Use another callout for columns
  ::

  ::blank
  ----
  title: Column 1
  ----
  - Use another callout for columns
  ::
::
*/


/* 
1. Find all callouts in the markdown, extract header and body
- applies the regex from here: https://regexr.com/83ic7
> (\[![^\n]*\][^\n]*)\n((>+[^\n]*\n)*)(?=[^>])/gm

2. for every callout in the markdown
2a. parse header: type, attributes, title
- applies the regex from here: https://regexr.com/83igh
\[!([^\n|\]]*)\] ?([^\n\]]*)|(?:\[!([^\n\]]*)\|([^\n]*)\]([^\n]*))/g

Variant 1 = Group1 exists
G1: type
G2: title

Variant 2 = Group1 empty
G3: type
G4: attributes
G5: title

2b. parse body:
- deletion of '\n> ' 
- replacement '\n>\n' by '\n\n'
- replacement '>>' by '>'

3. apply recursion for nested callouts

4. return the parsed nuxt-content-component with nested components

*/


// OLD implementation
// Match all ""> **Text:** Blah" and replace with the following. If the text is "Warning", then type should be warning:
// ::notice
// ----
// title: Text
// type: info
// ----
// Blah
// ::

//ts-expect-error incompleted types
function parseCallouts(text) {
  let parsed = text;

  const noticeRegex = /> \*\*([^\*]*)\*\* ([^\n]*)\n([^\n]*)\n/g;
  const notices = parsed.matchAll(noticeRegex);
  for (const notice of notices) {
      const noticeTitle = notice[1];
      const noticeType = noticeTitle.replace(":", "").toLowerCase() === 'warning' ? 'warning' : 'info';
      const noticeBody = notice[2];
      parsed = parsed.replace(notice[0], `::notice\n----\ntitle: '${noticeTitle}'\ntype: '${noticeType}'\n----\n\n${noticeBody}\n\n::\n`);
  }
  return parsed;
}




// ---------------------
// --- afterParse ---

// --- transform github alerts ---

// Handle GitHub flavoured markdown blockquotes
// https://github.com/orgs/community/discussions/16925
function transformGithubAlert(node: ContentNode) {
  const firstChildValue = node.children?.[0]?.children?.[0]?.children?.[0]?.value || ''
  if (
    node.tag === 'blockquote' && // blockquote > p x 2 > span > text
    ['!NOTE', '!TIP', '!IMPORTANT', '!WARNING', '!CAUTION'].includes(firstChildValue)
  ) {
    node.type = 'element'
    node.tag = firstChildValue.slice(1).toLowerCase()
    node.children?.[0].children?.shift()
  }
}

// --- transform steps list ---

function transformStepsList(node: ContentNode) {
  // CONVERT OL->LI to Steps
  // TODO: Find a way to opt out of this transformation if needed within markdown.
  if (node.tag === 'ol' && (node.children?.length || 0) > 0 && node.children?.[0].tag === 'li') {
    const stepsChildren = node.children.map((li) => {
      const label = li.children?.[0]?.value ?? undefined
      // Exclude br tags from children to avoid spacing
      const children = ((label && li.children?.slice(1)) || []).filter((child) => !['br'].includes(child.tag || ''))

      return {
        type: 'element',
        tag: 'div',
        props: {
          label,
        },
        children,
      }
    })

    // For now we only check if there is at least (1) content to generate the steps..
    const stepsHaveContent = stepsChildren.some((step) => step.children.length > 0)
    if (stepsHaveContent) {
      node.type = 'element'
      node.tag = 'Steps'
      node.props = {}
      node.children = stepsChildren
    }
  }
}


// --- transform first h1 and blockquote ---

function transformFile(file: ContentFile) {
  // Remove first h1 from markdown files as it is added to front-matter as title
  if (file.body?.children?.[0]?.tag === 'h1') {
    const text = _getTextContents(file.body.children[0].children)
    if (file.title === text) {
      file.body.children.shift()
    }
  }

  // TODO: test this out from Obsidian
  // Only use the first blockquote as the description
  const firstChild = file.body?.children?.[0]
  const firstChildText = _getTextContents(firstChild?.children)
  if (firstChild?.tag === 'blockquote' && firstChildText && !firstChildText.startsWith('!')) {
    file.description = firstChildText
    file.body?.children?.shift()
  } else {
    file.description = '' // Avoid duplication
  }
}

// --- resolve icon ---

function resolveFileIcon(file: ContentFile) {
  if (file.icon) {
    return
  }
  file.icon = _resolveIcon(file._path)
}

const _commonIcons = [
  {
    pattern: 'guide',
    icon: 'ph:book-open-duotone',
  },
  {
    pattern: 'components',
    icon: 'bxs:component',
  },
  {
    pattern: 'config',
    icon: 'ri:settings-3-line',
  },
  {
    pattern: 'configuration',
    icon: 'ri:settings-3-line',
  },
  {
    pattern: 'examples',
    icon: 'ph:code',
  },
  {
    pattern: 'utils',
    icon: 'ph:function-bold',
  },
]

function _resolveIcon(path: string = '') {
  // Split the path into parts and reverse it
  const paths = path.slice(1).split('/').reverse()

  // Search for icons in reverse order
  for (const p of paths) {
    for (const icon of _commonIcons) {
      if (p.includes(icon.pattern)) {
        return icon.icon
      }
    }
  }
}

/* code-groups not needed for no
// --- transform code groups ---

function transformCodeGroups(currChildIdx: number, children: ContentNode[] = []) {
  if (!children?.length || !_isNamedCodeBlock(children[currChildIdx])) {
    return
  }

  const group: {
    idx: number
    node: ContentNode
  }[] = []

  for (let i = currChildIdx; i < children.length; i++) {
    const nextNode = children[i]
    if (!_isNamedCodeBlock(nextNode)) {
      break
    }
    group.push({ idx: i, node: nextNode })
  }

  // Replace current children with the new code group if it has two or more code blocks
  if (group.length > 1) {
    // Only  reset children if we have more than one code block
    // Code here is to avoid empty text nodes in the markdown AST
    for (const { idx } of group) {
      children[idx] = { type: 'text', value: '' }
    }

    children[currChildIdx] = {
      type: 'element',
      tag: 'CodeGroup',
      children: group.map((g) => g.node),
    }
  }
}

function _isNamedCodeBlock(children: ContentNode): boolean {
  return children?.tag === 'pre' && children?.children?.[0]?.tag === 'code' && children?.props?.filename
}

End of code-groups */


/* JSDOCs-Import not needed for no
// --- transform automd jsdocs ---

function transformJSDocs(currChildIdx: number, children: ContentNode[] = []) {
  if (!children?.length || !_isJSDocBlock(children[currChildIdx])) {
    return
  }

  const fields: ContentNode[] = []

  const generateFields = (i: number): ContentNode => {
    const name = _parseJSDocName(children[i])
    const type = _parseJSDocType(children[i + 1])

    const props: {
      name: string
      type: string | false
    } = {
      name,
      type,
    }

    const content: ContentNode[] = []

    i++

    if (type !== '') {
      children[i] = _emptyASTNode()
      i++
    }

    while (i < children.length && children[i].tag !== 'h3' && children[i].tag === 'p') {
      content.push(children[i])
      children[i] = _emptyASTNode()
      i++
    }

    return {
      type: 'element',
      tag: 'field',
      props,
      children: content,
    }
  }

  // Go through we find the correct match for all h3
  for (let i = currChildIdx; i < children.length; i++) {
    // Make sure it's a JSDoc block before generating fields
    if (_isJSDocBlock(children[i])) {
      const field = generateFields(i)
      // Double check if has description or a type to avoid empty fields
      if ((field?.children || [])?.length > 0 || field?.props?.type !== '') {
        fields.push(field)
      } else {
        // set blank text node to avoid empty text nodes in the markdown AST
        children[i] = _emptyASTNode()
      }
    }
  }

  // If no fields were generated, return early
  if (fields.length <= 0) {
    return
  }

  // Replace current children with the new field group
  children[currChildIdx] = {
    type: 'element',
    tag: 'field-group',
    children: [...fields],
  }
}

function _isJSDocBlock(children: ContentNode): boolean {
  return (
    children?.tag === 'h3' && children?.children?.[0]?.tag === 'code' && children?.children?.[0]?.type === 'element'
  )
}

function _parseJSDocName(node: ContentNode): string {
  // Code block || id prop || empty string
  return node.children?.[0]?.children?.[0]?.value || node?.props?.id || ''
}
function _parseJSDocType(node: ContentNode): string {
  const hasType = !!node?.children?.[0]?.children?.[0]?.children?.[0]?.value
  if (!hasType) {
    return ''
  }

  return node?.children?.[0]?.children?.[2]?.children?.[0]?.value || ''
}

End of JSDOCs-Import */

// --- internal utils ---

function _getTextContents(children: ContentNode[] = []): string {
  return (children || [])
    .map((child) => {
      if (child.type === 'element') {
        return _getTextContents(child.children)
      }
      return child.value
    })
    .join('')
}

function _emptyASTNode() {
  return { type: 'text', value: '' }
}

// --- types ---

// TODO: @nuxt/content runtimes seems both not well typed and also crashes my TS server or might be doing it wrong.

interface ContentNode {
  type?: string
  tag?: string

  children?: ContentNode[]
  props?: Record<string, any>
  value?: string
}

interface ContentFile {
  _id?: string
  _path?: string
  icon?: string
  description?: string
  title?: string
  body: {
    children?: ContentNode[]
  }
}