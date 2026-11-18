import type { HighlighterCore } from 'shiki/core'
import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'

export type CodeLang = 'vue' | 'ts' | 'bash' | 'css' | 'json'

let highlighter: Promise<HighlighterCore> | undefined

function getHighlighter(): Promise<HighlighterCore> {
  highlighter ??= createHighlighterCore({
    themes: [
      import('shiki/themes/github-light-default.mjs'),
      import('shiki/themes/github-dark-default.mjs'),
    ],
    langs: [
      import('shiki/langs/vue.mjs'),
      import('shiki/langs/typescript.mjs'),
      import('shiki/langs/bash.mjs'),
      import('shiki/langs/css.mjs'),
      import('shiki/langs/json.mjs'),
    ],
    engine: createJavaScriptRegexEngine(),
  })
  return highlighter
}

export async function highlight(code: string, lang: CodeLang): Promise<string> {
  const instance = await getHighlighter()
  return instance.codeToHtml(code, {
    lang: lang === 'ts'
      ? 'typescript'
      : lang,
    themes: { light: 'github-light-default', dark: 'github-dark-default' },
    defaultColor: false,
  })
}
